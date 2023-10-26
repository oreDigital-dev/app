
import { ReactNode, useEffect, useState } from "react";
// import { PaginationOptionType } from "../types/pagination.type";
import { Model } from "../types/model.type";
import { useRouter } from "next/router";
import { buildQueryString } from "../utils/query.string";
import styled from "styled-components";

const Button = styled.button`
  background-color: #1d5fad;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #3b82f6;
  }
`;
export type TableColumn<Entry> = {
  title: string;
  selector?: string;
  cell: (row: Entry, index: number) => ReactNode;
  omit?: boolean;
};

type DataTableProps<Entry> = {
  data: Entry[];
  isLoading: boolean;
  columns: TableColumn<Entry>[];
  pageTracker?: any;
  otherParams?: { [key: string]: any };
  getData?: (status?:any) => Promise<void> ;
};

export const DataTable = <Entry extends Model>(
  props: DataTableProps<Entry>
) => {
  const {
    columns,
    data,
    isLoading = false,
    getData,
    otherParams,
    pageTracker
  } = props;

  const router = useRouter();

  const queryParams = new URLSearchParams();

  for (const key in router.query) {
    if (router.query.hasOwnProperty(key)) {
      const value = router.query[key];
      if (Array.isArray(value)) {
        // Handle arrays of values, if necessary
        value.forEach((item) => {
          queryParams.append(key, item);
        });
      } else {
        if (value !== undefined) {
          queryParams.set(key, value);
        }
      }
    }
  }
  
  // Now you can use queryParams as the URLSearchParams object
  
  const [selectAll, setSelectAll] = useState(false);

  const [activePage, setActivePage] = useState<number>(
    Number(queryParams.get("page")) || 0
  );

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const paginationView = (currentPage: number, pageCount: number) => {
    const delta = 3,
      left = currentPage - delta,
      right = currentPage + delta + 1;

    let result: any[] = [];

    result = Array.from({ length: pageCount }, (v, k) => k).filter(
      (i) => i && i >= left && i < right
    );

    if (result.length > 1) {
      if (result[0] > 1) {
        if (result[0] > 2) {
          result.unshift("...");
        }
        result.unshift(1);
      }

      if (result[result.length - 1] < pageCount) {
        if (result[result.length - 1] !== pageCount - 1) {
          result.push("...");
        }
        result.push(pageCount);
      }
    }

    return result;
  };

  // const paginationData = paginationView(activePage, totalPages);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    if (newSelectAll) {
      setSelectedItems(data.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleRowSelect = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const [paginate, setPaginate] = useState({
    pageNumber: queryParams.get("page") ? Number(queryParams.get("page")) : 0,
    pageSize: queryParams.get("size") ? Number(queryParams.get("size")) : 5
  });

  const updateQueryParams = (params: {
    pageNumber: number;
    pageSize: number;
  }) => {
    const queryData = buildQueryString({
      page: params.pageNumber.toString(),
      limit: params.pageSize.toString(),
      ...otherParams
    });
    // router.push(`employees?${queryData}`);
  };

  function onPageSizeChange(e: any) {
    setPaginate((prev: any) => {
      return {
        ...prev,
        pageSize: Number(e.target.value),
        pageNumber: 0
      };
    });
  }

  function onClickNextPage() {
    setActivePage(activePage + 1);
    setPaginate((prev: any) => {
      return {
        ...prev,
        // pageNumber: pageNumber + 1
      };
    });
  }

  function onClickPreviousPage() {
    setActivePage(activePage - 1);
    setPaginate((prev: any) => {
      return {
        ...prev,
        // pageNumber: pageNumber - 1
      };
    });
  }

  const handleClick = (value: number) => {
    setActivePage(value - 1);
    setPaginate((prev: any) => {
      return {
        ...prev,
        pageNumber: value - 1
      };
    });
  };

  useEffect(() => {
    updateQueryParams({
      pageNumber: paginate.pageNumber,
      pageSize: paginate.pageSize
    });
    if (getData)
      getData();
  }, [paginate, otherParams]);

  useEffect(() => {
    setActivePage(0);
    setPaginate((cur) => {
      return { ...cur, pageNumber: 0 };
    });
  }, [pageTracker]);

  return (
    <div className='flex flex-col w-full'>
      <div
        style={{
          width: "100%",
          overflowX: "scroll",
          minHeight: "10rem",
          minWidth: "100%"
        }}
        className=''
      >
        <table className="w-full my-6 rounded-md  text-sm overflow-hidden ">
        <thead className="text-left font-sans font-bold rounded-tl-md rounded-tr-md w-full">
          
        <tr className='border-b-[1px] border-[#C4C4C425] pb-4'>
              {columns
                .filter((col) => !col.omit)
                .map((column, key) => (
                  <th key={key}>{column.title}</th>
                ))}
            </tr>
          </thead>
          <tbody className=''>
            <tr className=''>
              {isLoading && (
                <td
                  colSpan={columns.length + 2}
                  className='text-light px-2 py-3 text-center text-sm font-normal'
                >
                  Loading ...
                </td>
              )}

              {!isLoading && data?.length === 0 && (
                <td
                  colSpan={columns.length + 2}
                  className='text-light px-2 py-3 text-center text-sm font-normal'
                >
                  No data found
                </td>
              )}
            </tr>

            {!isLoading &&
              data?.map((element, elementKey) => (
                <tr key={elementKey} className=''>

                  {columns
                    .filter((col) => !col.omit)
                    .map((column, columnKey) => (
                      <td key={columnKey} className="h-8 items-center pt-4 pb-4">
                        {column.cell(element, elementKey)}
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <div className='table-pagination py-2 min-w-full overflow-auto flex justify-between'>
          <div className='flex items-center justify-between gap-2'>

            <span className='flex items-center justify-center gap-2'>
              <label className=''>Rows/Page</label>
              <select
                className='text-dark block w-20 appearance-none rounded-md border-0 bg-slate-100 px-3 text-base font-medium capitalize placeholder-gray-500 focus:outline-none focus:ring-0 disabled:bg-slate-500 disabled:text-slate-100'
                onChange={onPageSizeChange}
                value={paginate.pageSize}
              >
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
            </span>
          </div>
          <div className='flex gap-1 text-sm'>
            <Button 
            // disabled={first} onClick={onClickPreviousPage}
            >
              Previous
            </Button>
            <Button 
            // disabled={last} onClick={onClickNextPage}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

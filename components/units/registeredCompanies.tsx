import {
  setCompanyDetailsVisibility,
  setCurrentIndex,
} from "@/features/appPages";
import { get_all_registered_companies_by_status } from "@/pages/api-services/companies";
import { DataTable, TableColumn } from "@/pages/datatable";
import { CompanyType, CompanyDetails } from "@/pages/types/company.type";
import { RootState } from "@/stores/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableViewIcon } from "../icons";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import ExportExcel from "./excelExport";

const RegisteredCompanies = () => {

  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Pending");

  const companyColumns: TableColumn<CompanyType>[] = [
    {
      title: "Company name",
      cell: (row) => <div>{row.name}</div>,
    },
    {
      title: "Location(HQ)",
      cell: (row) => <div>{row.address.district}</div>,
    },
    {
      title: "Sites",
      cell: (row) => <div>13</div>,
    },
    {
      title: "Main mineral",
      cell: (row) => <div>{row.productionCapacity}</div>,
    },
    {
      title: "Formed",
      cell: (row) => <div>{row.createdAt}</div>,
    },
    {
      title: "View",
      cell: (row) => <TableViewIcon></TableViewIcon>,
    },
    {
      title: "Approve",
      cell: (row) =>
       (row.status === "APPROVED" ?
        <button><BsToggleOn className="text-green-500 text-2xl" /></button> : 
        <button ><BsToggleOff className="text-green-500 text-2xl" /></button>)
    },
    {
      title: "Reject",
      cell: (row) => 
      (row.status === "REJECTED" ?
      <button><BsToggleOn className="text-red-500 text-2xl" /></button> : 
      <button><BsToggleOff className="text-red-500 text-2xl" /></button>)
    },
    {
      title: "Status",
      cell: (row) => <div>{row.status}</div>
    
    }
  ];
  const getCompanies = async(status: string) => {
    try {
      setIsLoading(true);
      const response:any = await get_all_registered_companies_by_status(status);
      setCompanies(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
  } finally {
    setIsLoading(false);
  }
  }
  useEffect(() => {
   getCompanies("Pending");
  }, [])
  console.log("Companieeeeee", companies);

  return (
    <div className="m-[20px] rounded-md ">
    <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
      <div className="w-full flex justify-between  bg-white py-4">
        <div className="flex bg-white py-3 rounded-lg gap-6 pl-6 pr-6 shadow-sm shadow-gray-200">
          <button
            onClick={() => getCompanies("Pending")}
            className={`${
              selectedStatus === "Pending"
                ? "bg-[#5160B3] text-white"
                : "bg-white text-black"
            } font-bold py-2 pl-4 pr-4 rounded-xl text-sm`}
          >
            Pending
          </button>
          <button
            onClick={() => getCompanies("Approved")}
            className={`${
              selectedStatus === "Approved"
                ? "bg-[#5160B3] text-white"
                : "bg-white text-black"
            } font-bold py-2 pl-4 pr-4 rounded-xl text-sm`}
          >
            Approved
          </button>
          <button
            onClick={() => getCompanies("Rejected")}
            className={`${
              selectedStatus === "Rejected"
                ? "bg-[#5160B3] text-white"
                : "bg-white text-black"
            } font-bold py- 2 pl-4 pr-4 rounded-xl text-sm`}
          >
            Rejected
          </button>
        </div>
        <div className="">
          <p>
            <span className="text-gray-400 text-sm">Total Employees: </span>
            1000
          </p>
          <p>
            <span className="text-gray-400 text-sm">Current used: </span>700
          </p>
        </div>
      </div>
      <div className="flex mt-6 justify-between">
        <div className="flex gap-6">
          <h1 className="font-bold text-black text-lg">Members</h1>
          <button
            // onClick={() => setAddNewMember(true)}
            className="bg-[#5160B3] text-white font-bold py-2 pl-4 pr-4 rounded-xl text-sm"
          >
            Add new
          </button>
          <input type="file" className="text-black py-2 pl-4 pr-4 shadow-sm shadow-black rounded-xl text-sm"  />
      
         
   <ExportExcel excelData={companies} fileName="Companies" />
        </div>
        <div>
          <button className="bg-[#5160B3] text-white font-bold py-2 pl-4 pr-4 rounded-xl">
            Filter
          </button>
        </div>
      </div>
      {/* {employee?.map((emp:GetEmployeeUserType) => {
        <p>{emp.dat}</p>
      })} */}
      <DataTable
        columns={companyColumns}
        getData={getCompanies}
        isLoading={isLoading}
        data={companies}
      />
    </div>
    </div>
  );
};
export default RegisteredCompanies;

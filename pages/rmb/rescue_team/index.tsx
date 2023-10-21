
  import { DataTable, TableColumn } from "@/pages/datatable";
  import { RescueTeamType } from "@/pages/types/rescueTeams.type";
  import { useEffect, useState } from "react";

  import { BsToggleOff, BsToggleOn } from "react-icons/bs";
  import ExportExcel from "@/components/units/excelExport";
import { approveOrRejectRescueTeams, get_all_rescue_teams_by_status } from "@/pages/api-services/rescue-teams";
  
  const AllRescueTeams = () => {
    const [rescueTeams, setRescueTeams] = useState<RescueTeamType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("Pending");
  
    const rescueTeamColumns: TableColumn<RescueTeamType>[] = [
      {
        title: "Recue Team name",
        cell: (row) => <div>{row.name}</div>,
      },
      {
        title: "Category",
        cell: (row) => <div>{row.rescueTeamCategory}</div>,
      },
      
      {
        title: "Email",
        cell: (row) => <div>{row.email}</div>,
      },
      {
        title: "Phone Number",
        cell: (row) => <div>{row.phoneNumber}</div>,
      },
      {
        title: "Status",
        cell: (row) => <div>{row.status}</div>
      },
      {
        title: "Approve",
        cell: (row) =>
         (row.status === "APPROVED" ?
          <button><BsToggleOn className="text-green-500 text-2xl" /></button> : 
          <button onClick={() => approveOrRejectRescueTeams(row.id, "approve")}><BsToggleOff className="text-green-500 text-2xl" /></button>)
      },
      {
        title: "Reject",
        cell: (row) => 
        (row.status === "REJECTED" ?
        <button><BsToggleOn className="text-red-500 text-2xl" /></button> : 
        <button onClick={() => approveOrRejectRescueTeams(row.id, "reject")}><BsToggleOff className="text-red-500 text-2xl" /></button>)
      },
      {
        title: "Status",
        cell: (row) => <div>{row.status}</div>
      
      }
    ];
    const getRescueTeams = async(status: string) => {
      try {
        setIsLoading(true);
        const response:any = await get_all_rescue_teams_by_status(status);
        setRescueTeams(response.data);
        setSelectedStatus(status);
      } catch (error) {
        setRescueTeams([]);
        // setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
    }
    useEffect(() => {
     getRescueTeams("Pending");
    }, [])
  
    return (
      <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="w-full flex justify-between  bg-white py-4">
          <div className="flex bg-white py-3 rounded-lg gap-6 pl-6 pr-6 shadow-sm shadow-gray-200">
            <button
              onClick={() => getRescueTeams("Pending")}
              className={`${
                selectedStatus === "Pending"
                  ? "bg-[#5160B3] text-white"
                  : "bg-white text-black"
              } font-bold py-2 pl-4 pr-4 rounded-xl text-sm`}
            >
              Pending
            </button>
            <button
              onClick={() => getRescueTeams("Approved")}
              className={`${
                selectedStatus === "Approved"
                  ? "bg-[#5160B3] text-white"
                  : "bg-white text-black"
              } font-bold py-2 pl-4 pr-4 rounded-xl text-sm`}
            >
              Approved
            </button>
            <button
              onClick={() => getRescueTeams("Rejected")}
              className={`${
                selectedStatus === "Rejected"
                  ? "bg-[#5160B3] text-white"
                  : "bg-white text-black"
              } font-bold py- 2 pl-4 pr-4 rounded-xl text-sm`}
            >
              Rejected
            </button>
          </div>
        </div>
        <div className="flex mt-6 justify-between">
          <div className="flex gap-6">
            <h1 className="font-bold text-black text-lg">Rescue Teams</h1>
            {/* <button
              // onClick={() => setAddNewMember(true)}
              className="bg-[#5160B3] text-white font-bold py-2 pl-4 pr-4 rounded-xl text-sm"
            >
              Add new
            </button> */}
            <input type="file" className="text-black py-2 pl-4 pr-4 shadow-sm shadow-black rounded-xl text-sm"  />
        
           
     {/* <ExportExcel excelData={companies} fileName="Companies" /> */}
          </div>
          <div>
            <button className="bg-[#5160B3] text-white font-bold py-2 pl-4 pr-4 rounded-xl">
              Filter
            </button>
          </div>
        </div>
        <DataTable
          columns={rescueTeamColumns}
          getData={getRescueTeams}
          isLoading={isLoading}
          data={rescueTeams}
        />
      </div>
      </div>
    );
  };
  export default AllRescueTeams;
  
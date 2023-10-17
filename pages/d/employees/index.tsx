import React, { useEffect, useState } from "react";
import {
  TableEditIcon,
  TableViewIcon,
  TableDeleteIcon,
} from "@/components/icons";
import { BsToggleOff, BsToggle2On, BsToggleOn } from "react-icons/bs";
import { FaToggleOff } from "react-icons/fa";
import myProfile from "../../../assets/images/Profile.png";
import { DataTable, TableColumn } from "@/pages/datatable";
import { EmployeeType } from "@/pages/types/employee.type";
import {
  get_employees_by_company,
  approveOrRejectEmployee,
  deleteCompanyEmployee,
} from "@/pages/api-services/employee";
import Image from "next/image";
import ExportExcel from "@/components/units/excelExport";
export default function index() {
  const [addNewMember, setAddNewMember] = useState(false);
  const [updateMember, setUpdateMember] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState<EmployeeType[]>([]);
  const [isActionSuccessful, setIsActionSuccessful] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const handleApproveOrReject = async (id: number, action: string) => {
    const resp = await approveOrRejectEmployee(id, action);

    if (resp !== undefined) {
      setIsActionSuccessful(true);
    }
  };
  const employeeColumns: TableColumn<EmployeeType>[] = [
    {
      title: "Photo",
      cell: (row) => "Photo",
    },
    {
      title: "Member Name",
      cell: (row) => `${row.firstName} ${row.lastName}`,
    },
    {
      title: "Phone Number",
      cell: (row) => <div>{row.phonenumber}</div>,
    },
    {
      title: "Residence",
      cell: (row) => "Kicukiro",
    },
    {
      title: "Role",
      cell: (row) => <div>{row.role}</div>,
    },
    {
      title: "View",
      cell: (row) => <TableViewIcon></TableViewIcon>,
    },
    {
      title: "Edit",
      cell: (row) => (
        <button onClick={() => setUpdateMember(true)}>
          <TableEditIcon />
        </button>
      ),
    },
    {
      title: "Delete",
      cell: (row) => (
        <button onClick={() => deleteCompanyEmployee(row.id)}>
          {" "}
          <TableDeleteIcon />
        </button>
      ),
    },
    {
      title: "Approve",
      cell: (row) =>
       (row.employeeStatus === "APPROVED" ?
        <button><BsToggleOn className="text-green-500 text-2xl" /></button> : 
        <button onClick={() => handleApproveOrReject(row.id, "approve")}><BsToggleOff className="text-green-500 text-2xl" /></button>)
    },
    {
      title: "Reject",
      cell: (row) => 
      (row.employeeStatus === "REJECTED" ?
      <button><BsToggleOn className="text-red-500 text-2xl" /></button> : 
      <button onClick={() => handleApproveOrReject(row.id, "reject")}><BsToggleOff className="text-red-500 text-2xl" /></button>)
    },
    {
      title: "Status",
      cell: (row) => <div>{row.status}</div>
    
    }
  ];
  const getEmployeesByCompany = async (status: string) => {
    try {
      setIsLoading(true);
      const response: any = await get_employees_by_company(status);
      setEmployee(response.data);
      setSelectedStatus(status);
    } catch (error) {
      console.error(error);
      setEmployee([]);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getEmployeesByCompany("Pending");
  }, []);
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="w-full flex justify-between  bg-white py-4">
          <div className="flex bg-white py-3 rounded-lg gap-6 pl-6 pr-6 shadow-sm shadow-gray-200">
            <button
              onClick={() => getEmployeesByCompany("Pending")}
              className={`${
                selectedStatus === "Pending"
                  ? "bg-[#5160B3] text-white"
                  : "bg-white text-black"
              } font-bold py-2 pl-4 pr-4 rounded-xl text-sm`}
            >
              Pending
            </button>
            <button
              onClick={() => getEmployeesByCompany("Approved")}
              className={`${
                selectedStatus === "Approved"
                  ? "bg-[#5160B3] text-white"
                  : "bg-white text-black"
              } font-bold py-2 pl-4 pr-4 rounded-xl text-sm`}
            >
              Approved
            </button>
            <button
              onClick={() => getEmployeesByCompany("Rejected")}
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
              onClick={() => setAddNewMember(true)}
              className="bg-[#5160B3] text-white font-bold py-2 pl-4 pr-4 rounded-xl text-sm"
            >
              Add new
            </button>
            <input type="file" className="text-black py-2 pl-4 pr-4 shadow-sm shadow-black rounded-xl text-sm"  />
        
           
     <ExportExcel excelData={employee} fileName="Employees" />
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
          columns={employeeColumns}
          getData={getEmployeesByCompany}
          isLoading={isLoading}
          data={employee}
        />
      </div>
      {addNewMember && (
        <div className="absolute h-screen w-full left-0 top-0 right-0 bg-[#00000025] flex justify-center items-center">
          <div className="bg-white pt-8 pb-8 w-1/2 rounded-lg shadow-md shadow-gray-200 flex justify-between">
            <div className="ml-6 w-1/3 ">
              <h1 className="text-center font-bold">New Member</h1>
              <h1 className="text-center font-bold pt-6">
                Add Profile Picture
              </h1>
              <div className="h-32 w-32 rounded-full bg-gray-200 mt-8 ml-12"></div>
              <p className="text-center pt-4">
                <a href="" className="text-[#5160B3]">
                  Upload a photo
                </a>
              </p>
            </div>
            <div className="w-1/2 mt-16">
              <form action="" className="">
                <div className="">
                  <label htmlFor="" className="text-black font-bold text-sm">
                    Member name
                  </label>
                  <input
                    type="text"
                    name=""
                    placeholder="Ex: John Doe"
                    id=""
                    className="py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-black font-bold text-sm">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name=""
                    placeholder="Ex: 07974857383"
                    id=""
                    className="py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-black font-bold text-sm">
                    Role
                  </label>
                  <select
                    name=""
                    id=""
                    className="py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4"
                  >
                    <option value="">COMPANY_MANAGER</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-black font-bold text-sm">
                    Status
                  </label>
                  <div className="flex">
                    <FaToggleOff className="text-xl mt-1" />
                    <p className="pl-2 text-lg">Inactive</p>
                  </div>
                </div>
              </form>
              <div className="gap-6 mt-10 flex justify-end mr-16">
                <button
                  onClick={() => setAddNewMember(false)}
                  className="text-[#5160B3] bg-white shadow-xs shadow-gray-200"
                >
                  Cancel
                </button>
                <button className="py-2 bg-[#00820D] text-white text-sm font-bold rounded-full pl-6 pr-6">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {updateMember && (
        <div className="absolute h-screen w-full left-0 top-0 right-0 bg-[#00000025] flex justify-center items-center">
          <div className="bg-white pt-8 pb-8 w-1/3 rounded-lg shadow-md shadow-gray-200">
            <div className="flex justify-end mr-12">
              {/* <div className='h-32 w-32 rounded-full bg-gray-200 flex justify-end'>   */}
              <Image
                src={myProfile}
                alt="the profile"
                className="h-32 w-32 rounded-full"
              />
              {/* </div> */}
            </div>
            <div className="flex justify-end">
              <p className="pt-4">
                <a href="" className="text-[#5160B3] pr-14">
                  Change photo
                </a>
              </p>
            </div>
            <div className="w-full ml-8 mt-16">
              <form action="" className="">
                <div className="">
                  <label htmlFor="" className="text-black font-bold text-sm">
                    Member name
                  </label>
                  <input
                    type="text"
                    name=""
                    placeholder="Ex: John Doe"
                    id=""
                    className="py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-black font-bold text-sm">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name=""
                    placeholder="Ex: 07974857383"
                    id=""
                    className="py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-black font-bold text-sm">
                    Member Role
                  </label>
                  <select
                    name=""
                    id=""
                    className="py-2 border-2 border-[#C2C2C2] rounded-lg w-5/6 pl-4"
                  >
                    <option value="">COMPANY_MANAGER</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-black font-bold text-sm">
                    Status
                  </label>
                  <div className="flex">
                    <FaToggleOff className="text-xl mt-1" />
                    <p className="pl-2 text-lg">Inactive</p>
                  </div>
                </div>
              </form>
              <div className="gap-6 mt-10 flex justify-end mr-16">
                <button
                  onClick={() => setUpdateMember(false)}
                  className="text-[#5160B3] bg-white shadow-xs shadow-gray-200"
                >
                  Cancel
                </button>
                <button className="py-2 bg-[#00820D] text-white text-sm font-bold rounded-full pl-6 pr-6">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {deleteMember && (
        <div className="absolute h-screen w-full left-0 top-0 right-0 bg-[#00000025] flex justify-center items-center">
          <div className="bg-white pt-8 pb-8 w-1/3 rounded-lg shadow-md shadow-gray-200 ">
            <h1 className="text-center font-extrabold text-black pt-6 text-lg">
              You are about to delete this member
            </h1>
            <p className="text-center pt-6">
              This will remove this member from the list
            </p>
            <p className="text-center">Are you sure</p>
            <div className="gap-6 mt-10 flex justify-end mr-16">
              .
              <button
                onClick={() => setDeleteMember(false)}
                className="text-[#5160B3] bg-white shadow-xs shadow-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  employee?.map((emp) => {
                    deleteCompanyEmployee(emp.id);
                  });
                }}
                className="py-2 bg-[#FF4949] text-white text-sm font-bold rounded-full pl-6 pr-6"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

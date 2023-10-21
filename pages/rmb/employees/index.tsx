import React, { useEffect, useState } from "react";
import {
  TableEditIcon,
  TableViewIcon,
  TableDeleteIcon,
} from "@/components/icons";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaToggleOff } from "react-icons/fa";
import myProfile from "../../../assets/images/Profile.png";
import { DataTable, TableColumn } from "@/pages/datatable";
import { EmployeeType } from "@/pages/types/employee.type";
import {
  approveOrRejectEmployee,
  approveOrRejectRmbEmployee,
  deleteCompanyEmployee,
  get_employees_by_rmb,
} from "@/pages/api-services/employee";
import Image from "next/image";
import authHeader from "@/pages/api-services/auth-header";
import { axios } from "@/services/axios";
import Input from "@/components/units/createMinesiteInputs";
export default function index() {
  const [addNewMember, setAddNewMember] = useState(false);
  const [updateMember, setUpdateMember] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState<EmployeeType[]>([]);
  const [isActionSuccessful, setIsActionSuccessful] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [national_id, setNational_id] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [employeeRole, setEmployeeRole] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCell, setSelectedCell] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [myGender, setMygender] = useState("");
  const {Provinces,Districts,Sectors,Cells,Villages} = require('rwanda');

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: `${firstName.substring(0, 1)}.${lastName}`,
    myGender: myGender,
    registrationKey: "anykey",
    national_id: national_id,
    password: password,
    phoneNumber: phoneNumber,
    address: {
      province: selectedProvince,
      district: selectedDistrict,
      sector: selectedSector,
      cell: selectedCell,
      village: selectedVillage,
    },
    employeeType: employeeType,
    employeeRole: employeeRole,
  };
  const createRmbEmployee = async() => {
    await axios.post('/employees/create', formData, {
      headers:authHeader()
    });
    JSON.stringify(formData);
  };

  const employeeTypes = [ "RMB_EMPLOYEE", "RESCUE_TEAM_EMPLOYEE", "MINING_EMPLOYEE", "MINING_COMPANY_EMPLOYEE"];
  const employeeRoles = ["ADMIN", "EMPLOYEE"];
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
        <button onClick={() => approveOrRejectRmbEmployee(row.id, "approve")}><BsToggleOff className="text-green-500 text-2xl" /></button>)
    },
    {
      title: "Reject",
      cell: (row) => 
      (row.employeeStatus === "REJECTED" ?
      <button><BsToggleOn className="text-red-500 text-2xl" /></button> : 
      <button onClick={() => approveOrRejectRmbEmployee(row.id, "reject")}><BsToggleOff className="text-red-500 text-2xl" /></button>)
    },
    {
      title: "Status",
      cell: (row) => <div>{row.status}</div>
    
    }
  ];
  const getEmployeesByRmb = async (status: string) => {
    try {
      setIsLoading(true);
      const response: any = await get_employees_by_rmb(status);
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
    getEmployeesByRmb("Pending");
  }, []);
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="w-full flex justify-between  bg-white py-4">
          <div className="flex bg-white py-3 rounded-lg gap-6 pl-6 pr-6 shadow-sm shadow-gray-200">
            <button
              onClick={() => getEmployeesByRmb("Pending")}
              className={`${
                selectedStatus === "Pending"
                  ? "bg-[#5160B3] text-white"
                  : "bg-white text-black"
              } font-bold py-2 pl-4 pr-4 rounded-xl text-sm`}
            >
              Pending
            </button>
            <button
              onClick={() => getEmployeesByRmb("Approved")}
              className={`${
                selectedStatus === "Approved"
                  ? "bg-[#5160B3] text-white"
                  : "bg-white text-black"
              } font-bold py-2 pl-4 pr-4 rounded-xl text-sm`}
            >
              Approved
            </button>
            <button
              onClick={() => getEmployeesByRmb("Rejected")}
              className={`${
                selectedStatus === "Rejected"
                  ? "bg-[#5160B3] text-white"
                  : "bg-white text-black"
              } font-bold py-2 pl-4 pr-4 rounded-xl text-sm`}
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
            <button className="text-black py-2 pl-4 pr-4 shadow-sm shadow-black rounded-xl text-sm">
              Import Members
            </button>
            <button className="text-black py-2 pl-4 pr-4 shadow-sm shadow-black rounded-xl text-sm">
              Export members (Excel)
            </button>
          </div>
          <div>
            <button className="bg-[#5160B3] text-white font-bold py-2 pl-4 pr-4 rounded-xl">
              Filter
            </button>
          </div>
        </div>
    
        <DataTable
          columns={employeeColumns}
          getData={getEmployeesByRmb}
          isLoading={isLoading}
          data={employee}
        />
      </div>
      {addNewMember && (
        <div className="absolute h-screen w-full left-0 top-0 right-0 bg-[#00000025] flex justify-center items-center">
          <div className="bg-white pt-8 pb-8 w-1/2 rounded-lg shadow-md shadow-gray-200 flex justify-between pl-6 pr-6">
            {/* <div className="ml-6 w-1/3 ">
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
            </div> */}
            {/* <div className="w- mt-16"> */}
            <div className="block w-full">
            <form className="space-y-2 w-full">
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"First name"}
              placeholder={"John"}
              type={"text"}
              state={firstName}
              setState={setFirstName}
            />
          </div>
          <div className="basis-1/2">
            <Input
              label={"Last name"}
              placeholder={"Doe"}
              type={"text"}
              state={lastName}
              setState={setLastName}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"Email address"}
              placeholder={"JohnDoe@gmail.com"}
              type={"email"}
              state={email}
              setState={setEmail}
            />
          </div>
          <div className="basis-1/2">
            <Input
              label={"Password"}
              placeholder={"......."}
              type={"password"}
              state={password}
              setState={setPassword}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"National Id"}
              placeholder={"1 1883 3434 34343"}
              type={"text"}
              state={national_id}
              setState={setNational_id}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-3">Gender</label>
            <div className="flex gap-12">
              <div className="flex items-center gap-10">
                <p>Male</p>
                <input
                  type="radio"
                  value={"Male"}
                  name="gender"
                  checked={formData.myGender == "Male"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMygender(e.target.value)
                  }
                />
              </div>
              <div className="flex items-center gap-10">
                <p>Female</p>
                <input
                  checked={formData.myGender == "Female"}
                  type="radio"
                  value={"Female"}
                  name="gender"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMygender(e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              label={"Phone Number"}
              placeholder={"+250798486619"}
              type={"text"}
              state={phoneNumber}
              setState={setPhoneNumber}
            />
          </div>
          
          <div className="basis-1/2">
            <select
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                setSelectedDistrict("");
                setSelectedSector("");
                setSelectedCell("");
                setSelectedVillage("");
              }}
              className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
              <option value="">Select Province</option>
              {Provinces().map((province: string, index: any) => (
                <option key={index} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
          </div>
          <div className="flex gap-2">
          <div className="basis-1/2">
            <select
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
                setSelectedSector("");
              }}
              disabled={!selectedProvince}
              className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
              <option value="">Select District</option>
              {Districts(selectedProvince).map(
                (district: string, index: any) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                )
              )}
            </select>
          </div>
        
      
          <div className="basis-1/2">
            <select
              value={selectedSector}
              onChange={(e) => {
                setSelectedSector(e.target.value);
                setSelectedCell('"');
              }}
              disabled={!selectedDistrict}
              className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
              <option value="">Select Sector</option>
              {Sectors(selectedProvince, selectedDistrict)?.map(
                (sector: string, index: any) => (
                  <option key={index} value={sector}>
                    {sector}
                  </option>
                )
              )}
            </select>
          </div>

          </div>
          <div className="flex gap-2">
          <div className="basis-1/2">
            <select
            value={selectedCell}
            onChange={(e) => {
              setSelectedCell(e.target.value);
              setSelectedVillage("");
            }}
            disabled={!selectedSector}
            className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
            <option value="">Select Cell</option>
            {Cells(selectedProvince,selectedDistrict,selectedSector)?.map((cell: string, index: any) => (
              <option key={index} value={cell}>
                {cell}
              </option>
            ))}
            
            </select>
          </div>
        
          <div className="basis-1/2">
          <select
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
            disabled={!selectedCell}
            className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
            >
            <option value="">Select Village</option>
            {Villages(selectedProvince,selectedDistrict,selectedSector,selectedCell)?.map((village: string, index: any) => (
              <option key={index} value={village}>
                {village}
              </option>
            ))}
            
            </select>
          </div>
          </div>
          <div className="flex gap-2">
          <div className="basis-1/2">
          <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setEmployeeRole(e.target.value)}
        >
          <option value={""}>SELECT ROLE</option>
          {employeeRoles.map((option, index) => (
            <option key={index} value={option as string}>
              {option}
            </option>
          ))}
        </select>
          </div>
          <div className="basis-1/2">
          <select
          className=" border border-black-300/10 font-regular  outline-none  w-full py-[14px] px-3 rounded-md text-[black]"
          placeholder="How do you want to login"
          onChange={(e) => setEmployeeType(e.target.value)}
        >
          <option value={""}>SELECT ORGANISATION</option>
          {employeeTypes.map((option, index) => (
            <option key={index} value={option as string}>
              {option}
            </option>
          ))}
        </select>
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
                <button 
                onClick={() => createRmbEmployee()}
                className="py-2 bg-[#00820D] text-white text-sm font-bold rounded-full pl-6 pr-6">
                  Save
                </button>
              </div>
            </div>
          {/* </div> */}
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
              <div className="basis-1/2">
            <Input
              label={"First name"}
              placeholder={"John"}
              type={"text"}
              state={firstName}
              setState={setFirstName}
            />
          </div>
          <div className="basis-1/2">
            <Input
              label={"Last name"}
              placeholder={"John"}
              type={"text"}
              state={lastName}
              setState={setLastName}
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

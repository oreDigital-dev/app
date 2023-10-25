import React, { useEffect, useState } from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { Slider } from "@material-tailwind/react";

import { axios } from "@/services/axios";
import authHeader from "@/pages/api-services/auth-header";
import { get_all_employees_by_company, get_employees_by_company } from "@/pages/api-services/employee";
import { EmployeeType } from "@/pages/types/employee.type";
import { MiningSiteType } from "@/pages/types/miningSite.type";
import { get_all_registered_mineSites } from "@/pages/api-services/mineSites";
type FormData = {
  mineSiteId: string;
  victimsIds: string[];
  date: string;
  category: string;
  indicator: string;
  description: string;
  nonEmployedVictims: number;
  bleedingLevel: number;
  condition: string;
  action: string;
  file: File | null; 
};
const Reports = () => {
  const [value, setValue] = useState(50);
  const [employee, setEmployee] = useState<EmployeeType[]>([]);
  const  [miningSites, setminingSites] = useState<MiningSiteType[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string>("Good");

  const [formData, setFormData] = useState<FormData>({
    mineSiteId: "",
    victimsIds: [""],
    date: "",
    category: "",
    indicator: "",
    description: "",
    nonEmployedVictims: 0,
    bleedingLevel: 0,
    condition: "",
    action: "",
    file: null,
  });
  

  const handleValueChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      bleedingLevel: newValue,
    }));
  };
  const handleConditionChange = (condition: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      condition,
    }));
  };
const getEmployeesByCompany = async () => {
  try {
    const response: any = await get_all_employees_by_company();
    setEmployee(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    setEmployee([]);
  } finally {
  }
};
const getMiningSitesByCompany = async () => {
  try {
    const response: any = await get_all_registered_mineSites();
    setminingSites(response.data);
    console.log(response.data);
    
  } catch (error) {
    console.error(error);
    setminingSites([]);
  } finally {
  }
};
useEffect(() => {
  getEmployeesByCompany();
  getMiningSitesByCompany();
}, []);

const handleSubmit = async (event: any) => {
  event.preventDefault();
  try {
    const data = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        data.append(key, formData[key] as string);
      }
    }

    if (formData.file) {
      data.append("file", formData.file, formData.file.name);
    }

    console.log("Data:", data);
    const response = await axios.post("/reports/create", data, {
      headers: authHeader(),
    });

    console.log("Data sent successfully:", response.data);

  } catch (error) {
    console.error("Error sending data:", error);
  }
};



  return (
    <div className="m-[20px] rounded-md">
      <div className=" bg-white h-auto relative p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <form onSubmit={handleSubmit}>
          <div className="bg-[#5160B310] text-black p-[10px] shadow-sm shadow-neutal-300 mt-2">
            <h1 className="text-center">
              Basic information about the incident
            </h1>
          </div>
          <div className="flex mt-4 justify-between">
            <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-[45%] rounded-full">
              <p className="pl-5">Date of Incident</p>
              <input
                type="date"
                className="ml-4"
                name="date"
                onChange={handleValueChange}
              />
            </div>

            <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-[45%] rounded-full">
              <p className="pl-5">Mining Site :</p>
              <select
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#5160B3]"
                name="mineSiteId"
                onChange={handleValueChange}
              >
                {miningSites?.map((miningsite) => (
                  <option key={miningsite.id} value={miningsite.id}>
                    {miningsite.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-[45%] rounded-full">
              <p className="pl-5">Category of the incident :</p>
              <input
                type="text"
                className="ml-4"
                name="category"
                onChange={handleValueChange}
              />
            </div>
            <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-[45%] rounded-full">
              <p className="pl-5">Incident Indicator :</p>
              <input
                type="text"
                name="indicator"
                className="ml-4"
                onChange={handleValueChange}
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] mt-4 w-[45%] rounded-full">
              <p className="pl-5">Name of the Victim (If there's any) :</p>
            
              <select
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#5160B3]"
                name="victimsIds"
                onChange={handleValueChange}
              >
                {employee?.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.firstName.toString() + " " + employee.lastName.toString()}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#5160B3]"
              placeholder="Appropriate description of the incident"
              name="description"
              onChange={handleValueChange}
            ></textarea>
          </div>

          <div className="flex mt-4 justify-between">
            <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/5 rounded-full">
              <p className="pl-5">Bleeding (If any) :</p>
            </div>
            <div className="bg-[#45B1BF] py-2 w-[25%] rounded-full text-white text-xs items-center flex justify-center">
              <p className="pr-4">{value}%</p>
              <input
                type="range"
                min="0"
                max="100"
                name="bleedingLevel"
                value={value}
                onChange={handleRangeChange}
                className="w-2/3 h-4 rounded-full appearance-none bg-gray-200"
                style={{
                  background: `linear-gradient(to right, white ${value}%, #e6e6e6 ${value}%, #e6e6e6 100%)`,
                }}
              />
            </div>
            <div className="flex p-[10px] bg-white border-[1px] border-solid border-[#5160B3] w-1/5 rounded-full">
              <p className="pl-5">Condition / state :</p>
            </div>
            <div className="bg-[#45B1BF] py-2 w-[25%] rounded-full text-white text-xs items-center flex justify-center">
              <button
               onClick={() => handleConditionChange("Good")}
               type="button" name="condition" className="border-r-[1px] border-solid border-r-white pr-4 hover:border-b-[1px] hover:border-b-solid hover:border-b-white py-2">
                Good
              </button>
              <button 
              onClick={() => handleConditionChange("Average")}
              type="button" name="condition" className="border-r-[1px] border-solid border-r-white pr-4 pl-4 hover:border-b-[1px] hover:border-b-solid hover:border-b-white py-2">
                Average
              </button>
              <button 
              onClick={() => handleConditionChange("Critical")}
              type="button" name="condition" className="pl-4 hover:border-b-[1px] hover:border-b-solid hover:border-b-white py-2">
                Critical
              </button>
            </div>
          </div>
          <div className="mt-4">
            <textarea
            name="action"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#5160B3]"
              placeholder="Actions taken to address the incident"
              onChange={handleValueChange}
            ></textarea>
          </div>
          <div>
            <div className="bg-[#5160B310] text-black p-[10px] shadow-sm shadow-neutal-300 mt-4">
              <h1 className="text-center">
                Additional information about the incident
              </h1>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center h-40 w-1/3 border-2 border-[#5160B3] border-dashed rounded-lg cursor-pointer bg-white mt-4">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <BsFileEarmarkText className="text-2xl mb-4" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    name="file"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="py-3 pl-2 pr-2 w-40 flex text-[#5160B3] shadow-md shadow-gray-200 items-center mr-6 justify-center  rounded-lg bg-white"
                >
                  <span>Preview</span>
                </button>
                <button
                  type="submit"
                  className="py-3 pl-2 pr-2 w-40 flex text-white items-center justify-center  rounded-lg bg-[#5160B3]"
                >
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Reports;

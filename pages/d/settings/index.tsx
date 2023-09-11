import React from "react";
import { AddIcon, EditIcon, PersonIcon } from "@/components/icons";
import Link from "next/link";
import SettingsSidebar from "./settingsSidebar";
function Settings() {
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex">
         <SettingsSidebar />
          <div className="ml-6 w-full">
            <h1>My Profile</h1>
            <div className="w-full h-32 rounded-lg border-2 border-[#CCD6FF] mt-6 pt-6 pl-4 flex justify-between pr-6">
              <div className="flex ">
                <div className="flex">
                  <PersonIcon />
                  <div className="ml-4">
                    <h1 className="font-extrabold">Company Name</h1>
                    <p className="text-sm">Company CEO</p>
                    <p className="text-sm">Kigali, Rwanda</p>
                  </div>
                </div>
                <div>
                  <button className="py-3 w-24 flex items-center  gap-2 justify-center rounded-full border-2 border-[#CCD6FF] ml-4 text-[#8F9199]">
                    <span>Edit</span>
                    <EditIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full  rounded-lg border-2 border-[#CCD6FF] flex justify-between mt-6 pt-6 pl-4 flex pr-6 pb-4">
              <div>
                 <h1 className="font-extrabold">Personal Information</h1>
                 <p className="text-gray-400 pt-6 text-sm">Company Name</p>
                 <h1 className="font-bold">Admin</h1>
                 <p className="text-gray-400 pt-6 text-sm">Email Address</p>
                 <h1 className="font-bold">Admin@tabarocks.comftf</h1>
                 <p className="text-gray-400 pt-6 text-sm">CEO</p>
                 <h1 className="font-bold">Admin tabarocks</h1>
              </div>
              <div>
                <p className="text-gray-400 pt-6 text-sm">Mining licence number</p>
                <h1 className="font-bold">123 456</h1>
                <p className="text-gray-400 pt-6 text-sm">Phone</p>
                <h1 className="font-bold">+123 456 789</h1>
              </div>
              <div>
              <button className="py-3 w-24 flex items-center float-right gap-2 justify-center rounded-full border-2 border-[#CCD6FF] ml-4 text-[#8F9199]">
                    <span>Edit</span>
                    <EditIcon />
                  </button>
              </div>
            </div>
            <div className="w-full  rounded-lg border-2 border-[#CCD6FF] flex justify-between mt-6 pt-6 pl-4 flex pr-6 pb-4">
              <div>
                 <h1 className="font-extrabold">Head quarters Location</h1>
                 <p className="text-gray-400 pt-6 text-sm">Country</p>
                 <h1 className="font-bold">Rwanda</h1>
                 <p className="text-gray-400 pt-6 text-sm">Postal Code</p>
                 <h1 className="font-bold">000 00</h1>
            
              </div>
              <div>
              <p className="text-gray-400 pt-6 text-sm">City/State</p>
                <h1 className="font-bold">Kigali</h1>
         
              </div>
              <div>
              <button className="py-3 w-24 flex items-center  gap-2 justify-center rounded-full border-2 border-[#CCD6FF] ml-4 text-[#8F9199]">
                    <span>Edit</span>
                    <EditIcon />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

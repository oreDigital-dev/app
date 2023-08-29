import React from 'react'
import SettingsSidebar from './settingsSidebar'
import { EditIcon, ToggleOnIcon } from '@/components/icons'

function Security() {
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex">
        <SettingsSidebar />
        <div>
        <div className="w-full h-32 ml-6 border-b-2 border-[#CCD6FF] flex justify-between mt-6 pt-6 flex pr-6">
              <div>
                 <h1 className="font-bolder">Security</h1>
                 <p className="text-gray-400 pt-6 text-sm">Email Address</p>
                 <h1 className="font-bold">The email address associated with your account</h1>
              </div>
              <div>
                <p className="text-gray-400 pt-12 text-sm">admin@tabarocks.com</p>
                <h1 className="font-bold">Verified</h1>
         
              </div>
              <div>
              <button className="py-3 w-24 mt-8 flex items-center float-right gap-2 justify-center rounded-full border-2 border-[#CCD6FF] ml-4 text-[#8F9199]">
                    <span>Edit</span>
                    <EditIcon />
                  </button>
              </div>
            </div>
            <div className="w-full h-32 ml-6 border-b-2 border-[#CCD6FF] flex justify-between  flex pr-6">
              <div>
                 <p className="text-gray-400 pt-6 text-sm">Email Address</p>
                 <h1 className="font-bold">Set a unique password to protect your account</h1>
              </div>
              <div>
              <button className="py-3 w-48 mt-8 flex items-center float-right gap-2 justify-center rounded-full border-2 border-[#CCD6FF] ml-4 text-[#8F9199]">
                    <span>change password</span>
                  </button>
              </div>
            </div>
            <div className="w-full h-32 ml-6 border-b-2 border-[#CCD6FF] flex justify-between  flex pr-6">
              <div>
                 <p className="text-gray-400 pt-6 text-sm">Deactivate my account</p>
                 <h1 className="font-bold">This will shut down your account.Your account will be active again when you sign in</h1>
              </div>
              <div>
              <button className="py-3 w-48 mt-8 flex items-center float-right gap-2 justify-center rounded-full border-2 border-[#CCD6FF] ml-4 text-[#8F9199]">
                    <span>Deactivate</span>
                  </button>
              </div>
            </div>
            <div className="w-full h-32 ml-6 flex justify-between  flex pr-6">
              <div>
                 <p className="text-gray-400 pt-6 text-sm">Deactivate my account</p>
                 <h1 className="font-bold">This will shut down your account.Your account will be active again when you sign in</h1>
              </div>
              <div className='flex items-center'>
                    <span className='text-red-500 '>Delete Account</span>
              </div>
            </div>
          </div>  
    </div>
    </div>
    </div>
  )
}

export default Security
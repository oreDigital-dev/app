import React, {useState} from 'react'
import Link from 'next/link'
import { LogOutIcon } from '@/components/icons';
function SettingsSidebar() {
  const [logout, setLogout] = useState<boolean>(false);
  return (
    <div>
         <div className="">
            <button className="py-2 w-40 flex items-center  gap-2 justify-center rounded-full bg-app/10  hover:bg-app/30 ml-4 text-app fill-app">
              <span>My Profile</span>
            </button>
            <div className=" border-r-2 border-[#CCD6FF]">
              <div className="flex gap-2 py-4 mt-10 px-4">
                {/* <AddIcon /> */}
                <Link href='/d/settings/notifications'>
                <span>Notifications</span>
                </Link>
              </div>
              <div className="flex gap-2 py-4 px-4">
                {/* <AddIcon /> */}
                <Link href="/d/settings/security">
                <span>Security</span>
                </Link>
              </div>
              <div className="flex gap-2 py-4 px-4">
                {/* <AddIcon /> */}
                
                <span>Notifications</span>
                
              </div>
              <div className="flex gap-2 py-4 px-4">
                {/* <AddIcon /> */}
                <span>Notifications</span>
              </div>
              <div className="mt-12">
              <button className="py-2 w-11/12 flex items-center  gap-2 justify-center rounded-full bg-app/10  hover:bg-app/30 ml-4 text-app fill-app">
            <span
              onClick={()=>setLogout(true)}
            >
              Log Out
            </span>
          </button>
                <div className="flex gap-2 py-4 px-4">
                  {/* <AddIcon /> */}
                  <span className="text-red-500">Delete Account</span>
                </div>
              </div>
            </div>
          </div>
          {logout && (
            <div className='absolute h-screen w-full left-0 top-0 bg-[#00000025] flex justify-center items-center'>
              <div className='bg-white pt-8 pb-8 w-1/4 rounded-lg shadow-xl shadow-current'>
                
                  <div className='flex justify-center'>
                  <LogOutIcon />
                  </div>
                  <p className='text-center pt-6'>You’re leaving...</p>
                  <p className='text-center'>Are you sure ?</p>

                  <div className='flex flex-col justify-center ml-14 mt-6'>
                <button onClick={()=>setLogout(false)} className='py-2 w-3/4 bg-[#5160B3] text-white text-center rounded-md'>Cancel</button>
                <button className='py-2 w-3/4 border-2  mt-4 border-[#5160B3] text-black bg-white rounded-md'>Log out</button>
              </div>
              </div>
              

            </div>
          )}
    </div>
  )
}

export default SettingsSidebar
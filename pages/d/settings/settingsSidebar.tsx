import React from 'react'
import Link from 'next/link'
function SettingsSidebar() {
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
                <span>Notifications</span>
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
                <div className="flex gap-2 py-4 px-4">
                  {/* <AddIcon /> */}
                  <span>Log Out</span>
                </div>
                <div className="flex gap-2 py-4 px-4">
                  {/* <AddIcon /> */}
                  <span className="text-red-500">Delete Account</span>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SettingsSidebar
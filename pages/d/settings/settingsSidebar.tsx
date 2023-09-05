import React, {useState} from 'react'
import Link from 'next/link'
import { LogOutIcon } from '@/components/icons';
function SettingsSidebar() {
  const [logout, setLogout] = useState<boolean>(false);
  const [deleteAccount, setDeleteAccount] = useState<boolean>(false);
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
              <button className="py-2 w-11/12 flex items-center  gap-2 justify-center rounded-full bg-app/30 hover:bg-app/30 ml-4 text-app fill-app">
            <span
              onClick={()=>setLogout(true)}
            >
              Log Out
            </span>
          </button>
             <button className="py-2 w-11/12 flex items-center  gap-2 justify-center rounded-full bg-[#FF7B7B10] hover:bg-[#FF7B7B] ml-4 text-[#FF7B7B] mt-2 hover:text-white">
            <span
              onClick={()=>setDeleteAccount(true)}
            >
              Delete Account
            </span>
          </button>
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
          {deleteAccount && (
               <div className='absolute h-screen w-full left-0 top-0 bg-[#00000025] flex justify-center items-center'>
               <div className='bg-white pt-8 pb-8 w-1/3 pl-6 pr-6 rounded-lg shadow-xl shadow-current'>
                 

                   <div className='flex justify-center'>
                    <h1 className='font-bold'>Delete your account</h1>
                   </div>
                   <p className='text-center pt-6 text-sm text-gray-500'>Are you sure you want to delete your account?If you're having problems,please contact us and get help.</p>
                   <p className='text-center pt-4 text-sm text-gray-500'>Deleting your account will remove access to Oredigital and unreal projects will also be permanently deleted.</p>
 
                   <div className='flex flex-col justify-center ml-14 mt-6'>
                    <label htmlFor="" className='text-sm text-gray-500'>Enter password to confirm delete</label>
                    <input type="password" className='w-3/4 shadow-md shadow-gray-300 border-2 border-gray-200 py-2 rounded-md pl-4' />
                 <button className='py-2 w-3/4 bg-[#FF7B7B] text-white text-center rounded-md mt-4'>DELETE ACCOUNT</button>
                 <button onClick={()=>setDeleteAccount(false)}  className='py-2 w-3/4 border-2  mt-4 border-gray-500 text-black bg-[#8F9199] rounded-md '>Cancel</button>
               </div>
               </div>
               
 
             </div> 
          )}
    </div>
  )
}

export default SettingsSidebar
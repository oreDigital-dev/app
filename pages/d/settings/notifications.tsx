import React from 'react'
import SettingsSidebar from './settingsSidebar'
import { ToggleOffIcon, ToggleOnIcon } from '@/components/icons'

function Notifications() {
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex">
     <SettingsSidebar />
     <div className='w-full mr-12'>
     <div className="w-full h-20 border-b-2 border-[#CCD6FF] ml-8 pr-6">
        <h1 className='font-bold pt-4'>Notification</h1>
        <p className='text-[#8F9199]'>Select the kinds of notifications you get about your activites and recommendations.</p>
     </div>
     <div className='flex ml-8 border-b-2 border-[#CCD6FF] w-full mt-8 justify-between'>
     <div className='w-64'>
      <h1>Email notifications</h1>
      <p className='text-[#8F9199]'>Get emails to find out what's going on when you're not online.You can turn these off.</p>
     </div>
 <div className=''>
     <div className='flex'>
    <ToggleOnIcon />
    <div className='w-80 ml-6'>
      <h1>News and Updates</h1>
      <p className='text-[#8F9199]'>Select the kinds of notifications you get about your activites and recommendations.</p>
     </div>
     </div>
     <div className='flex mt-6'>
    <ToggleOffIcon />
    <div className='w-80 ml-6'>
      <h1>News and Updates</h1>
      <p className='text-[#8F9199]'>Select the kinds of notifications you get about your activites and recommendations.</p>
     </div>
     </div>
     <div className='flex mt-6'>
    <ToggleOffIcon />
    <div className='w-80 ml-6'>
      <h1>News and Updates</h1>
      <p className='text-[#8F9199]'>Select the kinds of notifications you get about your activites and recommendations.</p>
     </div>
     </div>
     </div>
     </div>
        <div className='flex ml-8 border-b-2 border-[#CCD6FF] w-full mt-8 justify-between'>
     <div className='w-64'>
      <h1>Sms notifications</h1>
      <p className='text-[#8F9199]'>Get emails to find out what's going on when you're not online.You can turn these off.</p>
     </div>
 <div className=''>
     <div className='flex'>
    <ToggleOnIcon />
    <div className='w-80 ml-6'>
      <h1>News and Updates</h1>
      <p className='text-[#8F9199]'>Select the kinds of notifications you get about your activites and recommendations.</p>
     </div>
     </div>
     <div className='flex mt-6'>
    <ToggleOffIcon />
    <div className='w-80 ml-6'>
      <h1>News and Updates</h1>
      <p className='text-[#8F9199]'>Select the kinds of notifications you get about your activites and recommendations.</p>
     </div>
     </div>
     <div className='flex mt-6'>
    <ToggleOffIcon />
    <div className='w-80  ml-6'>
      <h1>News and Updates</h1>
      <p className='text-[#8F9199]'>Select the kinds of notifications you get about your activites and recommendations.</p>
     </div>
     </div>
     </div>
     </div>
       <div className='flex ml-8 w-full mt-8 justify-between'>
     <div className='w-64'>
      <h1>Sms notifications</h1>
      <p className='text-[#8F9199]'>Get emails to find out what's going on when you're not online.You can turn these off.</p>
     </div>
 <div className=''>
     <div className='flex'>
    <ToggleOnIcon />
    <div className='w-80 ml-6'>
      <h1>News and Updates</h1>
      <p className='text-[#8F9199]'>Select the kinds of notifications you get about your activites and recommendations.</p>
     </div>
     </div>
     </div>
     </div>
     </div>
    </div>
    </div> 
    </div>
  )
} 

export default Notifications
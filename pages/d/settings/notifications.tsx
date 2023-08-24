import React from 'react'
import SettingsSidebar from './settingsSidebar'
function Notifications() {
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex">
     <SettingsSidebar />
     <div>
        <h1>Notification</h1>
        <p>Select the kinds of notifications you get about your activites and recommendations.</p>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Notifications
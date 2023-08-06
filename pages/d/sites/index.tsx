import React from 'react'
import { MiningSite as MiningSiteProperties } from "@/@types/interfaces";
import { Status } from "@/@types/status";
import SectionHead from '@/components/ui/sectionHead'
import MiningSite from "@/components/units/miningSite";
import RegisteredSite from '@/components/units/registeredSite';
import SiteStatus from '@/components/units/siteStatus';
import { PlusIcon } from '@/components/icons';
export default function Sites(){
    const minesites: MiningSiteProperties[] = [
        {
        id: "550e8400-e29b-41d4-a716-446655440000",
        name: "Gihanga site",
        location: "Gihanga, Muhanga",
        img: "https://images.unsplash.com/photo-1675600360075-5564fe1a7e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbmluZyUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
        status: Status.HEALTHY,
      },
        {
        id: "550e8400-e29b-41d4-a716-446655449900",
        name: "Cyamudongo zinc mine",
        location: "Cyamudongo, Rusizi",
        img: "https://images.unsplash.com/photo-1675600360075-5564fe1a7e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbmluZyUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
        status: Status.WARNING,
      },
      {
        id: "550e8400-e29b-41d4-a716-446655449900",
        name: "Cyamudongo zinc mine",
        location: "Cyamudongo, Rusizi",
        img: "https://images.unsplash.com/photo-1675600360075-5564fe1a7e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbmluZyUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
        status: Status.WARNING,
      },
     
    ]
    
    
    return(
        <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex items-start justify-between">
          <SectionHead
            title="Registered sites"
            desc="All mining sites registered in workspace"
          />
         <button className="py-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
            
            <span>Add Site</span>
            <PlusIcon />
          </button>
        </div>
        <div className="flex gap-4 my-[20px] overflow-x-scroll scrollable">
         
        {minesites.map((site, index) => (
            <RegisteredSite {...site} key={index}/>
          ))}
        </div>
      </div>
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-4">
        <div className="items-start justify-between">
          <SectionHead
            title="Statuses"
            desc="Your records so far"
          />
          <SiteStatus />
        </div>
      </div>
    </div>
    )
}
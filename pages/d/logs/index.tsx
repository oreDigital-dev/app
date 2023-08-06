import { MiningSite as MiningSiteProperties } from "@/@types/interfaces";
import MiningSite from "@/components/units/miningSite";
import { Status } from "@/@types/status";
import { ArrowIcon, ExpandIcon } from "@/components/icons";
import SectionHead from "@/components/ui/sectionHead";
import { useState } from "react";
import LogsPanel from "@/components/units/logsPanel";

export default function Logs() {
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
]


const showPanelInFullScreen = () => {
    const panel_div = document.getElementById('logs-panel') ;
    if(panel_div){
        panel_div.requestFullscreen()
    }
}

  const [selectedSite,setSelectedSite] = useState(minesites[0].id)
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex items-start justify-between">
          <SectionHead
            title="Mining Sites"
            desc="All mining sites registered in workspace"
          />
          <button className="text-app flex items-center  font-semibold hover:text-black-500">
            <span>Sites details</span>
            <ArrowIcon />
          </button>
        </div>
        <div className="flex gap-4 my-[20px] overflow-x-scroll scrollable">
          {minesites.map((site, index) => (
            <MiningSite {...site} key={index} isSelected={selectedSite===site.id}  setSelectedSite={setSelectedSite}/>
          ))}
        </div>
      </div>
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-4">
        <div className="flex items-start justify-between">
          <SectionHead
            title="Logs"
            desc={`What's happening at ${minesites.find(minesite =>  minesite.id == selectedSite)?.name as string}`}
          />
          <button className="py-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app" onClick={showPanelInFullScreen}>
            <ExpandIcon />
            <span>Full screen</span>
          </button>
        </div>
        <LogsPanel siteId={selectedSite} />
      </div>
    </div>
  );
}

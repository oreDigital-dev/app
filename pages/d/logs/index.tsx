"use client";
import { MiningSite as MiningSiteProperties } from "@/@types/interfaces";
import MiningSite from "@/components/units/miningSite";
import { Status } from "@/@types/status";
import { ArrowIcon, ExpandIcon } from "@/components/icons";
import SectionHead from "@/components/ui/sectionHead";
import { useEffect, useState } from "react";
import LogsPanel from "@/components/units/logsPanel";
import Sites from "../sites";

export default function Logs() {
  let minesites: any[] = [
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
  ];

  const showPanelInFullScreen = () => {
    const panel_div = document.getElementById("logs-panel");
    if (panel_div) {
      panel_div.requestFullscreen();
    }
  };

  const [selectedSite, setSelectedSite] = useState(minesites[0].id);
  const [mineSites, setMineSites]: any = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")!);
      setMineSites(loggedInUser?.minesites || []);
    }
  }, []);
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
          {mineSites.slice(1, mineSites.length).map((site: any, index: any) => (
            <MiningSite
              {...site}
              key={index}
              isSelected={selectedSite === site.id}
              setSelectedSite={setSelectedSite}
            />
          ))}
        </div>
      </div>
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-4">
        <div className="flex items-start justify-between">
          <SectionHead
            title="Logs"
            desc={`What's happening at ${
              mineSites.find((minesite: any) => minesite.id == selectedSite)
                ?.minesiteName as string
            }`}
          />
          <button
            className="w-[15%] flex justify-center py-3 items-center  gap-2  rounded-full bg-app/10  hover:bg-app/30  text-app fill-app"
            onClick={showPanelInFullScreen}
          >
            <ExpandIcon />
            <span>Full screen</span>
          </button>
        </div>
        <LogsPanel siteId={selectedSite} />
      </div>
    </div>
  );
}

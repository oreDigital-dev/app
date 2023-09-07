import React, { useEffect, useState } from "react";
import { MiningSite as MiningSiteProperties } from "@/@types/interfaces";
import { Status } from "@/@types/status";
import SectionHead from "@/components/ui/sectionHead";
import MiningSite from "@/components/units/miningSite";
import RegisteredSite from "@/components/units/registeredSite";
import SiteStatus from "@/components/units/siteStatus";
import { PlusIcon } from "@/components/icons";
import { ViewIcon } from "@/components/icons";
import { ArrowIcon, ExpandIcon } from "@/components/icons";
import CreateMinesite from "@/components/ui/createMinesite";
import { useAppDispatch } from "@/stores/store";
import { setCreateMineSiteVisibility } from "@/features/appPages";
import { ToastContainer } from "react-toastify";
import MapSite from "./mapSite";
import axios from "axios";
import { baseUrli } from "@/utils/dataAssets";
export default function Sites() {
  const dispatch = useAppDispatch();
  const [mineSites, setMineSites]: any = useState([]);

  const showPanelInFullScreen = () => {
    const panel_div = document.getElementById("statuses");
    if (panel_div) {
      panel_div.requestFullscreen();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const sites = JSON.parse(loggedInUser).minesites;
        setMineSites(sites);
      }
    }
    
    const getMineSites = async () => {
      try {
        const response = await axios.get(`${baseUrli}/minesites/forlogged-in-company`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authKey")}`,
          },
        });
        setMineSites(response.data.mineSites);
      } catch (error) {
        console.log(error);
      }
    };
    
    getMineSites();
  }, []);
  
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex items-start justify-between">
          <ToastContainer />
          {/* <MapSite /> */}
          <SectionHead
            title="Registered sites"
            desc="All mining sites registered in workspace"
          />
         
          <div className="w-[80%] lg:flex md:flex sm:block xs:block">
          <button className="py-3 lg:w-[40%] md:w-[60%] pl-2 pr-2 flex items-center  gap-2 justify-center rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
          <ViewIcon />
            <span
           
            >
              View plots on map
            </span>
            
          </button>
          <button className="py-3 lg:w-[25%] pl-2 pr-2 flex items-center  gap-2 justify-center rounded-full bg-app/10  hover:bg-app/30 ml-4 text-app fill-app">
            <span
              onClick={() =>
                dispatch(setCreateMineSiteVisibility({ type: "open" }))
              }
            >
              Add Site
            </span>
            <PlusIcon />
          </button>
          </div>
        </div>
        <div className="flex gap-4 my-[20px] overflow-x-scroll scrollable">
          {mineSites == null ? (
            <div>
              <p>You don't have minesites</p>
            </div>
          ) : (
            mineSites
              .slice(1, mineSites.length)
              .map((site: any, index: any) => (
                <RegisteredSite {...site} key={index} />
              ))
          )}
        </div>
        <div className="w-[70%] p-4 absolute top-20">
          <CreateMinesite />
        </div>
      </div>
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-4">
        <div className="items-start justify-between">
          <SectionHead title="Statuses" desc="Your records so far" />
          <SiteStatus sites={mineSites} />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { MiningSite as MiningSiteProperties } from "@/@types/interfaces";
import { Status } from "@/@types/status";
import SectionHead from "@/components/ui/sectionHead";
import MiningSite from "@/components/units/miningSite";
import RegisteredSite from "@/components/units/registeredSite";
import SiteStatus from "@/components/units/siteStatus";
import { PlusIcon } from "@/components/icons";
import { ArrowIcon, ExpandIcon } from "@/components/icons";
import CreateMinesite from "@/components/ui/createMinesite";
import { RootState, useAppDispatch } from "@/stores/store";
import {
  setCreateMineSiteVisibility,
  setUpdateMineSiteVisibility,
} from "@/features/appPages";
import { ToastContainer } from "react-toastify";
import MapSite from "./mapSite";
import axios from "axios";
import { baseUrli } from "@/utils/dataAssets";
import { initializeMinesites } from "@/features/minesitesSlice";
import { useSelector } from "react-redux";
export default function Sites() {
  const dispatch = useAppDispatch();
  const mineSites = useSelector(
    (store: RootState) => store.mineSites.minesites
  );
  const mineSitess = useSelector((store: RootState) => store);
  useEffect(() => {
    const getMineSites = async () => {
      await axios
        .get(`${baseUrli}/minesites/forlogged-in-company`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authKey")}`,
          },
        })
        .then((response) => {
          dispatch(initializeMinesites({ minesites: response.data.mineSites }));
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    getMineSites();
  }, []);
  const showPanelInFullScreen = () => {
    const panel_div = document.getElementById("statuses");
    if (panel_div) {
      panel_div.requestFullscreen();
    }
  };

  const handleAddSite = () => {
    dispatch(setUpdateMineSiteVisibility({ type: "close" }));
    dispatch(setCreateMineSiteVisibility({ type: "open" }));
  };
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
          <button className="py-3 w-[15%] flex items-center  gap-2 justify-center rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
            <span onClick={() => handleAddSite()}>Add Site</span>
            <PlusIcon />
          </button>
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

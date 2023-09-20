"use client";
import { MiningSite as MiningSiteProperties } from "@/@types/interfaces";
import MiningSite from "@/components/units/miningSite";
import { Status } from "@/@types/status";
import { ArrowIcon, ExpandIcon } from "@/components/icons";
import SectionHead from "@/components/ui/sectionHead";
import { useEffect, useState } from "react";
import LogsPanel from "@/components/units/logsPanel";
import Sites from "../sites";
import NotificationLayout from "@/layout/notificationLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/stores/store";
import { baseUrli } from "@/utils/dataAssets";
import { initializeMinesites } from "@/features/minesitesSlice";
import { axios } from "@/services/axios";

export default function Logs() {
  const dispatch = useDispatch();
  const selectedMineSite = useSelector(
    (store: RootState) => store.mineSites.selectedMineSite
  );

  const showPanelInFullScreen = () => {
    const panel_div = document.getElementById("logs-panel");
    if (panel_div) {
      panel_div.requestFullscreen();
    }
  };

  const mineSites = useSelector(
    (store: RootState) => store.mineSites.minesites
  );
  useEffect(() => {
    const getMineSites = async () => {
      await axios
        .get(`/incidents/all`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("refreshToken")!
            )}`,
          },
        })
        .then((response) => {
          dispatch(initializeMinesites({ minesites: response.data.data }));
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    getMineSites();
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
          {selectedMineSite && (
            <MiningSite {...selectedMineSite} key={10000} isSelected={true} />
          )}
          {mineSites &&
            mineSites
              .slice(1, mineSites.length)
              .map((site: any, index: any) => (
                <div>
                  {selectedMineSite._id != site._id && (
                    <MiningSite
                      {...site}
                      key={index}
                      isSelected={selectedMineSite._id === site._id}
                    />
                  )}
                </div>
              ))}
        </div>
      </div>
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-4">
        <div className="flex items-start justify-between">
          <SectionHead
            title="Logs"
            desc={`What's happening at ${
              selectedMineSite == undefined
                ? "All minesites "
                : selectedMineSite?.minesiteName + " Minesite"
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
        <LogsPanel siteId={selectedMineSite._id} />
      </div>
    </div>
  );
}

'use client'
import { RescueTeamData } from "@/@types/interfaces"
import {useState} from 'react';
import { ThreeDotsIcon } from "../icons";
export interface RescueTeamCardProps extends RescueTeamData{}
const COLORS = ["#5160B3", "#000000"];

const RescueTeamCard = (props:RescueTeamCardProps) => {
    const [viewButton, setViewButton] = useState<Boolean>(false);
    const handleShowViewButton = () => {
        setViewButton((prev) => !prev);
      };
  return (
    <div className="flex items-center mb-4 p-3 min-w-[250px] gap-4 border cursor-pointer rounded-lg shadow-sm">
      <div className="w-full">
        <p className="text-gray-400">{props.issueName}</p>

       
          <h1 className="font-bold text-2xl" style={{ color: props.issueCategory == 'Cases'?COLORS[0]:COLORS[1]}}>
            {`${props.issueAmount}  ${props.issueCategory.toUpperCase()}`}
          </h1>
        


<button className="float-right mt-4" onClick={handleShowViewButton}>
          <ThreeDotsIcon />
        </button>
        {viewButton && (
          <button className="translate-y-14 translate-x-52 z-40 border-2 shadow-sm px-4 py-3 bg-white rounded-tl-[16px] text-gray-400">
            View {props.issueCategory}
          </button>
        )}
      </div>
    </div>
  )
}

export default RescueTeamCard
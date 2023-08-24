import React, { useState } from "react";
import { RmbDetails } from "@/@types/interfaces";
import { ThreeDotsIcon } from "../icons";
import SectionHead from "../ui/sectionHead";

interface RmbDetailsProps extends RmbDetails {}

const COLORS = ["#5160B3", "#000000"];

function RmbDetailsCard(props: RmbDetailsProps) {
  const [viewButton, setViewButton] = useState<Boolean>(false);
  const handleShowViewButton = () => {
    setViewButton((prev) => !prev);
  };
  return (
    <div className="flex items-center mb-4 p-3 min-w-[250px] gap-4 border cursor-pointer rounded-lg shadow-sm">
      <div className="w-full">
        <p className="text-gray-400">{props.title}</p>

        {props.companies && (
          <h1 className="font-bold text-2xl" style={{ color: COLORS[0] }}>
            {`${props.companies} Sites`}
          </h1>
        )}
        {props.reports && (
          <h1 className="font-bold text-2xl" style={{ color: COLORS[1] }}>
            {`${props.reports} Reports`}
          </h1>
        )}
        {props.zones && (
          <h1 className="font-bold text-2xl" style={{ color: COLORS[1] }}>
            {`${props.zones} Zones`}
          </h1>
        )}

        <button className="float-right mt-4" onClick={handleShowViewButton}>
          <ThreeDotsIcon />
        </button>
        {viewButton && (
          <button className="translate-y-14 translate-x-52 z-40 border-2 shadow-sm px-4 py-3 bg-white rounded-tl-[16px] text-gray-400">
            View {props.viewName}
          </button>
        )}
      </div>
    </div>
  );
}

export default RmbDetailsCard;

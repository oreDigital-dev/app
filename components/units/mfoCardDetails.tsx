import React, { useState } from "react";
import { RmbDetails, MfoDetails } from "@/@types/interfaces";
import { ThreeDotsIcon } from "../icons";
import SectionHead from "../ui/sectionHead";
import { useRouter } from "next/router";

interface MfoDetailsProps extends MfoDetails {}

const COLORS = ["#5160B3", "#000000","#2CA900"];

function MfoDetailsCard(props: MfoDetailsProps) {
  const [viewButton, setViewButton] = useState<Boolean>(false);
  const router = useRouter();
  const handleShowViewButton = () => {
    setViewButton((prev) => !prev);
  };
  const handleRedirection = async (href: string) => {
    await router.push(`/mfo/${href}`);
  };
  return (
    <div className="flex items-center mb-4 p-3 min-w-[250px] gap-4 border cursor-pointer rounded-lg shadow-sm">
      <div className="w-full">
        <p className="text-gray-400">{props.title}</p>

        {props.reports == 0 ? (
          <div>
            _
          </div>
        ) : (
          <h1 className="font-bold text-2xl" style={{ color: COLORS[props.id] }}>
            {`${props.reports} ${props.category}`}
          </h1>
        )}

        <button className="float-right mt-4" onClick={handleShowViewButton}>
          <ThreeDotsIcon />
        </button>
        {viewButton && (
          <button
            className="translate-y-14 translate-x-52 z-40 border-2 shadow-sm px-4 py-3 bg-white rounded-tl-[16px] text-gray-400"
            onClick={() => handleRedirection(props.category.toLowerCase())}
          >
            More Details
          </button>
        )}
      </div>
    </div>
  );
}

export default MfoDetailsCard;

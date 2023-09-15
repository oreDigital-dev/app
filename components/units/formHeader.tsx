import { title } from "process";
import React from "react";
import {FiCheck} from 'react-icons/fi' ;
import { AiOutlineCloseCircle } from "react-icons/ai";

function FormHeader(props: { title: String; hideComponent: () => void }) {
  return (
    <div className="border flex flex-row justify-between w-[100%] border-x-0 p-3 border-t-0">
      <h1 className="font-bold ">{props.title.toString()}</h1>
      {/* <AiOutlineCloseCircle
        className="text-2xl hover:cursor-pointer"
        onClick={() => props.hideComponent()}
      /> */}
      <button className="flex items-center gap-4 text-[#5160B3]"><span><FiCheck /></span>Mark all as read</button>
    </div>
  );
}

export default FormHeader;

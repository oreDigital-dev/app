import { useEffect, useState } from "react";
import { Status } from "@/@types/status";

export default function StatusView({ status }: { status: string }) {
  return (
    <div className={` text-green-600 flex items-center gap-1 p-1 rounded-full   my-2 w-fit  bg-green-600/20`}>
      <div className={`w-3 h-3 rounded-full bg-green-600`}></div>
      <span className={`text-green-600 text-xs w-fit`}>
        {status}
      </span>
    </div>
  );
}

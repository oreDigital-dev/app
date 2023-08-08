import React from "react";
import { PlusIcon } from "@/components/icons";
import SectionHead from "@/components/ui/sectionHead";
import Link from "next/link";
function DetailsSite() {
  const minerals = ["Silver", "Zinc", "Gold"];
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex items-start justify-between">
          <div className="flex">
            <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
            <div className="ml-4 mt-2">
              <SectionHead title="Gihanga Site" desc="Muhabura, Gihanga" />
            </div>
          </div>
          <button className="py-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
            <span>Edit data</span>
            {/* <PlusIcon /> */}
          </button>
        </div>
        <div className="flex items-start justify-between mt-6 border-b-2 border-b-gray-200 pb-4">
          <p>Location</p>
          <button className="text-app">
            <Link href="/d/sites/mapSite">
              <span>Show on Map</span>
            </Link>
          </button>
        </div>
        <div className="mt-6">
          <p className="text-gray-400 text-sm">Muhabura, Gihanga</p>
          <p className="text-gray-400 text-sm">Lat: 33.99 E Long: 44.56</p>
        </div>
        <div className="flex items-start justify-between mt-6 border-b-2 border-b-gray-200 pb-4">
          <p>Minerals dug</p>
          <button></button>
        </div>
        <div className="flex mt-4">
          {minerals.map((mineral) => (
            <button
              key={mineral}
              className="py-2 flex items-center gap-2 px-4 rounded-full bg-gray-200 ml-4"
            >
              <span>{mineral}</span>
            </button>
          ))}
          <button className="py-2 flex items-center gap-2 px-4 rounded-full bg-white border-2 border-gray-300 ml-4">
            <span>Add Mineral</span>
            {/* <PlusIcon /> */}
          </button>
        </div>
        <div className="flex items-start justify-between mt-6 border-b-2 border-b-gray-200 pb-4">
          <p>Site logs</p>
          <button className="text-app">
            <Link href="/d/sites">
              <span>Go to site logs</span>
            </Link>
          </button>
        </div>
        <div className="flex mt-4 border-b-2 border-b-gray-200 pb-12">
          <p className="pt-2">Current Status: </p>
          <button className="py-2 flex items-center  gap-2 px-4 rounded-full bg-[#FFBC1010] ml-2 hover:bg-[#FFBC1020]  text-[#FFBC10] fill-app ">
            <span>Warning</span>
          </button>
        </div>
        <div className="flex items-start mt-4 justify-between">
          <div className="flex">
            <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
            <div className="ml-4 mt-2">
              <SectionHead
                title="Delete this site"
                desc="Remove this site from your sites, this action is irreversible"
              />
            </div>
          </div>
          <button className="py-3 flex items-center  gap-2 px-4 rounded-full bg-[#FF494910]  hover:bg-[#FF494920]  text-[#FF4949] fill-app">
            <span>Delete data</span>
            {/* <PlusIcon /> */}
          </button>
        </div>
        <div className="flex items-start mt-4 justify-between">
          <div className="flex">
            <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
            <div className="ml-4 mt-2">
              <SectionHead
                title="Transfer site ownership"
                desc="You can move ownership of this site to another company"
              />
            </div>
          </div>
          <button className="py-3 flex items-center  gap-2 px-4 rounded-full bg-[#00B86010]  hover:bg-[#00B86020]  text-[#00B860] fill-app">
            <span>Transfer ownership</span>
            {/* <PlusIcon /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsSite;

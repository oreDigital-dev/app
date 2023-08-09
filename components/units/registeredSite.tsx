import React from "react";
import SectionHead from "../ui/sectionHead";
import { MiningSite } from "@/@types/interfaces";
import MapSite from "@/pages/d/sites/mapSite";
import DetailsSite from "@/pages/d/sites/detailsSite";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/stores/store";
import { setSelectedMineSite } from "@/features/minesitesSlice";
interface RegisteredSiteProps extends MiningSite {
  location: string | null;
}
export default function RegisteredSite(props: RegisteredSiteProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const getDetails = () => {
    router.push("/d/sites/detailsSite");
    dispatch(setSelectedMineSite({ mineSite: props }));
  };
  return (
    <div className="flex items-center p-3 hover:bg-grey-200 hover:shadow-xl min-w-[300px]  gap-4 border cursor-pointer rounded-lg shadow-sm">
      {/* <Image src={props.img} alt={props.name} width={100} height={100} className="w-auto" /> */}
      <div>
        <div className="h-20 w-20 bg-gray-200 rounded-md"></div>
        <SectionHead title={props.minesiteName} desc={props.location} />
        <p className="text-gray-400 text-sm">Lat: 33.99 E Long: 44.56</p>
        <button className="py-3 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
          <span onClick={() => getDetails()}>Details</span>
        </button>
      </div>
    </div>
  );
}

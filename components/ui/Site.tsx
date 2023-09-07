import { SiteDetails } from "@/@types/interfaces";

export interface Siteprops extends SiteDetails {}
const Site = (props: Siteprops) => {
  return (
    <div className="bg-white rounded-lg hover:border-[#FF0000]/20 border-gray-200 border-[1px] hover:cursor-pointer p-4 space-y-1 shadow-sm shadow-gray-200 mt-[20px]">
      <div className="w-full space-y-4 ">
        <div className="w-full flex justify-between">
          <p className="font-semibold text-md text-black">{props.siteName}</p>
          <p className="text-gray-400 text-sm">
            Created on {props.dateOfCreation}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="">
            <p className="text-gray-400 text-sm">{props.siteLocation}</p>
            <div className="flex gap-4 text-gray-400 text-sm">
              <span>Lat: {props.siteGeolocation.latitude}</span>
              <span>Long: {props.siteGeolocation.longitude}</span>
            </div>
          </div>
          <div>
            <button className="py-2 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
              <span>View location</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Site;

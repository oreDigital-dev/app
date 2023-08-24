import { ExpandedCompanyDetails } from "@/@types/interfaces";
import { SitesIcon } from "../icons";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

interface CompanyDetailsProps extends ExpandedCompanyDetails {}
const CompanyDetails2 = (props: CompanyDetailsProps) => {
  const isCompanyDetailsVisible = useSelector(
    (store: RootState) => store.appPages.isCompanyDetailsVisible
  );

  return (
    <div>
      {isCompanyDetailsVisible && (
      <div className="mx-auto shadow-lg bg-white rounded-md absolute w-[40vw] bottom-16 left-32 p-12 space-y-4">
        <h6 className="text-black-500 font-bold w-full text-center">
          {props.companyName}
        </h6>
        <div className="flex items-center justify-center gap-12">
          <div className="space-y-4">
            <SitesIcon />
            <div className="text-xl font-semibold text-black-500">
              HQ:{props.districtLocation}
            </div>
          </div>
          <div className="w-1 h-12 bg-gray-200 " />
          <div className="space-y-4">
            <h6 className="text-xl  font-semibold text-black-500">
              +{props.activeSites}
            </h6>
            <p className="text-xl font-semibold text-black-500">Active sites</p>
          </div>
        </div>
        <div>
          <p className="text-black-500 font-medium">{props.description}</p>
          <p className="text-black-500 font-medium">{props.description}</p>
        </div>
        <div className="flex gap-4">
          <button className="py-3 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
            <span>more details</span>
          </button>
          <button className="py-3 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
            <span>View sites</span>
          </button>
          <button className="py-3 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
            <span>Contact</span>
          </button>
        </div>
      </div>

      )}
    </div>
  );
};
export default CompanyDetails2;

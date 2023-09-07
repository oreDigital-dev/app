import { ExpandedCompanyDetails } from "@/@types/interfaces";
import { SitesIcon } from "../icons";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { useRouter } from "next/router";

interface CompanyDetailsProps extends ExpandedCompanyDetails {}
const CompanyDetails2 = (props: CompanyDetailsProps) => {
  const router = useRouter();

  const isCompanyDetailsVisible = useSelector(
    (store: RootState) => store.appPages.isCompanyDetailsVisible
  );

  const setNavigationToPage:any = async(compNo:number) => {
  await router.push(`/rmb/companies/${compNo}`)
  };


  return (
    <div className="relative">
      {isCompanyDetailsVisible && (
        <div className="mx-auto shadow-lg bg-white rounded-md absolute w-[60vw] md:w-[50vw] lg:w-[30vw] bottom-[1200px] md:bottom-[270px]  lg:bottom-12 left-1 md:left-20  lg:left-48 px-12 pb-12 pt-6 space-y-8">
          <h6 className="text-black-500 font-bold w-full text-center">
            {props.companyName}
          </h6>
          <div className="flex items-center justify-center gap-12">
            <div className="space-y-2">
              <SitesIcon />
              <div className="text-xs font-medium text-gray-500">
                HQ:{props.districtLocation}
              </div>
            </div>
            <div className="w-1 h-12 bg-gray-200 " />
            <div className="">
              <h6 className="text-lg  font-semibold text-black-500">
                +{props.activeSites}
              </h6>
              <p className="text-xs font-medium text-gray-500">Active sites</p>
            </div>
          </div>
          <div>
            <p className="text-gray-500 font-medium">{props.description}</p>
            <p className="text-gray-500 font-medium">{props.description}</p>
          </div>
          <div className="md:flex gap-4 justify-center">
            <button
              className="w-fit py-3 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app"
              onClick={()=>setNavigationToPage(props.id)}
            >
              <span>more details</span>
            </button>
            <button className="w-fit py-3 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
              <span>View sites</span>
            </button>
            <button className="w-fit py-3 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CompanyDetails2;

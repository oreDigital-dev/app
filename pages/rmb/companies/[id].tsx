import { MoreCompanyDetails } from "@/@types/interfaces";
import { PlusIcon } from "@/components/icons";
import SingleCompany from "@/components/ui/SingleCompant";
import { moreCompanyDetailsData } from "@/utils/dataAssets";
import { useRouter } from "next/router";
export interface CompanyDetailsPageProps extends MoreCompanyDetails{}

const CompanyDetailsPage = ({data}:CompanyDetailsPageProps) => {
  const router = useRouter();

  return (
    <div className="mx-[20px] mt-[20px] rounded-md h-[90vh]">
      <div className="bg-white  relative p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex z-100 items-start justify-between">
          <div>
            <h6 className="text-black-500 font-bold">Registered companies</h6>
            <p className="text-black-300 font-light text-sm">
              Your records so far
            </p>
          </div>
          <div className="flex gap-2">
            <button className="py-3 flex items-center px-4 gap-2 justify-center rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
              <PlusIcon />
              <span>View plots on map</span>
            </button>
            <button className="py-3 flex items-center px-4 gap-2 justify-center rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
              <span>Contact Company</span>
            </button>
          </div>
        </div>
        <div>
            <SingleCompany {...data} />
            <h6>Sites Managed by {companyName}</h6>
            <div>

            </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyDetailsPage;  
export const getStaticProps = (context:any)=>{
const id = context.query.id;
const data = moreCompanyDetailsData[id];
    return {
        props:{
data
        }
    }
}
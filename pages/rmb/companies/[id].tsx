import { MoreCompanyDetails } from "@/@types/interfaces";
import { PlusIcon } from "@/components/icons";
import SingleCompany from "@/components/ui/SingleCompant";
import Site from "@/components/ui/Site";
import { moreCompanyDetailsData } from "@/utils/dataAssets";
import { useRouter } from "next/router";
export interface CompanyDetailsPageProps extends MoreCompanyDetails {}

const CompanyDetailsPage = ({data}:any) => {
  return (
    <div className="mx-[20px] mt-[20px] rounded-md h-[89vh] overflow-y-scroll">
      <div className="bg-white  relative p-[20px] rounded-md shadow-sm shadow-neutal-300 ">
        <div className="flex z-100 items-start justify-between">
          <div>
            <h6 className="text-black-500 font-bold">Company Details</h6>
            <p className="text-black-300 font-light text-sm">
            General information about the comany
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
        <div className="space-y-1">
          <SingleCompany {...data} />
          <h6 className="font-semibold text-md text-black-500">Sites Managed by {data.companyName} (RMC)</h6>
          <div>
            {data.sites.map((site:any,index:number)=>{
              return(
                <Site key={index} {...site} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyDetailsPage;
export function getStaticProps  ({params}:any) {
  const id = params.id;
  console.log(id)
  const data = moreCompanyDetailsData[id-1];
  return {
    props: {
      data,
    },
  };
};
export function getStaticPaths (){
  
const dataItems = moreCompanyDetailsData;
const paths = dataItems.map((company)=>({
params:{id:company.id.toString()}
}))
return {
  paths,
  fallback:false
}
}
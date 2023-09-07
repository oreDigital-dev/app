import { MoreCompanyDetails } from "@/@types/interfaces";
import { PlusIcon } from "@/components/icons";
import SingleCompany from "@/components/ui/SingleCompant";
import Site from "@/components/ui/Site";
import SectionHead from "@/components/ui/sectionHead";
import { COLORS, moreCompanyDetailsData, piData,data as dataPie } from "@/utils/dataAssets";
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
export interface CompanyDetailsPageProps extends MoreCompanyDetails {}

const CompanyDetailsPage = ({data }:any) => {
  return (
    <div className="mx-[20px] mt-[20px] rounded-md h-[89vh] overflow-y-scroll">
      <div className="bg-white  relative p-[20px] rounded-md shadow-sm shadow-neutal-300 ">
        <div className="md:flex space-y-4 md:space-y-0 z-100 items-start justify-between">
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
        <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-2">
        <div className="items-start justify-between">
          <SectionHead title="Analytics" desc="Some stats for your company" />
          <div className="flex mt-14 justify-between">
            <div className="">
              <p>Monthly Incident reports</p>
              <AreaChart
                width={500}
                height={300}
                data={dataPie}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </div>
            <div className="">
              <p>Sites annual Incident graph</p>
              <div className="flex mt-8">
                <PieChart width={250} height={200}>
                  <Pie
                    data={piData}
                    cx={120}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {piData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
                <div className="mt-10 ml-4">
                  {piData.map((entry, index) => (
                    <div
                      key={`key-${index}`}
                      className="flex items-center mr-4 text-sm mt-4"
                    >
                      <div
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                          width: "18px",
                          height: "18px",
                          borderRadius: "5px",
                          marginRight: "5px",
                        }}
                      ></div>
                      {entry.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
      </div>
    </div>
  );
};
export default CompanyDetailsPage;
export function getStaticProps  ({params}:any) {
  const id = params.id;
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
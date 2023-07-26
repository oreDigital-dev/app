import SectionHead from "@/components/ui/sectionHead";
import { ArrowIcon } from "@/components/icons";
import { ThreeDotsIcon } from "@/components/icons";
import { CompanyRecords } from "@/@types/interfaces";
import CompanyRecordDetails from "@/components/units/companyRecordDetails";
export default function Dashboar() {
  const companyHolds : CompanyRecords[] = [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "Mine sites under contol",
      sites: 30,
      reports:0
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "Reports incidents",
      sites:0,
      reports: 3,
      
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "Mine sites under contol",
      sites: 30,
      reports:0
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "Mine sites under contol",
      sites: 30,
      reports:0
    }
  ]
  const quickActions = [
    {
 
    text: "Add user",
    textColor:"#3949D2",
    bgColor:"#3949D2"
  },
  {
  text:"Add mine site",
  textColor:"#FFB800",
  bgColor:"#FFB800"
}, {
  text:"Add employee",
  textColor:"#0057FF",
  bgColor:"#0057FF"
},{
  text:"Generate monthly report",
  textColor:"#2CA900",
  bgColor:"#2CA900"
},{
  text:"Contact support",
  textColor:"#D29539",
  bgColor:"#D29539"
}
]
  return (
    <div className="m-[20px] rounded-md ">
    <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
      <div className="flex items-start justify-between">
        <SectionHead
          title="Summary"
          desc="All mining sites registered in workspace"
        />
        <button className="text-app flex items-center  font-semibold hover:text-black-500">
          <span>Reports</span>
          <ArrowIcon />
        </button>
      </div>
      <div className="flex gap-4 my-[20px] overflow-x-scroll scrollable">
        {
          companyHolds.map((item, index) => (
            <CompanyRecordDetails {...item} key={index}  />
           
        ))}
        
      </div>
      
    </div>
    <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-2">
      <div className="flex items-start justify-between">
        <SectionHead
          title="Quick Questions"
          desc="Some fast actions you can do"
        />
      </div>
      <div className="flex gap-4 my-[20px] overflow-x-scroll scrollable">
       
      {quickActions.map((quickAction, index) => (
        <button
          key={index}
          style={{
            color: quickAction.textColor,
            backgroundColor: quickAction.bgColor,
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            
          }}
          className="opacity-10"
        >
          {quickAction.text}
        </button>
      ))}
    </div>
      </div>
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-2">
      <div className="flex items-start justify-between">
        <SectionHead
          title="Analytics"
          desc="Some stats for your company"
        />
      </div>
      </div>
  </div>
  );
}

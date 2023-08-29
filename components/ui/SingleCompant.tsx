export interface SingleCompanyProps {
  companyName: string;
  companyOverview: string;
  companyType: string;
  companyLicense: string;
  companyCEO: string;
  formed: number;
  headQuarters: string;
}
const SingleCompany = (props: SingleCompanyProps) => {
  return (
    <div className="bg-white rounded-lg hover:border-[#FF0000]/20 border-gray-200 border-[1px] hover:cursor-pointer p-4 space-y-2 shadow-sm shadow-gray-200">
      <div className="w-full flex justify-between">
        <p>{props.companyName}</p>
        <div>
          <button>To be done 😂 </button>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="h-20 w-20 rounded-md bg-gray-200" />
        <div>
          <p>{props.companyOverview}</p>
          <p>{props.companyOverview}</p>
          <div className="flex">
            <button className="py-2 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
              <span>Visit</span>
            </button>
            <button className="py-2 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
              <span>View sites</span>
            </button>
            <button className="py-2 mt-3 flex items-center  gap-2 px-4 rounded-full bg-app/10  hover:bg-app/30  text-app fill-app">
              <span>Contact</span>
            </button>
          </div>
          <div>
            <div className="flex justify-between">
              <span>Type:</span>
              <span>{props.companyType}</span>
            </div>
            <div className="flex justify-between">
              <span>License:</span>
              <span>{props.companyLicense}</span>
            </div>
            <div className="flex justify-between">
              <span>Formed:</span>
              <span>{props.formed}</span>
            </div>
            <div className="flex justify-between">
              <span>Company CEO: </span>
              <span>{props.companyCEO}</span>
            </div>
            <div className="flex justify-between">
              <span>Head Quarters:</span>
              <span>{props.headQuarters}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCompany;

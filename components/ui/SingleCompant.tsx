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
    <div className="bg-white rounded-lg hover:border-[#FF0000]/20 border-gray-200 border-[1px] hover:cursor-pointer p-4 space-y-2 shadow-sm shadow-gray-200 mt-[20px]">
      <div className="w-full flex justify-between">
        <p className="font-semibold text-black-500 text-md">{props.companyName} (RMC)</p>
        <div>
          <button>To be done 😂 </button>
        </div>
      </div>
      <div className="w-full flex justify-between ">
        <div className="h-40 w-36 rounded-md bg-gray-200" />
        <div className="px-12 space-y-4">
          <p className="text-gray-400 text-sm">{props.companyOverview}</p>
          <p className="text-gray-400 text-sm">{props.companyOverview}</p>
          <div className="flex gap-4">
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
            <div className="flex justify-between w-5/12 ">
              <span className="basis-2/4 text-sm text-gray-400">Type:</span>
              <span className="basis-1/2 flex justify-start text-sm text-gray-400">
                {props.companyType}
              </span>
            </div>
            <div className="flex justify-between w-5/12 ">
              <span className="basis-2/4 text-sm text-gray-400">License:</span>
              <span className="basis-1/2 flex justify-start text-sm text-gray-400">
                {props.companyLicense}
              </span>
            </div>
            <div className="flex justify-between w-5/12 ">
              <span className="basis-2/4 text-sm text-gray-400">Formed:</span>
              <span className="basis-1/2 flex justify-start text-sm text-gray-400">
                {props.formed}
              </span>
            </div>
            <div className="flex justify-between w-5/12 ">
              <span className="basis-2/4 text-sm text-gray-400">
                Company CEO:{" "}
              </span>
              <span className="basis-1/2 flex justify-start text-sm text-gray-400">
                {props.companyCEO}
              </span>
            </div>
            <div className="flex justify-between w-5/12 ">
              <span className="basis-2/4 text-sm text-gray-400">
                Head Quarters:
              </span>
              <span className="basis-1/2 flex justify-start text-sm text-gray-400">
                {props.headQuarters}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCompany;

'use client'
import { PlusIcon } from "@/components/icons";
import CompanyDetails2 from "@/components/ui/CompanyDetails";
import RegisteredCompanies from "@/components/units/registeredCompanies";

import { RootState } from "@/stores/store";
import { cardDetailsData, companyDetails } from "@/utils/dataAssets";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CompaniesView = () => {
  const currentIndex = useSelector(
    (store: RootState) => store.appPages.currentIndex
  );
  const [indexNum, setIndexNum] = useState(2);
  useEffect(() => {
    console.log(currentIndex);
    setIndexNum(currentIndex);
  }, [currentIndex]);

  return (
    <div className="mx-[20px] mt-[20px] rounded-md h-[88vh]">
      <div className="bg-white  relative p-[20px] rounded-md shadow-sm shadow-neutal-300 h-full">
        <div className="md:flex space-y-4 md:space-y-0 z-100 items-start justify-between">
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
              <span>Add Company</span>
              <PlusIcon />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 px-4">
            {companyDetails.map((company, index) => {
              return <RegisteredCompanies {...company} key={index} />;
            })}
          </div>
          <div className="absolute z-20 bg-green-200">
            <CompanyDetails2
              companyName={cardDetailsData[indexNum].companyName}
              activeSites={cardDetailsData[indexNum].activeSites}
              description={cardDetailsData[indexNum].description}
              districtLocation={cardDetailsData[indexNum].districtLocation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompaniesView;

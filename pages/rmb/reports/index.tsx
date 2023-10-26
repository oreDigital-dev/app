import { useState } from "react";
import SectionHead from "@/components/ui/sectionHead";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { reportsData } from "@/utils/dataAssets";
import CompanyReport from "@/components/units/CompanyReport";
import Button from "@/components/ui/button";
import { useRouter } from "next/router";

const Reports = () => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = () => {
    setShowFilter((prev) => !prev);
  };
  const handleCreateReport = () => {
router.push("/rmb/reports/create-report")
  }
  return (
    <div className="m-[20px] rounded-md">
      <div className=" bg-white  relative p-[20px] rounded-md shadow-sm shadow-neutal-300 h-[86vh]">
        <Button onClick={handleCreateReport}>Create Report</Button>
        <div className="flex  z-100  items-start justify-between">
          <SectionHead title="Incident reports" desc="Reported incidents" />
          <div className="flex items-center gap-4">
            <span className="text-md text-gray-500">filter</span>
            <div className="text-md font-extrabold" onClick={handleShowFilter}>
              <FaChevronUp />
              <FaChevronDown />
            </div>
          </div>
          {showFilter && (
            <div className=" right-2 top-16 absolute bg-white w-40 divide-y-2 text-gray-500 rounded-xl border-gray-200 border-[0.1px] p-4 space-y-2">
              <p>Date</p>
              <p>Companies</p>
            </div>
          )}
        </div>
        <div className="space-y-6 ">
            {reportsData.map((report,index)=>{
                return(
                    <CompanyReport key={index} {...report} />
                )
            })}
        </div>
      </div>
    </div>
  );
};
export default Reports;

import { useState } from "react";
import SectionHead from "@/components/ui/sectionHead";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { reportsData } from "@/utils/dataAssets";
import CompanyReport from "@/components/units/CompanyReport";
import { AiOutlineSearch } from "react-icons/ai";

const Reports = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const handleShowFilter = () => {
    setShowFilter((prev) => !prev);
  };
  const handleIsRead = () => {
    setIsRead(true);
  };
  const handleIsUnread = () => {
    setIsRead(false);
  };
  return (
    <div className="m-[20px] rounded-md">
      <div className=" bg-white  relative p-[20px] rounded-md shadow-sm shadow-neutal-300 h-[86vh] space-y-8">
        <div className="flex  z-100  items-start justify-between">
          <SectionHead
            title="Incident report"
            desc="Nearby reported incidents"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex border rounded-xl justify-between drop-shadow-lg py-2 px-4 w-[15%]">
            <div>
              <p
                className={`${
                  isRead ? "text-black" : "text-gray-600"
                } hover:cursor-pointer`}
                onClick={handleIsRead}
              >
                Read
              </p>
              {isRead && (
                <div className="h-[2px] place-self-end bg-app w-[100%]" />
              )}
            </div>
            <div>
              <p
                className={`${
                  isRead ? "text-gray-600" : "text-black"
                } hover:cursor-pointer`}
                onClick={handleIsUnread}
              >
                Unread
              </p>
              {!isRead && (
                <div className="h-[2px] place-self-end bg-app w-[100%]" />
              )}
            </div>
          </div>
          <div className="flex gap-12 justify-between">
            <div className="bg-white flex items-center text-gray-600 gap-4 border rounded-xl justify-between drop-shadow-lg py-2 px-4">
              <AiOutlineSearch />
              <input
                type="text"
                placeholder="Search"
                className="text-gray-600 border-none outline-none bg-none"
              />
            </div>
            <div className="bg-white flex items-center text-gray-600 gap-4 border rounded-xl justify-between drop-shadow-lg py-2 px-4 w-[12rem]">
              <span className="text-md text-gray-500">filter</span>
              <div
                className="text-md font-extrabold"
                onClick={handleShowFilter}
              >
                <FaChevronDown />
              </div>
              {showFilter && (
                <div className=" right-2 top-12 absolute bg-white w-40 divide-y-2 text-gray-500 rounded-xl border-gray-200 border-[0.1px] p-4 space-y-2">
                  <p>Date</p>
                  <p>Companies</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-6 overfloe-y-scroll ">
          {reportsData.map((report, index) => {
            return <CompanyReport key={index} {...report} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Reports;

import { ArrowIcon } from "@/components/icons";
import CreateMinesite from "@/components/ui/createMinesite";
import SectionHead from "@/components/ui/sectionHead";
import RmbDetailsCard from "@/components/units/rmbCardDetails";
import { setCreateMineSiteVisibility } from "@/features/appPages";
import { useAppDispatch } from "@/stores/store";
import {
  COLORS,
  companyHolds,
  data,
  piData,
  rmbHolds,
  rmbQuickActions,
} from "@/utils/dataAssets";
import { ToastContainer } from "react-toastify";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const handleActionClick = (index: number) => {
    switch (index) {
      case 1:
        dispatch(setCreateMineSiteVisibility({ type: "open" }));
      default:
        console.log("hello");
  }
  };
  return (
    <div className="m-[20px] rounded-md"> 
      <div className=" bg-white  relative p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex  z-100  items-start justify-between">
          <SectionHead title="Summary" desc="Your records so far" />
          <button className="text-app flex items-center  font-semibold hover:text-black-500">
            <span>Reports</span>
            <ArrowIcon />
          </button>
        </div>
        <div className="flex gap-4 my-[20px] ">
          {rmbHolds.map((item, index) => (
            <RmbDetailsCard {...item} key={index} />
          ))}
        </div>
        <ToastContainer />
        <CreateMinesite />
      </div>
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300 mt-2">
        <div className="flex items-start justify-between">
          <SectionHead
            title="Quick Actions"
            desc="Some fast actions you can do"
          />
        </div>
        <div className="flex gap-4 my-[20px] overflow-x-scroll scrollable">
          {rmbQuickActions.map((quickAction, index) => (
            <button
              onClick={() => handleActionClick(index)}
              key={index}
              style={{
                color: quickAction.textColor,
                backgroundColor: quickAction.bgColor,
                padding: "10px 20px",
                margin: "5px",
                border: "none",
              }}
              className="rounded-md"
            >
              {quickAction.text}
            </button>
          ))}
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
                data={data}
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
  );
};
export default Dashboard;

"use client";
import SectionHead from "@/components/ui/sectionHead";
import { ArrowIcon } from "@/components/icons";
import CompanyRecordDetails from "@/components/units/companyRecordDetails";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useRouter } from "next/router";
import { PieChart, Pie, Cell } from "recharts";
import CreateMinesite from "@/components/ui/createMinesite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import {
  COLORS,
  companyHolds,
  data,
  piData,
  quickActions,
} from "@/utils/dataAssets";
import { useSelector } from "react-redux";
import { RootState, store, useAppDispatch } from "@/stores/store";
import {
  setCreateEmployeeVisibility,
  setCreateMineSiteVisibility,
  setLoggedInSuccessfully,
} from "@/features/appPages";

export default function Dashboard() {
  const router = useRouter();

  const handleNavigation = async (role: string) => {
    switch (role) {
      case "RMB":
        router.push("/rmb");
        break;
      case "COMPANY":
        router.push("/mfo");
        break;
      case "RESCUE TEAM":
        router.push("/rescue_team");
        break;
      default:
        return router.push("/d/dashboard");
    }
  };
  const dispatch = useAppDispatch();
  const [role, setRole] = useState("");
  const welcomeMessage = useSelector(
    (store: RootState) => store.appPages.welcomeMessage
  );

  const isLoggedInSuccessFully = useSelector(
    (store: RootState) => store.appPages.loggedInSuccessfully
  );

  const handleActionClick = (index: number) => {
    switch (index) {
      case 1:
        dispatch(setCreateMineSiteVisibility({ type: "open" }));
      case  3:
        dispatch(setCreateEmployeeVisibility({ type: "open" }));
      default:
        console.log("hello");
    }
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser") || "{}"
    );
    const roles: String[] = [];
    loggedInUser.roles.forEach((role: any) => {
      roles.push(role.roleName);
    });
    if (roles.includes("RMB_ADMIN")) {
      setRole("RMB");
    } else if (roles.includes("COMPANY_EMPLOYEE")) {
      setRole("COMPANY");
    } else if (roles.includes("RESCUE_TEAM_ADMIN")) {
      setRole("RESCUE TEAM");
    } else {
      setRole("");
    }
    if (isLoggedInSuccessFully) {
      toast(welcomeMessage.toString());
    }

    setTimeout(() => {
      dispatch(setLoggedInSuccessfully({ type: false }));
    }, 2000);
  }, []);

  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white  relative p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex  z-100  items-start justify-between">
          <SectionHead
            title="Summary"
            desc="All mining sites registered in workspace"
          />
          <button
            className="text-app flex items-center  font-semibold hover:text-black-500"
            onClick={()=>handleNavigation(role)}
          >
            <span>{role}</span>
            <ArrowIcon />
          </button>
        </div>
        <div className="flex gap-4 my-[20px] overflow-x-scroll scrollable">
          {companyHolds.map((item, index) => (
            <CompanyRecordDetails {...item} key={index} />
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
          {quickActions.map((quickAction, index) => (
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
          <div className="lg:flex md:block sm:block xs:block mt-14 justify-between">
            <div className="">
              <p>Monthly Incident reports</p>
              <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 50,
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
}

import SectionHead from "@/components/ui/sectionHead";
import { ArrowIcon } from "@/components/icons";
import { ThreeDotsIcon } from "@/components/icons";
import { CompanyRecords } from "@/@types/interfaces";
import CompanyRecordDetails from "@/components/units/companyRecordDetails";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { baseUrli, mineSiteDetails } from "@/utils/dataAssets";
import Input from "@/components/units/input";
import { useState } from "react";
import Button from "@/components/ui/button";
import Input3 from "@/components/units/input";
import Input2 from "@/components/units/input2";
import axios from "axios";
import { error } from "console";
import CreateMinesite from "@/components/ui/createMinesite";
const piData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Dashboar() {
  const companyHolds: CompanyRecords[] = [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "Mine sites under contol",
      sites: 30,
      reports: 0,
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "Reports incidents",
      sites: 0,
      reports: 3,
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "Mine sites under contol",
      sites: 30,
      reports: 0,
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "Mine sites under contol",
      sites: 30,
      reports: 0,
    },
  ];
  const quickActions = [
    {
      text: "Add user",
      textColor: "#3949D2",
      bgColor: "#3949D210",
    },
    {
      text: "Add mine site",
      textColor: "#FFB800",
      bgColor: "#FFB80010",
    },
    {
      text: "Add employee",
      textColor: "#0057FF",
      bgColor: "#0057FF10",
    },
    {
      text: "Generate monthly report",
      textColor: "#2CA900",
      bgColor: "#2CA90010",
    },
    {
      text: "Contact support",
      textColor: "#D29539",
      bgColor: "#D2953910",
    },
  ];
  return (
    <div className="m-[20px] rounded-md ">
      <div className=" bg-white  relative p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex  z-100  items-start justify-between">
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
          {companyHolds.map((item, index) => (
            <CompanyRecordDetails {...item} key={index} />
          ))}
        </div>
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
}

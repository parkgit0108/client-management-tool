"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 40,
    absent: 24,
  },
  {
    name: "Tue",
    present: 30,
    absent: 13,
  },
  {
    name: "Wed",
    present: 20,
    absent: 98,
  },
  {
    name: "Thu",
    present: 27,
    absent: 39,
  },
  {
    name: "Fri",
    present: 18,
    absent: 48,
  },
  {
    name: "Sat",
    present: 23,
    absent: 38,
  },
  {
    name: "Sun",
    present: 34,
    absent: 43,
  },
];

const VisitsChart = () => {
  //Legend order function so present legend comes first
  const renderLegend = (props: any) => {
    return (
      <ul
        style={{
          display: "flex",
          gap: "20px",
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <svg width="14" height="14">
            <circle cx="7" cy="7" r="7" fill="#5591A9" />
          </svg>
          <span style={{ color: "#666" }}>present</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <svg width="14" height="14">
            <circle cx="7" cy="7" r="7" fill="#CAEEC2" />
          </svg>
          <span style={{ color: "#666" }}>absent</span>
        </li>
      </ul>
    );
  };

  return (
    <div className="bg-white rounded-xl h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Visits</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend content={renderLegend} align="left" verticalAlign="top" />

          <Bar dataKey="present" fill="#5591A9" legendType="circle" />
          <Bar dataKey="absent" fill="#CAEEC2" legendType="circle" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default VisitsChart;

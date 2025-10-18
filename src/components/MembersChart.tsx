"use client";
import Image from "next/image";
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    new: 400,
    cancelled: 240,
  },
  {
    name: "Feb",
    new: 300,
    cancelled: 139,
  },
  {
    name: "Mar",
    new: 200,
    cancelled: 980,
  },
  {
    name: "Apr",
    new: 278,
    cancelled: 390,
  },
  {
    name: "May",
    new: 189,
    cancelled: 480,
  },
  {
    name: "Jun",
    new: 239,
    cancelled: 380,
  },
  {
    name: "Jul",
    new: 349,
    cancelled: 430,
  },
  {
    name: "Aug",
    new: 349,
    cancelled: 430,
  },
  {
    name: "Sep",
    new: 349,
    cancelled: 430,
  },
  {
    name: "Oct",
    new: 349,
    cancelled: 430,
  },
  {
    name: "Nov",
    new: 349,
    cancelled: 430,
  },
  {
    name: "Dec",
    new: 349,
    cancelled: 430,
  },
];

const FinanceChart = () => {
  const renderLegend = (props: any) => {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
            <span style={{ color: "#666" }}>New</span>
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <svg width="14" height="14">
              <circle cx="7" cy="7" r="7" fill="#CAEEC2" />
            </svg>
            <span style={{ color: "#666" }}>Cancelled</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Members Stats</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend align="center" verticalAlign="top" content={renderLegend} />
          <Line
            type="monotone"
            dataKey="new"
            stroke="#5591A9"
            strokeWidth={5}

          />
          <Line type="monotone" dataKey="cancelled" stroke="#CAEEC2" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;

"use client";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import Image from "next/image";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Female",
    count: 50,
    fill: "#FADFDB",
  },
  {
    name: "Male",
    count: 50,
    fill: "#5591A9",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semi-bold">Clients</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-myBlue rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm text-gray-500">Male (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-myPink rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm text-gray-500">Female (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;

import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import React from "react";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/MembersChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="member" />
          <UserCard type="trainer" />
          <UserCard type="client" />
          <UserCard type="admin" />
        </div>

        {/* Left Side */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom Chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>

        {/* Right Side */}
        <div className=""></div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default AdminPage;

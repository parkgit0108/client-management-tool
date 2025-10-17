import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="client" />
          <UserCard type="trainer" />
          <UserCard type="caregiver" />
          <UserCard type="admin" />
        </div>

        {/* Left Side */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]"> </div>
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

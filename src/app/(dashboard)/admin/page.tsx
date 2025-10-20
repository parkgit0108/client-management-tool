import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import React from "react";
import VisitsChart from "@/components/VisitsChart";
import FinanceChart from "@/components/MembersChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

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
            <VisitsChart />
          </div>
        </div>

        {/* Bottom Chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;

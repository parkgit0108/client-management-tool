import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="client" />
          <UserCard type="trainer" />
          <UserCard type="caregiver" />
          <UserCard type="admin" />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default AdminPage;

import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-sm text-gray-500">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-mySkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-medium">Member of the month</h1>
            <span className="text-sm text-gray-500">2025-12-01</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>

        <div className="bg-mySkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-medium">Member of the month</h1>
            <span className="text-sm text-gray-500">2025-12-01</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>

        <div className="bg-mySkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-medium">Member of the month</h1>
            <span className="text-sm text-gray-500">2025-12-01</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;

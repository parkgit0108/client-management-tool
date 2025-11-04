import React from "react";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, announcementsData } from "@/lib/data";

type Announcement = {
  id: number;
  title: string;
  location: string;
  date: string; 
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Location",
    accessor: "location",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden md:table-cell",
  },
];

const AnnouncementsList = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-mySkyLight"
    >
      <td className="flex items-center gap-2 p-2">{item.title}</td>
      <td className="hidden md:table-cell">{item.location}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <div className="flex gap-2">
        <Link href={`/list/trainers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-myBlueLight">
            <Image src="/edit.png" alt="" width={16} height={16} />
          </button>
        </Link>
        {role === "admin" && (
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-myGray">
            <Image src="/delete.png" alt="" width={16} height={16} />
          </button>
        )}
      </div>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-myBlueLight">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-myBlueLight">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-myBlueLight">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default AnnouncementsList;

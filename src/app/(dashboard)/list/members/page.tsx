import React from "react";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { membersData, role } from "@/lib/data";
import { FormModal } from "@/components/FormModal";

type Member = {
  id: number;
  memberId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Member ID",
    accessor: "memberId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden md:table-cell",
  },
];

const MembersList = () => {
  const renderRow = (item: Member) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-mySkyLight"
    >
      <td className="flex items-center gap-2 p-2">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.memberId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <div className="flex gap-2">
        <Link href={`/list/trainers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-myBlueLight">
            <Image src="/view.png" alt="" width={16} height={16} />
          </button>
        </Link>
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-myGray">
          //   <Image src="/delete.png" alt="" width={16} height={16} />
          // </button>
          <FormModal table="members" type="delete" id={item.id} />
        )}
      </div>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Members</h1>
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
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-myBlueLight">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormModal table="members" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={membersData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default MembersList;

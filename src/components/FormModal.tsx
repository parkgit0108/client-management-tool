"use client";

import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const TrainerForm = dynamic(
  () => import("./forms/TrainerForm").then((mod) => mod.TrainerForm),
  { loading: () => <div>Loading...</div> }
);
const MemberForm = dynamic(
  () => import("./forms/MemberForm").then((mod) => mod.MemberForm),
  { loading: () => <div>Loading...</div> }
);
const ClientForm = dynamic(
  () => import("./forms/ClientForm").then((mod) => mod.ClientForm),
  { loading: () => <div>Loading...</div> }
);
const ClassesForm = dynamic(
  () => import("./forms/ClassForm").then((mod) => mod.ClassForm),
  { loading: () => <div>Loading...</div> }
);
const AttendanceForm = dynamic(
  () => import("./forms/AttendanceForm").then((mod) => mod.AttendanceForm),
  { loading: () => <div>Loading...</div> }
);
const EventsForm = dynamic(
  () => import("./forms/EventsForm").then((mod) => mod.EventsForm),
  { loading: () => <div>Loading...</div> }
);
const AnnouncementForm = dynamic(
  () => import("./forms/AnnouncementForm").then((mod) => mod.AnnouncementForm),
  { loading: () => <div>Loading...</div> }
);

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  trainers: (type, data) => <TrainerForm type={type} data={data} />,
  members: (type, data) => <MemberForm type={type} data={data} />,
  clients: (type, data) => <ClientForm type={type} data={data} />,
  classes: (type, data) => <ClassesForm type={type} data={data} />,
  attendance: (type, data) => <AttendanceForm type={type} data={data} />,
  events: (type, data) => <EventsForm type={type} data={data} />,
  announcements: (type, data) => <AnnouncementForm type={type} data={data} />,
};

export const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "trainers"
    | "members"
    | "clients"
    | "classes"
    | "workouts"
    | "attendance"
    | "events"
    | "messages"
    | "announcements";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-myBlueLight"
      : type === "update"
      ? "bg-myBlue"
      : "bg-myGray";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="flex p-4 flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete {table}?
        </span>
        <button className="bg-red-700 text-white px-4 py-2 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

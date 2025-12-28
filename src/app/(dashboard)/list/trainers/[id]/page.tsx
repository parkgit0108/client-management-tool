import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import { FormModal } from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const SingleTrainerPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* USER INFO CARD */}
          <div className="bg-white py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2014/01/13flex_ronnie-coleman_most-muscular_inset.jpg?quality=40&strip=all"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-4 justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold">Ronnie Coleman</h1>
                <FormModal
                  table="trainers"
                  type="update"
                  data={{
                    id: 1,
                    username: "Ronnie Coleman",
                    email: "ronnie@coleman.com",
                    password: "1234567890",
                    firstName: "Ronnie",
                    lastName: "Coleman",
                    phone: "+64 21 123 4567",
                    address: "123 Main St, Anytown, NZ",
                    birthday: "2000-01-02",
                    sex: "male",
                    image:
                      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2014/01/13flex_ronnie-coleman_most-muscular_inset.jpg?quality=40&strip=all",
                  }}
                />
              </div>
              <p className="text-sm text-gray-500">
                I am number 1 bodybuilder in the world.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={16} height={16} />
                  <span>ronnie@coleman.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={16} height={16} />
                  <span>+64 21 123 4567</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={16} height={16} />
                  <span>12/24/2025</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="w-full bg-white p-4 gap-4">
              <Image
                src="/mail.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-sm font-semibold">23</h1>
                <p className="text-sm text-gray-400">Clients</p>
              </div>
            </div>
            {/* CARD */}
            <div className="w-full bg-white p-4 gap-4">
              <Image
                src="/phone.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-sm font-semibold">3</h1>
                <p className="text-sm text-gray-400">Classes</p>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-mySkyLight" href="/">
              Trainer's Clients
            </Link>
            <Link className="p-3 rounded-md bg-myBlueLight" href="/">
              Trainer's Classes
            </Link>
            <Link className="p-3 rounded-md bg-mySkyLight" href="/">
              Trainer's Workouts
            </Link>
          </div>
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTrainerPage;

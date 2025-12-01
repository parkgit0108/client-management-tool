import Image from "next/image";
import React from "react";

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
              <h1 className="text-lg font-semibold">Ronnie Coleman</h1>
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
                  <span>12/12/2025</span>
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
        <div className="">Schedule</div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3">right</div>
    </div>
  );
};

export default SingleTrainerPage;

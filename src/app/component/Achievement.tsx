"use client";

import { useInView } from "framer-motion";
import { div } from "framer-motion/client";
import { useRef } from "react";
import CountUp from "react-countup";

const Achievement = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="w-full max-w-7xl mx-auto px-2 mt-10">
      <h1 className=" text-2xl  md:text-3xl font-bold text-center mt-16">
        Our Achievement
      </h1>
      <p className="text-center text-neutral-600 mt-3 font-semibold">
        Clients keep their belief on us
      </p>
      {/*  grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center mt-16">
        {/*  1st div */}

        {inView && (
          <div className="w-[360px] text-center rounded-lg border border-green-600 p-5 hover:bg-green-100/30 hover:-translate-y-1 hover:shadow-lg transition delay-100 ease-in-out duration-300 ">
            <div className="flex items-center justify-center  gap-2">
              <CountUp
                className="mt-1  text-3xl md:text-5xl font-bold text-green-700"
                end={150}
                duration={5}
              />
              <p className=" text-3xl md:text-5xl font-bold text-green-700">
                +
              </p>
            </div>
            <p className="text-xl md:text-[32px] font-semibold text-neutral-700 mt-6">
              Satisfied Client
            </p>
          </div>
        )}

        {/* 2nd */}

        {inView && (
          <div className="w-[360px] text-center  rounded-lg border border-green-600 p-5 hover:bg-green-100/30 hover:-translate-y-1 hover:shadow-lg transition delay-100 ease-in-out duration-300 ">
            <div className="flex items-center justify-center  gap-2">
              <CountUp
                className="mt-1  text-3xl md:text-5xl font-bold text-green-700"
                end={225}
                duration={5}
              />
              <p className=" text-3xl md:text-5xl font-bold text-green-700">
                +
              </p>
            </div>
            <p className="text-xl md:text-[32px] font-semibold text-neutral-700 mt-6">
              Completed Project
            </p>
          </div>
        )}

        {/* 3rd */}

        {inView && (
          <div className="w-[360px] text-center rounded-lg border border-green-600 p-5 hover:bg-green-100/30 hover:-translate-y-1 hover:shadow-lg transition delay-100 ease-in-out duration-300 ">
            <div className="flex items-center justify-center  gap-2">
              <CountUp
                className="mt-1  text-3xl md:text-5xl font-bold text-green-700"
                end={10}
                duration={5}
              />
              <p className=" text-3xl md:text-5xl font-bold text-green-700">
                +
              </p>
            </div>
            <p className="text-xl md:text-[32px] font-semibold text-neutral-700 mt-6">
              Team Member
            </p>
          </div>
        )}

        {/*  */}
      </div>
    </div>
  );
};

export default Achievement;

import React from "react";
import { AiOutlineSolution } from "react-icons/ai";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdAutorenew, MdGroups } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20  mb-10">
      <h1 className=" text-2xl  md:text-3xl font-bold text-center mt-16">
        Why Choose Us
      </h1>
      <p className="text-center text-neutral-600 mt-3 font-semibold">
        We provide quality software with lifetime support
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 mt-20 ">
        {/*  div 1 */}
        <div className="relative  border border-gray-300 rounded-br-3xl w-60 h-32">
          <div className="bg-green-200 text-green-700 text-3xl py-1 px-3 w-14 text-center flex justify-center absolute -top-5 left-3 rounded">
            <MdGroups />
          </div>
          {/*  text */}

          <div className="mt-8 px-2">
            <h3 className="text-neutral-600 font-bold text-xl">Expert Team</h3>

            <p className="text-sm text-neutral-500 mt-2">
              We have expert, dedicated and enthusiatc team.
            </p>
          </div>
        </div>

        {/*  div 2 */}
        <div className="relative  border border-gray-300 rounded-br-3xl w-60 h-32">
          <div className="bg-green-200 text-green-700 text-3xl py-1 px-3 w-14 text-center flex justify-center absolute -top-5 left-3 rounded">
            <AiOutlineSolution />
          </div>
          {/*  text */}

          <div className="mt-8 px-2">
            <h3 className="text-neutral-600 font-bold text-xl">
              Tailored Solutions
            </h3>

            <p className="text-sm text-neutral-500 mt-2">
              Customized software solutions that align with your business needs.
            </p>
          </div>
        </div>

        {/*  div 3 */}
        <div className="relative  border border-gray-300 rounded-br-3xl w-60 h-32">
          <div className="bg-green-200 text-green-700 text-3xl py-1 px-3 w-14 text-center flex justify-center absolute -top-5 left-3 rounded">
            <LiaHandsHelpingSolid />
          </div>
          {/*  text */}

          <div className="mt-8 px-2">
            <h3 className="text-neutral-600 font-bold text-xl">
              End-to-End Services
            </h3>

            <p className="text-sm text-neutral-500 mt-2">
              Consultation to deployment and ongoing support.
            </p>
          </div>
        </div>

        {/*  div 4 */}
        <div className="relative   border border-gray-300 rounded-br-3xl w-60 h-32">
          <div className="bg-green-200 text-green-700 text-3xl py-1 px-3 w-14 text-center flex justify-center absolute -top-5 left-3 rounded">
            <MdAutorenew />
          </div>
          {/*  text */}

          <div className="mt-8 px-2">
            <h3 className="text-neutral-600 font-bold text-xl">
              Modern Technologies
            </h3>

            <p className="text-sm text-neutral-500 mt-2">
              Update technologies to make your solution better.
            </p>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default WhyChooseUs;

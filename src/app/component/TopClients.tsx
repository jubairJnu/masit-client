import { Clients } from "@/constance/clientData";

import Image from "next/image";

import user from "@/asset/user.png";

const TopClients = () => {
  return (
    <div className="w-full  text-neutral-700 mt-20 ">
      <div className="w-full max-w-7xl mx-auto px-3 ">
        <h1 className=" text-2xl  md:text-3xl font-bold text-center">
          {" "}
          Top Client
        </h1>
        <p className="text-center text-neutral-600 mt-3 font-semibold">
          Clients keep their belief on us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center mt-16">
          {Clients?.map((client) => (
            <div
              className="h-64 w-60 border border-neutral-200 hover:bg-gradient-to-tr from-[#3cb665] to-[#71ad02] hover:text-slate-200 rounded-lg  px-1 "
              key={client.id}
            >
              <Image
                src={user}
                width={80}
                height={80}
                alt="client-image"
                className="mx-auto mt-5"
              />

              <p className="text-2xl font-bold leading-loose text-center mt-3">
                {client.name}
              </p>

              <p className="text-center font-semibold text-[#9c9e9e] ">
                {client.designation}
              </p>

              <p className="text-xl font-semibold text-center">
                {client.Company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopClients;

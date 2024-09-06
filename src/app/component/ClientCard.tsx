import React from "react";
import { FaHouseChimneyMedical, FaLocationDot } from "react-icons/fa6";

type TClient = {
  Company: string;
  Name: string;
  Address: string;
};

type TClientProps = {
  client: TClient;
  index: number;
};

const ClientCard = ({ client, index }: TClientProps) => {
  return (
    <div
      className="h-full w-[350px] border border-neutral-200 hover:bg-gradient-to-br from-[#3cb665] to-[#71ad02] hover:text-slate-200 rounded-lg  px-1   pb-2 group "
      key={index + 1}
    >
      <div>
        <p className="text-xl text-slate-700 group-hover:text-slate-200  font-bold leading-loose text-center mt-3">
          {client.Name}
        </p>
        <div className="flex items-center justify-center  gap-2">
          <span className="text-orange-600 justify-start">
            <FaHouseChimneyMedical />
          </span>
          <p className="text-center font-semibold ">{client.Company}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="text-blue-700 text-2xl">
          <FaLocationDot />
        </span>
        <p className="text-md font-semibold text-center ">{client.Address}</p>
      </div>
    </div>
  );
};

export default ClientCard;

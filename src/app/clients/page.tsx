import { AllClients } from "@/constance/ActiveClients";
import ClientCard from "../component/ClientCard";

const ClientPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-5 mt-10 min-h-screen rounded-xl bg-gradient-to-tr from-[#f3f3f3] to-[#f9fbfc]">
      <h1 className="mt-5 text-2xl font-bold text-blue-700">
        Diagnostic & Hospital Management System
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center gap-y-9 mt-16">
        {AllClients?.diagostics?.map((diag, index) => (
          <ClientCard client={diag} index={index} key={index} />
        ))}
      </div>

      <div className="mt-20 py-5 bg-slate-100">
        <h1 className=" text-2xl font-bold text-violet-800">
          Restaurant Management System
        </h1>

        <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center gap-y-9 mt-16 ">
          {AllClients?.restaurant?.map((rest, index) => (
            <ClientCard client={rest} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientPage;

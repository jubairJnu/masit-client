import webimg from "@/asset/website.png";
import domailnimg from "@/asset/domain.png";
import networkimg from "@/asset/network.png";
import softimg from "@/asset/software-quality.png";
import graphicimg from "@/asset/graphics.png";
import dataimg from "@/asset/data-entry.png";
import dbimg from "@/asset/data.png";
import trainingimg from "@/asset/training.png";
import comimg from "@/asset/accessories.png";
import supportimg from "@/asset/support.png";
import hostingimg from "@/asset/hosting.png";
import deskimg from "@/asset/desktop-app.png";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 mt-10 py-10 rounded-lg bg-gradient-to-tr from-[#ddf7e5] to-[#fcfbfb] min-h-screen h-full">
      <h1 className="text-3xl text-center font-bold text-green-500">
        Our <span className="text-slate-800">Services</span>
      </h1>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center gap-y-10">
        {/* div1 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={webimg} alt="website" />
          <p className="mt-5 text-2xl text-center text-orange-600 font-semibold">
            WebSite development
          </p>
        </div>

        {/* 2 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={domailnimg} alt="domain" />
          <p className="mt-5 text-2xl text-center text-sky-600 font-semibold">
            Domain Registration
          </p>
        </div>
        {/* 3 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={softimg} alt="soft" />
          <p className="mt-5 text-2xl text-center text-fuchsia-500 font-semibold">
            Software Quality Assurance
          </p>
        </div>

        {/* 4 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={graphicimg} alt="graphic" />
          <p className="mt-5 text-2xl text-center text-pink-700 font-semibold">
            Graphics Design
          </p>
        </div>

        {/* 5 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={100} height={60} src={networkimg} alt="network" />
          <p className="mt-5 text-2xl text-center text-slate-600 font-semibold">
            Network Design and computer management
          </p>
        </div>
        {/* 6 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={dataimg} alt="data" />
          <p className="mt-5 text-2xl text-center text-emerald-500 font-semibold">
            Data entry & processing
          </p>
        </div>

        {/* 7 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={dbimg} alt="db" />
          <p className="mt-5 text-2xl text-center text-sky-600 font-semibold">
            Data warehouse & data mining application
          </p>
        </div>

        {/* 8 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={trainingimg} alt="trainging" />
          <p className="mt-5 text-2xl text-center text-indigo-600  font-semibold">
            IT Training
          </p>
        </div>

        {/* 9 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={comimg} alt="access" />
          <p className="mt-5 text-2xl text-center text-stone-600 font-semibold">
            Computer Accessories Sales & Supply
          </p>
        </div>

        {/* 10 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={hostingimg} alt="host" />
          <p className="mt-5 text-2xl text-center text-sky-600 font-semibold">
            Hosting Registration
          </p>
        </div>

        {/* 11 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2 trasnition delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={supportimg} alt="support" />
          <p className="mt-5 text-2xl text-center text-violet-800 font-semibold">
            Support and manintenance
          </p>
        </div>

        {/* 12 */}

        <div className="w-[342px] h-[224px] hover:-translate-y-2  delay-150 ease-in-out rounded-lg bg-white flex flex-col justify-center items-center p-5 transition-all duration-400 hover:bg-[#fdf5f3]">
          <Image width={60} height={60} src={deskimg} alt="desk" />
          <p className="mt-5 text-2xl text-center text-[#0E6587] font-semibold">
            Desktop and client-server application development
          </p>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default ServicesPage;

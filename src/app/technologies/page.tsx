import Image from "next/image";

import netimg from "@/asset/dot-net.png";
import phpimg from "@/asset/php.png";
import javascriptimg from "@/asset/javascript-2.svg";
import javaimg from "@/asset/java-icon.png";
import tsimg from "@/asset/typescript.svg";
import expressimg from "@/asset/express-109.svg";
import nodeimg from "@/asset/nodejs-icon.svg";
import nextimg from "@/asset/nextjs-icon.svg";

const TechnologyPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 mt-8 ">
      <h1 className="text-2xl text-center font-bold text-green-500">
        Technologies ,<span className="text-slate-700">We use</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-16 justify-items-center mt-16">
        {/* 1 */}
        <div className="w-40 rounded-md hover:-translate-y-2 shadow-lg transition delay-150 duration-200 group">
          <Image src={netimg} alt="net" />

          <p className="py-2 rounded-md px-3 w-full text-center border group-hover:bg-green-700 group-hover:text-white transition-colors delay-150 duration-300 text-neutral-600 font-bold text-lg ">
            Dot Not
          </p>
        </div>
        {/* 2 */}
        <div className="w-40 rounded-md hover:-translate-y-2 shadow-lg transition delay-150 duration-200 group">
          <Image src={phpimg} alt="phn" />

          <p className="py-2 rounded-md px-3 w-full text-center border group-hover:bg-green-700 group-hover:text-white transition-colors delay-150 duration-300 text-neutral-600 font-bold text-lg ">
            PHP
          </p>
        </div>
        {/* 2 */}
        <div className="w-40 rounded-md hover:-translate-y-2 shadow-lg transition delay-150 duration-200 group">
          <Image src={javascriptimg} alt="js" />

          <p className="py-2 rounded-md px-3 w-full text-center border group-hover:bg-green-700 group-hover:text-white transition-colors delay-150 duration-300 text-neutral-600 font-bold text-lg ">
            Javascript
          </p>
        </div>
        {/* 4 */}
        <div className="w-40 rounded-md hover:-translate-y-2 shadow-lg transition delay-150 duration-200 group">
          <Image src={tsimg} alt="ts" />

          <p className="py-2 rounded-md px-3 w-full text-center border group-hover:bg-green-700 group-hover:text-white transition-colors delay-150 duration-300 text-neutral-600 font-bold text-lg ">
            Typescript
          </p>
        </div>
        {/* 5 */}
        <div className="w-40 rounded-md hover:-translate-y-2 shadow-lg transition delay-150 duration-200 group flex flex-col justify-between">
          <Image src={javaimg} alt="java" />

          <p className="py-2 rounded-md px-3 w-full text-center border group-hover:bg-green-700 group-hover:text-white transition-colors delay-150 duration-300 text-neutral-600 font-bold text-lg ">
            Java
          </p>
        </div>
        {/* 6 */}

        <div className="w-40 rounded-md hover:-translate-y-2 shadow-lg transition delay-150 duration-200 group">
          <Image src={nodeimg} alt="node-js" />

          <p className="py-2 rounded-md px-3 w-full text-center border group-hover:bg-green-700 group-hover:text-white transition-colors delay-150 duration-300 text-neutral-600 font-bold text-lg ">
            Node Js
          </p>
        </div>

        {/* 7 */}

        <div className="w-40 rounded-md hover:-translate-y-2 shadow-lg transition delay-150 duration-200 group flex flex-col justify-between">
          <Image src={expressimg} alt="express" />

          <p className="py-2 rounded-md px-3 w-full text-center border group-hover:bg-green-700 group-hover:text-white transition-colors delay-150 duration-300 text-neutral-600 font-bold text-lg ">
            Express Js
          </p>
        </div>

        {/* 8 */}

        <div className="w-40 rounded-md hover:-translate-y-2 shadow-lg transition delay-150 duration-200 group flex flex-col justify-between">
          <Image src={nextimg} alt="next-js" />

          <p className="py-2 rounded-md px-3 w-full text-center border group-hover:bg-green-700 group-hover:text-white transition-colors delay-150 duration-300 text-neutral-600 font-bold text-lg ">
            Next Js
          </p>
        </div>

        {/* 88888 */}
      </div>
    </div>
  );
};

export default TechnologyPage;

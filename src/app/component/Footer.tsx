import Image from "next/image";
import logo from "@/asset/masit logo-01.png";
import { IoLocationOutline } from "react-icons/io5";
import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <div className="mt-28 ">
      <div className="w-full bg-neutral-100 bg-opacity-35 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-10">
        <div className="w-60">
          {/* logo */}
          <div className="flex items-center gap-3  ">
            <Image width={60} height={60} src={logo} alt="logo" />

            <p className="text-xl text-center font-bold ">MAS IT Solutions</p>
          </div>

          <div className="flex items-center gap-10  ">
            <span className="text-4xl font-bold text-red-600">
              <IoLocationOutline />
            </span>

            <p>
              House - 1/2, Block - JHA, Mirpur - 6, <br /> Dhaka - 1216.
            </p>
          </div>
        </div>

        {/* important link */}

        <div>
          <p className="text-lg font-bold mb-2"> Imporatnt Link </p>
          <ul>
            <li>About </li>
            <li> Career </li>
            <li> Technologies</li>
            <li> Testimonial </li>
            <li></li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-bold mb-2"> Contact Info </p>
          <p>
            Phone : +88-02-8056691 <br /> Mobile : +88-01915682291, 01714589268
          </p>
        </div>
      </div>

      <div className="text-center py-2 border-t">
        <p>@All copyright reserved to MAS IT Solutions</p>
      </div>
    </div>
  );
};

export default Footer;

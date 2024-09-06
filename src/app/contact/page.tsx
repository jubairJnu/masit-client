import Image from "next/image";
import contactImg from "@/asset/contact-us-01.svg";

const ContactPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 min-h-screen mt-10 grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image src={contactImg} alt="contact us" />
      </div>
      <div className="mt-20 ml-auto">
        <h1 className="mt-5 text-2xl font-bold text-blue-700">
          Feel Free To Contact Us.
        </h1>
        <h1 className="mt-10 text-2xl font-bold text-green-700">
          MAS IT <span className="text-red-600">Solutions</span>
        </h1>
        <p className="text-slate-600 text-lg font-semibold">
          House - 1/2, Block - JHA, <br /> Mirpur - 6, Dhaka - 1216.
        </p>
        <p className="text-neutral-600 text-lg font-semibold">
          Phone : +88-02-8056691 <br />
          Mobile : +88-01915682291, 01714589268
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

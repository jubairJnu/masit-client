"use client";
import { motion } from "framer-motion";

import image from "../../asset/bg-cover-01.png";
import Image from "next/image";

const Banner = () => {
  const sentence = " Tech & Software >/";

  const letters = sentence.split("");

  const mainAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      variants={mainAnimation}
      animate="visible"
      className="flex items-center space-x-1 bg-cover bg-center p-5 text-white bg-gradient-to-l from-[#0c0c0c] to-[#03420d] h-60"
    >
      <p className="text-slate-300  w-full max-w-[760px] text-center font-bold mx-auto text-4xl md:leading-loose items-center">
        Ensure quality with new features of your
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.1,
              repeat: Infinity, // Repeat the animation infinitely
              repeatDelay: sentence.length * 0.1 + 2, // Adds a delay before the loop restarts
              repeatType: "mirror",
              damping: 2,
            }}
            className="text-[#06f112]"
          >
            {letter}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default Banner;

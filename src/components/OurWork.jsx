import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react"

const OurWork = () => {
  const workData = [
    {
      title: "App Móvil para usuarios",
      description: "Disponible en iOS y Android",
      image: assets.work_mobile_app,
    },
    {
      title: "App Móvil para psicologos",
      description: "Disponible en iOS y Android",
      image: assets.work_mobile_app,
    },
  ];

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren: 0.2}}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Nuestra App"
        desc="Aurora es una aplicación que te acompañara cuando necesites hablar con alguien."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
        {workData.map((work, index) => (
          <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay:index*0.3}}
          viewport={{once:true}}
            key={index}
            className="hover:scale-105 duration-500 transition-all cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;

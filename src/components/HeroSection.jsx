import React, { Suspense } from "react";
import profilePic from "../assets/dp_no_bg.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { easeInOut, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const HeroSection = () => {
  return (
    <div
      className="flex items-center justify-around mt-10 lg:flex lg:flex-row lg:items-center lg:justify-around xs:py-24 xs:flex-col-reverse xs:mt-16 xs:px-12 sm:px-20 md:px-24 hero_section"
      id="heroSection"
    >
      <motion.div
        transition={{ duration: 1, delay: 1, ease: easeInOut }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col xs:w-full xs:flex-col-reverse sm:justify-center lg:w-1/2"
      >
        <div className="flex justify-between xs:w-full sm:w-2/3 md:w-[40%] lg:w-[30%] mb-6 developer_socials">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/vtl-28"
            target="_blank"
            rel="noreferrer"
            className="rounded-full hover:bg-[#fe4a57] border-2 border-[#fe4a57] xs:w-14 xs:h-14   p-3 flex items-center justify-center"
          >
            <FaGithub className="text-white xs:w-5 xs:h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://twitter.com/vt_lehola"
            target="_blank"
            rel="noreferrer"
            className="rounded-full hover:bg-[#fe4a57] border-2 border-[#fe4a57] xs:w-14 xs:h-14  p-3 flex items-center justify-center"
          >
            <FaTwitter className="text-white xs:w-5 xs:h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/vuyisile-lehola-99a597122/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full hover:bg-[#fe4a57] border-2 border-[#fe4a57] xs:w-14 xs:h-14  p-3 flex items-center justify-center"
          >
            <FaLinkedin className="text-white xs:w-5 xs:h-5" />
          </motion.a>
        </div>
      <div className="xs:mt-6">
        <h3 className="mb-6 text-2xl text-white md:text-3xl lg:text-2xl font-link">
          Hi, my name is{" "}
        </h3>
        <h3 className="mb-6 text-5xl text-white xs:text-2xl sm:text-3xl font-link developer_name">
          Vuyisile Tlotliso Lehola
        </h3>
        <p className="text-[#dfdfdf] xs:text-lg xs:mb-6 sm:mb-8 md:text-2xl lg:text-3xl developer_role">
          Full-stack developer looking for an entry-level role in a development
          team to further grow as a developer
        </p>
      </div>
        <Link to="about" smooth={true} offset={10} duration={1000} spy={true}>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="font-link text-white font-semibold  border-2 border-[#fe4a57] rounded-full mt-6 hover:bg-[#fe4a57] xs:hidden xs:w-[45%] sm:w-[40%] xs:py-3 sm:py-3 lg:w-[30%] md:py-3"
          >
            Find out more
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        transition={{ duration: 1, delay: 1.5, ease: easeInOut }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative xs:flex"
      >
        <img alt="profile pic" src={profilePic} className="h-[350px]" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
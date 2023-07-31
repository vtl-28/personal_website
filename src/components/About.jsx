import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log(inView);
      controls.start({
        opacity: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className="flex flex-col py-24 font-link xs:px-12 md:px-24 about_section"
      id="about"
    >
      <div className="flex justify-center mb-8">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
      </div>
      <div className="flex flex-col w-full gap-4 h-2/4">
        <p className="text-[#dfdfdf] xs:text-base md:text-xl">
          My enthusiasm for software development blossomed during my enriching
          internship at The Digital Academy, a prominent software development
          company. This invaluable experience allowed me to refine my skills and
          gain practical knowledge while working on real-world projects.
          Throughout the internship, I had the privilege of working with diverse
          technologies, including JavaScript, HTML, CSS, as well as back-end
          technologies such as Node.js, Express, and MongoDB.
        </p>
        <p className="text-[#dfdfdf] xs:text-base md:text-xl">
          The collaborative environment at Digital Academy empowered me to work
          alongside experienced developers, imparting essential lessons in
          teamwork and effective communication within the realm of software
          development. This exposure also acquainted me with Agile methodologies
          and Git version control, which I confidently put into practice while
          contributing to the development of a mobile application.
        </p>
        <p className="text-[#dfdfdf] xs:text-base md:text-xl">
          Now, as a junior developer with a passion for continuous learning, I
          am eagerly seeking entry-level tech roles to further nurture my
          expertise. With my unwavering dedication to software development,
          coupled with my practical experience and commitment to growth, I am
          confident in my ability to be an asset in a junior developer position.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

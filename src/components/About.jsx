import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log(inView)
      controls.start({
        opacity: 1,
        transition: {
          duration: 2,  
          ease: "easeInOut"
        }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0}} animate={controls} className="flex flex-col py-24 xs:px-12 md:px-24 about_section" id="about">
      <div className="flex justify-center mb-8">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
      </div>
      <div className="flex flex-col w-full gap-4 h-2/4">
          <p className="text-[#dfdfdf] xs:text-base md:text-lg">
            My love for software development grew when I had the opportunity to
            do an internship with a software development company called Digital
            Academy. This internship allowed me to hone my skills and gain
            hands-on experience working on real-world projects. I was able to
            work with a variety of technologies, including JavaScript, HTML,
            CSS, and back-end technologies such as Node.js, Express, and
            MongoDB.
            </p>
            <p className="text-[#dfdfdf] xs:text-base md:text-lg">
            During my internship, I was also able to work with a team
            of experienced developers, which taught me the importance of
            collaboration and effective communication in software development. I
            learned about Agile methodologies and how to use Git for version
            control, and I was able to put these skills into practice by working
            on a project that involved creating a mobile application.
            </p> 
            <p className="text-[#dfdfdf] xs:text-base md:text-lg">
            As a developer with little experience, I am looking
            for entry-level tech roles to further grow as a developer. I am
            confident that my passion for software development, my commitment to
            continuous learning, and my hands-on experience make me a strong
            candidate for a junior developer role.
            </p>
        </div>
    </motion.div>
  );
};

export default About;
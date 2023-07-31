import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tilt } from 'react-tilt'
import absaScreenshot from '../assets/APV_screenshot.PNG'
import talkhostScreenshot from '../assets/TH_screenshot.PNG'
import { FaFolder, FaLink, FaGithub } from 'react-icons/fa'
import { Tooltip } from '@chakra-ui/react'

const Projects = () => {
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
    <div id='projects' className='flex flex-col py-24 xs:px-12 lg:px-24 projects_section'>
      <motion.div ref={ref} initial={{ opacity: 0}} animate={controls} className='flex items-center justify-center mb-10'>
        <h1 className='font-bold text-white xs:text-2xl md:text-4xl font-link'>Some things I've built</h1>
      </motion.div>
      <div className='flex justify-between gap-8 xs:flex-col md:flex-row md:justify-between md:gap-4 lg:gap-8'>
        <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
        <Card bg="#24263b" px="4" className='rounded-2xl'>
          <CardHeader pb={['0px']}>
            <img alt='project snapshot' src={absaScreenshot} className='object-cover rounded-2xl xs:h-[812%] md:h-[100%] xs:w-full'/>
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                className='flex items-center justify-center xs:w-[35%]  sm:w-[25%] md:w-[30%] lg:w-[1/4] h-10 xs:mr-4 sm:mr-0 md:mr-3 lg:mr-2 xl:mr-0 rounded-full cursor-pointer black-gradient'
              >
                <Tooltip label='Project details'>
                  <a href='https://drive.google.com/file/d/10OAc4vjCjvk2nNbYeugM2FL93krMx6T-/view?usp=sharing' target='blank' className='w-1/3 text-white h-1/2'><FaFolder/></a>
                </Tooltip>
                <Tooltip label='Live site'>
                  <a href='https://absa-password-vault-cra.herokuapp.com/' target='blank' className='w-1/3 text-white h-1/2'><FaLink/></a>
                </Tooltip>
                <Tooltip label='Code repo'>
                  <a href='https://github.com/vtl-28/absa_password_vault_cra' target='blank' className='w-1/3 text-white h-1/2'><FaGithub/></a>
                </Tooltip>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <h1 className='my-2 font-bold text-white font-link'>Absa Password Vault</h1>
            <p className='text-[#dfdfdf] font-link'>Password manager used to help internal staff of Absa to store the 
            passwords to the many applications and systems they used to get 
            work done
            .</p>
            <ul className='flex flex-wrap gap-3 mt-4 list-none'>
              <li className='text-[#008000]'>mongodb</li>
              <li className='text-white'>express</li>
              <li className='text-[#087ea4]'>react</li>
              <li className='text-[#026e00]'>nodejs</li>
              <li className='text-[#38bdf8]'>tailwindcss</li>
            </ul>
          </CardBody>
        </Card>
        </Tilt>
        <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
        <Card bg="#24263b" px="4" className='rounded-2xl'>
          <CardHeader pb={['0px']}>
            <img alt='project snapshot' src={talkhostScreenshot} className='object-cover rounded-2xl xs:h-[812%] md:h-[100%] xs:w-full'/>
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                className='flex items-center justify-center xs:w-[35%] sm:w-[25%] md:w-[30%] lg:w-[1/4] h-10 xs:mr-4 sm:mr-0 md:mr-3 lg:mr-2 xl:mr-0 rounded-full cursor-pointer black-gradient'
              >
                <Tooltip label='Project details'>
                  <a href='https://drive.google.com/file/d/13WevHzn0F3Ij5rQDBPepmEco88SScRMk/view?usp=sharing' className='w-1/3 text-black h-1/2' target='blank'><FaFolder/></a>
                </Tooltip>
                <Tooltip label='Live site in progress'>
                  <a href='#' className='w-1/3 text-black h-1/2' target='blank'><FaLink/></a>
                </Tooltip>
                <Tooltip label='Code repo'>
                  <a href='https://github.com/vtl-28/skill-share' target='blank' className='w-1/3 text-black h-1/2'><FaGithub /></a>
                </Tooltip>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <h1 className='my-2 font-bold text-white font-link'>Talk Host</h1>
            <p className='text-[#dfdfdf] font-link'>Talk host is a platform that brings people with a shared interest together and allows 
            them to give small, informal presentations about things they know.</p>
            <ul className='flex flex-wrap gap-3 mt-4 list-none'>
              <li className='text-[#008000]'>mongodb</li>
              <li className='text-white'>express</li>
              <li className='text-[#087ea4]'>react</li>
              <li className='text-[#026e00]'>nodejs</li>
              <li className='text-[#38bdf8]'>tailwindcss</li>
              <li className='text-[#319795]'>chakrui</li>
              <li className='text-white'>socketio</li>
              <li className='text-[#f05e33]'>react-query</li>
            </ul>
          </CardBody>
        </Card>
        </Tilt>
      </div>
     
    </div>
  )
}

export default Projects
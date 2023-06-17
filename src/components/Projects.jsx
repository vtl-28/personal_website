import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import absaScreenshot from '../assets/APV_screenshot.PNG'
import talkhostScreenshot from '../assets/TH_screenshot.PNG'
import github from '../assets/github.png'
import { FaFolder, FaLink, FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col xs:px-12 lg:px-24 py-24 projects_section'>
      <div className='flex items-center justify-center mb-10'>
        <h1 className='font-bold xs:text-2xl md:text-4xl text-white'>Some things I've built</h1>
      </div>
      <div className='flex xs:flex-col md:flex-row md:justify-between md:gap-4 lg:gap-8 justify-between gap-8'>
        <Card bg="#1f2235" px="4" className='rounded-2xl'>
          <CardHeader pb={['0px']}>
            <img src={absaScreenshot} className='object-cover rounded-2xl xs:h-[812%] md:h-[100%] xs:w-full'/>
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open('source_code_link', "_blank")}
                className='flex items-center justify-center xs:w-1/4 md:w-[30%] lg:w-[1/4] h-10 mr-4 rounded-full cursor-pointer black-gradient'
              >
                {/* <img
                  src={github}
                  alt='source code'
                  className='object-contain w-1/2 h-1/2'
                /> */}
                <FaFolder className='w-1/2 text-white h-1/2'/>
                <FaLink className='w-1/2 text-white h-1/2'/>
                <FaGithub className='w-1/2 text-white h-1/2'/>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <h1 className='my-2 font-bold text-white'>Absa Password Vault</h1>
            <p className='text-[#dfdfdf]'>Password manager used to help internal staff of Absa to store the 
            passwords to the many applications and systems they used to get 
            work done
            .</p>
            <ul className='flex gap-3 mt-4 list-none flex-wrap'>
              <li className='text-[#008000]'>mongodb</li>
              <li className='text-white'>express</li>
              <li className='text-[#087ea4]'>react</li>
              <li className='text-[#026e00]'>nodejs</li>
              <li className='text-[#38bdf8]'>tailwindcss</li>
            </ul>
          </CardBody>
        </Card>
        <Card bg="#1f2235" px="4" className='rounded-2xl'>
          <CardHeader pb={['0px']}>
            <img src={talkhostScreenshot} className='object-cover rounded-2xl xs:h-[812%] md:h-[100%] xs:w-full'/>
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open('source_code_link', "_blank")}
                className='flex items-center justify-center xs:w-1/4 md:w-[30%] lg:w-[1/4] h-10 mr-4 rounded-full cursor-pointer black-gradient'
              >
                {/* <img
                  src={github}
                  alt='source code'
                  className='object-contain w-1/2 h-1/2'
                /> */}
                <FaFolder className='w-1/2 text-black h-1/2'/>
                <FaLink className='w-1/2 text-black h-1/2'/>
                <FaGithub className='w-1/2 text-black h-1/2'/>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <h1 className='my-2 font-bold text-white'>Talk Host</h1>
            <p className='text-[#dfdfdf]'>Talk host is a platform that brings people with a shared interest together and allows 
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
      </div>
     
    </div>
  )
}

export default Projects
import React from 'react'
import profilePic from '../assets/linkedin_dp.jpeg'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <div className='flex items-center xs:mt-16 mt-10 justify-around xs:px-12 sm:px-20 md:px-24 hero_section' id='heroSection'>
      <div className='flex flex-col xs:w-full sm:justify-center lg:w-1/2'>
          <div className='flex justify-between xs:w-full sm:w-2/3 md:w-[50%] mb-6'>
              <a href='https://github.com/vtl-28' target='_blank' rel='noreferrer' className='rounded-full hover:bg-[#fe4a57] border-2 border-[#fe4a57] w-14 h-14 p-3 flex items-center justify-center'>
                <FaGithub className='w-5 h-5 text-white'/>
              </a>
              <a href='https://twitter.com/vt_lehola' target='_blank' rel='noreferrer' className='rounded-full hover:bg-[#fe4a57] border-2 border-[#fe4a57] w-14 h-14 p-3 flex items-center justify-center'>
                <FaTwitter className='w-5 h-5 text-white'/>
              </a>
              <a href='https://www.linkedin.com/in/vuyisile-lehola-99a597122/' target='_blank' rel='noreferrer' className='rounded-full hover:bg-[#fe4a57] border-2 border-[#fe4a57] w-14 h-14 p-3 flex items-center justify-center'>
                <FaLinkedin className='w-5 h-5 text-white'/>
              </a>
          </div>
          <h3 className='mb-6 text-2xl md:text-3xl lg:text-2xl text-white'>Hi, my name is </h3>
          <h3 className='mb-8 xs:text-4xl text-5xl text-white'>Vuyisile Tlotliso Lehola</h3>
          <p className='text-[#dfdfdf] xs:text-xl md:text-2xl'>Full-stack developer looking for an entry-level role in a development team to 
further grow as a developer</p>
          <Link to='about' smooth={true} offset={50} duration={1000}
    spy={true}>
            <button className='text-white font-semibold  border-2 border-[#fe4a57] rounded-full mt-6 hover:bg-[#fe4a57] xs:w-[45%] sm:w-[40%] xs:py-3 sm:py-3 lg:w-[30%] md:py-3'>Find out more</button>
          </Link>
      </div>
      <div className='xs:hidden lg:flex'>
        <img src={profilePic} className='h-[332px]'/>
      </div>
    </div>
  )
}

export default HeroSection

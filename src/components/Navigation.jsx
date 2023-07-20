import React, { useState } from 'react'
import { Link } from 'react-scroll'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import resume from '../assets/CV of Vuyisile Lehola.pdf'

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
   <nav className='sm:px-16 px-12 w-full flex items-center py-6 fixed top-0 z-20 bg-[#1f2235]'>
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link
          to='heroSection' offset={-70} smooth={true} duration={1000}
    spy={true}
          className='flex items-center gap-2'
        >
          <p className='text-white text-[30px] font-bold cursor-pointer flex '>
            vt<span className='text-[#fe4a57]'>.</span>lehola
          </p>
        </Link>
        <ul className='flex-row hidden list-none md:flex gap-14'>
         
            <Link className='text-white' to='about' activeClass="active" offset={-70} smooth={true} duration={1000}
    spy={true}>
              <a href="#" className='text-lg font-semibold hover:text-[#fe4a57] font-link'>About</a>
            </Link>
            <Link className='text-white' to='skills' activeClass="active" offset={-30} smooth={true} duration={1000}
    spy={true}>
              <a href="#" className='text-lg font-semibold hover:text-[#fe4a57] font-link'>Skills</a>
            </Link>
            <Link className='text-white' to='projects' activeClass="active"  offset={-70} smooth={true} duration={1000}
    spy={true}>
              <a href="#" className='text-lg font-semibold hover:text-[#fe4a57] font-link'>Projects</a>
            </Link>
            <Link className='text-white' to='contact' activeClass="active" offset={-70} smooth={true} duration={1000}
    spy={true}>
              <a href="#" className='text-lg font-semibold hover:text-[#fe4a57] font-link'>Contact</a>
            </Link>
            <a href={resume} download='CV of Vuyisile Lehola.pdf'  className='text-white text-lg font-semibold hover:text-[#fe4a57]'>Resume</a>
        
        </ul>
        <div className='flex items-center justify-end flex-1 md:hidden'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className=' w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} border border-[#1f2235] mr-10 p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='flex flex-col items-center justify-end flex-1 gap-4 list-none'>
             
                <Link
                  className='text-white' to='about' smooth={true} offset={50} duration={1000}
    spy={true}
                >
                  <a href='#' className='font-semibold hover:text-[#fe4a57]'>About</a>
                </Link>
                <Link
                  className='text-white' to='skills' smooth={true} offset={50} duration={1000}
    spy={true}
                >
                  <a href='#' className='font-semibold hover:text-[#fe4a57]'>Skills</a>
                </Link>
                <Link
                  className='text-white' to='projects' smooth={true} offset={50} duration={1000}
    spy={true}
                >
                  <a href='#' className='font-semibold hover:text-[#fe4a57]'>Projects</a>
                </Link>
                <Link
                 className='text-white' to='contact' smooth={true} offset={50} duration={1000}
    spy={true}
                >
                  <a href='#' className='font-semibold hover:text-[#fe4a57]'>Contact</a>
                </Link>
             
            </ul>
          </div>
        </div>
      </div>

   </nav>
   
  )
}

export default Navigation
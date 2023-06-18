import React, { useEffect } from 'react'
import {
  FormControl,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const buttonVariants  = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Contact = () => {
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
    <motion.div ref={ref} initial={{ opacity: 0}} animate={controls} id='contact' className='flex flex-col gap-12 py-24 contact_section xs:px-12'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h3 className='text-[#fe4a57] uppercase font-semibold'>Have any query?</h3>
            <h1 className='font-bold text-white xs:text-4xl'>Contact Me</h1>
        </div>
        <div className='flex flex-col w-full gap-5'>
          <FormControl className='flex gap-10 xs:flex-col xs:gap-5 sm:flex-row sm:gap-10'>
            <Input type='text' placeholder='Your Name' focusBorderColor='#fff' _placeholder={{ color: '#fff' }} size='lg' bg='#24263b' isInvalid
    errorBorderColor='#24263b'/>
            <Input type='email' placeholder='Your Email' focusBorderColor='#fff' _placeholder={{ color: '#fff' }} size='lg' bg='#24263b' isInvalid
    errorBorderColor='#24263b'/>
          </FormControl>
          <FormControl className='flex w-full'>
            <Input type='text' placeholder='Your Subject' focusBorderColor='#fff' _placeholder={{ color: '#fff' }} size='lg' bg='#24263b' isInvalid
    errorBorderColor='#24263b'/>
          </FormControl>
          <FormControl className='flex w-full'>
            <Textarea type='text' placeholder='Your Message' focusBorderColor='#fff' _placeholder={{ color: '#fff' }} size='lg' height={40} bg='#24263b' isInvalid
    errorBorderColor='#24263b'/>
          </FormControl>
          <motion.button variants={buttonVariants} whileHover="hover" className='text-white rounded-full bg-[#fe4a57] xs:w-2/5 md:w-[30%] lg:w-[25%] xl:w-[20%] py-4 font-semibold'>Send Message</motion.button>
        </div>
    </motion.div>
  )
}

export default Contact

import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from '@chakra-ui/react'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col contact_section py-24 xs:px-12 gap-12'>
        <div className='flex flex-col items-center gap-4 justify-center'>
            <h3 className='text-[#fe4a57] uppercase font-semibold'>Have any query?</h3>
            <h1 className='text-white xs:text-4xl font-bold'>Contact Me</h1>
        </div>
        <div className='flex flex-col w-full gap-5'>
          <FormControl className='flex xs:flex-col xs:gap-5 sm:flex-row sm:gap-10 gap-10'>
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
          <button className='text-white rounded-full bg-[#fe4a57] xs:w-2/5 md:w-[30%] lg:w-[25%] xl:w-[20%] py-4 font-semibold'>Send Message</button>
        </div>
    </div>
  )
}

export default Contact

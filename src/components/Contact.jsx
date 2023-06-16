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
    <div id='contact' className='flex flex-col contact_section py-12 px-24 gap-12'>
        <div className='flex flex-col items-center gap-4 justify-center'>
            <h3 className='text-[#fe4a57] uppercase font-semibold'>Have any query?</h3>
            <h1 className='text-white text-5xl font-bold'>Contact Me</h1>
        </div>
        <div className='flex flex-col w-full gap-5'>
          <FormControl className='flex gap-10'>
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
          <button className='text-white rounded-full bg-[#fe4a57] w-1/5 py-4 font-semibold'>Send Message</button>
        </div>
    </div>
  )
}

export default Contact

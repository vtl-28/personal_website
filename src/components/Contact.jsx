import React, { useEffect, useState } from 'react'
import {
  FormControl,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Spinner } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';
import ErrorToast from './Toasts/ErrorToast';
import SuccessToast from './Toasts/SuccessToast';

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

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailMessage, setEmailMessage] = useState('')

  const [emailSending, setEmailSending] = useState(false)
  const [emailSuccessMessage, setEmailSuccessMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false);
  const [emailSentError, setEmailSentError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('')

  const toggleEmailError = () => setEmailSentError(!emailSentError)
  const toggleEmailSent = () => setEmailSent(!emailSent)

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

  const handleContactForm = (e) => {
    e.preventDefault();
    setEmailSending(true);
  
    const formData = {
      'name': userName,
      'email': userEmail,
      'subject': emailSubject,
      'message': emailMessage
    }
    if(!userEmail || !userName || !emailSubject || !emailMessage){
      setEmailSending(false)
      setEmailErrorMessage('Please enter all fields')
      toggleEmailError()
      return;
    }else{
    
      emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData, process.env.REACT_APP_EMAILJS_API_KEY)
      .then(function(response) {
        clearFormData();
        setEmailSending(false)
        setEmailSuccessMessage('Email sent. Will get back to you as soon as possible')
        toggleEmailSent()
      }, function(err) {
        setEmailSending(false)
        setEmailErrorMessage(err)
        toggleEmailError()
      });
    }
  }
  function clearFormData(){
    setUserEmail('')
    setUserName('')
    setEmailMessage('')
    setEmailSubject('')
  }

  return (
    <motion.div ref={ref} initial={{ opacity: 0}} animate={controls} id='contact' className='flex flex-col gap-12 py-24 contact_section xs:px-12'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h3 className='text-[#fe4a57] uppercase font-semibold font-link'>Have any query?</h3>
            <h1 className='font-bold text-white xs:text-4xl font-link'>Contact Me</h1>
        </div>
        { emailSentError && (<ErrorToast 
           
            message={emailErrorMessage}
            emailSentError={emailSentError}
            toggleEmailError={toggleEmailError}
          />)}
          { emailSent && (<SuccessToast 
           
           message={emailSuccessMessage}
           emailSent={emailSent}
           toggleEmailSent={toggleEmailSent}
         />)}
        <div className='flex flex-col w-full gap-5'>
          <FormControl className='flex gap-10 xs:flex-col xs:gap-5 sm:flex-row sm:gap-10'>
            <Input type='text' placeholder='Your Name' value={userName} name='name' onChange={(e) => setUserName(e.target.value)} focusBorderColor='#fff' _placeholder={{ color: '#fff' }} color='white' size='lg' bg='#1f2235' isInvalid
    errorBorderColor='#1f2235'/>
            <Input type='email' placeholder='Your Email' value={userEmail}  name='email' onChange={(e) => setUserEmail(e.target.value)} focusBorderColor='#fff' _placeholder={{ color: '#fff' }} color='white' size='lg' bg='#1f2235' isInvalid
    errorBorderColor='#1f2235'/>
          </FormControl>
          <FormControl className='flex w-full'>
            <Input type='text' placeholder='Your Subject' value={emailSubject}  name='subject' onChange={(e) => setEmailSubject(e.target.value)} focusBorderColor='#fff' _placeholder={{ color: '#fff' }} color='white' size='lg' bg='#1f2235' isInvalid
    errorBorderColor='#1f2235'/>
          </FormControl>
          <FormControl className='flex w-full'>
            <Textarea type='text' placeholder='Your Message' value={emailMessage}  name='message' onChange={(e) => setEmailMessage(e.target.value)} focusBorderColor='#fff' _placeholder={{ color: '#fff' }} color='white' size='lg' height={40} bg='#1f2235' isInvalid
    errorBorderColor='#1f2235'/>
          </FormControl>
          <motion.button variants={buttonVariants} whileHover="hover" onClick={(e) => handleContactForm(e)} className='text-white rounded-full bg-[#fe4a57] xs:w-75 sm:w-[50%] md:w-[30%] lg:w-[25%] xl:w-[20%] py-4 font-semibold'>
        
              <span className='text-white'>
                { emailSending ? 'Sending...' : 'Send Message'}
              </span>
            </motion.button>
        </div>
    </motion.div>
  )
}

export default Contact

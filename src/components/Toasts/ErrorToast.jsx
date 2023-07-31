import React from "react";
import { Toast, ToastContainer, ToastHeader } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";

const ErrorToast = ({  message,
    emailSentError,
    toggleEmailError,
    placement,}) => {
    return(
        <ToastContainer className="sm:w-2/3 lg:w-[33%] xs:w-full mx-auto border border-red-600 rounded-md">
        <Toast
          className="flex flex-col items-center py-2 bg-red-600"
          show={emailSentError}
          onClose={toggleEmailError}
          delay={3000}
          autohide
        >
          <ToastHeader className="flex bg-red-600">
            <FaInfoCircle className="mt-0.5 text-base text-white" />
            <small className="ml-3 text-white text-md">Error occurred!</small>
          </ToastHeader>
          <Toast.Body className="text-base text-white">{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    )
}
export default ErrorToast;
import React from "react";
import { Toast, ToastContainer, ToastHeader } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";

const SuccessToast = ({
  message,
  emailSent,
  toggleEmailSent,
}) => {
  return (
    <ToastContainer className="sm:w-2/3 lg:w-[50%] xs:w-full mx-auto border border-green-800 rounded-md">
      <Toast
        className="flex flex-col items-center py-2 bg-green-800"
        show={emailSent}
        onClose={toggleEmailSent}
        delay={3000}
        autohide
      >
        <ToastHeader className="flex bg-green-800">
          <FaInfoCircle className="text-base text-white" />
          <small className="ml-3 text-white text-md">Success!</small>
        </ToastHeader>
        <Toast.Body className="text-base text-white xs:text-center">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default SuccessToast;

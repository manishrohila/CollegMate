import React from 'react';
import FeedbackForm from '../components/common/FeedbackForm';
import img1 from '../assets/Images/1.jpg';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.png';
import img4 from '../assets/Images/4.png';

const Contact = () => {
  return (
    <div className="grid min-h-[calc(100vh-3.2rem)] place-items-center">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-center items-center gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
        <div className="w-full max-w-[450px]">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-900 text-center mb-6">
            Contact Us
          </h1>
          <FeedbackForm />
        </div>
      </div>
      <div className="flex justify-around w-full mt-12 bg-blue-600
bg-blue-600">
        <div className="flex flex-col items-center p-4 rounded-lg">
          <img
            src={img1}
            alt="Your Photo"
            className="w-80 h-80 rounded-full mb-4"
          />
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/_k_aman00001/" target="_blank" rel="noopener noreferrer">
              <img src={img4} alt="Instagram" className="w-8 h-8"/>
            </a>
            <a href="https://www.linkedin.com/in/aman-kuldeep-7905a9230/" target="_blank" rel="noopener noreferrer">
              <img src={img3} alt="LinkedIn" className="w-8 h-8"/>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg">
          <img
            src={img2}
            alt="Friend's Photo"
            className="w-80 h-80 rounded-full mb-4"
          />
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/ninjastic.ninja7/" target="_blank" rel="noopener noreferrer">
              <img src={img4} alt="Instagram" className="w-8 h-8"/>
            </a>
            <a href="https://www.linkedin.com/in/manishrohila0507/" target="_blank" rel="noopener noreferrer">
              <img src={img3} alt="LinkedIn" className="w-8 h-8"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

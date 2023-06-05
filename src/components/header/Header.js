import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './header.css';
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsInstagram,
} from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import MobileHeader from './MobileHeader';
import MainHeader from './MainHeader';
// import TestHeader from "./TestHeader";
// import MobileMenuHeader from "./MobileMenuHeader";
import Confetti from 'react-confetti';

function Header() {
  return (
    <>
      <TopHeader />
      {/* <MobileMenuHeader /> */}
      {/* <TestHeader /> */}
      <MobileHeader />
      <MainHeader />
    </>
  );
}

const TopHeader = () => {
  return (
    // <div className="container py-2 mx-auto block space-y-3 md:px-5 sm:flex Justify-between">
    //   <div className="space-x-3 lg:flex items-center ">
    //     <div className="flex items-center  space-x-5 p-2">
    //       <div className="flex items-center space-x-1">Contact Us &nbsp;
    //         <a href="mailto:info@saboomaruti.in">
    //           <FaEnvelope />
    //         </a>
    //       </div>
    //       <div className="flex items-center space-x-1 justify-center sm:justify-start">
    //         <a href="tel:9848898488">
    //            <FaPhoneAlt size={12} />
    //         </a>
    //       </div>
    //       <div className="border text-black h-5 hidden lg:flex space-y-4"></div>

    //     </div>
    //     <div className="flex items-center justify-center space-x-2">
    //       <Link
    //         to="/maruti-suzuki-car-offers-page"
    //         className="uppercase bg-blue-800 text-white px-3 py-1.5 rounded shadow-sm text-sm"
    //       >
    //         Offers
    //       </Link>
    //       <Link
    //         to="/maruti-car-service-centers-near-me"
    //         className="uppercase bg-blue-800 text-white px-3 py-1.5 rounded shadow-sm text-sm"
    //       >
    //         book a Service
    //       </Link>
    //     </div>
    //   </div>
    //   {/* <div className="flex items-center space-x-4 justify-center">
    //     <a
    //       href="https://www.facebook.com/saboorksmaruti"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsFacebook />
    //     </a>
    //     <a
    //       href="https://twitter.com/saboorksmaruti"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsTwitter />
    //     </a>
    //     <a
    //       href="https://www.youtube.com/channel/UCcX41w_0KU95uunUdNcP8TA?view_as=subscriber"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsYoutube />
    //     </a>
    //     <a
    //       href="https://www.linkedin.com/company/saboo-rks-motor-pvt-ltd/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <ImLinkedin />
    //     </a>
    //     <a
    //       href="https://in.pinterest.com/rksmaruti/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsPinterest />
    //     </a>
    //     <a
    //       href="https://www.instagram.com/saboorksmaruti/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <BsInstagram />
    //     </a>
    //   </div> */}
    // </div>
    <div className='container py-1.5 mx-auto block space-y-3 sm:flex items-center justify-between '>
      <div className='flex items-center space-x-4 justify-center md-10'>
        <Link
          to='/maruti-suzuki-car-offers-page'
          className='uppercase bg-blue-800 text-white px-3 py-1.5 rounded shadow-sm text-sm'
        >
          Offers
        </Link>
        <Link
          to='/maruti-car-service-centers-near-me'
          className='uppercase bg-blue-800 text-white px-3 py-1.5 rounded shadow-sm text-sm'
        >
          Service your car
        </Link>
        {/* </div> */}
      </div>
      <div className='space-x-3 lg:flex items-center'>
        <div className='flex items-center justify-center space-x-5'>
          <div className='flex items-center space-x-1 font-bold'>
            Contact Us &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='https://wa.me/+919848898488'>
              <FaWhatsapp size={20} />
            </a>
            
          </div>
          &nbsp;&nbsp;
          <div className='border text-black h-5 lg:flex space-y-4'></div>
          <div className='flex items-center space-x-1 justify-center sm:justify-start'>
            <a href='tel:9848898488'>
              <FaPhoneAlt size={12} />
            </a>
          </div>
          &nbsp;&nbsp;
          <div className='border text-black h-5 lg:flex space-y-4'></div>
          <div className='flex items-center space-x-1 justify-center sm:justify-start'>
          <a href='mailto:info@saboomaruti.in'>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

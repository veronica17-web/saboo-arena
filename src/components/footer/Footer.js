import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import {
  BsFacebook,
  BsYoutube,
  BsPinterest,
  BsInstagram,
} from 'react-icons/bs';

import { ImLinkedin } from 'react-icons/im';

const navigation = {
  cars: [
    { name: 'ALTO', to: '/maruti-alto-800-on-road-price-in-hyderabad' },
    {
      name: 'ALTO K10',
      to: '/all-new-maruti-alto-k10-on-road-price-in-hyderabad',
    },

    {
      name: 'WAGON R',
      to: '/maruti-wagon-r-on-road-price-in-hyderabad',
    },
    { name: 'CELERIO', to: '/the-all-new-celerio' },
    {
      name: 'SWIFT',
      to: '/maruti-swift-car-on-road-price-in-hyderabad',
    },
    {
      name: 'DZIRE',
      to: '/maruti-swift-dzire-on-road-price-in-hyderabad',
    },
    {
      name: 'S-PRESSO',
      to: '/maruti-s-presso-on-road-price-in-hyderabad',
    },
    { name: 'ERTIGA', to: '/maruti-ertiga-on-road-price-in-hyderabad' },
    {
      name: 'BREZZA',
      to: '/maruti-new-brezza-on-road-price-in-hyderabad',
    },
    { name: 'EECO', to: '/maruti-eeco-on-road-price-in-hyderabad' },
  ],
  corporate: [
    { name: 'SHOWROOMS', to: '/showrooms' },
    { name: 'WORKSHOPS', to: '/maruti-suzuki-car-service-center' },
    { name: 'TRUE VALUE', to: '/true-value' },
    {
      name: 'DRIVING SCHOOL',
      to: '/maruti-driving-school-locations',
    },
  ],
  about: [
    { name: 'RKS MOTOR PVT LTD', to: '/about-maruti-suzuki-dealers' },
    // { name: "CAREERS", to: "/contact-us" },
    { name: 'CONTACT US', to: '/contact-maruti-suzuki-showroom' },
  ],
  financeInsurance: [
    { name: 'CAREERS', to: '/careers' },
    { name: 'PAYMENTS', to: '/payment' },
    { name: 'CORPORATE', to: '/corporate' },
    { name: 'FINANCE', to: '/maruti-suzuki-car-finance-services' },
    { name: 'INSURANCE', to: '/maruti-suzuki-car-insurance-renewal' },
    { name: 'SERVICE', to: '/maruti-car-service-centers-near-me' },
    // { name: 'SUBSCRIBE', to: '/subscribe' },
    { name: 'TERMS & CONDITIONS', to: '/maruti-car-terms-and-conditions' },
    { name: 'FAQ', to: '/faq' },
    // { name: "ANNUAL REPORT '21", to: '/Annual_Return_2021' },
    // { name: "ANNUAL REPORT '22", to: '/Annual_Return_2022' },
    // { name: 'CSR POLICY', to: '/' },
  ],
};

function Footer() {
  return (
    <>
      {/* Footer section */}
      <div className='bg-[#ffffff] pt-16 pb-10 md:px-4 lg:px-0 px-5'>
        <div className='container mx-auto'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
            {/* col starts */}
            <div className='text-black space-y-3 md:pr-8 lg:pr-0 pr-5'>
              <p className='text-blue-800 font-bold text-lg  md:text-xl'>
                <span className='text-2xl text-rose-600 font-black'>| </span>
                MARUTI CARS
              </p>
              <div className='flex flex-col space-y-3 text-sm font-normal  text-black scale-100'>
                {navigation.cars.map((item, index) => (
                  <div
                    className='flex border-b pb-2 border-gray-200 items-center text-gray-900 hover:font-bold'
                    key={index}
                  >
                    <RiArrowRightSLine className='text-gray-400' />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* col starts */}
            <div className='text-black space-y-3 md:mt-4 lg:mt-0 mt-5'>
              <p className='text-blue-800 font-bold text-lg'>
                <span className='text-2xl text-rose-600 font-black'>| </span>
                OUTLETS
              </p>
              <div className='flex flex-col space-y-3 font-normal text-black text-sm'>
                {navigation.corporate.map((item, index) => (
                  <div
                    className='flex border-b pb-2 border-gray-200 items-center text-gray-800 hover:font-bold'
                    key={index}
                  >
                    <RiArrowRightSLine className='text-gray-400' />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
              <div className='text-black space-y-3 md:mt-4 lg:mt-0 mt-5'>
                <p className='text-blue-800 font-bold text-lg'>
                  <span className='text-2xl text-rose-600 font-black'>| </span>
                  ABOUT US
                </p>
              </div>

              <div className='flex flex-col space-y-3 font-normal text-black text-sm'>
                {navigation.about.map((item, index) => (
                  <div
                    className='flex border-b pb-2 border-gray-200 items-center text-gray-800 hover:text-gray-800'
                    key={index}
                  >
                    <RiArrowRightSLine className='text-gray-400' />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* col starts */}
            <div className='text-black space-y-3 md:mt-4 lg:mt-0 mt-5'>
              <p className='text-blue-800 font-bold text-lg'>
                <span className='text-2xl text-rose-600 font-black'>| </span>
                USEFUL LINKS
              </p>
              <div className='flex flex-col space-y-3 font-normal text-black text-sm'>
                {navigation.financeInsurance.map((item, index) => (
                  <div
                    className='flex border-b pb-2 border-gray-200 items-center text-gray-800 hover:font-bold'
                    key={index}
                  >
                    <RiArrowRightSLine className='text-gray-400' />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* col starts */}
            <div className='text-black space-y-3 md:mt-4 lg:mt-0 mt-5'>
              <p className='text-blue-800 font-bold text-lg'>
                <span className='text-2xl text-rose-600 font-black'>| </span>
                CONTACT US
              </p>
              <div className='flex flex-col space-y-3 font-semibold text-black'>
                <h1 className='text-2xl text-blue-800 text-extrabold'>
                  RKS MOTOR PVT. LTD.
                </h1>
              </div>

              <p className='py-2'>
                <a
                  href='mailto:info@saboomaruti.in'
                  className=' bg-[#293e91] text-white px-3 py-1.5 rounded shadow-sm text-sm mt-3 hover:bg-blue-700'
                >
                  info@saboomaruti.in
                </a>
              </p>
              <a
                href='tel:9848898488'
                className=' bg-[#293e91] text-white px-3 py-1.5 rounded shadow-sm text-sm mt-1 hover:bg-blue-700'
              >
                +91 98488 98488
              </a>
              <p className='mt-3 text-black font-light'>
                <span className='font-bold tracking-wide text-xs'>
                  Address:<br></br>
                </span>
                RKS Motor - Saboo Towers,<br></br> 6-3-905, Raj Bhavan Rd,
                <br></br>
                Somajiguda, Hyderabad,<br></br> Telangana - 500082
              </p>
              <p className='font-bold'>Social Links</p>
              <div className='flex items-center space-x-3'>
                <a
                  href='https://www.facebook.com/saboorksmaruti'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsFacebook />
                </a>
                <a
                  href='https://twitter.com/saboorksmaruti'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaXTwitter />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCcX41w_0KU95uunUdNcP8TA?view_as=subscriber'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsYoutube />
                </a>
                <a
                  href='https://www.linkedin.com/company/saboo-rks-motor-pvt-ltd/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <ImLinkedin />
                </a>
                <a
                  href='https://in.pinterest.com/rksmaruti/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsPinterest />
                </a>
                <a
                  href='https://www.instagram.com/saboorksmaruti/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CopyRight content */}
      <div className='bg-[#293e91] text-white py-3'>
        <div className='container mx-auto md:flex items-center md:space-y-2 md:justify-between lg:px-0 px-5'>
          <div>
            <div className='flex items-center space-x-2 text-sm'>
              <Link
                to='/maruti-car-terms-and-conditions'
                className='hover:text-red-500 sm:text-extralight'
              >
                Terms & Conditions
              </Link>
              <span className='border h-4'></span>
              <Link
                to='/maruti-car-terms-and-conditions'
                className='hover:text-red-500'
              >
                Privacy Policy
              </Link>
            </div>
            <p className='text-sm'>
              © {new Date().getFullYear()} All Rights Reserved by RKS Motor Pvt
              Ltd.
            </p>
          </div>
          <p className='text-sm'>
            Powered by{' '}
            <a
              className='hover:text-red-500'
              href='https://broaddcast.com'
              target='_blank'
              rel='noreferrer'
            >
              BroaddCast Business Solutions LLP
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

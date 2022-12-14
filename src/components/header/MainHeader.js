import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Metaverse from '../../screens/services/Metaverse';
import { NavLink } from 'react-router-dom';

const navigation = {
  pages: [
    { name: 'Home', to: '/' },
    { name: 'About us', to: '/about-maruti-suzuki-dealers' },
  ],
  vehicles: [
    { name: 'Alto', to: '/maruti-alto-800-on-road-price-in-hyderabad' },
    {
      name: 'Alto K10',
      to: '/all-new-maruti-alto-k10-on-road-price-in-hyderabad',
    },
    { name: 'Wagon R', to: '/maruti-wagon-r-on-road-price-in-hyderabad' },
    { name: 'Celerio', to: '/the-all-new-celerio' },
    { name: 'Swift', to: '/maruti-swift-car-on-road-price-in-hyderabad' },
    { name: 'Dzire', to: '/maruti-swift-dzire-on-road-price-in-hyderabad' },
    { name: 'S-Presso', to: '/maruti-s-presso-on-road-price-in-hyderabad' },
    { name: 'Ertiga', to: '/maruti-ertiga-on-road-price-in-hyderabad' },
    {
      name: 'Brezza',
      to: '/maruti-new-brezza-on-road-price-in-hyderabad',
    },
    { name: 'EECO', to: '/maruti-eeco-on-road-price-in-hyderabad' },
  ],
  cng: [
    {
      name: 'Alto K10 CNG',
      to: '/alto-k10-cng',
    },
    { name: 'Swift CNG', to: '/maruti-new-swift-cng' },
    { name: 'Alto CNG', to: '/maruti-alto-800-cng-on-road-price-in-hyderabad' },

    {
      name: 'Wagon R CNG',
      to: '/maruti-wagonr-cng-on-road-price-in-hyderabad',
    },
    {
      name: 'Dzire CNG',
      to: '/maruti-swift-dzire-cng-on-road-price-in-hyderabad',
    },
    {
      name: 'S-Presso CNG',
      to: '/maruti-s-presso-cng-on-road-price-in-hyderabad',
    },
    { name: 'Ertiga CNG', to: '/maruti-ertiga-cng-on-road-price-in-hyderabad' },
    { name: 'EECO CNG', to: '/maruti-eeco-cng-on-road-price-in-hyderabad' },
    {
      name: 'Celerio CNG',
      to: '/maruti-celerio-cng-on-road-price-in-hyderabad',
    },
  ],
  tour: [
    { name: 'TOUR H1', to: '/maruti-alto-tour-h1-on-road-price-in-hyderabad' },
    {
      name: 'TOUR H3',
      to: '/maruti-wagnor-tour-h3-on-road-price-in-hyderabad',
    },
    { name: 'TOUR S', to: '/maruti-dzire-tour-s-on-road-price-in-hyderabad' },
    { name: 'TOUR V', to: '/maruti-eeco-tour-v-on-road-price-in-hyderabad' },
    { name: 'TOUR M', to: '/maruti-ertiga-tour-m-on-road-price-in-hyderabad' },
  ],
  servicepages: [
    {
      name: 'Payments',
      to: '/payment',
    },
    {
      name: 'Insurance',
      to: '/maruti-suzuki-car-insurance-renewal',
    },
    {
      name: 'Finance',
      to: '/maruti-suzuki-car-finance-services',
    },
    {
      name: 'Corporate',
      to: '/corporate',
    },
    {
      name: 'Subscribe',
      to: '/subscribe',
    },
    {
      name: 'Driving School',
      to: '/maruti-suzuki-driving-school',
    },
  ],

  outlets: [
    {
      name: 'Arena',
      to: '/showrooms',
    },
    {
      name: 'Truevalue',
      to: '/true-value',
    },
    {
      name: 'Workshop',
      to: '/maruti-suzuki-car-service-center',
    },
    {
      name: 'Driving School',
      to: '/maruti-driving-school-locations',
    },
  ],
  more: [
    // {
    //   name: "Covid 19",
    //   to: "/covid-19",
    // },

    {
      name: 'Blog',
      to: '/blog',
    },
    {
      name: 'Awards',
      to: '/awards',
    },
    {
      name: 'Contact Us',
      to: '/contact-maruti-suzuki-showroom',
    },
    {
      name: 'Accessories',
      to: '/maruti-genuine-accessories',
    },
    {
      name: 'Compare',
      to: '/compare-cars',
    },
  ],
};

function MainHeader() {
  const [fixHeader, setFixHeader] = useState(false);

  function setFixedHeader() {
    if (window.scrollY >= 10) {
      setFixHeader(true);
    }
    if (window.scrollY < 10) {
      setFixHeader(false);
    }
  }

  window.addEventListener('scroll', setFixedHeader);

  return (
    <header className={fixHeader ? 'is-sticky' : 'main_header_01'}>
      <Link to='/' className='logo'>
        <img
          className='h-12 w-auto'
          src={require('../../assets/whitelogo.webp')}
          alt='logo'
        />
      </Link>

      <div className='navigation'>
        <ul className='menu'>
          {navigation.pages.map((page, index) => (
            <li className='menu-item' key={index}>
              <Link to={page.to}>{page.name}</Link>
            </li>
          ))}
          <li className='menu-item'>
            <a href='javascript:void(0)' className='flex items-center sub-btn'>
              Vehicles <ChevronDownIcon className='h-5 w-5' />
            </a>
            <ul className='sub-menu'>
              {/* {navigation.vehicles.map((vehicle, index) => (
                <li className="sub-item" key={index}>
                  <Link to={vehicle.to}>{vehicle.name}</Link>
                </li>
              ))} */}
              <li className='sub-item more arena'>
                <a href='javascript:void(0)' className='more-btn'>
                  ARENA
                </a>
                <ul className='more-menu'>
                  {navigation.vehicles.map((vehicle, index) => (
                    <li className='more-item' key={index}>
                      <Link to={vehicle.to}>{vehicle.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className='sub-item more cng'>
                <a href='javascript:void(0)' className='more-btn'>
                  S-CNG
                </a>
                <ul className='more-menu'>
                  {navigation.cng.map((page, index) => (
                    <li className='more-item' key={index}>
                      <Link to={page.to}>{page.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className='sub-item more'>
                <a href='javascript:void(0)' className='more-btn'>
                  TOUR
                </a>
                <ul className='more-menu'>
                  {navigation.tour.map((page, index) => (
                    <li className='more-item' key={index}>
                      <Link to={page.to}>{page.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
          <li className='menu-item'>
            <a href='javascript:void(0)' className='flex items-center sub-btn'>
              Services <ChevronDownIcon className='h-5 w-5' />
            </a>
            <ul className='sub-menu' style={{ width: '27%' }}>
              {navigation.servicepages.map((item, index) => (
                <li className='sub-item' key={index}>
                  <Link to={item.to}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className='menu-item'>
            <a href='javascript:void(0)' className='flex items-center sub-btn'>
              Outlets <ChevronDownIcon className='h-5 w-5' />
            </a>
            <ul className='sub-menu' style={{ width: '27%' }}>
              {navigation.outlets.map((item, index) => (
                <li className='sub-item' key={index}>
                  <Link to={item.to}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className='menu-item'>
            <a href='javascript:void(0)' className='flex items-center sub-btn'>
              More <ChevronDownIcon className='h-5 w-5' />
            </a>
            <ul className='sub-menu'>
              {navigation.more.map((item, index) => (
                <li className='sub-item' key={index}>
                  <Link to={item.to}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className='menu-item'>
            <a
              href='https://www.spatial.io/s/Saboo-Arena-Showroom-62f498277e22f400016f8be8?share=2230171934612064401'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='text-yellow-300 hover:text-red-600'>
                Metaverse
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainHeader;

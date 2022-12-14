import { Fragment, useState } from 'react';
import { Dialog, Tab, Transition } from '@headlessui/react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline';
import {
  FaHome,
  FaCar,
  FaPhoneAlt,
  FaBars,
  FaPercentage,
} from 'react-icons/fa';
import './mobile.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const navigation = {
  pages: [
    { name: 'Home', to: '/' },
    { name: 'About us', to: '/about-maruti-suzuki-dealers' },
    { name: 'Arena Vehicles', to: '/maruti-suzuki-new-cars' },
    { name: 'CNG Vehicles', to: '/maruti-suzuki-cng-cars' },
    { name: 'Tour Vehicles', to: '/maruti-suzuki-tour-cars' },
  ],
  servicepages: [
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
    {
      name: 'Covid 19',
      to: '/covid-19',
    },
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
  ],
};

function MobileHeader() {
  const [tabs, setTabs] = useState(1);
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const fixedNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const location = window.location.pathname;
  window.addEventListener('scroll', fixedNavbar);

  function handleMenu() {
    setOpen(true);
    setTabs(5);
  }

  useEffect(() => {
    if (location === '/maruti-suzuki-car-offers-page') {
      setTabs(4);
    }
  }, [location]);

  return (
    <div className='main_header'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 lg:hidden'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}
              <Tab.Group
                as='div'
                className='mt-2'
                onClick={() => setOpen(false)}
              ></Tab.Group>

              <div
                className='border-t border-gray-200 py-6 px-4 space-y-6'
                onClick={() => setOpen(false)}
              >
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <Link
                      to={page.to}
                      className='-m-2 p-2 block font-normal text-gray-700'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className='border-t border-gray-200 py-6 px-4 space-y-6'
                onClick={() => setOpen(false)}
              >
                {navigation.servicepages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <Link
                      to={page.to}
                      className='-m-2 p-2 block font-normal text-gray-700'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className='border-t border-gray-200 py-6 px-4 space-y-6'
                onClick={() => setOpen(false)}
              >
                {navigation.outlets.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <Link
                      to={page.to}
                      className='-m-2 p-2 block font-normal text-gray-700'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className='border-t border-gray-200 py-6 px-4 space-y-6'
                onClick={() => setOpen(false)}
              >
                {navigation.more.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <Link
                      to={page.to}
                      className='-m-2 p-2 block font-normal text-gray-700'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Desktop, Tab Menu */}
      <div
        className={
          navbar
            ? 'fixed top-0 z-20 w-full px-0 shadow-2xl drop-shadow-2xl'
            : ''
        }
      >
        <header className='relative bg-gradient-to-r from-blue-800 to-cyan-500'>
          <nav aria-label='Top' className='container mx-auto '>
            <div className='border-gray-200'>
              <div className='h-16 flex items-center justify-between px-5'>
                {/* Logo */}
                {/* <div className="mr-auto flex lg:ml-0 ml-2"> */}
                <Link to='/'>
                  <img
                    className='h-12 w-auto mx-auto'
                    src={require('../../assets/whitelogo.webp')}
                    alt='logo'
                  />
                </Link>
                {/* </div> */}

                <button
                  type='button'
                  className='p-2 rounded-md text-gray-200 lg:hidden'
                  onClick={() => setOpen(true)}
                >
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* bottom menu */}
      {/* <div className="fixed bottom-0 flex items-center border-t border-gray-300 shadow-md drop-shadow-md p-4 w-full bottom_footer_mobile z-50">
        <div className="nav-bar">
          <Link to="/" className="text-white">
            <div
              className={`link ${tabs === 1 ? "active" : ""} `}
              onClick={() => setTabs(1)}
            >
              <FaHome className="icon_foot" />
              <p>Home</p>
            </div>
          </Link>

          <a href="tel:9848898488" to="/" className="text-white">
            <div
              className={`link ${tabs === 2 ? "active" : ""} `}
              onClick={() => setTabs(2)}
            >
              <FaPhoneAlt className="icon_foot" />
              <p>Call</p>
            </div>
          </a>

          <Link to="/" className="text-white">
            <div
              className={`link ${tabs === 3 ? "active" : ""} `}
              onClick={() => setTabs(3)}
            >
              <FaCar className="icon_foot" />
              <p>Book</p>
            </div>
          </Link>

          <Link to="/maruti-suzuki-car-offers-page" className="text-white">
            <div
              className={`link ${
                tabs === 4 ? "active" : ""
              } `}
            >
              <FaPercentage className="icon_foot" />
              <p>Offers</p>
            </div>
          </Link>

          <a href="#" className="text-white">
            <div
              className={`link ${tabs === 5 ? "active" : ""} `}
              onClick={handleMenu}
            >
              <FaBars className="icon_foot" />
              <p>Menu</p>
            </div>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default MobileHeader;

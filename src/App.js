import React, { useEffect, useState, Fragment } from 'react';
import { CgSpinner } from 'react-icons/cg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './screens/home/Home';
import Footer from './components/footer/Footer';
import About from './screens/about/About';
import Offers from './screens/more/Offers';
import Arena from './screens/outlets/Arena';
import Truevalue from './screens/outlets/Truevalue';
import WorkShop from './screens/outlets/WorkShop';
import BookAService from './screens/more/BookAService';
import DrivingSchoolOutlet from './screens/outlets/DrivingSchoolOutlet';
import Covid from './screens/more/Covid';
import Blog from './screens/more/Blog';
import Awards from './screens/more/Awards';
import Contact from './screens/more/Contact';
import Accessories from './screens/more/Accessories';
import Subscribe from './screens/more/Subscribe';
import Insurance from './screens/services/Insurance';
import Finance from './screens/services/Finance';
import Corporate from './screens/services/Corporate';
import ServiceSubscribe from './screens/services/ServiceSubscribe';
import DrivingSchool from './screens/services/DrivingSchool';
import loginkey from './assets/login_key.svg';

//confetti
import Confetti from 'react-confetti';
//cars screens
import Alto from './screens/cars/Alto';
import Brezza from './screens/cars/Brezza';
import Celerio from './screens/cars/Celerio';
import Dzire from './screens/cars/Dzire';
import Eeco from './screens/cars/Eeco';
import Ertiga from './screens/cars/Ertiga';
import Spresso from './screens/cars/Spresso';
import Swift from './screens/cars/Swift';
import Wagonr from './screens/cars/Wagonr';

//cng screens

import AltoCNG from './screens/CNG/AltoCNG';
import WagonrCNG from './screens/CNG/WagonrCNG';
import DzireCNG from './screens/CNG/DzireCNG';
import SpressoCNG from './screens/CNG/SpressoCNG';
import ErtigaCNG from './screens/CNG/ErtigaCNG';
import EecoCNG from './screens/CNG/EecoCNG';
import CelerioCNG from './screens/CNG/CelerioCNG';
import Compare from './screens/Compare';

//tour screens
import Tourh1alto from './screens/Tour/TourH1Alto';
import Tourh3wagonr from './screens/Tour/TourH3Wagonr';
import Tourmertiga from './screens/Tour/TourM';
import Toursdzire from './screens/Tour/TourS';
import Tourveeco from './screens/Tour/TourV';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircle, IoLogoWhatsapp } from 'react-icons/io5';
import { BsTelephoneForward } from 'react-icons/bs';
import { Transition, Dialog } from '@headlessui/react';
import axios from 'axios';
import ThankYou from './screens/more/ThankYou';
import NotFound from './screens/more/NotFound';
import ArenaCars from './screens/more/ArenaCars';
import CngCars from './screens/more/CngCars';
import TourCars from './screens/more/TourCars';
import PrivacyPolicy from './screens/more/PrivacyPolicy';
import Faq from './screens/more/Faq';
import AltoK10 from './screens/cars/AltoK10';
import SwiftCNG from './screens/CNG/SwiftCNG';
import Payment from './screens/services/Payment';
import PaymentTest from './screens/services/PaymentTest';
import AltoK10CNG from './screens/CNG/AltoK10CNG';
import Metaverse from './screens/services/Metaverse';
import Gallery from './screens/more/Gallery';
import BrezzaCNG from './screens/CNG/BrezzaCNG';
import PriceList from './screens/more/PriceList';
import CarEnquiry from './components/home/CarEnquiry';

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        if (sessionStorage.getItem('popup') !== 'true') {
          setOpen(true);
          sessionStorage.setItem('popup', 'true');
        }
      }, 1000);
    }, [pathname]);
    return null;
  };

  const Popup = () => {
    const [number, setNumber] = useState('');
    const [methodpopup, setMethodPopup] = useState();

    function handleSubmit() {
      setLoading(true);
      axios
        .post('popup', {
          phone: number,
        })
        .then((res) => {
          setMethodPopup('POST');
        })
        .catch((err) => {
          toast.error('Something went wrong');
          setLoading(false);
        });
      axios
        .get(
          `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${number}&msg=Thank you for showing interest in Maruti Suzuki.
        Our Sales consultant will contact you shortly.
        
        Regards
        RKS Motor Pvt. Ltd.
        98488 98488
        www.saboomaruti.in
        www.saboonexa.in&type=1&template_id=1407168967467983613`
        )
        .then((res) => {
          console.log('SMS API Response:', res.data);
          // Handle the response from the SMS API if needed
        })
        .catch((err) => {
          console.error('Error sending SMS:', err);
          // Handle errors from the SMS API if needed
        })
        .finally(() => {
          setLoading(false);
        });

      setLoading(false);
    }

    const pattern = /^[6-9][0-9]{6,9}$/;
    if (number !== '' && number.length === 10) {
      if (!pattern.test(number)) {
        sessionStorage.setItem('popup', 'false');
        toast.error('Enter valid phone number', {
          theme: 'colored',
        });
      }
    }

    // function handleSubmit() {
    //   setLoading(true);
    //   try {
    //     axios.post('https://saboogroups.com/admin/api/arena-popup', {
    //       phone: number,
    //     });
    //     setMethodPopup('POST');
    //     setLoading(false);
    //   } catch (error) {
    //     toast.error('Something went wrong');
    //     setLoading(false);
    //     console.log(error);
    //   }
    // }

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-20 inset-0 overflow-y-auto'
          onClose={() => setOpen(false)}
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='relative inline-block align-bottom bg-white  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='text-left'>
                    <button
                      className='outline-none absolute right-2 top-2'
                      onClick={() => setOpen(false)}
                    >
                      <IoCloseCircle size={28} />
                    </button>
                    <div className='mt-2 space-y-3'>
                      {/* <form
                        action={
                          pattern.test(number) && number.length === 10
                            ? 'https://crm.zoho.in/crm/WebToLeadForm'
                            : '#'
                        }
                        name='WebToLeads54158000001051349'
                        // method={methodpopup}
                        method='POST'
                        acceptCharset='UTF-8'
                      >
                        <input
                          type='text'
                          className='hidden'
                          name='xnQsjsdp'
                          value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
                        />
                        <input
                          type='hidden'
                          name='zc_gad'
                          id='zc_gad'
                          value=''
                        />
                        <input
                          type='text'
                          className='hidden'
                          name='xmIwtLD'
                          value='3e4c511e1bfac462fb9ac158b261b0d3df2ae6eb9f9847d50cb87f439855b4e4'
                        />
                        <input
                          type='text'
                          className='hidden'
                          name='actionType'
                          value='TGVhZHM='
                        />
                        <input
                          type='text'
                          className='hidden'
                          name='returnURL'
                          value='https://saboomaruti.in/'
                        />
                        <input
                          type='text'
                          id='Last_Name'
                          value='arenapopup_Lead'
                          name='Last Name'
                          maxLength='80'
                          style={{ display: 'none' }}
                        />
                        <input
                          type='text'
                          value={number + '@gmail.com'}
                          ftype='email'
                          id='Email'
                          name='Email'
                          style={{ display: 'none' }}
                          maxLength='100'
                        />

                        <img
                          src={loginkey}
                          alt='logo'
                          className='w-full h-16'
                        />
                        <h4 className='text-center text-red-600 font-bold'>
                          Get A Quote/Offer
                        </h4>

                        <div className='mt-2 py-8'>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            type='text'
                            id='Phone'
                            name='Phone'
                            minLength='10'
                            maxLength='10'
                            value={number}
                            autoComplete='off'
                            onChange={(e) =>
                              setNumber(
                                e.target.value.replace(/[^1-9 ]/g, '') &&
                                  e.target.value.replace(/ /g, '')
                              )
                            }
                            required
                            placeholder='Enter mobile number'
                          />
                          {!pattern.test(number) && number.length === 10 ? (
                            <small className='text-red-500'>
                              phone number is invalid
                            </small>
                          ) : (
                            ''
                          )}
                        </div>

                        <div className='flex items-center justify-center space-x-5 mb-5'>
                          <a
                            href='https://wa.me/919848898488'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center'
                          >
                            <IoLogoWhatsapp
                              size={20}
                              className='text-green-700 mr-1'
                            />
                            WhatsApp
                          </a>
                          <a
                            href='https://wa.me/919848898488'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center'
                          >
                            <BsTelephoneForward size={20} className='mr-1' />
                            Call us
                          </a>
                        </div>

                        <div className='flex items-center space-x-2 mb-5'>
                          <input
                            id='comments'
                            type='checkbox'
                            className=' h-4 w-4 border-gray-300 rounded'
                            required
                          />
                          <label
                            htmlFor='comments'
                            className='text-gray-700 text-sm'
                          >
                            I agree to the Privacy Policy and Terms of Service.
                          </label>
                        </div>

                        <button
                          type='submit'
                          onClick={handleSubmit}
                          className='w-full rounded-md border shadow-sm py-2 mb-3 bg-blue-800 font-medium text-white hover:bg-red-700 text-sm'
                        >
                          {loading ? (
                            <div className='flex items-center justify-center'>
                              <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                              Loading
                            </div>
                          ) : (
                            'SUBMIT'
                          )}
                        </button>
                      </form> */}
                      <img src={loginkey} alt='logo' className='w-full h-10' />
                      <h4 className='text-center text-red-600 font-bold'>
                        Get A Quote/Offer
                      </h4>
                      <LeadPopup />
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };

  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Popup />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-maruti-suzuki-dealers' element={<About />} />

          {/*====== Cars ======*/}
          <Route
            path='/maruti-alto-800-on-road-price-in-hyderabad'
            element={<Alto />}
          />
          <Route
            path='/all-new-maruti-alto-k10-on-road-price-in-hyderabad'
            element={<AltoK10 />}
          />
          <Route
            path='/maruti-wagon-r-on-road-price-in-hyderabad'
            element={<Wagonr />}
          />
          <Route path='/the-all-new-celerio' element={<Celerio />} />
          <Route
            path='/maruti-swift-car-on-road-price-in-hyderabad'
            element={<Swift />}
          />
          <Route
            path='/maruti-swift-dzire-on-road-price-in-hyderabad'
            element={<Dzire />}
          />
          <Route
            path='/maruti-s-presso-on-road-price-in-hyderabad'
            element={<Spresso />}
          />
          <Route
            path='/maruti-ertiga-on-road-price-in-hyderabad'
            element={<Ertiga />}
          />
          <Route
            path='/maruti-new-brezza-on-road-price-in-hyderabad'
            element={<Brezza />}
          />
          <Route
            path='/maruti-eeco-on-road-price-in-hyderabad'
            element={<Eeco />}
          />

          {/*====== CNG Cars ======*/}
          <Route path='/maruti-new-swift-cng' element={<SwiftCNG />} />
          <Route
            path='/maruti-alto-800-cng-on-road-price-in-hyderabad'
            element={<AltoCNG />}
          />
          <Route
            path='/maruti-brezza-cng-on-road-price'
            element={<BrezzaCNG />}
          />
          <Route path='/alto-k10-cng' element={<AltoK10CNG />} />
          <Route
            path='/maruti-wagonr-cng-on-road-price-in-hyderabad'
            element={<WagonrCNG />}
          />
          <Route
            path='/maruti-swift-dzire-cng-on-road-price-in-hyderabad'
            element={<DzireCNG />}
          />
          <Route
            path='/maruti-s-presso-cng-on-road-price-in-hyderabad'
            element={<SpressoCNG />}
          />
          <Route
            path='/maruti-ertiga-cng-on-road-price-in-hyderabad'
            element={<ErtigaCNG />}
          />
          <Route
            path='/maruti-eeco-cng-on-road-price-in-hyderabad'
            element={<EecoCNG />}
          />
          <Route
            path='/maruti-celerio-cng-on-road-price-in-hyderabad'
            element={<CelerioCNG />}
          />

          {/*====== Tour ======*/}
          <Route
            path='/maruti-alto-tour-h1-on-road-price-in-hyderabad'
            element={<Tourh1alto />}
          />
          <Route
            path='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad'
            element={<Tourh3wagonr />}
          />
          <Route
            path='/maruti-dzire-tour-s-on-road-price-in-hyderabad'
            element={<Toursdzire />}
          />
          <Route
            path='/maruti-eeco-tour-v-on-road-price-in-hyderabad'
            element={<Tourveeco />}
          />
          <Route
            path='/maruti-ertiga-tour-m-on-road-price-in-hyderabad'
            element={<Tourmertiga />}
          />

          {/*====== Outlets ======*/}
          <Route path='/showrooms' element={<Arena />} />
          <Route path='/true-value' element={<Truevalue />} />
          <Route
            path='/maruti-suzuki-car-service-center'
            element={<WorkShop />}
          />
          <Route
            path='/maruti-driving-school-locations'
            element={<DrivingSchoolOutlet />}
          />

          {/*====== Services ======*/}
          <Route
            path='/maruti-suzuki-car-insurance-renewal'
            element={<Insurance />}
          />
          <Route
            path='/maruti-suzuki-car-finance-services'
            element={<Finance />}
          />
          <Route path='/corporate' element={<Corporate />} />
          <Route path='/subscribe' element={<ServiceSubscribe />} />
          <Route
            path='/maruti-suzuki-driving-school'
            element={<DrivingSchool />}
          />
          {/*====== Arena Cars ======*/}
          <Route path='/maruti-suzuki-new-cars' element={<ArenaCars />} />
          <Route path='/maruti-suzuki-cng-cars' element={<CngCars />} />
          <Route path='/maruti-suzuki-tour-cars' element={<TourCars />} />

          {/*====== More ======*/}
          <Route path='/maruti-suzuki-car-offers-page' element={<Offers />} />
          <Route
            path='/maruti-car-service-centers-near-me'
            element={<BookAService />}
          />
          <Route path='/payment' element={<PaymentTest />} />
          {/* <Route path="/paymenttest" element={<PaymentTest />} /> */}
          <Route path='/metaverse' element={<Metaverse />} />
          <Route path='/covid-19' element={<Covid />} />
          <Route path='/compare-cars' element={<Compare />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/awards' element={<Awards />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact-maruti-suzuki-showroom' element={<Contact />} />
          <Route path='/maruti-genuine-accessories' element={<Accessories />} />
          <Route
            path='/maruti-car-terms-and-conditions'
            element={<PrivacyPolicy />}
          />
          <Route path='/thank-you-for-contact-us' element={<ThankYou />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/pricelist' element={<PriceList />} />
          {/*====== Not Found ======*/}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Subscribe />

        <Footer />
      </BrowserRouter>
    </>
  );
}

function LeadPopup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [outlet, setOutlet] = useState('');
  const [method, setMethod] = useState('');
  const [loading, setLoading] = useState(false);

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      sessionStorage.setItem('popup', 'false');
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  function handleSubmit() {
    setLoading(true);

    // First API call
    axios
      .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
        name: name,
        phone: phone,
        model: model,
        outlet: outlet,
      })
      .then((res) => {
        setMethod('POST');
        toast.success('Enquiry sent successfully');
      })
      .catch((err) => {
        setLoading(false);
        toast.error('Something went wrong!');
        console.log(err);
      });

    // Second API call
    axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
      Our Sales consultant will contact you shortly.
      
      Regards
      RKS Motor Pvt. Ltd.
      98488 98488
      www.saboomaruti.in
      www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log('SMS API Response:', res.data);
        // Handle the response from the SMS API if needed
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        // Handle errors from the SMS API if needed
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <>
      <div className='mx-5'>
        <div className=' text-gray-900 py-1 mt-12'>
          <div className='container mx-auto space-y-6 lg:px-0 px-5'>
            <form
              action='https://crm.zoho.in/crm/WebToLeadForm'
              name='WebToLeads54158000007156717'
              method={method}
              // method='POST'
              acceptCharset='UTF-8'
            >
              <input
                type='text'
                className='hidden'
                name='xnQsjsdp'
                value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
              />
              <input type='hidden' name='zc_gad' id='zc_gad' value='' />
              <input
                type='text'
                className='hidden'
                name='xmIwtLD'
                value='3e4c511e1bfac462fb9ac158b261b0d3e54ddbaf41eb8a08b30b4fc061369283'
              />
              <input
                type='text'
                className='hidden'
                name='actionType'
                value='TGVhZHM='
              />
              <input
                type='text'
                className='hidden'
                name='returnURL'
                value='https://www.saboomaruti.in/'
              />
              <div className='grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4'>
                <div>
                  <input
                    className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Name'
                    id='Last_Name'
                    name='Last Name'
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Phone'
                    minlength='10'
                    maxlength='10'
                    id='Mobile'
                    name='Phone'
                    value={phone}
                    onChange={(e) =>
                      setPhone(
                        e.target.value.replace(/[^1-9 ]/g, '') &&
                          e.target.value.replace(/ /g, '')
                      )
                    }
                  />
                </div>

                <div>
                  <select
                    id='LEADCF6'
                    name='LEADCF6'
                    onChange={(e) => setModel(e.target.value)}
                    className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  >
                    <option>Select Model</option>
                    <option value='ALTO'>ALTO</option>
                    <option value='ALTO K10'>ALTO K10</option>
                    <option value='WAGON R'>WAGON R</option>
                    <option value='CELERIO'>CELERIO</option>
                    <option value='SWIFT'>SWIFT</option>
                    <option value='DZIRE'>DZIRE</option>
                    <option value='S-PRESSO'>S-PRESSO</option>
                    <option value='ERTIGA'>ERTIGA</option>
                    <option value='BREZZA'>BREZZA</option>
                    <option value='EECO'>EECO</option>
                  </select>
                </div>
                <div>
                  <select
                    id='LEADCF23'
                    name='LEADCF23'
                    onChange={(e) => setOutlet(e.target.value)}
                    className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  >
                    <option>Select Outlet</option>
                    <option value='Somajiguda'>Somajiguda</option>
                    <option value='Malakpet'>Malakpet</option>
                    <option value='Secunderabad'>Secunderabad</option>
                    <option value='Kushaiguda'>Kushaiguda</option>
                    <option value='Kompally'>Kompally</option>
                    <option value='Shamirpet'>Shamirpet</option>
                    <option value='Narsingi'>Narsingi</option>
                    <option value='Kodangal'>Kodangal</option>
                  </select>
                </div>
              </div>
              <div className='flex items-center space-x-1 my-3'>
                <input id='comments' name='comments' type='checkbox' required />
                <label htmlFor='comments' className='font-medium text-gray-900'>
                  I Agree
                </label>
              </div>
              <p className='text-gray-900 mb-2'>
                <span className='font-semibold'>Disclaimer :</span> I agree that
                by clicking the ‘Submit’ button below, I am explicitly
                soliciting a call / Message from Saboo Maruti (RKS Motor Pvt.
                Ltd) or its Representatives on my ‘Mobile’
              </p>
              <button
                type='submit'
                onClick={handleSubmit}
                className='h-10 inline-flex justify-center mr-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              >
                {loading ? (
                  <div className='flex items-center justify-center'>
                    <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                    Loading
                  </div>
                ) : (
                  'SUBMIT'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

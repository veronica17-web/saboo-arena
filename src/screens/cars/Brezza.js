import React, { useState, Fragment, useRef, useMemo } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { Dialog, Transition } from '@headlessui/react';

import {
  brezzaColors,
  brezzaSliders,
  brezzaVariants,
  brezzaMileage,
} from '../../constants/brezzaData';
import BrezzaBanner from '../../assets/banners/vehicles/Buy Maruti Suzuki Brezza 2023 in Hyderabad.webp';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';

function Brezza() {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [method, setMethod] = useState();
  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState('');
  const [showToast, setShowToast] = useState(false);
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

  const pattern = useMemo(() => {
    return /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  }, []);

  useEffect(() => {
    if (
      phone !== '' &&
      phone.length === 10 &&
      !pattern.test(phone) &&
      !loading
    ) {
      if (!showToast) {
        toast.error('Enter a valid phone number', {
          theme: 'colored',
        });
        setShowToast(true);
      }
    } else {
      setShowToast(false);
    }
  }, [phone, pattern, loading, showToast]);

  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Brezza On Road Price in Secunderabad, Hyderabad & 2023
          Offers | All New Hot and Techy Brezza
        </title>
        <meta
          name='title'
          content=' Maruti Suzuki Brezza On Road Price in Secunderabad, Hyderabad & 2023
          Offers | All New Hot and Techy Brezza'
        />
        <meta
          name='description'
          content='Maruti Suzuki Brezza in Secunderabad & Hyderabad. Best price & offers on Maruti Suzuki Brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. '
        />
        {/* <meta
          name="keywords"
          content="Suzuki brezza on road price, Suzuki brezza offers, Suzuki brezza price, Suzuki brezza service center, maruti Suzuki brezza on road price, maruti Suzuki brezza offers, maruti Suzuki brezza price, maruti Suzuki brezza service center, maruti Suzuki brezza service center near me, maruti suzuki  brezza price, maruti suzuki Vitara brezza on road price, maruti suzuki Vitara brezza offers,maruti suzuki Vitara brezza, Vitara brezza on road price, Vitara brezza 2022 offers, Vitara brezza 2022 price, Vitara brezza on road price in hyderabad, breza offers in hyderabad, Vitara brezza price in hyderabad, maruti Vitara brezza 2022 price, maruti Vitara brezza 2022 on road price, maruti Vitara brezza 2022 offers, maruti Vitara brezza 2022 price in hyderabad, maruti Vitara brezza 2022 on road price in hyderabad, Maruti Suzuki Vitara brezza 2022 price, Maruti Suzuki Vitara brezza 2022 on road price, maruti suzuki Vitara brezza 2022 offers,  vitara Vitara brezza offers, Vitara Vitara brezza price, vitara Vitara brezza on road price, vitara Vitara brezza 2022 offers, vitara Vitara brezza 2022 price, vitara Vitara brezza 2022 on road price, vitara Vitara brezza 2022 offers,Vitara brezza on road price, Vitara brezza offers, Vitara brezza price, Vitara brezza service center, maruti Vitara brezza on road price, maruti Vitara brezza offers, maruti Vitara brezza price, maruti Vitara brezza service center, maruti Vitara brezza service center near me, maruti suzuki Vitara brezza price, maruti suzuki Vitara brezza on road price, maruti suzuki Vitara brezza offers,maruti suzuki Vitara brezza, Vitara brezza on road price, Vitara brezza 2022 offers, Vitara brezza 2022 price, Vitara brezza on road price in hyderabad, breza offers in hyderabad, ,Vitara brezza price in hyderabad, maruti Vitara brezza 2022 price, maruti Vitara brezza 2022 on road price, maruti Vitara brezza 2022 offers, maruti Vitara brezza 2022 price in hyderabad, maruti Vitara brezza 2022 on road price in hyderabad, Maruti Suzuki Vitara brezza 2022 price, Maruti Suzuki Vitara brezza 2022 on road price, maruti suzuki Vitara brezza 2022 offers,"
        /> */}
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/maruti-new-brezza-on-road-price-in-hyderabad'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Vitara Brezza Price | Vitara Brezza Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Vitara brezza in Secunderabad & Hyderabad.Brezza 2022 Price Starts at 7.84* Lakh. Best price & offers on Maruti Vitara brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals.'
        />
        <meta property='og:image' content='img/og-tags/breeza.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/maruti-new-brezza-on-road-price-in-hyderabad'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Vitara Brezza Price | Vitara Brezza Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Vitara brezza in Secunderabad & Hyderabad.Brezza 2022 Price Starts at 7.84* Lakh. Best price & offers on Maruti Vitara brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals.'
        />
        <meta property='twitter:image' content='img/og-tags/breeza.webp' />
      </Helmet>
      <Header />
      <img
        src={BrezzaBanner}
        className='max-w-full w-full lg:mt-16'
        alt='Buy Maruti Suzuki Brezza 2023 in Hyderabad'
      />
      <CarsSlider />
      <div className='mx-5'>
        <Colors />
        <PriceTable />
        <Table />
      </div>
      <div className='bg-[#1b72b7] py-12 mt-12'>
        <div className='container mx-auto space-y-5 lg:px-0 px-5'>
          <h3 className='text-xl font-semibold text-white'>
            GET BREZZA ON-ROAD PRICE IN HYDERABAD
          </h3>
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
              value='https://www.saboomaruti.in/thank-you-for-contact-us'
            />
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
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
                  value={phone}
                  id='Mobile'
                  name='Phone'
                  required
                  minlength='10'
                  maxlength='10'
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/[^1-9 ]/g, '') &&
                        e.target.value.replace(/ /g, '')
                    )
                  }
                />
                {phone.length > 0 && phone.length < 10 ? (
                  <small className='text-red-500'>
                    Phone number must be 10 digits
                  </small>
                ) : !pattern.test(phone) && phone.length === 10 ? (
                  <small className='text-red-500'>
                    Phone number is invalid
                  </small>
                ) : (
                  ''
                )}
              </div>

              <div>
                <select
                  id='LEADCF6'
                  name='LEADCF6'
                  onChange={(e) => setModel(e.target.value)}
                  className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  defaultValue='Brezza'
                >
                  <option disabled>Select Model</option>

                  <optgroup label='SUV'>
                    <option value='Brezza'>Brezza</option>
                  </optgroup>
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
                  <option value='RKS Motor - Somajiguda'>
                    RKS Motor - Somajiguda
                  </option>
                  <option value='RKS Motor - Malakpet'>
                    RKS Motor - Malakpet
                  </option>
                  <option value='RKS Motor - Secunderabad'>
                    RKS Motor - Secunderabad
                  </option>
                  <option value='RKS Motor - Kushaiguda'>
                    RKS Motor - Kushaiguda
                  </option>
                  <option value='RKS Motor - Kompally'>
                    RKS Motor - Kompally
                  </option>
                  <option value='RKS Motor - Shamirpet'>
                    RKS Motor - Shamirpet
                  </option>
                  <option value='RKS Motor - Narsingi'>
                    RKS Motor - Narsingi
                  </option>
                  <option value='RKS Motor - Kodangal'>
                    RKS Motor - Kodangal
                  </option>
                </select>
              </div>
            </div>
            {/* <div className='flex items-center space-x-1 my-3'>
              <input id='comments' name='comments' type='checkbox' required />
              <label htmlFor='comments' className='font-medium text-gray-200'>
                I Agree
              </label>
            </div>
            <p className='text-gray-200 mb-2'>
              <span className='font-semibold'>Disclaimer :</span> I agree that
              by clicking the ‘Submit’ button below, I am explicitly soliciting
              a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
              Representatives on my ‘Mobile’
            </p> */}
            <button
              type='submit'
              disabled={
                pattern.test(phone) && phone.length === 10 ? false : true
              }
              onClick={handleSubmit}
              className='h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
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
            <div className='flex items-start py-1 '>
              <div className='ml-2 text-sm'>
                <label
                  htmlFor='disclaimer'
                  className='font-medium text-gray-700'
                >
                  <span className='text-white font-bold'>Disclaimer</span>
                  <span className='text-white'>
                    : By clicking 'SUBMIT', you have agreed to our
                  </span>
                  <a
                    href='/maruti-car-terms-and-conditions'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-2  text-sm  text-red-600 '
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/specifications/Brezza2022_new.webp'
        alt='brochure'
        className='w-full'
      />
    </>
  );
}

const CarsSlider = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [model, setModel] = useState('');
  const [method, setMethod] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [showToast, setShowToast] = useState(false);
  const cancelButtonRef = useRef(null);

  function handleSubmit() {
    setLoading(true);

    // First API call
    axios
      .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
        name: name,
        email: email,
        phone: phone,
        model: model,
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

  const pattern = useMemo(() => {
    return /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  }, []);

  useEffect(() => {
    if (
      phone !== '' &&
      phone.length === 10 &&
      !pattern.test(phone) &&
      !loading
    ) {
      if (!showToast) {
        toast.error('Enter a valid phone number', {
          theme: 'colored',
        });
        setShowToast(true);
      }
    } else {
      setShowToast(false);
    }
  }, [phone, pattern, showToast, loading]);

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 my-8 sm:px-0 px-5'>
      <div>
        <ImageGallery
          lazyLoad={true}
          autoPlay={true}
          thumbnailPosition='left'
          showPlayButton={false}
          items={brezzaSliders}
        />
      </div>

      <div className='my-auto'>
        <div className='flex flex-col items-center sm:flex-row sm:items-start'>
          <p className='text-3xl font-semibold mb-2 sm:mb-0 sm:mr-4'>
            Maruti Brezza
          </p>
          <img
            className='w-12 h-7  mr-2'
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/AGS.webp'
            alt=''
          />
          <img
            className='w-14 h-7 mr-2'
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/S-CNG_mimimum+black.webp'
            alt=''
          />
          <img
            className='w-14 h-7 mr-2 shadow-2xl'
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/K-SERIES.webp'
            alt=''
          />
        </div>

        <p className='font-semibold'>
          Ex-Showroom Price:
          <span className='text-red-600 ml-3'>₹&nbsp;8.29 - 14.14 Lakh*</span>
        </p>
        <div className='flex items-center flex-wrap mt-5'>
          <div className='flex items-center space-x-3 mr-7'>
            <img
              src={require('../../assets/icons/speedometer.png')}
              className='h-8 w-8'
              alt='speedometer'
            />
            <p className='text-sm'>
              Engine <br />
              <span>1462 CC</span>
            </p>
          </div>

          <div className='flex items-center space-x-3 mx-3 mb-1'>
            <img
              src={require('../../assets/icons/gas-station.png')}
              className='h-8 w-8'
              alt='gas-station'
            />
            <p className='text-sm'>
              Mileage (KM/L)
              <br />
              <span>
                19.80<sup>*</sup>
              </span>
            </p>
          </div>

          <div className='flex items-center space-x-3 mr-7 mb-1'>
            <img
              src={require('../../assets/icons/car.png')}
              className='h-8 w-8'
              alt='car-icon'
            />
            <p className='text-sm'>
              Power (kW) <br />
              <span>75.8</span>
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2 mt-5 mb-1'>
          <button
            className='px-4 py-1.5 text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-500 rounded shadow-sm'
            onClick={() => setOpen(true)}
          >
            Get Best Offers
          </button>
        </div>
        <p className='h-px my-6 w-full bg-gray-300'></p>
        {/* <p className="flex items-center">
          <BsCalendarCheck className="mr-1" />
          Delivery from Saboo RKS, 7-30 days
        </p> */}
        <p className='mt-2 mb-5 font-semibold'>
          Our professional and well-trained staff is ready to assist you
        </p>
        <div className='flex items-center space-x-2 mt-5 mb-1'>
          <a
            href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Brezza2022_Hot_Techy_SUV_Broucher.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-1.5 text-sm bg-red-600 border hover:bg-red-500 text-white rounded shadow-sm uppercase'
          >
            View Brochure
          </a>
          <a
            href='/compare-cars'
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-1.5 text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-500 rounded shadow-sm'
          >
            Compare
          </a>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-10'
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <div className='fixed z-10 inset-0 overflow-y-auto'>
              <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                  enterTo='opacity-100 translate-y-0 sm:scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                  leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                >
                  <form
                    action='https://crm.zoho.in/crm/WebToLeadForm'
                    name='WebToLeads54158000000752015'
                    method={method}
                    // method='POST'
                    acceptCharset='UTF-8'
                  >
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='xnQsjsdp'
                      value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
                    />
                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='xmIwtLD'
                      value='3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92'
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='actionType'
                      value='TGVhZHM='
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='returnURL'
                      value='https://www.saboomaruti.in/thank-you-for-contact-us'
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      id='ldeskuid'
                      name='ldeskuid'
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      id='LDTuvid'
                      name='LDTuvid'
                    />
                    <Dialog.Panel className='relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full'>
                      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                        <div className='mt-3'>
                          <Dialog.Title
                            as='h3'
                            className='text-lg leading-6 font-medium text-gray-900 text-center'
                          >
                            Book A Test Drive / Get Offers
                          </Dialog.Title>
                          <div className='mt-2 space-y-3'>
                            <div className='mt-2 py-5 space-y-3'>
                              <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                  Name
                                </label>
                                <input
                                  type='text'
                                  id='Last_Name'
                                  required
                                  name='Last Name'
                                  onChange={(e) => setName(e.target.value)}
                                  className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                                />
                              </div>

                              <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                  Email
                                </label>
                                <input
                                  type='email'
                                  ftype='email'
                                  id='Email'
                                  name='Email'
                                  onChange={(e) => setEmail(e.target.value)}
                                  className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                                />
                              </div>

                              <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                  Phone
                                </label>
                                <input
                                  className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                                  type='text'
                                  maxLength='10'
                                  minLength='10'
                                  required
                                  id='Phone'
                                  name='Phone'
                                  value={phone}
                                  onChange={(e) =>
                                    setPhone(
                                      e.target.value.replace(/[^1-9 ]/g, '') &&
                                        e.target.value.replace(/ /g, '')
                                    )
                                  }
                                />
                                {phone.length > 0 && phone.length < 10 ? (
                                  <small className='text-red-500'>
                                    Phone number must be 10 digits
                                  </small>
                                ) : !pattern.test(phone) &&
                                  phone.length === 10 ? (
                                  <small className='text-red-500'>
                                    Phone number is invalid
                                  </small>
                                ) : (
                                  ''
                                )}
                              </div>

                              <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                  Model
                                </label>
                                <select
                                  id='LEADCF6'
                                  name='LEADCF6'
                                  onChange={(e) => setModel(e.target.value)}
                                  className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                >
                                  <optgroup label='SUV'>
                                    <option value='Brezza'>Brezza</option>
                                  </optgroup>
                                </select>
                              </div>
                            </div>

                            {/* <div className='flex items-center space-x-2 mb-5'>
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
                              I agree to the Privacy Policy and Terms of
                              Service.
                            </label>
                          </div> */}
                            <div className='flex items-start '>
                              <div className='ml-2  text-sm'>
                                <label
                                  htmlFor='disclaimer'
                                  className='font-medium text-gray-700'
                                >
                                  <span className='text-black font-bold'>
                                    Disclaimer
                                  </span>
                                  <span className='text-black'>
                                    : By clicking 'SUBMIT', you have agreed to
                                    our
                                  </span>
                                  <a
                                    href='/maruti-car-terms-and-conditions'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='px-2  text-sm  text-red-600 '
                                  >
                                    Terms and Conditions
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                        <button
                          type='submit'
                          disabled={
                            pattern.test(phone) && phone.length === 10
                              ? false
                              : true
                          }
                          onClick={handleSubmit}
                          className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm'
                        >
                          Submit
                        </button>
                        <button
                          type='button'
                          className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </form>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='container mx-auto bg-gray-100 rounded py-8'>
      {brezzaColors.map((item) => (
        <img
          key={item.id}
          src={item.img}
          className={item.id === current ? 'mx-auto sm:h-80' : 'hidden'}
          alt={item.id}
        />
      ))}
      <div className='flex items-center justify-center space-x-3 sm:space-y-0 space-y-1'>
        <p
          className={
            current === 1
              ? 'h-5 rounded-full w-5 animate-bounce bg-[#5d5135]'
              : 'h-5 rounded-full w-5 bg-[#5d5135]'
          }
          onClick={(e) => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#264b9c] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#264b9c]'
          }
          onClick={(e) => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#8d8d8d] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#8d8d8d] '
          }
          onClick={(e) => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #5d5135 50%, #ffffff 50%)',
          }}
          onClick={(e) => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300 animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300'
          }
          onClick={(e) => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #e62924 50%, #3e403f 50%)',
          }}
          onClick={(e) => setCurrent(6)}
        ></p>
        <p
          className={
            current === 7
              ? 'h-5 rounded-full w-5 bg-[#e62924] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#e62924]'
          }
          onClick={(e) => setCurrent(7)}
        ></p>
        <p
          className={
            current === 8
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #5d5135 50%, #000 50%)',
          }}
          onClick={(e) => setCurrent(8)}
        ></p>
        <p
          className={
            current === 9
              ? 'h-5 rounded-full w-5 bg-[#c5c5c5] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#c5c5c5]'
          }
          onClick={(e) => setCurrent(9)}
        ></p>
      </div>
    </div>
  );
};

const PriceTable = () => {
  return (
    <div className='overflow-scroll md:overflow-hidden'>
      <table className='table-auto border-collapse border border-slate-400 uppercase w-full container mx-auto my-8 text-left text-sm'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Variants
            </th>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Transmission
            </th>

            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Ex-Showroom Price
            </th>
          </tr>
        </thead>
        <tbody>
          {brezzaVariants?.map((item) => (
            <tr key={item.id}>
              <td className='border border-slate-300 px-3 py-1.5'>
                {item.title}
              </td>
              <td className='border border-slate-300 px-3 py-1.5'>
                {item.transmission}
              </td>

              <td className='border border-slate-300 px-3 py-1.5'>
                ₹&nbsp;{item.price} Lakh<sup>*</sup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Table = () => {
  return (
    <div className='overflow-scroll md:overflow-hidden'>
      <table className='table-auto border-collapse border border-slate-400 uppercase w-full container mx-auto my-8 text-left text-sm'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Variants
            </th>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Transmission
            </th>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Mileage
            </th>
          </tr>
        </thead>
        <tbody>
          {brezzaMileage?.map((item) => (
            <tr key={item.id}>
              <td className='border border-slate-300 px-3 py-1.5'>
                {item.fueltype}
              </td>
              <td className='border border-slate-300 px-3 py-1.5'>
                {item.transmission}
              </td>
              <td className='border border-slate-300 px-3 py-1.5'>
                {item.mileage} <sup>*</sup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='w-full container mx-auto my-auto text-left text-sm italic font-extralight text-red-500'>
        <span className='font-semibold'>Disclaimer:</span> The prices and
        mileage information provided in the table above are indicative and
        subject to change. The actual prices and mileage of Maruti Suzuki
        vehicles may vary based on factors such as location, dealer, variant,
        and other applicable conditions. For the most accurate and up-to-date
        information, please contact your nearest Saboo RKS Motor Maruti Suzuki
        dealership.
      </p>
    </div>
  );
};
export default Brezza;

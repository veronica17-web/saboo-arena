import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Tab } from '@headlessui/react';
import { FaPhoneAlt, FaEnvelope, FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';

function Contact() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [outlet, setOutlet] = useState('');
  const [model, setModel] = useState('');
  const [method, setMethod] = useState();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  function handleSubmit() {
    setLoading(true);

    // First API call
    axios
      .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
        name: name,
        email: email,
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
          Saboo Maruti | Contact us for any Maruti Car Sales, Feedback &
          Complaints
        </title>
        <meta
          name='title'
          content='Saboo Maruti | Contact us for any Maruti Car Sales, Feedback & Complaints'
        />
        <meta
          name='description'
          content='Contact your nearest Saboo Maruti showroom for any Maruti Suzuki vehicle enquiry. For queries about any of the Maruti cars, feedback or complaints call now 9848898488'
        />
        <meta
          name='keywords'
          content='car smowrooms, saboo sontact us, saboo true value'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboomaruti.in/' />
        <meta
          property='og:title'
          content='Saboo Maruti | Contact us for any Maruti Car Sales, Feedback & Complaints'
        />
        <meta
          property='og:description'
          content='Contact your nearest Saboo Maruti showroom for any Maruti Suzuki vehicle enquiry. For queries about any of the Maruti cars, feedback or complaints call now 9848898488.'
        />
        <meta property='og:image' content='img/og-tags/contact_us.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboomaruti.in/' />
        <meta
          property='twitter:title'
          content='Saboo Maruti | Contact us for any Maruti Car Sales, Feedback & Complaints'
        />
        <meta
          property='twitter:description'
          content='Contact your nearest Saboo Maruti showroom for any Maruti Suzuki vehicle enquiry. For queries about any of the Maruti cars, feedback or complaints call now 9848898488.'
        />
        <meta property='twitter:image' content='img/og-tags/contact_us.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/Contact-Us-Banner.webp'
        className='w-full max-w-full lg:mt-16'
        alt='1'
      />
      <p className='text-2xl font-semibold text-red-600 text-center mt-5 mb-2'>
        Contact Us
      </p>
      <p className='text-sm text-center'>
        With the query that you have. Please fill in the details.
      </p>

      <div className='max-w-7xl mx-auto pt-14 pb-12 px-5 md:px-0'>
        <div className='grid md:grid-cols-4 lg:gap-10'>
          <div className='col-span-3'>
            <Tab.Group>
              <Tab.List className='space-x-3 mb-7'>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-blue-800 text-gray-50 mb-3 max-w-[260px] w-full ml-3 focus:outline-none'
                      : 'bg-gray-100 text-blue-800 border hover:bg-blue-800 hover:text-gray-300 mb-3 max-w-[260px] w-full ml-3 focus:outline-none'
                  }
                >
                  <p className='inline-flex py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent group uppercase'>
                    <FaCar className='mr-2 w-5 h-5' />
                    Car Enquiry
                  </p>
                </Tab>

                {/* <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-blue-800 text-gray-50 mb-3 max-w-[260px] w-full ml-3 focus:outline-none'
                      : 'bg-gray-100 text-blue-800 border hover:bg-blue-800 hover:text-gray-300 mb-3 max-w-[260px] w-full ml-3 focus:outline-none'
                  }
                >
                  <p className='inline-flex py-4 px-4 text-sm font-medium text-center group uppercase '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='mr-2 w-5 h-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Complaints / Queries
                  </p>
                </Tab> */}

                {/* <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-blue-800 text-gray-50 mb-3 max-w-[260px] w-full ml-3 focus:outline-none'
                      : 'bg-gray-100 text-blue-800 border hover:bg-blue-800 hover:text-gray-300 mb-3 max-w-[260px] w-full ml-3 focus:outline-none'
                  }
                >
                  <p className='inline-flex py-4 px-4 text-sm font-medium text-center group uppercase '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='mr-2 h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Feedback
                  </p>
                </Tab> */}
              </Tab.List>
              <Tab.Panels>
                {/* Car Enquiry */}
                <Tab.Panel>
                  <form
                    action='https://crm.zoho.in/crm/WebToLeadForm'
                    name='WebToLeads54158000001051349'
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
                      value='3e4c511e1bfac462fb9ac158b261b0d3a71de3d00f508dc0492cb2893d56c4b9'
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
                    <div className='space-y-4'>
                      <div className='grid md:grid-cols-2 gap-3 mb-3'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Name
                          </label>
                          <input
                            type='text'
                            id='Last Name'
                            name='Last Name'
                            onChange={(e) => setName(e.target.value)}
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                            required
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Phone
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
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
                          ) : !pattern.test(phone) && phone.length === 10 ? (
                            <small className='text-red-500'>
                              Phone number is invalid
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Email
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                            type='email'
                            ftype='email'
                            id='Email'
                            name='Email'
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Outlet
                          </label>
                          <select
                            id='LEADCF23'
                            name='LEADCF23'
                            onChange={(e) => setOutlet(e.target.value)}
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                          >
                            <option>Select Outlet</option>
                            <optgroup label='Showrooms'>
                              <option value='Somajiguda'>
                                RKS Motor - Somajiguda
                              </option>
                              <option value='Malakpet'>
                                RKS Motor - Malakpet
                              </option>
                              <option value='Secunderabad'>
                                RKS Motor - Secunderabad
                              </option>
                              <option value='Kushaiguda'>
                                RKS Motor - Kushaiguda
                              </option>
                              <option value='Kompally'>
                                RKS Motor - Kompally
                              </option>
                              <option value='Shamirpet'>
                                RKS Motor - Shamirpet
                              </option>
                              <option value='RKS Motor - Narsingi'>
                                RKS Motor - Narsingi
                              </option>
                              <option value='RKS Motor - Kodangal'>
                                RKS Motor - Kodangal
                              </option>
                            </optgroup>
                            <optgroup label='True Value'>
                              <option value='True Value - Somajiguda'>
                                Somajiguda
                              </option>
                              <option value='True Value - Malakpet'>
                                Malakpet
                              </option>
                              <option value='True Value - Kompally'>
                                Kompally
                              </option>
                              <option value='True Value - Kushaiguda'>
                                Kushaiguda
                              </option>
                            </optgroup>
                            <optgroup label='Workshop'>
                              <option value='Workshop - Somajiguda'>
                                Somajiguda
                              </option>
                              <option value='Workshop - Kodangal'>
                                Kodangal
                              </option>
                              <option value='Workshop - Moosarambagh'>
                                Moosarambagh
                              </option>
                              <option value='Workshop - Uppal'>Uppal</option>
                              <option value='Workshop - Tadbund'>
                                Tadbund
                              </option>
                              <option value='Workshop - Nampally'>
                                Nampally
                              </option>
                              <option value='Workshop - Kushaiguda'>
                                Kushaiguda
                              </option>
                              <option value='Workshop - Kukatpally'>
                                Kukatpally
                              </option>
                              <option value='Workshop - Shamirpet'>
                                Shamirpet
                              </option>
                            </optgroup>
                            <optgroup label='Driving School'>
                              <option value='Driving School - Nampally'>
                                Nampally
                              </option>
                              <option value='Driving School - Malakpet'>
                                Malakpet
                              </option>
                              <option value='Driving School - Kushaiguda'>
                                Kushaiguda
                              </option>
                            </optgroup>
                          </select>
                        </div>

                        <div className='col-span-2'>
                          <label className='block text-sm font-medium text-gray-700'>
                            Model
                          </label>
                          <select
                            id='LEADCF6'
                            name='LEADCF6'
                            onChange={(e) => setModel(e.target.value)}
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                          >
                            <option>Select Model</option>
                            <optgroup label='Hatchback'>
                              <option value='Alto K10'>Alto K10</option>
                              <option value='Alto 800'>Alto</option>
                              <option value='Wagon R'>Wagon R</option>
                              <option value='Celerio'>Celerio</option>
                              <option value='Swift'>Swift</option>
                            </optgroup>

                            <optgroup label='Sedan'>
                              <option value='Dzire'>Dzire</option>
                            </optgroup>

                            <optgroup label='micro SUV'>
                              <option value='S-Presso'>S-Presso</option>
                            </optgroup>
                            <optgroup label='MPV'>
                              <option value='Ertiga'>Ertiga</option>
                            </optgroup>
                            <optgroup label='SUV'>
                              <option value='Brezza'>Brezza</option>
                            </optgroup>
                            <optgroup label='Mini Van'>
                              <option value='Eeco'>Eeco</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='Lead Source'
                            name='Lead Source'
                          >
                            <option selected value='WEBSITE&#x20;VISIT'>
                              WEBSITE VISIT
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF4'
                            name='LEADCF4'
                          >
                            <option selected value='ARENA'>
                              ARENA
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF3'
                            name='LEADCF3'
                          >
                            <option selected value='INBOUND'>
                              INBOUND
                            </option>
                          </select>
                        </div>
                      </div>

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

                      {/* <p className='text-gray-700'>
                        <span className='text-black font-bold'>Disclaimer</span>
                        : I agree that by clicking the ‘Submit’ button below, I
                        am explicitly soliciting a call/Message from Saboo
                        Maruti (RKS Motor Pvt. Ltd) or its Representatives on my
                        ‘Mobile’.
                      </p>
                      <div className='flex my-3'>
                        <input
                          id='disclaimer'
                          name='disclaimer'
                          type='checkbox'
                          className='h-4 w-4 rounded'
                        />
                        <div className='ml-2 text-sm'>
                          <label
                            htmlFor='disclaimer'
                            className='font-medium text-gray-700'
                          >
                            Please Agree with following Disclaimer
                          </label>
                        </div>
                      </div> */}
                      <button
                        className='bg-blue-800 hover:bg-red-600 duration-500 text-white rounded py-2.5 px-10'
                        type='submit'
                        disabled={
                          pattern.test(phone) && phone.length === 10
                            ? false
                            : true
                        }
                        onClick={handleSubmit}
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
                    </div>
                  </form>
                </Tab.Panel>

                {/* Complaints */}
                {/* <Tab.Panel>
                  <form
                    action='https://crm.zoho.in/crm/WebToLeadForm'
                    name='WebToLeads54158000001051349'
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
                      value='3e4c511e1bfac462fb9ac158b261b0d3a71de3d00f508dc0492cb2893d56c4b9'
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
                    <div className='space-y-4'>
                      <div className='grid md:grid-cols-2 gap-3 mb-3'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Name
                          </label>
                          <input
                            type='text'
                            id='Last Name'
                            name='Last Name'
                            onChange={(e) => setName(e.target.value)}
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                            required
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Phone
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
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
                          {!pattern.test(phone) && phone.length === 10 ? (
                            <small className='text-red-500'>
                              phone number is invalid
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Email
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                            type='email'
                            ftype='email'
                            id='Email'
                            name='Email'
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Outlet
                          </label>
                          <select
                            id='LEADCF23'
                            name='LEADCF23'
                            onChange={(e) => setOutlet(e.target.value)}
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                          >
                            <option>Select Outlet</option>
                            <optgroup label='True Value'>
                              <option value='True Value -Kompally'>
                                RKS Motor -Kompally
                              </option>
                              <option value='True Value - Somajiguda'>
                                RKS Motor - Somajiguda
                              </option>
                              <option value='True Value - Malakpet'>
                                RKS Motor - Malakpet
                              </option>
                              <option value='True Value - Kushaiguda'>
                                RKS Motor - Kushaiguda
                              </option>
                            </optgroup>
                            <optgroup label='Showroom'>
                              <option value='Showroom - Somajiguda'>
                                RKS Motor - Somajiguda
                              </option>
                              <option value='Showroom - Malakpet'>
                                RKS Motor - Malakpet
                              </option>
                              <option value='Showroom - Secunderabad'>
                                RKS Motor - Secunderabad
                              </option>
                              <option value='Showroom - Kushaiguda'>
                                RKS Motor - Kushaiguda
                              </option>
                              <option value='Showroom - Shamirpet'>
                                RKS Motor - Shamirpet
                              </option>
                              <option value='RKS Motor - Narsingi'>
                                RKS Motor - Narsingi
                              </option>
                              <option value='RKS Motor - Kodangal'>
                                RKS Motor - Kodangal
                              </option>
                            </optgroup>
                            <optgroup label='Workshop'>
                              <option value='Workshop - Somajiguda'>
                                RKS Motor - Somajiguda
                              </option>
                              <option value='Workshop - Uppal'>
                                RKS Motor - Uppal
                              </option>
                              <option value='Workshop - Nampally'>
                                RKS Motor - Nampally
                              </option>
                              <option value='Workshop - Malakpet'>
                                RKS Motor - Malakpet
                              </option>
                              <option value='Workshop - Secunderabad'>
                                RKS Motor - Secunderabad
                              </option>
                              <option value='Workshop - Kushaiguda'>
                                RKS Motor - Kushaiguda
                              </option>
                              <option value='Workshop - Kukatpally'>
                                RKS Motor - Kukatpally
                              </option>
                              <option value='Workshop - Shamirpet'>
                                RKS Motor - Shamirpet
                              </option>
                            </optgroup>
                            <optgroup label='Driving School'>
                              <option value='Driving School - Nampally'>
                                RKS Motor - Nampally
                              </option>
                              <option value='Driving School - Malakpet'>
                                RKS Motor - Malakpet
                              </option>
                              <option value='Driving School - Kushaiguda'>
                                RKS Motor - Kushaiguda
                              </option>
                            </optgroup>
                          </select>
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
                            <option>Select Model</option>
                            <option value='Maruti Alto K10'>
                              Maruti Alto K10
                            </option>
                            <option value='Maruti Alto 800'>Maruti Alto</option>
                            <option value='Maruti Wagon R'>
                              Maruti Wagon R
                            </option>
                            <option value='Maruti Celerio'>
                              Maruti New Celerio
                            </option>
                            <option value='Maruti Swift'>Maruti Swift</option>
                            <option value='Maruti Dzire'>Maruti Dzire</option>
                            <option value='Maruti S-Presso'>
                              Maruti S-Presso
                            </option>
                            <option value='Maruti Ertiga'>Maruti Ertiga</option>
                            <option value='Maruti Brezza'>Maruti Brezza</option>
                            <option value='Maruti Eeco'>Maruti Eeco</option>
                          </select>
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Comments
                          </label>
                          <textarea
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                            type='text'
                            id='Description'
                            name='Description'
                          ></textarea>
                        </div>

                        <div className='zcwf_row wfrm_fld_dpNn hidden'>
                          <div className='zcwf_col_fld'>
                            <select
                              className='zcwf_col_fld_slt'
                              id='Lead Source'
                              name='Lead Source'
                            >
                              <option selected value='WEBSITE&#x20;VISIT'>
                                WEBSITE VISIT
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF4'
                            name='LEADCF4'
                          >
                            <option selected value='ARENA'>
                              ARENA
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF3'
                            name='LEADCF3'
                          >
                            <option selected value='INBOUND'>
                              INBOUND
                            </option>
                          </select>
                        </div>
                      </div>

                      <p className='text-gray-700'>
                        <span className='text-black font-bold'>Disclaimer</span>
                        : I agree that by clicking the ‘Submit’ button below, I
                        am explicitly soliciting a call/Message from Saboo
                        Maruti (RKS Motor Pvt. Ltd) or its Representatives on my
                        ‘Mobile’.
                      </p>
                      <div className='flex my-3'>
                        <input
                          id='disclaimer'
                          name='disclaimer'
                          type='checkbox'
                          className='h-4 w-4 rounded'
                        />
                        <div className='ml-2 text-sm'>
                          <label
                            htmlFor='disclaimer'
                            className='font-medium text-gray-700'
                          >
                            Please Agree with following Disclaimer
                          </label>
                        </div>
                      </div>
                      <button
                        className='bg-blue-800 hover:bg-red-600 duration-500 text-white rounded py-2.5 px-10'
                        type='submit'
                        onClick={handleSubmit}
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
                    </div>
                  </form>
                </Tab.Panel> */}

                {/* Feedback */}
                {/* <Tab.Panel>
                  <form
                    action='https://crm.zoho.in/crm/WebToLeadForm'
                    name='WebToLeads54158000001051349'
                    method='POST'
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
                      value='3e4c511e1bfac462fb9ac158b261b0d3a71de3d00f508dc0492cb2893d56c4b9'
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
                    <div className='space-y-4'>
                      <div className='grid md:grid-cols-2 gap-3 mb-3'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Name
                          </label>
                          <input
                            type='text'
                            id='Last Name'
                            name='Last Name'
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                            required
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Phone
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
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
                          {!pattern.test(phone) && phone.length === 10 ? (
                            <small className='text-red-500'>
                              phone number is invalid
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Email
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                            type='email'
                            ftype='email'
                            id='Email'
                            name='Email'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Outlet
                          </label>
                          <select
                            id='LEADCF23'
                            name='LEADCF23'
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                          >
                            <option>Select Outlet</option>
                            <optgroup label='True Value'>
                              <option value='True Value -Kompally'>
                                RKS Motor -Kompally
                              </option>
                              <option value='True Value - Somajiguda'>
                                RKS Motor - Somajiguda
                              </option>
                              <option value='True Value - Malakpet'>
                                RKS Motor - Malakpet
                              </option>
                              <option value='True Value - Kushaiguda'>
                                RKS Motor - Kushaiguda
                              </option>
                            </optgroup>
                            <optgroup label='Showroom'>
                              <option value='Showroom - Somajiguda'>
                                RKS Motor - Somajiguda
                              </option>
                              <option value='Showroom - Malakpet'>
                                RKS Motor - Malakpet
                              </option>
                              <option value='Showroom - Secunderabad'>
                                RKS Motor - Secunderabad
                              </option>
                              <option value='Showroom - Kushaiguda'>
                                RKS Motor - Kushaiguda
                              </option>
                              <option value='Showroom - Shamirpet'>
                                RKS Motor - Shamirpet
                              </option>
                              <option value='RKS Motor - Narsingi'>
                                RKS Motor - Narsingi
                              </option>
                              <option value='RKS Motor - Kodangal'>
                                RKS Motor - Kodangal
                              </option>
                            </optgroup>
                            <optgroup label='Workshop'>
                              <option value='Workshop - Somajiguda'>
                                RKS Motor - Somajiguda
                              </option>
                              <option value='Workshop - Uppal'>
                                RKS Motor - Uppal
                              </option>
                              <option value='Workshop - Nampally'>
                                RKS Motor - Nampally
                              </option>
                              <option value='Workshop - Malakpet'>
                                RKS Motor - Malakpet
                              </option>
                              <option value='Workshop - Secunderabad'>
                                RKS Motor - Secunderabad
                              </option>
                              <option value='Workshop - Kushaiguda'>
                                RKS Motor - Kushaiguda
                              </option>
                              <option value='Workshop - Kukatpally'>
                                RKS Motor - Kukatpally
                              </option>
                              <option value='Workshop - Shamirpet'>
                                RKS Motor - Shamirpet
                              </option>
                            </optgroup>
                            <optgroup label='Driving School'>
                              <option value='Driving School - Nampally'>
                                RKS Motor - Nampally
                              </option>
                              <option value='Driving School - Malakpet'>
                                RKS Motor - Malakpet
                              </option>
                              <option value='Driving School - Kushaiguda'>
                                RKS Motor - Kushaiguda
                              </option>
                            </optgroup>
                          </select>
                        </div>

                        <div className='zcwf_row wfrm_fld_dpNn hidden'>
                          <div className='zcwf_col_fld'>
                            <select
                              className='zcwf_col_fld_slt'
                              id='Lead Source'
                              name='Lead Source'
                            >
                              <option selected value='WEBSITE&#x20;VISIT'>
                                WEBSITE VISIT
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF4'
                            name='LEADCF4'
                          >
                            <option selected value='ARENA'>
                              ARENA
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF3'
                            name='LEADCF3'
                          >
                            <option selected value='INBOUND'>
                              INBOUND
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Comments
                        </label>
                        <textarea
                          className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                          type='text'
                          id='Description'
                          name='Description'
                        ></textarea>
                      </div>

                      <p className='text-gray-700'>
                        <span className='text-black font-bold'>Disclaimer</span>
                        : I agree that by clicking the ‘Submit’ button below, I
                        am explicitly soliciting a call/Message from Saboo
                        Maruti (RKS Motor Pvt. Ltd) or its Representatives on my
                        ‘Mobile’.
                      </p>
                      <div className='flex my-3'>
                        <input
                          id='disclaimer'
                          name='disclaimer'
                          type='checkbox'
                          className='h-4 w-4 rounded'
                        />
                        <div className='ml-2 text-sm'>
                          <label
                            htmlFor='disclaimer'
                            className='font-medium text-gray-700'
                          >
                            Please Agree with following Disclaimer
                          </label>
                        </div>
                      </div>
                      <button
                        className='bg-blue-800 hover:bg-red-600 duration-500 text-white rounded py-2.5 px-10'
                        type='submit'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Tab.Panel> */}
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className='col-span-1 px-3 mt-4 space-y-3'>
            <a href='tel:9848898488' className='flex items-center'>
              <FaPhoneAlt className='mr-2 text-gray-700' />
              Sales | 9848898488
            </a>
            <a href='tel:9848898488' className='flex items-center'>
              <FaEnvelope className='mr-2 text-gray-700' />
              Email | info@saboomaruti.in
            </a>
            <div className='flex items-center text-center flex-col space-y-3'>
              <Link
                to='/showrooms'
                className='w-full py-2 bg-black text-white rounded'
              >
                Our Showrooms
              </Link>
              <Link
                to='/maruti-suzuki-car-service-center'
                className='w-full py-2 bg-black text-white rounded'
              >
                Our Workshops
              </Link>
              <Link
                to='/true-value'
                className='w-full py-2 bg-black text-white rounded'
              >
                True Value
              </Link>
              <Link
                to='/maruti-driving-school-locations'
                className='w-full py-2 bg-black text-white rounded'
              >
                Driving School
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

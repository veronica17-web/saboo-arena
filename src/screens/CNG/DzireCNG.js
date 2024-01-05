import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import Dzire1 from '../../assets/banners/dzire.webp';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CgSpinner } from 'react-icons/cg';
import { Helmet } from 'react-helmet';

function DzireCNG() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [outlet, setOutlet] = useState('');
  const [method, setMethod] = useState('');
  const [loading, setLoading] = useState(false);
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
          Maruti Dzire CNG On Road Price in Secunderabad, Hyderabad & 2022
          Offers | Maruti Dzire CNG Offers
        </title>
        <meta
          name='title'
          content='MMaruti Dzire CNG On Road Price in Secunderabad, Hyderabad & 2022 Offers | Maruti Dzire CNG Offers'
        />
        <meta
          name='description'
          content='Maruti Dzire CNG in Secunderabad & Hyderabad. Dzire CNG Mileage 31.12KMPL. Best price & offers on Maruti Dzire at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. Also, Get On-Road Price for Maruti Dzire online. '
        />
        <meta
          name='keywords'
          content='dzire on road price, dzire offers, dzire price, dzire service center, maruti dzire on road price, maruti dzire offers, maruti dzire price, maruti dzire service center, maruti dzire service center near me, maruti suzuki dzire price, maruti suzuki dzire on road price, maruti suzuki dzire offers,maruti suzuki dzire, dzire on road price, dzire 2022 offers, dzire 2022 price, dzire on road price in hyderabad, breza offers in hyderabad, dzire price in hyderabad, maruti dzire 2022 price, maruti dzire 2022 on road price, maruti dzire 2022 offers, maruti dzire 2022 price in hyderabad, maruti dzire 2022 on road price in hyderabad, Maruti Suzuki dzire 2022 price, Maruti Suzuki dzire 2022 on road price, maruti suzuki dzire 2022 offers,  vitara dzire offers, Vitara dzire price, vitara dzire on road price, vitara dzire 2022 offers, vitara dzire 2022 price, vitara dzire 2022 on road price, vitara dzire 2022 offers'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/cng/maruti-swift-dzire-cng-on-road-price-in-hyderabad'
        />
        <meta
          property='og:title'
          content='Maruti Dzire CNG On Road Price in Secunderabad, Hyderabad| Dzire CNG  Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Dzire CNG in Secunderabad & Hyderabad. Dzire CNG Mileage 31.12KMPL. Best price & offers on Maruti Dzire at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. Also, Get On-Road Price for Maruti Dzire online.'
        />
        <meta property='og:image' content='../img/og-tags/dzire.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/cng/maruti-swift-dzire-cng-on-road-price-in-hyderabad'
        />
        <meta
          property='twitter:title'
          content='Maruti Dzire CNG On Road Price in Secunderabad, Hyderabad| Dzire CNG  Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Dzire CNG in Secunderabad & Hyderabad. Dzire CNG Mileage 31.12KMPL. Best price & offers on Maruti Dzire at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. Also, Get On-Road Price for Maruti Dzire online.'
        />
        <meta property='twitter:image' content='../img/og-tags/dzire.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/dzire/Dzire_cng+web+banner.webp'
        className='max-w-full w-full lg:mt-16'
        alt='1'
      />
      <div className='container mx-auto pt-6 lg:px-0 md:px-3 py-6'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
          <div className='space-y-3 justify-between px-6'>
            <p className='uppercase font-bold text-4xl'>DZIRE S-CNG</p>
            <p className='font-bold text-green-900'>
              7.46 lakh <sup>*</sup>
              <p className='font-light text-green-900'>ex-show room price</p>
            </p>

            <p className='text-s'>
              Move up to a new world of green and efficient mobility with Maruti
              Suzuki Dzire S-CNG that is a reflection of your lifestyle with a
              touch of class in it. The Dzire now comes equipped with
              Factory-fitted S-CNG technology and offers superior performance,
              enhanced safety, and impressive fuel efficiency.
            </p>
            <br></br>
            <p className='text-s'>
              S-CNG technology is available in the VXI and ZXI variants of
              Dzire. The factory-fitted CNG kit is integrated into the mainframe
              of the car on the factory floor by expert technicians. It has a
              leak-proof and corrosion-resistant design thanks to the use of
              stainless steel pipes. Equipped with an Intelligent Injection
              System and dual interdependent ECUs, the new Dzire S-CNG delivers
              consistent performance across different terrains and driving
              conditions. It also comes with features like CNG fuel level
              indicator, micro-switch for safety while CNG fuel filling is in
              process and NGV receptacle for quicker CNG refueling. Switch to
              cleaner mobility with the Maruti Suzuki Dzire S-CNG.
            </p>
            <br></br>
            <div className='flex flex-row'>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/dzire/factory.webp'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/dzire/performence.webp'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/dzire/safetye.webp'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
            </div>
          </div>
          <div className='object-contain h-70 w-100 object-left pl-9 pt-5'>
            <img className='object-left' src={Dzire1} alt='vehicle_banner' />{' '}
          </div>
        </div>
      </div>

      <div className='bg-[#1b72b7] py-12 mt-12'>
        <div className='container mx-auto space-y-5 lg:px-0 px-5'>
          <h3 className='text-xl font-semibold text-white'>
            GET DZIRE CNG ON-ROAD PRICE IN HYDERABAD
          </h3>
          <form
            action='https://crm.zoho.in/crm/WebToLeadForm'
            name='WebToLeads54158000083979838'
            method={method}
            // method='POST'
            acceptCharset='UTF-8'
          >
            <input
              type='text'
              className='hidden'
              name='xnQsjsdp'
              value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
            />
            <input type='hidden' name='zc_gad' id='zc_gad' value='' />
            <input
              type='text'
              className='hidden'
              name='xmIwtLD'
              value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
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
                  required
                  onChange={(e) => setName(e.target.value)}
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
                  className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  defaultValue='Dzire CNG'
                >
                  <option disabled>Select Model</option>

                  <option value='Dzire CNG'>Dzire CNG</option>
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
              className='h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              type='submit'
              disabled={
                pattern.test(phone) && phone.length === 10 ? false : true
              }
              onClick={handleSubmit}
              // type='submit'
              // onClick={handleSubmit}
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
      <div className='container mx-auto pt-6 lg:px-0 md:px-3 py-6'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
          <div className='space-y-3 justify-between px-6'>
            <p className='uppercase font-bold text-4xl'>DZIRE S-CNG features</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <Accordian />
      </div>
    </>
  );
}

function Accordian() {
  return (
    <>
      <Tab.Group>
        <div className='flex items-center justify-end'>
          <Tab.List className='space-x-1 p-5'>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow'
                  : 'bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
              }
            >
              Features
            </Tab>

            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow'
                  : 'bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
              }
            >
              Specifications
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* exterior */}
            <Tab.Panel>
              <div className='flex items-center bg-gray-100  justify-between'>
                <p className='flex-1 border px-5 py-3'>Features</p>
                <p className='flex-1 border px-5 py-3'>VXI CNG</p>
                <p className='flex-1 border px-5 py-3'>ZXI CNG</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Exterior</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Combination LED lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          High Mounted LED Stop Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Body Coloured Door Handles
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Body Coloured ORVMs
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Side Turn Indicators on ORVMs
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Wheels</p>
                        <p className='flex-1 border px-5 py-3'>Steel</p>
                        <p className='flex-1 border px-5 py-3'>Alloy</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Wheel Cover</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Door Outer - Weather Strip
                        </p>
                        <p className='flex-1 border px-5 py-3'>Black</p>
                        <p className='flex-1 border px-5 py-3'>Chrome</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>INTERIOR</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Leather Wrapped Steering Wheel
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Modern wood accent with Natural gloss finish
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Dual - Tone Interiors
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Multi - Information Display
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Outside Temperature Display
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Low - Fuel Warning Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Urban Sating Chrome Accents on Console, Gear Lever &
                          Steering Wheel
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Door Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Tachometer</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Door Arm rest with Fabric
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Co. Driver Side Sunvisor with Vanity Mirror
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Driver Side Sunvisor with Vanity Miror
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        COMFORT AND CONVENIENCE
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Engine Push Start-Stop Button with Smart Key
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear AC Vent</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Seat Center Armrest with Cup Holder
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Remote Keyless entry system
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Manual Air Conditioner with Heater
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Automatic Climate Control
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Pollen Filter
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Accessory Socket
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Accessory Socket Mobile Pocket
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Central Locking
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Electromagnetic Trunk Opening
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Gear Shift Indicator
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Power Windows (Front + Rear)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Electrically Adjustable ORVMs
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Electrically Foldable ORVMS
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Driver Side Auto Down Power Window
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Driver Side Auto Up Power Window
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Tilt Steering
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Height Adjustable Driver Seat
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Adjustable Front Sear Headrests
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Luggage room Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Bottle Holde on all Doors
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        SAFETY AND SECURITY{' '}
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Suzuki HEARTECT Body
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          ABS with EBD and Brake Assist
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Dual Airbags</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Reverse Parking Sensors
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Anti - Theft Security System
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Fog Lamps
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Defogger
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          ISOFix Child Sear Anchorages
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Seat Belt with PreTensioner
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Pinch Gaurd Power Window (Driver)
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Engine Immobilizer
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Speed - Sensitive Door Locking
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Night and Day Adjustable IRVM
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>^Speed Alert</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Driver & Co - Driver Seat Belt Reminder
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Key - Left Warning Lamp & Buzzer
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Fog Lamp Garnish (Chrome)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Door Ajar Warning Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        AUDIO & ENTERTAINMENT
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          All New Feather Touch Audio System
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Smartplay Studio System with Navigation and Voice
                          Command (Android Auto and Apple CarPlay enabled)
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          AHA Platform (Through Smartplay Studio App)
                        </p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Audio Player with USB, CD, AUX and FM/AM with
                          Bluetooth Connectivity
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Steering Mounted Audio & Calling Controls
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Audio Remote Control
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>
                          ✔ (Through Smartplay Studio app)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Door Speakers (4 Speakers)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Tweeters</p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Antenna</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <div className='flex items-center bg-gray-100  justify-between'>
                <p className='flex-1 border px-5 py-3'>Specifications</p>
                <p className='flex-1 border px-5 py-3'>VXI CNG</p>
                <p className='flex-1 border px-5 py-3'>ZXI CNG</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Dimensions</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Length
                        </p>
                        <p className='flex-1 border px-5 py-3'>3995 mm</p>
                        <p className='flex-1 border px-5 py-3'>3995 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Width
                        </p>
                        <p className='flex-1 border px-5 py-3'>1735 mm</p>
                        <p className='flex-1 border px-5 py-3'>1735 mm</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Height
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1515 mm (Unladen)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1515 mm (Unladen)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Wheelbase</p>
                        <p className='flex-1 border px-5 py-3'>2450 mm</p>
                        <p className='flex-1 border px-5 py-3'>2450 mm</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>ENGINE</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Capacity</p>
                        <p className='flex-1 border px-5 py-3'>1197 cc</p>
                        <p className='flex-1 border px-5 py-3'>1197 cc</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Number of Cylinders
                        </p>
                        <p className='flex-1 border px-5 py-3'>4</p>
                        <p className='flex-1 border px-5 py-3'>4</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Max Power (CNG)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          57.0 kW @6000 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          57.0 kW @6000 rpm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Max Torque (CNG)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          98.5 Nm @4300 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          98.5 Nm @4300 rpm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Transmission</p>
                        <p className='flex-1 border px-5 py-3'>5MT</p>
                        <p className='flex-1 border px-5 py-3'>5MT</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        Suspension System
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Front</p>
                        <p className='flex-1 border px-5 py-3'>
                          MacPherson strut
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          MacPherson strut
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3'>Torsion Beam</p>
                        <p className='flex-1 border px-5 py-3'>Torsion Beam</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Steering</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Turning Radius
                        </p>
                        <p className='flex-1 border px-5 py-3'>4.8 m</p>
                        <p className='flex-1 border px-5 py-3'>4.8 m</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Power Steering Type
                        </p>
                        <p className='flex-1 border px-5 py-3 '>Electric</p>
                        <p className='flex-1 border px-5 py-3'>Electric</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Brakes</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Front</p>
                        <p className='flex-1 border px-5 py-3'>Disc</p>
                        <p className='flex-1 border px-5 py-3'>Disc</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Others</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          PETROL: 37 CNG: 55L (water equivalent)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          PETROL: 37 CNG: 55L (water equivalent)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Kerb Weight</p>
                        <p className='flex-1 border px-5 py-3'>990-995 KG</p>
                        <p className='flex-1 border px-5 py-3'>990-995 KG</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Gross Vehcile Weight
                        </p>
                        <p className='flex-1 border px-5 py-3'>1405 KG</p>
                        <p className='flex-1 border px-5 py-3'>1405 KG</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Seating Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3'>5</p>
                        <p className='flex-1 border px-5 py-3'>5</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Tyre Size (Steel)
                        </p>
                        <p className='flex-1 border px-5 py-3'>165/65 R14</p>
                        <p className='flex-1 border px-5 py-3'>165/65 R14</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Tyre Size (Alloy)
                        </p>
                        <p className='flex-1 border px-5 py-3'>185/65 R15</p>
                        <p className='flex-1 border px-5 py-3'>185/65 R15</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
      <br></br>
      <div className='text-xs px-5'>
        <p>
          <sup>*</sup>Black glass on the vehicles is due to lighting effect.
        </p>
        <p>
          <sup>*</sup>
          <sup>*</sup>Car models and accessories shown may vary from actual
          product. Images are used for illustration purpose only.
        </p>
        <p>
          <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
        </p>
        <p>
          <sup>*</sup>Prices shown above are ex showroom Delhi.
        </p>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
        <div className='space-y-3 my-auto text-left px-6'>
          <p className='uppercase font-bold text-4xl'>DZIRE S-CNG FAQ's</p>
        </div>
        <div className='object-contain h-50 w-100 object-right pt-14'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase font-bold'>
                    1. WHAT ARE THE DIFFERENT MODES FOR DRIVING THE NEW DZIRE
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    The new Dzire S-CNG let you choose from basically the
                    following three fuel modes: -
                  </p>
                  <br />
                  <ul className='list-disc'>
                    <li>
                      Petrol Mode: In this mode, the car starts and drives on
                      petrol.
                    </li>
                  </ul>
                  <ul className='list-disc'>
                    <li>
                      Auto Mode: In this mode, the car starts on petrol and
                      automatically switches over to CNG. This one is a highly
                      recommended fuel mode.
                    </li>
                  </ul>
                  <ul className='list-disc'>
                    <li>
                      Forced CNG mode: In this mode, the car gets started on
                      CNG. This is advised to be used only when there is
                      absolutely no petrol left in the car.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase font-bold'>
                    2. IS THE CNG KIT IN DZIRE S-CNG TESTED FOR SAFETY ?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    Dzire S-CNG is extensively tested with the CNG setup in
                    place to offer enhanced performance and durability. The car
                    boasts of a leak-proof design, sturdy pipe-line structure
                    made of stainless steel and joints which are
                    corrosion-resistant as well. It comes with an integrated
                    wiring harness which eliminates the chances of short
                    circuits. This means the safety quotient is also well-taken
                    care of in this car.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase font-bold'>
                    3. CAN I GET MY NEW DZIRE S-CNG TUNED FROM OUTSIDE ?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    Getting your new Dzire S-CNG tuned from an unauthorized
                    workshop is not advised. Each component of the Maruti Suzuki
                    factory-fitted S-CNG system is integrated into the car by
                    specialized experts. The right tuning equipment to calibrate
                    the kit properly will only be available at a Maruti Suzuki
                    authorized service center. So, it is recommended to visit
                    the nearest Maruti Suzuki Arena service workshops for the
                    same.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase font-bold'>
                    4. HOW FREQUENTLY SHOULD I GET THE S-CNG KIT CHECKED?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    It is recommended to get the kit checked at least once in
                    three years for better service. This includes the CNG
                    pipeline setup, electrical harness, and the CNG tank itself
                    which has a tank capacity of 60L (water equivalent). You can
                    visit the nearest service centre for the same.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export default DzireCNG;

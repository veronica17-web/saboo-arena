// import React, { useState } from 'react';
import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import AltoCNG1 from '../../assets/banners/Alto800_Mojito_Green.webp';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CgSpinner } from 'react-icons/cg';
import { Helmet } from 'react-helmet';

function AltoCNG() {
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
          Maruti Alto 800 CNG Price in Hyderabad | Alto CNG Mileage &
          Specifications
        </title>
        <meta
          name='title'
          content='Maruti Alto 800 CNG Price in Hyderabad | Alto CNG Mileage & Specifications'
        />
        <meta
          name='description'
          content='Maruti Suzuki Alto 800 Price in Hyderabad & Secunderabad. Alto CNG Mileage 31.6KMPL. Best price and offers on Maruti Alto 800 CNG at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals.'
        />
        <meta
          name='keywords'
          content='alto on road price, alto offers, alto price, alto service center, maruti alto on road price, maruti alto offers, maruti alto price, maruti alto service center, maruti alto service center near me, maruti suzuki alto price, maruti suzuki alto on road price, maruti suzuki alto offers,maruti suzuki alto, alto on road price, alto 2022 offers, alto 2022 price, alto on road price in hyderabad, breza offers in hyderabad, alto price in hyderabad, maruti alto 2022 price, maruti alto 2022 on road price, maruti alto 2022 offers, maruti alto 2022 price in hyderabad, maruti alto 2022 on road price in hyderabad, Maruti Suzuki alto 2022 price, Maruti Suzuki alto 2022 on road price, maruti suzuki alto 2022 offers,  vitara alto offers, Vitara alto price, vitara alto on road price, vitara alto 2022 offers, vitara alto 2022 price, vitara alto 2022 on road price, vitara alto 2022 offers'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/cng/maruti-alto-800-cng-on-road-price-in-hyderabad'
        />
        <meta
          property='og:title'
          content='Maruti Alto 800 CNG Price in Hyderabad | Alto CNG Mileage & Specifications | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki Alto 800 Price in Hyderabad & Secunderabad. Alto CNG Mileage 31.6KMPL. Best price and offers on Maruti Alto 800 CNG at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals.'
        />
        <meta property='og:image' content='../img/og-tags/alto.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/cng/maruti-alto-800-cng-on-road-price-in-hyderabad'
        />
        <meta
          property='twitter:title'
          content='Maruti Alto 800 CNG Price in Hyderabad | Alto CNG Mileage & Specifications | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki Alto 800 Price in Hyderabad & Secunderabad. Alto CNG Mileage 31.6KMPL. Best price and offers on Maruti Alto 800 CNG at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals.'
        />
        <meta property='twitter:image' content='../img/og-tags/alto.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/Website%2BSaboo%2BRKS%2BMotor%2BMaruti%2BSuzuki%2BArena%2BMarch%2BHoli%2BOffer.webp'
        className='max-w-full w-full lg:mt-16'
        alt='1'
      />
      <div className='container mx-auto pt-6 md:px-3 py-6'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
          <div className='space-y-3 justify-between px-6'>
            <p className='uppercase font-bold text-4xl'>New Alto S-CNG</p>
            <p className='font-bold text-green-900'>
              5.13 lakh <sup>*</sup>
              <p className='font-light text-red-400'>ex-show room price</p>
            </p>

            <p className='text-s'>
              The New Alto S-CNG is among the line-up of environment-friendly
              cars offered by Maruti Suzuki that come equipped with the
              revolutionary S-CNG technology. With 30.1 kW @ 6000 rpm of power
              and 60 Nm @ 3500 rpm of torque, the New Alto S-CNG is peppy to
              drive. The car’s tank capacity allows it to hold up to 60 L(Water
              equivalent filling capacity). The New Alto S-CNG from Maruti
              Suzuki can provide an average mileage is 31.59 km/kg.
            </p>
            <br></br>
            <p className='text-s'>
              The New Alto S-CNG features a factory-fitted S-CNG kit that has a
              leak proof design to help ensure that safety is not compromised.
              The use of advanced components contributes to the engine’s longer
              lifespan. The New Alto S-CNG by Maruti Suzuki comes equipped with
              dual interdependent ECUs and an Intelligent Injection System, with
              which it manages to offer smoother pickup, great drivability, and
              an overall superior performance.
            </p>
            <br></br>
            <div className='flex flex-row'>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/icon1.png'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/icon2.png'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/icon3.png'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
            </div>
          </div>
          <div className='object-contain h-50 w-100 object-right pt-14'>
            <img src={AltoCNG1} alt='vehicle_banner' />
          </div>
        </div>
      </div>

      <div className='bg-[#1b72b7] py-12 mt-12'>
        <div className='container mx-auto space-y-5 lg:px-0 px-5'>
          <h3 className='text-xl font-semibold text-white'>
            GET ALTO CNG ON-ROAD PRICE IN HYDERABAD
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
                  required
                  name='Last Name'
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
                  defaultValue='Alto CNG'
                >
                  <option disabled>Select Model</option>

                  <option value='Alto CNG'>Alto CNG</option>
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
            <p className='uppercase font-bold text-4xl'>Alto S-CNG features</p>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/alto+logo+for+CNG+page.png'
              className='h-20'
              alt='alto-logo'
            />
          </div>
        </div>
      </div>
      <div className='container mx-auto lg:-mt-10'>
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
                <p className='flex-1 border px-5 py-3'>LXI CNG</p>
                <p className='flex-1 border px-5 py-3'>LXI (O) CNG</p>
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
                          Body Coloured Outside door Handles
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Body Coloured Bumpers
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Wheel Covers (Full)
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
                          Dual-tone interiors
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          B &#38; C Pillar Upper Trims
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          C Pillar Lower Trim (Molded)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Seat Upholstery (Fabric+Vinyl)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Silver Accent Inside Door Handles
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Silver Accent on Steering Wheel
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Silver Accent on Louvers
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
                      <span className='text-base uppercase'>COMFORT</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Air Conditioner With Heater
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Power Steering
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Power Windows
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Assist Grips (Co - Dr. +)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Digital Clock (In Speedometer Display)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Sun Visor (Dr.+Co Dr.)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          RR Seat Head Test - Integrated Type
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Remote Back Door Opener
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Remote Fuel Lid Opener
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
                      <span className='text-base uppercase'>UTILITY</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Console Bottle Holder
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Console Bottle Holder
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Door Trim Map Pocket (Dr.)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Door Trim Map Pocket (Passenger)
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
                      <span className='text-base uppercase'>SAFETY</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Headlight Leveling
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          RR Seat belt ELR Type
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          High Mounted Stop Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Immobiliser</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Wiper &#38; Washer (2 Speed + intermittent)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Tubeless Tyres
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Collapsible Steering Column
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Door Child Lock
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Driver Side Airbag
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Passenger Airbag
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Reverse Parking Sensor
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>ABS with EBD</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Sear Belt Reminder - Dr. + Co - Dr.
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Speed Alert System
                        </p>
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
                <p className='flex-1 border px-5 py-3'>LXI CNG</p>
                <p className='flex-1 border px-5 py-3'>LXI (O) CNG</p>
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
                        <p className='flex-1 border px-5 py-3'>3455 mm</p>
                        <p className='flex-1 border px-5 py-3'>3455 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Width
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1490 mm (Without side molding)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1490 mm (Without side molding)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Width
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1515 mm (With side molding)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1515 mm (With side molding)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Height
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1475 mm (Unladen)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1475 mm (Unladen)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Wheelbase</p>
                        <p className='flex-1 border px-5 py-3'>2360 mm</p>
                        <p className='flex-1 border px-5 py-3'>2360 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Turning Radius
                        </p>
                        <p className='flex-1 border px-5 py-3'>4.6 m</p>
                        <p className='flex-1 border px-5 py-3'>4.6 m</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Tread (Front)
                        </p>
                        <p className='flex-1 border px-5 py-3'>1295 mm</p>
                        <p className='flex-1 border px-5 py-3'>1295 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Tread (Rear)</p>
                        <p className='flex-1 border px-5 py-3'>1290 mm</p>
                        <p className='flex-1 border px-5 py-3'>1290 mm</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Weight</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Kerb Weight</p>
                        <p className='flex-1 border px-5 py-3'>845 kg</p>
                        <p className='flex-1 border px-5 py-3'>850 kg</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Gross Vehicle Weight
                        </p>
                        <p className='flex-1 border px-5 py-3'>1185 kg</p>
                        <p className='flex-1 border px-5 py-3'>1185 kg</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Engine</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Engine Type</p>
                        <p className='flex-1 border px-5 py-3'>F8D</p>
                        <p className='flex-1 border px-5 py-3'>F8D</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Swept Volume</p>
                        <p className='flex-1 border px-5 py-3'>796 CC</p>
                        <p className='flex-1 border px-5 py-3'>796 CC</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Number of Cylinders
                        </p>
                        <p className='flex-1 border px-5 py-3'>3</p>
                        <p className='flex-1 border px-5 py-3'>3</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Power (CNG)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          30.1 kW @ 6000 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          30.1 kW @ 6000 rpm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Power (Petrol)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          35.3 kW @ 6000 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          35.3 kW @ 6000 rpm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Torque (CNG)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          60 Nm @3500 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          60 Nm @3500 rpm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Torque (Petrol)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          69 Nm @3500 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          69 Nm @3500 rpm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          No. of Valves
                        </p>
                        <p className='flex-1 border px-5 py-3'>12</p>
                        <p className='flex-1 border px-5 py-3'>12</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Transmission</p>
                        <p className='flex-1 border px-5 py-3'>5 Speed MT</p>
                        <p className='flex-1 border px-5 py-3'>5 Speed MT</p>
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
                        <p className='flex-1 border px-5 py-3'>
                          3-Link Rigid Axle Suspension
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          3-Link Rigid Axle Suspension
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Capacity</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Seating Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3'>4</p>
                        <p className='flex-1 border px-5 py-3'>4</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Tank Capacity (CNG)
                        </p>
                        <p className='flex-1 border px-5 py-3 '>
                          60L (Water Equivalent Filling Capacity)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          60L (Water Equivalent Filling Capacity)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Tank Capacity (Petrol)
                        </p>
                        <p className='flex-1 border px-5 py-3'>35 L</p>
                        <p className='flex-1 border px-5 py-3'>35 L</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Tyres</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Tyre Size</p>
                        <p className='flex-1 border px-5 py-3'>
                          145/80 R12 (Tubeless)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          145/80 R12 (Tubeless)
                        </p>
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
      <br></br>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 '>
        <div className='space-y-3 my-auto text-left px-6 '>
          <p className='uppercase font-bold text-4xl'>New Alto S-CNG</p>
        </div>
        <div className='object-contain h-50 w-100 object-right pt-14'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    1. WHAT ARE THE DIFFERENT MODES FOR DRIVING THE NEW ALTO
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p className='indent-8'>
                    There are basically three fuel modes in the New Alto S-CNG,
                    which are listed below: Petrol Mode – In this mode, the car
                    starts and drives on Petrol. Auto Mode – In this mode, the
                    car starts on Petrol and then automatically switches over to
                    CNG (This is also the mode that is recommended by the
                    company). Forced CNG mode – In this mode, you are allowed to
                    start the car on CNG. This is a mode that is only advised
                    when there is no petrol in the car
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-b-2 px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    2. WHAT SHOULD I DO IF THE CNG MALFUNCTION WARNING LIGHT IN
                    MY ALTO S-CNG KEEPS GLOWING WHEN I AM DRIVING?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p>
                    The reason behind such a situation may vary. So, it is
                    recommended that you take your car to the Maruti Suzuki
                    authorized service centre nearest to you.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-b-2 px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    3. CAN I GET MY NEW ALTO S-CNG TUNED FROM OUTSIDE?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p>
                    Getting your CNG kit tuned from outside is something that is
                    not advisable at all. Since the Alto S-CNG comes equipped
                    with factory-fitted CNG kit, the right tuning equipment for
                    properly calibrating the kit will only be available at a
                    Maruti Suzuki authorized service centre.
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

export default AltoCNG;

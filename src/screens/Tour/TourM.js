import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import TourErtiga from '../../assets/banners/Tour-M.png';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CgSpinner } from 'react-icons/cg';
import { Helmet } from 'react-helmet';

function TourM() {
  const [price, setPrice] = useState('₹ 9,46,000');
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
          Maruti Suzuki Ertiga Tour M Commercial | Commercial Ertiga Tour M Car
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Ertiga Tour M Commercial | Commercial Ertiga Tour M Car'
        />
        <meta
          name='description'
          content='Maruti Suzuki Ertiga Tour M commercial is available in CNG and petrol engine option. Know more about the Tour Mmileage, features, specifications, performance,exterior and interior of Tour M Commercial at Saboo Maruti Suzuki Commercial.'
        />
        <meta
          name='keywords'
          content='ertiga on road price, ertiga offers, ertiga price, ertiga service center, maruti ertiga on road price, maruti ertiga offers, maruti ertiga price, maruti ertiga service center, maruti ertiga service center near me, maruti suzuki ertiga price, maruti suzuki ertiga on road price, maruti suzuki ertiga offers,maruti suzuki ertiga, ertiga on road price, ertiga 2022 offers, ertiga 2022 price, ertiga on road price in hyderabad, breza offers in hyderabad, ertiga price in hyderabad, maruti ertiga 2022 price, maruti ertiga 2022 on road price, maruti ertiga 2022 offers, maruti ertiga 2022 price in hyderabad, maruti ertiga 2022 on road price in hyderabad, Maruti Suzuki ertiga 2022 price, Maruti Suzuki ertiga 2022 on road price, maruti suzuki ertiga 2022 offers,  vitara ertiga offers, Vitara ertiga price, vitara ertiga on road price, vitara ertiga 2022 offers, vitara ertiga 2022 price, vitara ertiga 2022 on road price, vitara ertiga 2022 offers'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/tour/maruti-ertiga-tour-m-on-road-price-in-hyderabad'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Ertiga Tour M Commercial | Commercial Ertiga Tour M Car Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki Ertiga Tour M commercial is available in CNG and petrol engine option. Know more about the Tour Mmileage, features, specifications, performance,exterior and interior of Tour M Commercial at Saboo Maruti Suzuki Commercial. '
        />
        <meta property='og:image' content='../img/og-tags/alto.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/tour/maruti-ertiga-tour-m-on-road-price-in-hyderabad'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Ertiga Tour M Commercial | Commercial Ertiga Tour M Car Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki Ertiga Tour M commercial is available in CNG and petrol engine option. Know more about the Tour Mmileage, features, specifications, performance,exterior and interior of Tour M Commercial at Saboo Maruti Suzuki Commercial.'
        />
        <meta property='twitter:image' content='../img/og-tags/alto.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/ertiga-tour-m/ertiga_M_Web-Banner.jpg'
        className='max-w-full w-full lg:mt-16'
        alt='1'
      />

      <div className='container mx-auto p-5 lg:px-0 flex justify-between flex-wrap items-center'>
        <img
          className='flex items-center flex-wrap'
          src={TourErtiga}
          alt='vehicle_banner'
        />
        <div>
          <div className='flex items-center space-x-5 p-5'>
            <div>
              <p>Petrol</p>
              <p>
                16.11 &nbsp; <span className='text-red-600'>km/l*</span>
              </p>
            </div>
            <div>
              <p>CNG</p>
              <p>
                20.88 &nbsp; <span className='text-red-600'>km/kg*</span>
              </p>
            </div>
          </div>
          <p className='text-xs'>
            *As certified by Test Agency Under Rule 115 (G) of CMVR 1989
          </p>
        </div>
        <div className='p-5'>
          <p className='font-bold'>
            {price} <span className='text-red-600'>*</span>
          </p>
          <p>Select Car Variant</p>
          <select
            onChange={(e) => setPrice(e.target.value)}
            className='w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          >
            <option value='₹ 9,52,000*'>ERTIGA TOUR M PETROL</option>
            <option value='₹ 10,47,000*'>ERTIGA TOUR M (O) CNG</option>
          </select>
        </div>
      </div>
      <div className='container mx-auto p-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/ertiga-tour-m/performance_txt.png'
              className='object-scale-down'
              alt='1'
            />
            <p className='p-2'>
              The S-CNG powered Tour M will offer maximum performance, enhanced
              safety and unmatched convenience. Equipped with Intelligent
              Injection System and dual interdependent ECUs, the MPV ensures
              consistent performance across all terrains. The Auto-Fuel Switch
              allows easy switching of fuel from petrol to CNG, thereby avoiding
              any jerks.
            </p>
            <br></br>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/ertiga-tour-m/safety-txt.png'
              className='object-scale-down p-5'
              alt='1'
            />
            <p className='p-2'>
              Maruti Suzuki Tour M is equipped with a host of safety features
              like Dual Airbags, ABS with EBD, Reverse Parking Sensors as
              standard, which ensure absolute safety for everyone
            </p>
            <ul className='list-disc p-2'>
              <li>ABD with EBD</li>
              <li>Driver Airbag</li>
            </ul>
          </div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/ertiga-tour-m/Tour-M_car1.png'
            className='w-full md:w-auto pt-10'
            alt='1'
          />
        </div>
      </div>
      <div className='bg-[#1b72b7] py-12 mt-12'>
        <div className='container mx-auto space-y-5 lg:px-0 px-5'>
          <h3 className='text-xl font-semibold text-white'>
            GET ERTIGA TOUR M ON-ROAD PRICE IN HYDERABAD
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
                  required
                  onChange={(e) => setName(e.target.value)}
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
                >
                  <option>Select Model</option>
                  <option value='Alto Tour H1'>TOUR H1</option>
                  <option value='WagonR Tour H3'>TOUR H3</option>
                  <option value='Dzire Tour S'>TOUR S</option>
                  <option value='Eeco Tour V'>TOUR V</option>
                  <option value='Ertiga Tour M'>TOUR M</option>
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
                  <option value='RKS Motor - Narsingi'>
                    RKS Motor - Narsingi
                  </option>
                  <option value='RKS Motor - Kodangal'>
                    RKS Motor - Kodangal
                  </option>
                </select>
              </div>
            </div>
            <div className='flex items-center space-x-1 my-3'>
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
            </p>
            <button
              type='submit'
              disabled={
                pattern.test(phone) && phone.length === 10 ? false : true
              }
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

      <div className='container mx-auto'>
        <Accordian />
      </div>
    </>
  );
}

const Accordian = () => {
  return (
    <>
      <Tab.Group>
        <div className='flex items-center justify-start'>
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
                <p className='flex-1 border px-5 py-3 text-center'>PETROL</p>
                <p className='flex-1 border px-5 py-3 text-center'>CNG</p>
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
                          Projector Headlamp (Halogen)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          3D Tail Lamps with LED
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>FrontGrille</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Full Wheel Caps
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Turn Signal Lamp Integrated in ORVM
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Body Coloured Door Handles
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Body Coloured ORVM
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
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
                          Driver Side Sun visor with Ticket Holder
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          2nd Row Seats 60:40 split with Recline
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          3rd Row Seats 540:50 Split with recline
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Gear Shift Knob with Chrome Finish
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Headrest Front Row Seats
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Headrest 2nd Row Seats
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Headrest 3rd Row seats
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Split Type Luggage Board
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Chrome Tipped Parking Brake Lever
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Dual Tone Interiors
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          2nd Row Armrest
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
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
                        CENTRAL CONSOLE AND INSTRUMENT PANEL
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
                          Gear Shift Indicator
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          MID with Coloured TFT
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Digital Clock
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Consumption (Instantaneous and Avg)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Distance to Empty
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Headlamp on Warning
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Door Ajar Warning Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
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
                        SAFETY AND SECURITY
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Dual Airbag</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          ABS with EBD and Brake Assist
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Engine Immobilizer
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Seat Belts with Pre-tensioner & Force Limiters
                          (Dr.+ Co-Dr.)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Seat Belt Reminder Lamp with Buzzer (Dr.+ Co-dr)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Speed Limit
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Speed Sensitive Auto Door Lock
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Security Alarm
                        </p>
                        <p className='flex-1 border px-5 py- text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Central Locking
                        </p>
                        <p className='flex-1 border px-5 py- text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Parking Sensors
                        </p>
                        <p className='flex-1 border px-5 py- text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          ISOFIX Child Sear Anchorages (2nd Row Seats)
                        </p>
                        <p className='flex-1 border px-5 py- text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
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
                        INFOTAINMENT SYSTEM
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
                          Audio System with Electrostatic Touch Buttons
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Bluetooth Connectivity
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Speakers (4)</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          USB and AUX connectivity
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Steering Mounted Audio Control
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Steering Mounted Calling Control
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
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
                        <p className='flex-1 border px-5 py-3 '>Manual AC</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          2nd Row Adjustable AC
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Air Cooled Twin Cup Holder (Console)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Remote Keyless Entry
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Accessory Socket Front Row with Smartphone Storage
                          Space
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Power Window (Fr/Rr) with Dr. side Auto Down Functions
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Day & Night IRVM
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Power Tilt Steering
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Electrical Adjustable ORVM
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Electrical Foldable ORVM
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Cabin Lamp (Fr.+Rr.)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Bottle Holders (in each row)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Passenger Side Sunvisor with Vanity Mirror
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
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
                <p className='flex-1 border px-5 py-3 text-center'>PETROL</p>
                <p className='flex-1 border px-5 py-3 text-center'>CNG</p>
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
                        <p className='flex-1 border px-5 py-3 text-center'>
                          4395 mm
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          4395 mm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Width
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1735 mm
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1735 mm
                        </p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Height
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1690 mm
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1690 mm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Wheelbase</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          2740 mm
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          2740 mm
                        </p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Turning Radius
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          5.2 mm
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          5.2 mm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Boot Space</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          209 L (All 3 Rows UP), 550 L (3rd Row Folded) & 803 L
                          (2nd and 3rd Row Folded)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          {' '}
                          -{' '}
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
                      <span className='text-base uppercase'>Weight</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Gross Vehicle Weight
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1730 kg
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1795 kg
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Kerb Weight</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1145 kg
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1235 kg
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
                      <span className='text-base uppercase'>Engine</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Displacement</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1462 cc
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          1462 cc
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Engine Type</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          K15B
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          K15B
                        </p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Compression Ratio
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          (10.5 <sup>+</sup>
                          <sub>-</sub> 0.3):1
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          (10.5 <sup>+</sup>
                          <sub>-</sub> 0.3):1
                        </p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Bore X Stroke
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          74.0 x 85.0
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          74.0 x 85.0
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Power (Petrol Mode)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          77KW @6000 RPM
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          77KW @6000 RPM
                        </p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Torque (Petrol Mode)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          138 Nm @4400 RPM
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          138 Nm @4400 RPM
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Emission Type
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          BS6
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          BS6
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Power (CNG Mode)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>-</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          68 kW @6000 rpm
                        </p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Torque (CNG Mode)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>-</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          122 kW @4400 rpm
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
                      <span className='text-base uppercase'>
                        SUSPENSION SYSTEM
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
                        <p className='flex-1 border px-5 py-3 text-center'>
                          MacPherson strut & Coil Spring
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          MacPherson strut & Coil Spring
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          MacPherson strut & Coil Spring
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          MacPherson strut & Coil Spring
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
                        <p className='flex-1 border px-5 py-3 text-center'>7</p>
                        <p className='flex-1 border px-5 py-3 text-center'>7</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          45 L
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          65 L (Water Equivalent)
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
                      <span className='text-base uppercase'>
                        Brakes/Tyre Size
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
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Ventilated Disc
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Ventilated Disc
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          (Leading & Trailing) Drum
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          (Leading & Trailing) Drum
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Tyre Size</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          185/65 R 15
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          185/65 R 15
                        </p>
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
    </>
  );
};

export default TourM;

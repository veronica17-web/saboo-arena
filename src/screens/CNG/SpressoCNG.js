import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import OrangeCNG from '../../assets/banners/orange.webp';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';

function SpressoCNG() {
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
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/s-presso_banner.jpg'
        className='max-w-full w-full lg:mt-16'
        alt='1'
      />
      <div className='container mx-auto pt-6 lg:px-0 md:px-3 py-6'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
          <div className='space-y-3 justify-between px-6'>
            <p className='uppercase font-bold text-4xl'>S-PRESSO S-CNG</p>
            <p className='font-bold text-green-900'>
              5.11 lakh <sup>*</sup>
              <p className='font-light text-green-900'>ex-show room price</p>
            </p>

            <p className='text-s'>
              Equipped with the revolutionary S-CNG technology, S-PRESSO S-CNG
              is here for you to live it up and drive green! Producing 50 kW @
              5500 rpm of maximum power and 90 Nm @ 3500 rpm of maximum torque,
              the S-PRESSO S-CNG is spirited to drive. It comes with a CNG tank
              capacity of 55L (water equivalent) and delivers an impressive
              mileage of 31.2 km/kg.
            </p>
            <br></br>
            <p className='text-s'>
              The car has a factory-fitted S-CNG kit which has been integrated
              from the ground up on the factory floor. The CNG setup has a
              leak-proof design and the pipeline structure for CNG flow is made
              up of stainless steel pipes that are corrosion-resistant. To
              ensure optimal performance, S-CNG technology in S-PRESSO has dual
              interdependent ECUs and an Intelligent Injection System – this
              ensures great drivability, smoother pickup, and optimum
              performance.
            </p>
            <br></br>
            <div className='flex flex-row'>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/factory.webp'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/performence.webp'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/safetye.webp'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
            </div>
          </div>
          <div className='object-contain h-70 w-100 object-left pl-9 pt-5'>
            <img className='object-left' src={OrangeCNG} alt='vehicle_banner' />{' '}
          </div>
        </div>
      </div>

      <div className='bg-[#1b72b7] py-12 mt-12'>
        <div className='container mx-auto space-y-5 lg:px-0 px-5'>
          <h3 className='text-xl font-semibold text-white'>
            GET S-PRESSO CNG ON-ROAD PRICE IN HYDERABAD
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
                >
                  <option>Select Model</option>
                  <option value='Swift CNG'>Swift CNG</option>
                  <option value='Alto CNG'>Alto CNG</option>
                  <option value='EECO CNG'>EECO CNG</option>
                  <option value='S-Presso CNG'>S-Presso CNG</option>
                  <option value='Ertiga CNG'>Ertiga CNG</option>
                  <option value='Dzire CNG'>Dzire CNG</option>
                  <option value='Wagon R CNG'>Wagon R CNG</option>
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
      <div className='container mx-auto pt-6 lg:px-0 md:px-3 py-6'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
          <div className='space-y-3 justify-between px-6'>
            <p className='uppercase font-bold text-4xl'>
              S-PRESSO S-CNG features
            </p>
            <p className='font-bold text-green-900'>
              <div className='object-fill'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/s-presso.jpg'
                  alt='s-presso-logo'
                />
              </div>{' '}
            </p>
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
                <p className='flex-1 border px-5 py-3'>LXI CNG</p>
                <p className='flex-1 border px-5 py-3'>VXI CNG</p>
                <p className='flex-1 border px-5 py-3'>LXI (O) CNG</p>
                <p className='flex-1 border px-5 py-3'>VXI (O) CNG</p>
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
                          SmartPlay Dock
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Bluetooth</p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Speakers</p>
                        <p className='flex-1 border px-5 py-3'> - </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          USB connectivity/AUX
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'> - </p>
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
                        INSTRUMENT CLUSTER
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'></Disclosure.Panel>
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
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
        <div className='space-y-3 my-auto text-left px-6'>
          <p className='uppercase font-bold text-4xl'>S-PRESSO S-CNG FAQ'S</p>
        </div>
        <div className='object-contain h-50 w-100 object-right pt-14'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase font-bold'>
                    1. WHAT IS THE FUEL-EFFICIENCY OF MARUTI SUZUKI S-PRESSO
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>

                  <p className='indent-8'>
                    In S-PRESSO S-CNG, the Dual Interdependent ECUs seamlessly
                    communicate with the intelligent injection system that helps
                    in getting optimum air-fuel ratio during combustion. This
                    ensures consistent performance across different terrains and
                    driving conditions.
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
                    2. HOW IS S-PRESSO WITH S-CNG TECHNOLOGY ABLE TO DELIVER
                    SUCH GOOD PERFORMANCE?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    In S-PRESSO S-CNG, the Dual Interdependent ECUs seamlessly
                    communicate with the intelligent injection system that helps
                    in getting optimum air-fuel ratio during combustion. This
                    ensures consistent performance across different terrains and
                    driving conditions.
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
                    3. IS THE CNG KIT IN S-PRESSO S-CNG TESTED FOR SAFETY?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    Offering enhanced performance and improved safety, S-PRESSO
                    is extensively tested with the CNG setup in place. The
                    sturdy pipe-line structure made of stainless steel and
                    integrated wiring harness means safety is well-taken care of
                    in this car.
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
                    4. CAN I GET MY S-PRESSO CNG TUNED FROM OUTSIDE?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    If you want to get your S-PRESSO CNG tuned for consistent
                    performance, always prefer visiting the nearest Maruti
                    Suzuki Arena workshop for the same.
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

export default SpressoCNG;

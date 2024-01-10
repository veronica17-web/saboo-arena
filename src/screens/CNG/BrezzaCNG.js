import React, { useState } from 'react';
import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';

import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CgSpinner } from 'react-icons/cg';
import { Helmet } from 'react-helmet';

function BrezzaCNG() {
  return (
    <>
      <Helmet>
        <title>
          Maruti Brezza CNG On Road Price in Secunderabad, Hyderabad & 2023
          Offers
        </title>
        <meta
          name='title'
          content='Maruti Brezza CNG Price in Hyderabad | Brezza CNG Mileage & Specifications'
        />
        <meta
          name='description'
          content='Maruti Brezza CNG in Secunderabad & Hyderabad. Brezza CNG Mileage . Best price & offers on Maruti Brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. Also, Get On-Road Price for Maruti Brezza CNG online'
        />
        <meta
          name='keywords'
          content='brezza on road price, alto offers, brezza price, brezza service center, maruti brezza on road price, maruti brezza offers, maruti brezza price, maruti brezza service center, maruti brezza service center near me, maruti suzuki brezza price, maruti suzuki brezza on road price, maruti suzuki brezza offers,maruti suzuki brezza, brezza on road price, brezza 2023 offers, brezza 2023 price, brezza on road price in hyderabad, breza offers in hyderabad, brezza price in hyderabad, maruti brezza 2022 price, maruti brezza 2022 on road price, maruti brezza 2022 offers, maruti brezza 2022 price in hyderabad, maruti brezza 2022 on road price in hyderabad, Maruti Suzuki brezza 2022 price, Maruti Suzuki brezza 2022 on road price, maruti suzuki brezza 2022 offers,  vitara ˇ offers, Vitara brezza price, vitara brezza on road price, vitara alto 2022 offers, vitara alto 2022 price, vitara alto 2022 on road price, vitara alto 2022 offers'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://saboomaruti.in/maruti-brezza-cng-on-road-price'
        />
        <meta
          property='og:title'
          content='Maruti Brezza CNG Price in Hyderabad | Alto CNG Mileage & Specifications | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Brezza CNG in Secunderabad & Hyderabad. Brezza CNG Mileage . Best price & offers on Maruti Brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. Also, Get On-Road Price for Maruti Brezza CNG online'
        />
        <meta property='og:image' content='../img/og-tags/alto.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://saboomaruti.in/maruti-brezza-cng-on-road-price'
        />
        <meta
          property='twitter:title'
          content='Maruti Brezza CNG Price in Hyderabad | Brezza CNG Mileage & Specifications | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Brezza CNG in Secunderabad & Hyderabad. Brezza CNG Mileage . Best price & offers on Maruti Brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. Also, Get On-Road Price for Maruti Brezza CNG online'
        />
        <meta property='twitter:image' content='../img/og-tags/alto.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/Website+Maruti+Suzuki+Arena+Brezza+Scng+Offers(1).webp'
        className='max-w-full w-full lg:mt-16'
        alt='1'
      />
      <div className='container mx-auto pt-6 md:px-3 py-6'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
          <div className='space-y-3 justify-between px-6'>
            <p className='uppercase font-bold text-4xl'>BREZZA S-CNG</p>
            <p className='font-bold text-green-900'>
              9.24 Lakh <sup>*</sup>
              <p className='font-light text-red-400'>ex-show room price</p>
            </p>

            <p className='text-s'>
              Loaded with innovative technology and a style statement to match,
              the hottest tech for the Cool New Generation has arrived to take
              your city drives to the next level. Behold the Hot and Techy
              Brezza with S-CNG technology. The city-bred SUV that’s built for
              excitement with the advanced 1.5L K Series Dual Jet, Dual VVT
              engine with factory-fitted S-CNG technology.
            </p>
            <br></br>
            <p className='text-s'>
              The S-CNG technology comes with a dual inter-dependent Electronic
              Control Unit (ECU) and Intelligent Injection System. These
              state-of-the-art innovations provide an enhanced air-fuel ratio
              for better driving performance, and at the same time give an
              incredible fuel efficiency of 25.51 km/kg#.
              <br />
              <br />
              The S-CNG kit is integrated into the mainframe of the car on the
              manufacturing floor and has a leak-proof design with
              corrosion-resistant stainless-steel pipes and joints. This
              enhances the engine’s longevity and keeps you safe on every drive.
            </p>
            <br></br>
            <div className='flex flex-row'>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/performence.webp'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/performence.webp'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/performence.webp'
                  className='max-w-full w-full pr-3'
                  alt='1'
                />
              </div>
            </div>
          </div>
          <div className='object-contain h-50 w-100 object-right pt-14'>
            {/* <img src={AltoCNG1} alt='vehicle_banner' /> */}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-brezza.webp'
              alt='vehicle_banner'
            />
          </div>
        </div>
      </div>

      <BrezzaCarEnquiry />
      <div className='container mx-auto pt-6 lg:px-0 md:px-3 py-6'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
          <div className='space-y-3 justify-between px-6'>
            <p className='uppercase font-bold text-4xl'>
              Brezza S-CNG features
            </p>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/brezza/logo_spec.webp'
              className='h-20'
              alt='brezza-logo'
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

const BrezzaCarEnquiry = ({ title, carName }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('Brezza');
  // const [method, setMethod] = useState();
  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // Inside your component function
  // const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios
        .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
          name: name,
          phone: phone,
          // email: email,
          model: model,
          outlet: outlet,
        })
        .then((res) => {
          toast.success('Enquiry sent successfully');
        })
        .catch((err) => {
          setLoading(false);
          toast.error('Something went wrong!');
          console.log(err);
        });
    } catch (error) {
      // toast.error("Something went wrong!");
      setLoading(false);
    }

    try {
      await axios
        .post('https://arena-backend-zj42.onrender.com/onRoadPrice', {
          name: name,
          phone: phone,
          // email: email,
          model: model,
          outlet: outlet,
        })
        .then((res) => {
          toast.success('Enquiry sent successfully');
        })
        .catch((err) => {
          setLoading(false);
          toast.error('Something went wrong!');
          console.log(err);
        });
    } catch (error) {
      // toast.error("Something went wrong!");
      setLoading(false);
    }

    // Second API call
    await axios
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
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        setSubmitted(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (submitted) {
      document.getElementById('arenaCarEnq2').submit();
    }
  }, [submitted]);

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  return (
    <div className='bg-[#1b72b7] py-12 mt-12'>
      <div className='container mx-auto space-y-5 lg:px-0 px-5'>
        <h3 className='text-xl font-normal text-white normal-case'>
          Get Brezza CNG On-Road price in Hyderabad
        </h3>
        <form
          id='arenaCarEnq2'
          action={
            pattern.test(phone) && phone.length === 10
              ? 'https://crm.zoho.in/crm/WebToLeadForm'
              : '#'
          }
          name='WebToLeads54158000083979838'
          method={'POST'}
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
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                placeholder='Enter your phone number'
                minlength='10'
                maxlength='10'
                id='Phone'
                name='Phone'
                value={phone}
                required
                minLength='10'
                maxLength='10'
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/[^1-9 ]/g, '') &&
                      e.target.value.replace(/ /g, '')
                  )
                }
              />
              {phone.length > 7 && phone.length < 10 ? (
                <small className='text-red-500'>
                  Phone number must be 10 digits
                </small>
              ) : !pattern.test(phone) && phone.length === 10 ? (
                <small className='text-red-500'>Phone number is invalid</small>
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

                <option value='Brezza'>Brezza</option>
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
            onClick={handleSubmit}
            className='h-10 inline-flex justify-center mr-3 py-2 px-4  mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            {loading ? (
              <div className='flex items-center justify-center'>
                <CgSpinner className='animate-spin h-5 mr-2 text-white' />
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
                className='font-medium text-gray-700 italic'
              >
                <span className='text-white font-bold'>Disclaimer</span>
                <span className='text-white font-extralight'>
                  : By clicking 'SUBMIT', you agree to our
                </span>
                <a
                  href='/maruti-car-terms-and-conditions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-2  text-sm font-bold  text-red-700 '
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

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
                <p className='flex-1 border px-5 py-3'>LXI CNG MT</p>
                <p className='flex-1 border px-5 py-3'>VXI CNG MT</p>
                <p className='flex-1 border px-5 py-3'>ZXI CNG MT</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Exteriors</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Alloy Wheels</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>Painted</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Steel Wheels with Wheel Cover
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Projector Headlamps
                        </p>
                        <p className='flex-1 border px-5 py-3'>Bi-Halogen</p>
                        <p className='flex-1 border px-5 py-3'>Bi-Halogen</p>
                        <p className='flex-1 border px-5 py-3'>Dual Led</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Floating LED Day Time Running Lamps
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Roof Rail</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Roof End Spoiler
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Chrome Accentuated Front Grille
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Combination Lamp (LED)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Shark Fin Antenna
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Dual Tone Exterior (In Selected Colours)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Wheel Arch Cladding
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Skid Plate (Fr & Rr)
                        </p>
                        <p className='flex-1 border px-5 py-3'>Black</p>
                        <p className='flex-1 border px-5 py-3'>Black</p>
                        <p className='flex-1 border px-5 py-3'>Silver </p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Side Under Body Cladding
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Side Door Cladding
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
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
                      <span className='text-base uppercase'>INTERIORS</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Interior Color Theme
                        </p>
                        <p className='flex-1 border px-5 py-3'>Mono Tone</p>
                        <p className='flex-1 border px-5 py-3'>Mono Tone</p>
                        <p className='flex-1 border px-5 py-3'>Dual Tone</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Co-Driver Side Vanity Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Chrome Plated Inside Door Handles
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Door Armrest With Fabric
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Luggage Lamp</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Footwell Illumination
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Cabin Lamp</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Flat Bottom Steering Wheel
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Parcel Tray
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Hook In Luggage Area
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>IP Ornament</p>
                        <p className='flex-1 border px-5 py-3'>Black</p>
                        <p className='flex-1 border px-5 py-3'>Black</p>
                        <p className='flex-1 border px-5 py-3'>Silver </p>
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
                        SAFETY & SECURITY
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
                          Electronic Stability Program (ESP)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Hill Hold Assist
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Driver & Co-Driver Airbags
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear View Camera
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Seat Belt Pre-tensioners & Force Limiter
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Reverse Parking Sensor with Infographic Display
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          High Speed Warning Alert<sup>#</sup>
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Seat Belt Reminder Lamp & Buzzer (Driver & Co-Driver)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Wiper & Washer
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Defogger (Electric)
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Anti-theft Security System
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Suzuki TECT Body
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Dual Horn</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Engine Immobilizer
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          ISOFIX Child Seat Restraint System
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Impact Sensing Door Unlock
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Day/Night Rear View Mirror
                        </p>
                        <p className='flex-1 border px-5 py-3'>Manual</p>
                        <p className='flex-1 border px-5 py-3'>Manual</p>
                        <p className='flex-1 border px-5 py-3'>Manual</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Door Ajar Warning Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Central Locking
                        </p>
                        <p className='flex-1 border px-5 py-3'>5 Door</p>
                        <p className='flex-1 border px-5 py-3'>5 Door</p>
                        <p className='flex-1 border px-5 py-3'>5 Door</p>
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
                        COMFORT & CONVENIENCE
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
                          Electric Sunroof
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Cruise Control
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Height Adjustable Driver Seat
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          60:40 Split Seat (Rear)
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overhead Console with Sunglass Holder & Map Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Engine Push Start/stop With Smart Key
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Center Armrest With Cup Holder
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Adjustable Rear Seat Headrest
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Electrically Adjustable ORVM
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Electrically Foldable ORVM
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Driver Side Front Window (Auto Up/Down)
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear AC Vents
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Auto Climate control
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Keyless Entry SystemAuto
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front & Rear Power Windows
                        </p>

                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Steering Column Adjustment
                        </p>
                        <p className='flex-1 border px-5 py-3'>Tilt</p>
                        <p className='flex-1 border px-5 py-3'>Tilt</p>
                        <p className='flex-1 border px-5 py-3'>
                          Tilt & Telescopic
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Accessory Socket
                        </p>

                        <p className='flex-1 border px-5 py-3'>✔</p>
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
                      <span className='text-base uppercase'>INFOTAINMENT</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Touch Screen Audio
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>
                          17.78cm (SmartPlay Pro)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          17.78cm (SmartPlay Pro)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Premium Sound System
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>ARKAMYS</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Android Auto and Apple CarPlay<sup>###</sup>
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>Wireless</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Remote Control App for Infotainment
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Steering Mounted Controls: Audio and Bluetooth
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Over the Air Update (OTA)
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Onboard Voice Assistant (wake up through Hi Suzuki
                          with Barge in Feature)
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          USB & Bluetooth Connectivity
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Consumption (Instantaneous & Average)
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Speakers (4)</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Tweeters (2)</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          MID with TFT Color Display
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          MID with Segment Display
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Speedometer with Tachometer
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Audible Headlight On Reminder
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Low Fuel Warning Light
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Gear Shift Indicator
                        </p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
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
                        COLOUR VARIANTS
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
                          Splendid Silver With Midnight Black Roof (Dual Tone)
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Sizzling Red with Midnight Black Roof (Dual Tone)
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Brave Khakhi with Arctic White Roof (Dual Tone)
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Brave Khakhi</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Splendid Silver
                        </p>

                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Sizzling Red</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Exuberant Blue
                        </p>

                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Pearl Arctic White
                        </p>

                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Magma Grey</p>

                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                        <p className='flex-1 border px-5 py-3'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Pearl Midnight Black
                        </p>
                        <p className='flex-1 border px-5 py-3'>-</p>
                        <p className='flex-1 border px-5 py-3'>-</p>
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
                <p className='flex-1 border px-5 py-3'>LXI CNG MT</p>
                <p className='flex-1 border px-5 py-3'>VXI CNG MT</p>
                <p className='flex-1 border px-5 py-3'>ZXI CNG MT</p>
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
                        <p className='flex-1 border px-5 py-3 '>Length</p>
                        <p className='flex-1 border px-5 py-3'>3995 mm</p>
                        <p className='flex-1 border px-5 py-3'>3995 mm</p>
                        <p className='flex-1 border px-5 py-3'>3995 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Width</p>
                        <p className='flex-1 border px-5 py-3'> 1790 mm </p>
                        <p className='flex-1 border px-5 py-3'> 1790 mm </p>
                        <p className='flex-1 border px-5 py-3'> 1790 mm </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Height</p>
                        <p className='flex-1 border px-5 py-3'>
                          1685 (unladen) mm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1685 (unladen) mm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1685 (unladen) mm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Wheelbase</p>
                        <p className='flex-1 border px-5 py-3'>2500 mm</p>
                        <p className='flex-1 border px-5 py-3'>2500 mm</p>
                        <p className='flex-1 border px-5 py-3'>2500 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Seating Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3'>5</p>
                        <p className='flex-1 border px-5 py-3'>5</p>
                        <p className='flex-1 border px-5 py-3'>5</p>
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
                        <p className='flex-1 border px-5 py-3'>K15 C</p>
                        <p className='flex-1 border px-5 py-3'>K15 C</p>
                        <p className='flex-1 border px-5 py-3'>K15 C</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Fuel Type</p>
                        <p className='flex-1 border px-5 py-3'>
                          Petrol+ CNG (Bi-fuel)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Petrol+ CNG (Bi-fuel)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Petrol+ CNG (Bi-fuel)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Capacity</p>
                        <p className='flex-1 border px-5 py-3'>1462 cc</p>
                        <p className='flex-1 border px-5 py-3'>1462 cc</p>
                        <p className='flex-1 border px-5 py-3'>1462 cc</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Max Power</p>
                        <p className='flex-1 border px-5 py-3'>
                          74.0 kW @ 6000 RPM 100.6 PS @ 6000 RPM (Petrol Mode)
                          64.6 kW @ 5500 RPM 87.8 PS @ 5500 RPM (CNG Mode)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          74.0 kW @ 6000 RPM 100.6 PS @ 6000 RPM (Petrol Mode)
                          64.6 kW @ 5500 RPM 87.8 PS @ 5500 RPM (CNG Mode)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          74.0 kW @ 6000 RPM 100.6 PS @ 6000 RPM (Petrol Mode)
                          64.6 kW @ 5500 RPM 87.8 PS @ 5500 RPM (CNG Mode)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Torque
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          136.0 Nm @ 4400 RPM (Petrol Mode) 121.5 Nm @ 4200 RPM
                          (CNG Mode)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          136.0 Nm @ 4400 RPM (Petrol Mode) 121.5 Nm @ 4200 RPM
                          (CNG Mode)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          136.0 Nm @ 4400 RPM (Petrol Mode) 121.5 Nm @ 4200 RPM
                          (CNG Mode)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Emission Type
                        </p>
                        <p className='flex-1 border px-5 py-3'>BS VI</p>
                        <p className='flex-1 border px-5 py-3'>BS VI</p>
                        <p className='flex-1 border px-5 py-3'>BS VI</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel-Efficiency
                        </p>
                        <p className='flex-1 border px-5 py-3'>25.51 km/kg</p>
                        <p className='flex-1 border px-5 py-3'>25.51 km/kg</p>
                        <p className='flex-1 border px-5 py-3'>25.51 km/kg</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Petrol: 48 L CNG: 55 (Water Equivalent)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Petrol: 48 L CNG: 55 (Water Equivalent)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Petrol: 48 L CNG: 55 (Water Equivalent)
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
                      <span className='text-base uppercase'>Transmission</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Transmission Type
                        </p>
                        <p className='flex-1 border px-5 py-3'>5 MT</p>
                        <p className='flex-1 border px-5 py-3'>5 MT</p>
                        <p className='flex-1 border px-5 py-3'>5 MT</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Suspension</span>
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
                          Mac Pherson Strut & Coil
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Mac Pherson Strut & Coil
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Mac Pherson Strut & Coil
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3'>
                          Torsion Beam with Coil Spring
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Torsion Beam with Coil Spring
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Torsion Beam with Coil Spring
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* <Disclosure>
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
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Tank Capacity (CNG)
                        </p>
                        <p className='flex-1 border px-5 py-3 '>
                          60L (Water Equivalent Filling Capacity)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Tank Capacity (Petrol)
                        </p>
                        <p className='flex-1 border px-5 py-3'>35 L</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure> */}
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
                        <p className='flex-1 border px-5 py-3'>215/60 R16##</p>
                        <p className='flex-1 border px-5 py-3'>215/60 R16##</p>
                        <p className='flex-1 border px-5 py-3'>215/60 R16##</p>
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
                        <p className='flex-1 border px-5 py-3'>
                          Ventilated Disc
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Ventilated Disc
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Ventilated Disc
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
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
          <sup>*</sup>The speed alert system gives audible warning for alert of
          over-speed to driver. When vehicle speed exceeds about 80 km/h,
          primary level warning with two beeps will sound every minute. When the
          vehicle speed exceeds about 120 km/h, secondary level warning with
          continuous beeps will sound. If the vehicle speed is slowed down to
          about 118 km/h, primary warning will resume. If the vehicle is slowed
          down to about 78 km/h, speed alert warning will stop. This buzzer does
          not indicate any malfunction in vehicle.
        </p>
        <p>
          <sup>#</sup>As certified by Test Agency Under Rule 115 (G) of CMVR
          1989
        </p>
        <p>
          <sup>*</sup>Claim as on date-supported by JATO Dynamics Ltd.,
          Sedan-Claim valid for CNG in its own class
        </p>
        <p>
          <sup>*</sup>Prices shown above are ex showroom Delhi.
        </p>
      </div>
      <br></br>
      {/* <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 '>
        <div className='space-y-3 my-auto text-left px-6 '>
          <p className='uppercase font-bold text-4xl'>New Alto K10 S-CNG</p>
        </div>
        <div className='object-contain h-50 w-100 object-right pt-14'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    1. WHAT ARE THE DIFFERENT MODES FOR DRIVING THE NEW ALTO K10
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p className='indent-8'>
                    There are basically three fuel modes in the New Alto K10
                    S-CNG, which are listed below: Petrol Mode – In this mode,
                    the car starts and drives on Petrol. Auto Mode – In this
                    mode, the car starts on Petrol and then automatically
                    switches over to CNG (This is also the mode that is
                    recommended by the company). Forced CNG mode – In this mode,
                    you are allowed to start the car on CNG. This is a mode that
                    is only advised when there is no petrol in the car
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
                    MY ALTO K10 S-CNG KEEPS GLOWING WHEN I AM DRIVING?
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
                    not advisable at all. Since the Alto K10 S-CNG comes
                    equipped with factory-fitted CNG kit, the right tuning
                    equipment for properly calibrating the kit will only be
                    available at a Maruti Suzuki authorized service centre.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div> */}
    </>
  );
}

export default BrezzaCNG;

import React, { useState } from 'react';

import { useRef } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import {
  serviceCenterBanner,
  serviceIcons,
  reviews,
} from '../../constants/carservice';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function BookAService() {
  return (
    <>
      <Helmet>
        <title>
          Authorized Maruti Suzuki Service Center Near Me | Maruti Car Service
          Center
        </title>
        <meta
          name='title'
          content='Authorized Maruti Suzuki Service Center Near Me | Maruti Car Service Center'
        />
        <meta
          name='description'
          content='Saboo Maruti is an authorized Maruti Suzuki service center in Hyderabad. Visit your nearest authorized Maruti Car Service Center. We offer free pickup & drop facility. To Book car service Appointment Today Call us on 9848898488'
        />
        <meta
          name='keywords'
          content='vitara brezza service in hyderabad, vitara brezza service centers, vitara brezza service ceneter near me,vitara brezza workshops near me, vitara brezza workshops,  vitara brezza body shop, vitara brezza bodyshop near me, vitara brezza bodyshop in hyderabad, maruti vitara brezza service, maruti vitara brezza service hyderabad, maruti vitara brezza service centers near me, maruti suzuki vitara brezza service, maruti suzki vitara brezza service centers near me, maruti suzuki vitara brezza workshops , maruti suzuki vitara brezza workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki vitara brezza service center hyderabad, maruti suzuki vitara brezza workshop hyderabad, maruti suzuki vitara brezza bodyshop workshop hyderabad,brezza service in hyderabad, brezza service centers, brezza service ceneter near me,brezza workshops near me, brezza workshops,  brezza body shop, brezza bodyshop near me, brezza bodyshop in hyderabad, maruti brezza service, maruti brezza service hyderabad, maruti brezza service centers near me, maruti suzuki brezza service, maruti suzki brezza service centers near me, maruti suzuki brezza workshops , maruti suzuki brezza workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki brezza service center hyderabad, maruti suzuki brezza workshop hyderabad, maruti suzuki brezza bodyshop workshop hyderabad,wagno r service in hyderabad, wagno r service centers, wagno r service ceneter near me,wagno r workshops near me, wagno r workshops,  wagno r body shop, wagno r bodyshop near me, wagno r bodyshop in hyderabad, maruti wagno r service, maruti wagno r service hyderabad, maruti wagno r service centers near me, maruti suzuki wagno r service, maruti suzki wagno r service centers near me, maruti suzuki wagno r workshops , maruti suzuki wagno r workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki wagno r service center hyderabad, maruti suzuki wagno r workshop hyderabad, maruti suzuki wagno r bodyshop workshop hyderabad,eeco service in hyderabad, eeco service centers, eeco service ceneter near me,eeco workshops near me, eeco workshops,  eeco body shop, eeco bodyshop near me, eeco bodyshop in hyderabad, maruti eeco service, maruti eeco service hyderabad, maruti eeco service centers near me, maruti suzuki eeco service, maruti suzki eeco service centers near me, maruti suzuki eeco workshops , maruti suzuki eeco workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki eeco service center hyderabad, maruti suzuki eeco workshop hyderabad, maruti suzuki eeco bodyshop workshop hyderabad,ertiga service in hyderabad, ertiga service centers, ertiga service ceneter near me,ertiga workshops near me, ertiga workshops,  ertiga body shop, ertiga bodyshop near me, ertiga bodyshop in hyderabad, maruti ertiga service, maruti ertiga service hyderabad, maruti ertiga service centers near me, maruti suzuki ertiga service, maruti suzki ertiga service centers near me, maruti suzuki ertiga workshops , maruti suzuki ertiga workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki ertiga service center hyderabad, maruti suzuki ertiga workshop hyderabad, maruti suzuki ertiga bodyshop workshop hyderabad,dzire service in hyderabad, dzire service centers, dzire service ceneter near me,dzire workshops near me, dzire workshops,  dzire body shop, dzire bodyshop near me, dzire bodyshop in hyderabad, maruti dzire service, maruti dzire service hyderabad, maruti dzire service centers near me, maruti suzuki dzire service, maruti suzki dzire service centers near me, maruti suzuki dzire workshops , maruti suzuki dzire workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki dzire service center hyderabad, maruti suzuki dzire workshop hyderabad, maruti suzuki dzire bodyshop workshop hyderabad,celerio service in hyderabad, celerio service centers, celerio service ceneter near me,celerio workshops near me, celerio workshops,  celerio body shop, celerio bodyshop near me, celerio bodyshop in hyderabad, maruti celerio service, maruti celerio service hyderabad, maruti celerio service centers near me, maruti suzuki celerio service, maruti suzki celerio service centers near me, maruti suzuki celerio workshops , maruti suzuki celerio workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki celerio service center hyderabad, maruti suzuki celerio workshop hyderabad, maruti suzuki celerio bodyshop workshop hyderabad,spresso service in hyderabad, spresso service centers, spresso service ceneter near me,spresso workshops near me, spresso workshops,  spresso body shop, spresso bodyshop near me, spresso bodyshop in hyderabad, maruti spresso service, maruti spresso service hyderabad, maruti spresso service centers near me, maruti suzuki spresso service, maruti suzki spresso service centers near me, maruti suzuki spresso workshops , maruti suzuki spresso workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki spresso service center hyderabad, maruti suzuki spresso workshop hyderabad, maruti suzuki spresso bodyshop workshop hyderabad,Maruti Suzuki Service Center,swift service in hyderabad, swift service centers, swift service ceneter near me,swift workshops near me, swift workshops,  swift body shop, swift bodyshop near me, swift bodyshop in hyderabad, maruti swift service, maruti swift service hyderabad, maruti swift service centers near me, maruti suzuki swift service, maruti suzki swift service centers near me, maruti suzuki swift workshops , maruti suzuki swift workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki swift service center hyderabad, maruti suzuki swift workshop hyderabad, maruti suzuki swift bodyshop workshop hyderabad, Maruti Car Service, Maruti Service Center Near Me, Maruti Service Centers in Hyderabad, Maruti Authorized Service Center Near Me,alto service in hyderabad, alto service centers, alto service ceneter near me,alto workshops near me, alto workshops,  alto body shop, alto bodyshop near me, alto bodyshop in hyderabad, maruti alto service, maruti alto service hyderabad, maruti alto service centers near me, maruti suzuki alto service, maruti suzki alto service centers near me, maruti suzuki alto workshops , maruti suzuki alto workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki alto service center hyderabad, maruti suzuki alto workshop hyderabad, maruti suzuki alto bodyshop workshop hyderabad'
        />
        <meta name='author' content='BroaddCast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboomaruti.in/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Saboo Maruti is an authorized Maruti Suzuki service center in Hyderabad. Visit your nearest authorized Maruti Car Service Center. We offer free pickup & drop facility. To Book car service Appointment Today Call us on 9848898488'
        />
        <meta property='og:image' content='img/og-tags/saboo_rks.jpg' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboomaruti.in/' />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Saboo Maruti is an authorized Maruti Suzuki service center in Hyderabad. Visit your nearest authorized Maruti Car Service Center. We offer free pickup & drop facility. To Book car service Appointment Today Call us on 9848898488'
        />
        <meta property='twitter:image' content='img/og-tags/saboo_rks.jpg' />
      </Helmet>
      <Header />
      <Slider />
      <BookMarutiService />
      <FAQ />
      <Testimonials />
    </>
  );
}

const Slider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Swiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Autoplay]}
        className='mySwiper lg:mt-16'
      >
        {serviceCenterBanner.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt='offers' className='w-full' />
          </SwiperSlide>
        ))}

        <div
          ref={navigationPrevRef}
          className='absolute left-10 top-1/2 z-10 bg-white rounded-full p-3 cursor-pointer'
        >
          <GrFormPrevious />
        </div>
        <div
          ref={navigationNextRef}
          className='absolute right-10 top-1/2 z-10 bg-white rounded-full p-3 cursor-pointer'
        >
          <GrFormNext />
        </div>
      </Swiper>
    </>
  );
};

const BookMarutiService = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState();
  // const [model, setModel] = useState();
  const [pickup, setPickup] = useState();
  const [method, setMethod] = useState('');

  const [loader, setLoader] = useState(false);

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  function handleSubmit() {
    setLoader(true);
    try {
      axios.post('https://saboogroups.com/admin/api/book-a-service', {
        name: name,
        phone: phone,
        email: email,
        // model: model,
        pickup: pickup,
      });
      setMethod('POST');
      setLoader(false);
    } catch (error) {
      toast.error('Something went wrong!');
      setLoader(false);
    }
  }
  return (
    <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/service_center_screen/our-service-bg.webp')] py-16">
      <div className='container mx-auto grid grid-cols-2 lg:grid-cols-3 md:gap-4 my-8 px-5'>
        {/* col-span-1 */}
        <div className='shadow border rounded col-span-2 lg:col-span-1 mb-5 md:mb-0 p-7 bg-white'>
          <p className='text-xl font-semibold text-blue-800 text-center'>
            Book A Maruti Suzuki Car Service
          </p>
          <p className='py-3 text-base text-center'>
            Please fill out the form and we'll get back to you right away !
          </p>
          {/* <form
            className='flex flex-col items-center space-y-3'
            action='https://crm.zoho.in/crm/WebToLeadForm'
            name='WebToLeads54158000001051288'
            method='POST'
            id='theform'
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
              value='3e4c511e1bfac462fb9ac158b261b0d3a1f7118a5052416c6735cee16458265f'
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
            <input
              type='text'
              className='hidden'
              id='ldeskuid'
              name='ldeskuid'
            />
            <input type='text' className='hidden' id='LDTuvid' name='LDTuvid' />
            <input
              type='text'
              className='border max-w-[350px] w-full bg-gray-100 p-2 outline-none focus:border-dashed focus:border-blue-800'
              placeholder='Name'
              id='Last_Name'
              name='Last Name'
              required
            />
            <input
              type='text'
              className='border max-w-[350px] w-full bg-gray-100 p-2 focus:border-dashed focus:border-blue-800 outline-none'
              placeholder='Phone'
              id='Phone'
              name='Phone'
              maxLength='10'
              minLength='10'
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value.replace(/[^1-9 ]/g, '') &&
                    e.target.value.replace(/ /g, '')
                )
              }
            />
            <select
              id='LEADCF11'
              name='LEADCF11'
              className='border max-w-[350px] w-full bg-gray-100 p-2 focus:border-dashed focus:border-blue-800 outline-none'
            >
              <option>Select Outlet</option>
              <option value='Somajiguda'>RKS Motor - Somajiguda</option>
              <option value='Malakpet'>RKS Motor - Malakpet</option>
              <option value='Secunderabad'>
                RKS Motor - Secunderabad/Tadbund
              </option>
              <option value='Kushaiguda'>RKS Motor - Kushaiguda</option>
              <option value='Uppal'>RKS Motor - Uppal</option>
              <option value='Kukatpally'>RKS Motor - Kukatpally</option>
              <option value='Nampally'>RKS Motor - Nampally</option>
              <option value='Shamirpet'>RKS Motor - Shamirpet</option>
            </select>
            <textarea
              className='border max-w-[350px] w-full bg-gray-100 p-2 resize-none focus:border-dashed focus:border-blue-800 outline-none'
              placeholder='Let us know what you need'
              rows={4}
            ></textarea>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' id='agree' />
              <label htmlFor='agree'>
                I agree to{' '}
                <Link className='text-red-700' to='/'>
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <button
              type='submit'
              className='bg-blue-800 rounded shadow px-3 py-1.5 text-white'
            >
              Submit
            </button>
          </form> */}
          <form
            className='flex flex-col items-center space-y-3'
            action={
              pattern.test(phone) && phone.length === 10
                ? 'https://crm.zoho.in/crm/WebToLeadForm'
                : '#'
            }
            name='WebToLeads54158000001051288'
            method={method}
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
              value='3e4c511e1bfac462fb9ac158b261b0d3a1f7118a5052416c6735cee16458265f'
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
            <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-1'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Name <span className='text-red-600'>*</span>
                </label>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  type='text'
                  id='Last_Name'
                  name='Last Name'
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  type='text'
                  ftype='email'
                  id='Email'
                  name='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Phone <span className='text-red-600'>*</span>
                </label>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  type='text'
                  minLength='10'
                  maxLength='10'
                  required
                  id='Mobile'
                  name='Mobile'
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/[^1-9]/g, '') &&
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
              {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <select
                id="LEADCF6"
                name="LEADCF6"
                onChange={(e) => setModel(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option>Select Model</option>
                <option>S-Cross</option>
                <option>Ciaz</option>
                <option>Baleno</option>
                <option>Ignis</option>
                <option>XL6</option>
              </select>
            </div> */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Select Your Service Center{' '}
                  <span className='text-red-600'>*</span>
                </label>
                <select
                  id='LEADCF22'
                  name='LEADCF22'
                  onChange={(e) => setPickup(e.target.value)}
                  className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option>Select Outlet</option>
                  <option value='Arena Service - Somajiguda'>
                    RKS Motor - Somajiguda
                  </option>
                  <option value='Arena Service - Malakpet'>
                    RKS Motor - Malakpet
                  </option>
                  <option value='Arena Service - Secunderabad'>
                    RKS Motor - Secunderabad/Tadbund
                  </option>
                  <option value='Arena Service - Kushaiguda'>
                    RKS Motor - Kushaiguda
                  </option>
                  <option value='Arena Service - Uppal'>
                    RKS Motor - Uppal
                  </option>
                  <option value='Arena Service - Kukatpally'>
                    RKS Motor - Kukatpally
                  </option>
                  <option value='Arena Service - Nampally'>
                    RKS Motor - Nampally
                  </option>
                  <option value='Arena Service - Shamirpet'>
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
            <div className='flex items-start py-4'>
              <input
                id='disclaimer'
                name='disclaimer'
                type='checkbox'
                className='h-4 w-4 rounded'
                required
              />
              <div className='ml-2 text-sm'>
                <label
                  htmlFor='disclaimer'
                  className='font-medium text-gray-700'
                >
                  <span className='text-black font-bold'>Disclaimer</span>: I
                  agree to
                  <span className='text-red-600'>
                    &nbsp;Terms and Conditions
                  </span>
                </label>
              </div>
            </div>
            <button
              className='bg-blue-800 text-white rounded py-2.5 px-5'
              type='submit'
              disabled={
                pattern.test(phone) && phone.length === 10
                  ? false
                  : true && loader
                  ? true
                  : false
              }
              onClick={handleSubmit}
            >
              {loader ? (
                <div className='flex items-center justify-center'>
                  <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                  Loading
                </div>
              ) : (
                'Book A Service'
              )}
            </button>
          </form>
        </div>

        {/* col-span-2 */}
        <div className='col-span-2'>
          <p className='text-xl font-semibold text-blue-800'>
            Maruti Suzuki Car Services
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5'>
            {serviceIcons.map((icon) => (
              <div
                className='rounded bg-white shadow border py-2'
                key={icon.id}
              >
                <img src={icon.img} alt={icon.id} className='mx-auto' />
                <p className='text-center'>{icon.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className='container mx-auto my-5'>
      <p className='text-3xl text-blue-800 text-center mb-8'>Reviews</p>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='px-8'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
                className='mx-auto'
                alt='offers'
              />
              <p className='text-sm text-center'>{item.text}</p>
              <p className='text-center text-base font-semibold py-2'>
                {item.author}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className='w-full px-4 pt-16 mb-20'>
      <div className='mx-auto w-full max-w-6xl rounded-2xl bg-white p-2'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-blue-100 px-4 py-3 text-left text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span>
                  Why should I get my car serviced at Maruti Suzuki Service?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                Choosing Maruti Suzuki Service for your car maintenance or
                servicing offers several benefits. Our experienced technicians
                follow proper guidelines to ensure quality of the service. Apart
                from this, you can rest be assured that only genuine parts will
                be used (if required) to fix your car. Getting your car serviced
                from an Authorised Maruti Suzuki Service centre also ensures
                your vehicle warranty stays intact.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span>
                  How do I make a service booking at Maruti Suzuki Service?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                You can book a service appointment at Maruti Suzuki Service
                online on our{' '}
                <Link to='/maruti-car-service-centers-near-me'>website</Link>.
                You can also call <a href='tel:9848898488'>9848898488</a> and
                book a service appointment for your car.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span>
                  Where to find a Maruti Suzuki Authorized Service station?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                Kindly use our Workshop locator present on Maruti Suzuki webpage
                to find a Maruti Suzuki authorised service station near you.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span>How much is a periodic servicing going to cost me?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                Cost of service varies according to car model, average running
                of the car and its current odometer reading. To calculate an
                estimated cost of service for your vehicle visit our Maruti
                Suzuki Service centers.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span>How do I know my car needs servicing?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                If your vehicle is running rough, is delivering low mileage, or
                if warning lamps have switched on, you should take your car
                immediately to a service centre. Apart from this, the schedule
                that you should follow for regular preventive maintenance will
                be listed in your owner’s manual.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default BookAService;

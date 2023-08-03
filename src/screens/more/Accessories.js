import React, { useRef } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper';
import { accesoriessliders } from '../../constants';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

function Accessories() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [outlet, setOutlet] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [model, setModel] = useState('');
  const [phone, setPhone] = useState('');
  const [method, setMethod] = useState();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState('');

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

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  // const handleSubmit = () => {
  //   console.log("submit");
  // };
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Genuine Accessories & Spare Parts in Hyderabad | Saboo
          Maruti
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Car Prices in Secunderabad & Hyderabad | RKS Motor Pvt Ltd'
        />
        <meta
          name='description'
          content='Maruti Suzuki Genuine Accessories & Spare Parts in Hyderabad. Saboo Maruti sell all kind of genuine accessories & spare parts for Maruti Suzuki cars & Nexa cars with warranty. Visit saboomaruti.in or call us 9848898488 for Maruti spare parts.'
        />
        <meta
          name='keywords'
          content='maruti genuine accessories, maruti accessories, maruti spare parts'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboomaruti.in/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Cars Price, Features, Specifications and Mileage | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki sells Alto 800, S-Presso, Wagon R Celerio, Celerio X, Vitara Brezza, Swift, Dzire, Ertiga and Eeco van through Arena outlets. Visit our nearest Saboo Maruti showroom for price, features, specifications, mileage and offers.'
        />
        <meta
          property='og:image'
          content='img/banners/Saboo-Maruti-Suzuki-Accessories-Banner.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboomaruti.in/' />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Cars Price, Features, Specifications and Mileage | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki sells Alto 800, S-Presso, Wagon R Celerio, Celerio X, Vitara Brezza, Swift, Dzire, Ertiga and Eeco van through Arena outlets. Visit our nearest Saboo Maruti showroom for price, features, specifications, mileage and offers.'
        />
        <meta
          property='twitter:image'
          content='img/banners/Saboo-Maruti-Suzuki-Accessories-Banner.jpg'
        />
      </Helmet>
      <Header />
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
        loop={true}
        className='mySwiper lg:mt-16 w-full'
      >
        {accesoriessliders.map((item, index) => (
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

      <h1 className='text-center text-xl md:text-2xl lg:text-3xl pt-16 font-semibold'>
        ACCESSORY ENQUIRY
      </h1>
      <div className='container mx-auto my-10 px-5'>
        <form
          action='https://crm.zoho.in/crm/WebToLeadForm'
          name='WebToLeads54158000001051349'
          method={method}
          // method='POST'
          acceptCharset='UTF-8'
          className='space-y-5'
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
                  Category
                </label>
                <select
                  id='LEADCF23'
                  name='LEADCF23'
                  className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                >
                  <option>Select Accessory</option>
                  <option>Select Categories</option>
                  <option value='Exterior'>Exterior</option>
                  <option value='Interior'>Interior</option>
                  <option value='Car Care'>Car Care</option>
                  <option value='LifeStyle'>LifeStyle</option>
                  <option value='Safety &amp; Security'>
                    Safety &amp; Security
                  </option>
                  <option value='Infotainment'>Infotainment</option>
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
                      WEBSITE ENQUIRY
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
              <span className='text-black font-bold'>Disclaimer</span>: I agree
              that by clicking the ‘Submit’ button below, I am explicitly
              soliciting a call/Message from Saboo Maruti (RKS Motor Pvt. Ltd)
              or its Representatives on my ‘Mobile’.
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
        {/* <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  minLength="10"
                  maxLength="10"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Categories
                </label>
                <select
                  onChange={(e) => setCategories(e.target.value)}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select Categories</option>
                  <option value="Exterior">Exterior</option>
                  <option value="Interior">Interior</option>
                  <option value="Car Care">Car Care</option>
                  <option value="LifeStyle">LifeStyle</option>
                  <option value="Safety &amp; Security">
                    Safety &amp; Security
                  </option>
                  <option value="Infotainment">Infotainment</option>
                </select>
              </div>
            </div>

            <p className="text-gray-700">
              <span className="text-black font-bold">Disclaimer</span>: I agree
              that by clicking the ‘Submit’ button below, I am explicitly
              soliciting a call/Message from Saboo Maruti (RKS Motor Pvt. Ltd)
              or its Representatives on my ‘Mobile’.
            </p>
            <div className="flex items-start">
              <input
                id="disclaimer"
                name="disclaimer"
                type="checkbox"
                className="h-4 w-4 rounded"
              />
              <div className="ml-2 text-sm">
                <label
                  htmlFor="disclaimer"
                  className="font-medium text-gray-700"
                >
                  Please agree with following Disclaimer
                </label>
              </div>
            </div>
            <button
              className="bg-blue-800 hover:bg-red-600 duration-500 text-white rounded py-2.5 px-10"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form> */}
      </div>

      <h3 className='text-center text-xl md:text-2xl lg:text-3xl pt-2 font-bold'>
        CAR CABIN PROTECTIVE PARTITION
      </h3>

      <div className='container mx-auto py-16 '>
        <div className='grid md:grid-cols-3 gap-4 px-5'>
          <div>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/saboo-Nexa-car-cabin.jpeg'
              className='h-48  md:h-full mx-auto md:w-68'
              alt='Maruti-Suzuki-Nexa_Jubilee'
            />
          </div>
          <div className='space-y-4 col-span-2'>
            <p className='text-gray-100'>
              <span className='text-black font-medium'>
                <h3 className='text-xl pt-2 font-bold'>DESCRIPTION</h3>
                <ul className='px-5 text-gray-500'>
                  <li className='list-disc'>
                    Isolates front and rear car cabin.
                  </li>
                  <li className='list-disc'>
                    Prevents transfer of droplets within the car due to
                    coughing/sneezing/talking.
                  </li>
                  <li className='list-disc'>
                    Made of Virgin grade premium Poly Vinyl Chloride material.
                  </li>
                  <li className='list-disc'>
                    Clear visibility and complete coverage from roof to floor.
                  </li>
                </ul>
                <h3 className='text-xl pt-2 font-bold'>FEATURES AND USAGE</h3>
                <ul className='px-5 text-gray-500'>
                  <li className='list-disc'>
                    Isolates front and rear car cabin.
                  </li>
                  <li className='list-disc'>
                    Prevents transfer of droplets within the car due to
                    coughing/sneezing/talking.
                  </li>
                  <li className='list-disc'>
                    Made of Virgin grade premium Poly Vinyl Chloride material.
                  </li>
                  <li className='list-disc'>
                    Clear visibility and complete coverage from roof to floor.
                  </li>
                </ul>
                <h3 className='text-lg pt-2 font-bold'>
                  Color:
                  <span className='text-gray-500 ml-2 font-normal text-base'>
                    Transparent
                  </span>
                </h3>
                <h3 className='text-lg pt-2 font-bold'>
                  Quantity :
                  <span className='text-gray-500 ml-2 font-normal text-base'>
                    1
                  </span>
                </h3>
                <h3 className='text-lg pt-2 font-bold'>
                  Size:
                  <span className='text-gray-500 ml-2 font-normal text-base'>
                    As per car cabin- varies on model level
                  </span>
                </h3>
                <h3 className='text-lg pt-2 font-bold'>
                  Point of Sale:
                  <span className='text-gray-500 ml-2 font-normal text-base'>
                    Usage Applicability Chauffer driven vehicles, convenient
                    family outings.
                  </span>
                </h3>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className='m-8 mx-auto container w-full'>
        <table className='w-full '>
          <thead className='bg-black text-gray-100'>
            <tr>
              <th className='border border-slate-300 h-12'>S.NO</th>
              {/* <th className="border border-slate-300">PART NUMBER</th> */}
              <th className='border border-slate-300'>PART DESCRIPTION</th>
              <th className='border border-slate-300'>MRP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-slate-300 pl-2 h-12 text-cen ter'>
                1
              </td>
              {/* <td className="border border-slate-300 pl-2">990J0M999CV</td> */}
              <td className='border border-slate-300 pl-2'>
                Car Cabin Protective Partition
              </td>
              <td className='border border-slate-300 pl-2'>
                ₹ 799 <span className='text-red-600'>*</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Accessories;

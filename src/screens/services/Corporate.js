import React, { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Header from '../../components/header/Header';
import { toast } from 'react-toastify';
import { CgSpinner } from 'react-icons/cg';

import axios from 'axios';

function Corporate() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [model, setModel] = useState('Alto 800');
  const [email, setEmail] = useState('noname@gmail.com');
  // const [method, setMethod] = useState();
  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState('');
  const [submitted, setSubmitted] = useState(false);

  //testing second event

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !phone || !email) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios
        .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
          name: name,
          phone: phone,
          email: email,
          // model: model,
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
          email: email,
          // model: model,
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
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Cars Bulk Buy | Corporate Offers | Saboo Maruti
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Cars Bulk Buy | Corporate Offers | Saboo Maruti'
        />
        <meta
          name='description'
          content='Best discounts and offers on Maruti Suzuki cars bulk booking. Saboo Maruti offers best deals on Corporate car booking & bulk purchases. Call now 98488 98488.'
        />
        <meta
          name='keywords'
          content='Maruti Suzuki Cars Bulk Buy, Corporate Offers, Saboo Maruti'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboomaruti.in/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Cars Bulk Buy | Corporate Offers | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Best discounts and offers on Maruti Suzuki cars bulk booking. Saboo Maruti offers best deals on Corporate car booking & bulk purchases. Call now 98488 98488.'
        />
        <meta property='og:image' content='img/og-tags/corporate.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboomaruti.in/' />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Cars Bulk Buy | Corporate Offers | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Best discounts and offers on Maruti Suzuki cars bulk booking. Saboo Maruti offers best deals on Corporate car booking & bulk purchases. Call now 98488 98488.'
        />
        <meta property='twitter:image' content='img/og-tags/corporate.webp' />
      </Helmet>
      <img
        src={require('../../assets/banners/Saboo-Maruti-Suzuki-corporate.webp')}
        className='w-full lg:mt-16'
        alt='1'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto my-5'>
        <div className='bg-white border shadow-md rounded p-5 mx-5'>
          <p className='font-bold text-xl'>Corporate Form</p>
          <p className='text-sm mb-5'>
            Please fill out the form and we'll get back to you right away !
          </p>

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
                    required
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
                    <option value='Somajiguda'>RKS Motor - Somajiguda</option>
                    <option value='Malakpet'>RKS Motor - Malakpet</option>
                    <option value='Secunderabad'>
                      RKS Motor - Secunderabad
                    </option>
                    <option value='Kushaiguda'>RKS Motor - Kushaiguda</option>
                    <option value='Kompally'>RKS Motor - Kompally</option>
                    <option value='Shamirpet'>RKS Motor - Shamirpet</option>
                    <option value='RKS Motor - Narsingi'>
                      RKS Motor - Narsingi
                    </option>
                    <option value='RKS Motor - Kodangal'>
                      RKS Motor - Kodangal
                    </option>
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

              {/* <p className='text-gray-700'>
                <span className='text-black font-bold'>Disclaimer</span>: I
                agree that by clicking the ‘Submit’ button below, I am
                explicitly soliciting a call/Message from Saboo Maruti (RKS
                Motor Pvt. Ltd) or its Representatives on my ‘Mobile’.
              </p> */}
              {/* <div className='flex my-3'>
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
                  pattern.test(phone) && phone.length === 10 ? false : true
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
              <div className='flex items-start py-1 '>
                <div className='ml-2 text-sm'>
                  <label
                    htmlFor='disclaimer'
                    className='font-medium text-gray-700'
                  >
                    <span className='text-black font-bold'>Disclaimer</span>
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
            </div>
          </form>
        </div>
        <div className='mx-5'>
          <div className='flex items-center mb-2 space-x-2'>
            <a
              href='tel:9848898488'
              className='bg-blue-800 rounded flex items-center text-white px-4 py-1.5'
            >
              <FaPhoneAlt className='mr-2' size={15} />
              98488 98488
            </a>
            <a
              href='mailto:info@saboomaruti.in'
              className='bg-blue-800 rounded text-white px-4 py-1.5 flex items-center'
            >
              <FaEnvelope className='mr-2' size={15} />
              info@saboomaruti.in
            </a>
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30453.94782709998!2d78.457389!3d17.424094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e0a3e3dabcb8701!2sMaruti%20Suzuki%20Car%20Dealer%20-%20RKS%20Motor!5e0!3m2!1sen!2sin!4v1614840403705!5m2!1sen!2sin'
            title='map'
            className='max-h-[340px] w-full h-full'
            frameborder='0'
            allowfullscreen=''
            aria-hidden='false'
            tabindex='0'
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Corporate;

import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../../components/header/Header';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import { Helmet } from 'react-helmet';

function Insurance() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('noname@gmail.com');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios
        .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
          name: name,
          phone: phone,
          email: email,
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
        .post('https://arena-backend-zj42.onrender.com/insurance', {
          name: name,
          phone: phone,
          email: email,
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

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      <Helmet>
        <title>
          Maruti Insurance Renewal in Secunderabad, Hyderabad | Saboo Maruti
        </title>
        <meta
          name='title'
          content='Maruti Insurance Renewal in Secunderabad, Hyderabad | Saboo Maruti'
        />
        <meta
          name='description'
          content='Maruti car insurance renewal in Hyderabad & Secunderabad. Get cashless accident repairs, fair & transparent claim settlement. Looking to Renew Insurance Online for, Maruti Swift,Maruti Wagon R, Maruti Ertiga, Eeco, Maruti S-Presso, Maruti Alto 800,Maruti Vitara brezza,Maruti brezza, Celerio'
        />
        <meta
          name='keywords'
          content='maruti insurance renewal, saboomaruti in car, suzuki renewal'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/maruti-suzuki-car-insurance-renewal'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Car Insurance | Cashless and Easy Claim Settlement'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki offers the best features on its insurance policies likes cashless and easy settlements. Renew an old car policy or buy a new one. For more info call us 9848898488.'
        />
        <meta property='og:image' content='img/og-tags/insurance.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/maruti-suzuki-car-insurance-renewal'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Car Insurance | Cashless and Easy Claim Settlement'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki offers the best features on its insurance policies likes cashless and easy settlements. Renew an old car policy or buy a new one. For more info call us 9848898488.'
        />
        <meta property='twitter:image' content='img/og-tags/insurance.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Saboo-Maruti-Suzuki-Insurance-Banner.webp'
        className='max-w-full w-full lg:mt-16'
        alt='inusrance banner'
      />
      <div className='container mx-auto py-16 px-5'>
        <p className='text-red-500 font-semibold text-2xl'>Maruti Insurance</p>
        <p>
          We will help you get the new car insurance or used car insurance for
          your newly purchased car. We meet all you Maruti Suzuki car insurance
          needs by offering you attractive new car insurance schemes and
          benefits.Just fill this simple form and our marketing person will
          contact you at your convenience to offer you the best insurance option
          for your new Maruti Suzuki car and also discuss with you as to how it
          will benefit in the long run.
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
            style={{ display: 'none' }}
            name='xnQsjsdp'
            value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
          />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input
            type='text'
            style={{ display: 'none' }}
            name='xmIwtLD'
            value='3e4c511e1bfac462fb9ac158b261b0d3df2ae6eb9f9847d50cb87f439855b4e4'
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
          {/* <p className="uppercase font-bold text-md">my car details :</p>
          <div className="grid sm:grid-cols-3  gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <select
                id="LEADCF6"
                name="LEADCF6"
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>Select Model</option>
                <option value="Maruti Alto 800">Maruti Alto</option>
                <option value="Maruti Wagon R">Maruti Wagon R</option>
                <option value="Maruti Celerio">Maruti New Celerio</option>
                <option value="Maruti Swift">Maruti Swift</option>
                <option value="Maruti Dzire">Maruti Dzire</option>
                <option value="Maruti S-Presso">Maruti S-Presso</option>
                <option value="Maruti Ertiga">Maruti Ertiga</option>
                <option value="Maruti Vitara Brezza">
                  Maruti Vitara Brezza
                </option>
                <option value="Maruti Eeco">Maruti Eeco</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registeration Number
              </label>
              <input
                className="border h-10 outline-none px-3 uppercase rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                type="text"
                id="LEADCF1"
                name="LEADCF1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registeration Year
              </label>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                type="date"
                id="LEADCF83"
                name="LEADCF83"
              />
            </div>
          </div>

          <p className="uppercase font-bold text-md">existing Policy :</p>
          <div className="grid sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Policy Number
              </label>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="car_insurance_policy_no"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Insurance Company
              </label>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                type="text"
                id="Company"
                name="Company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Insurance Expiry
              </label>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                type="date"
                ng-model="vars.startDate"
                name="car_insurance_expiry_date"
              />
            </div>
          </div> */}

          <p className='uppercase font-bold text-md'>my contact details :</p>
          <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
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
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                type='text'
                ftype='email'
                id='Email'
                name='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              {email.length > 0 && !emailPattern.test(email) ? (
                <small className='text-red-500'>Invalid email address</small>
              ) : (
                ''
              )}
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
                <small className='text-red-500'>Phone number is invalid</small>
              ) : (
                ''
              )}
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Claim
              </label>
              <select
                id="LEADCF23"
                name="LEADCF23"
                className="block w-full py-2 h-10 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>Select Claim</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div> */}
          </div>
          {/* <p className='text-gray-700'>
            <span className='text-black font-bold'>Disclaimer</span>: I agree
            that by clicking the ‘Submit’ button below, I am explicitly
            soliciting a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd)
            or its Representatives on my ‘Mobile’
          </p>
          <div className='flex items-start'>
            <input
              id='disclaimer'
              name='disclaimer'
              type='checkbox'
              className='h-4 w-4 rounded'
            />
            <div className='ml-2 text-sm'>
              <label htmlFor='disclaimer' className='font-medium text-gray-700'>
                Please Agree with Following Disclaimer
              </label>
            </div>
          </div> */}
          <button
            className='bg-blue-800 hover:bg-red-600 duration-500 text-white rounded py-2.5 px-10'
            type='submit'
            disabled={pattern.test(phone) && phone.length === 10 ? false : true}
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
              <label htmlFor='disclaimer' className='font-medium text-gray-700'>
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
        </form>
      </div>
    </>
  );
}

export default Insurance;

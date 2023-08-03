import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../components/header/Header';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import { Helmet } from 'react-helmet';

function Insurance() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [methodpopup, setMethodPopup] = useState();
  const [model, setModel] = useState('');
  const [outlet, setOutlet] = useState('');
  const [method, setMethod] = useState();

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  function handleSubmit() {
    setLoading(true);
    axios
      .post('https://saboogroups.com/admin/api/arena-insurance', {
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

  return (
    <>
      <Helmet>
        <title>
          Maruti Insurance Services | Maruti Car Insurance | Saboo Maruti
        </title>
        <meta
          name='title'
          content='Maruti Insurance Services | Maruti Car Insurance | Saboo Maruti'
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
        src={require('../../assets/banners/Saboo-Maruti-Suzuki-Insurance-Banner.webp')}
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
          action='https://crm.zoho.in/crm/WebToLeadForm'
          name='WebToLeads54158000001051349'
          // method={methodpopup}
          method='POST'
          acceptCharset='UTF-8'
          className='space-y-5'
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
                <small className='text-red-500'>phone number is invalid</small>
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
          <p className='text-gray-700'>
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
          </div>
          <button
            className='bg-blue-800 hover:bg-red-500 duration-500 text-white rounded py-2.5 px-5'
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
              'Get Your Insurance Now'
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default Insurance;

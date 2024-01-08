import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';

const NewCarEnquiry = ({ title, carName }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
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
      {title}
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
              className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              defaultValue='Alto 800'
            >
              <option disabled>Select Model</option>
              <optgroup label='Hatchback'>
                <option value='Alto 800'>Alto</option>
              </optgroup>
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

export default NewCarEnquiry;

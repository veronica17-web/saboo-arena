import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../components/header/Header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';

const PaymentTest = () => {
  const [name, setName] = useState('Payment Enquiry');
  const [phone, setPhone] = useState('');
  // const [submitted, setSubmitted] = useState(false);
  // const [method, setMethod] = useState();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [model, setModel] = useState('Payment Enquiry');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios
        .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
          name: name,
          phone: phone,
          model: model,
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
          model: model,
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
      <div></div>
      <div className='container mx-auto py-5 rounded-lg'>
        <div className='mt-4 md:mt-0 bg-gray-100 shadow-2xl rounded-lg p-7 '>
          <div class='gap-6 items-center py-6 px-2 mx-auto max-w-screen-xl xl:gap-14 md:grid md:grid-cols-2 sm:py-14 lg:px-4'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/payment-system/saboo-rks-qrcode.webp'
              className='w-96'
              alt='dashboard'
            />
            <div className='mt-3 mb-2 md:mt-0 bg-gray-100 shadow-2xl rounded-lg mr-6'>
              <h3 className='mt-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center'>
                Bank Details
              </h3>
              <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                  <div className='border-t border-gray-200' />
                </div>
              </div>

              <div class='overflow-x-auto relative m-6 mt-2 md-2'>
                <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border text-center border-slate-400'>
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='py-3 px-6 invisible'>
                        Product name
                      </th>
                      <th scope='col' class='py-3 px-6 invisible'>
                        Color
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class='text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th scope='row' class='py-1 px-3  font-normal'>
                        Name:
                      </th>
                      <td class='py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white font-bold'>
                        RKS Motor Pvt. Ltd.
                      </td>
                    </tr>
                    <tr class='text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th scope='row' class='py-1 px-3  font-normal'>
                        Account No:
                      </th>
                      <td class='py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white font-bold'>
                        50200004137964
                      </td>
                    </tr>
                    <tr class='text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th scope='row' class='py-1 px-3  font-normal'>
                        Bank:
                      </th>
                      <td class='py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white font-bold'>
                        HDFC Bank
                      </td>
                    </tr>
                    <tr class='text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th scope='row' class='py-1 px-3  font-normal'>
                        Branch:
                      </th>
                      <td class='py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white font-bold'>
                        Somajiguda, Hyderabad
                      </td>
                    </tr>
                    <tr class='text-left bg-white dark:bg-gray-800'>
                      <th scope='row' class='py-1 px-3 font-normal'>
                        RTGS/NEFT IFSC Code:
                      </th>
                      <td class='py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white font-bold'>
                        HDFC0000512
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='overflow-hidden col-span-2 shadow sm:rounded-md p-4'>
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
                  value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
                />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input
                  type='text'
                  style={{ display: 'none' }}
                  name='xmIwtLD'
                  value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
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
                <div className='zcwf_row wfrm_fld_dpNn hidden'>
                  <div className='zcwf_col_fld'>
                    <select
                      className='zcwf_col_fld_slt'
                      id='Lead Source'
                      name='Lead Source'
                    >
                      <option selected value='Arena&#x20;Payment&#x20;Enquiry'>
                        Arena Payment Enquiry
                      </option>
                    </select>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='grid md:grid-cols-2 gap-3'>
                    <div>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                        Name
                      </label>
                      <input
                        className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                        type='text'
                        id='Last_Name'
                        name='Last Name'
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                        Phone
                      </label>
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
                  </div>
                  <div className=''>
                    <select
                      id='LEADCF6'
                      name='LEADCF6'
                      onChange={(e) => setModel(e.target.value)}
                      className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                      defaultValue='Payment Enquiry'
                    >
                      <option disabled>Select Model</option>

                      <option value='Payment Enquiry'>Payment Enquiry</option>
                    </select>
                  </div>
                  {/* <p className='text-gray-700'>
                    <span className='text-black font-bold'>Disclaimer</span>: I
                    agree that by clicking the ‘Submit’ button below, I am
                    explicitly soliciting a call/Message from Saboo Maruti (RKS
                    Motor Pvt. Ltd) or its Representatives on my ‘Mobile’.
                  </p>
                  <div className='flex items-start'>
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
                        Please agree with the disclaimer
                      </label>
                    </div>
                  </div> */}
                  <div className='flex items-center justify-center'>
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
                  </div>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentTest;

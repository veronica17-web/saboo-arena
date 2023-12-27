import React, { Fragment, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

function CarEnquiry() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [model, setModel] = useState('');
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [method, setMethod] = useState();

  function handleSubmit() {
    setLoading(true);

    // First API call
    axios
      .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
        name: name,
        email: email,
        phone: phone,
        model: model,
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

  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className='container mx-auto py-2'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 lg:px-0  px-5'>
          <button onClick={() => setOpen(true)}>
            <div className='bg-white drop-shadow-lg hover:shadow-lg outline-none rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/test-drive.webp'
                alt='test drive'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-gray-700'>
                book a test drive
              </p>
            </div>
          </button>
          <Link to='/showrooms'>
            <div className='bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/locate.webp'
                alt='locate a showroom'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-gray-700'>
                locate a showroom
              </p>
            </div>
          </Link>
          <button onClick={() => setOpen(true)}>
            <div className='bg-white drop-shadow-lg outline-none hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/Calender.webp'
                alt='test drive'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-gray-700'>
                book a showroom visit
              </p>
            </div>
          </button>
          <Link to='/maruti-suzuki-car-insurance-renewal'>
            <div className='bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/insurance.webp'
                alt='test drive'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-gray-700'>
                insurance renewal
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed z-10 inset-0 overflow-y-auto'>
            <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <form
                  action='https://crm.zoho.in/crm/WebToLeadForm'
                  name='WebToLeads54158000000752015'
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
                    value='3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92'
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
                  <Dialog.Panel className='relative bg-blue-200 p-4 text-left  rounded-2xl overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full '>
                    <div className='bg-blue-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 lg:p-10'>
                      <div className='mt-3'>
                        <Dialog.Title
                          as='h3'
                          className='text-lg leading-6 font-medium text-blue-900 text-center'
                        >
                          Book A Test Drive / Get Offers
                        </Dialog.Title>
                        <div className='mt-2 space-y-3'>
                          <div className='mt-2 space-y-3'>
                            <div className=''>
                              <label className='block text-sm font-light text-gray-700'>
                                Name
                              </label>
                              <input
                                type='text'
                                id='Last_Name'
                                required
                                name='Last Name'
                                onChange={(e) => setName(e.target.value)}
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                              />
                            </div>

                            <div>
                              <label className='block text-sm font-light text-gray-700'>
                                Email
                              </label>
                              <input
                                type='email'
                                ftype='email'
                                id='Email'
                                name='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                              />
                            </div>

                            <div>
                              <label className='block text-sm font-light text-gray-700'>
                                Phone
                              </label>
                              <input
                                className='mt-1 px-2 focus:ring-blue-200 focus:border-blue-200 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
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
                              ) : !pattern.test(phone) &&
                                phone.length === 10 ? (
                                <small className='text-red-500'>
                                  Phone number is invalid
                                </small>
                              ) : (
                                ''
                              )}
                            </div>

                            <div>
                              <label className='block text-sm font-light text-gray-700'>
                                Model
                              </label>
                              <select
                                id='LEADCF6'
                                name='LEADCF6'
                                onChange={(e) => setModel(e.target.value)}
                                className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              >
                                <option>Select Model</option>
                                <optgroup label='Hatchback'>
                                  <option value='Alto K10'>Alto K10</option>
                                  <option value='Alto 800'>Alto</option>
                                  <option value='Wagon R'>Wagon R</option>
                                  <option value='Celerio'>Celerio</option>
                                  <option value='Swift'>Swift</option>
                                </optgroup>

                                <optgroup label='Sedan'>
                                  <option value='Dzire'>Dzire</option>
                                </optgroup>

                                <optgroup label='micro SUV'>
                                  <option value='S-Presso'>S-Presso</option>
                                </optgroup>
                                <optgroup label='MPV'>
                                  <option value='Ertiga'>Ertiga</option>
                                </optgroup>
                                <optgroup label='SUV'>
                                  <option value='Brezza'>Brezza</option>
                                </optgroup>
                                <optgroup label='Mini Van'>
                                  <option value='Eeco'>Eeco</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>

                          {/* <div className='flex items-center space-x-2 mb-5'>
                            <input
                              id='comments'
                              type='checkbox'
                              className=' h-4 w-4 border-gray-300 rounded'
                              required
                            />
                            <label
                              htmlFor='comments'
                              className='text-gray-700 text-sm'
                            >
                              I agree to the Privacy Policy and Terms of
                              Service.
                            </label>
                          </div> */}
                          <div className='flex items-start '>
                            <div className='ml-2 italic text-xs'>
                              <label
                                htmlFor='disclaimer'
                                className='font-medium text-gray-700'
                              >
                                <span className='text-black font-bold'>
                                  Disclaimer
                                </span>
                                <span className='text-black font-light text-xs'>
                                  : By clicking 'SUBMIT',&nbsp; you agree to our
                                </span>
                                <a
                                  href='/maruti-car-terms-and-conditions'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='font-semibold text-xs  text-red-600 '
                                >
                                  &nbsp;Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-blue-200 px-2 py-5 pt-1 pd-2 sm:px-6 sm:flex sm:flex-row-reverse flex flex-col items-center justify-center'>
                      <button
                        type='submit'
                        disabled={
                          pattern.test(phone) && phone.length === 10
                            ? false
                            : true
                        }
                        onClick={handleSubmit}
                        className='w-full mb-2 sm:mb-0 sm:ml-2 sm:w-1/3 sm:text-sm inline-flex justify-center rounded-md border border-transparent px-3 py-2 bg-blue-900 shadow-md text-base font-medium text-white hover:bg-green-700 focus:outline-none'
                      >
                        Submit
                      </button>

                      <button
                        type='button'
                        className='w-full inline-flex justify-center rounded-md border-solid border-blue-900 border shadow-md px-3 py-2 bg-blue-200 text-base font-medium text-blue-900 hover:bg-red-700 hover:border-red-700 hover:text-white focus:outline-none sm:w-1/3 sm:text-sm'
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default CarEnquiry;

import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../../components/header/Header';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import { Helmet } from 'react-helmet';

function Finance() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [outlet, setOutlet] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // const [method, setMethod] = useState();
  const [model, setModel] = useState('');
  const [purchaseTime, setPurchaseTime] = useState('');
  const [formLoanAmount, setFormLoanAmount] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios
        .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
          name: name,
          phone: phone,
          email: email,
          comments: message,
          model: model,
          outlet: outlet,
          purchase_time: purchaseTime,
          loan_amount: formLoanAmount,
          loan_duration: loanDuration,
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
        .post('https://arena-backend-zj42.onrender.com/finance', {
          name: name,
          phone: phone,
          email: email,
          comments: message,
          model: model,
          outlet: outlet,
          purchase_time: purchaseTime,
          loan_amount: formLoanAmount,
          loan_duration: loanDuration,
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

  // const [showToast, setShowToast] = useState(false);

  // const pattern = useMemo(() => {
  //   return /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  // }, []);

  // useEffect(() => {
  //   if (
  //     phone !== '' &&
  //     phone.length === 10 &&
  //     !pattern.test(phone) &&
  //     !loading
  //   ) {
  //     if (!showToast) {
  //       toast.error('Enter a valid phone number', {
  //         theme: 'colored',
  //       });
  //       setShowToast(true);
  //     }
  //   } else {
  //     setShowToast(false);
  //   }
  // }, [phone, pattern, loading, showToast]);

  // function handleSubmit() {
  //   setLoading(true);
  //   axios
  //     .post('https://saboogroups.com/admin/api/arena-finance', {
  //       name: name,
  //       phone: phone,
  //       email: email,
  //       outlet: outlet,
  //       comments: comments,
  //       model: model,
  //       purchase_time: purchaseTime,
  //       loan_amount: formLoanAmount,
  //       loan_duration: loanDuration,
  //     })
  //     .then((res) => {
  //       setMethod('POST');
  //       toast.success('Enquiry sent successfully');
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       toast.error('Something went wrong!');
  //       console.log(err);
  //     });

  //   // Second API call
  //   axios
  //     .get(
  //       `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
  //     Our Sales consultant will contact you shortly.

  //     Regards
  //     RKS Motor Pvt. Ltd.
  //     98488 98488
  //     www.saboomaruti.in
  //     www.saboonexa.in&type=1&template_id=1407168967467983613`
  //     )
  //     .then((res) => {
  //       console.log('SMS API Response:', res.data);
  //       // Handle the response from the SMS API if needed
  //     })
  //     .catch((err) => {
  //       console.error('Error sending SMS:', err);
  //       // Handle errors from the SMS API if needed
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  // function handleSubmit2() {
  //   setLoading(true);
  //   // First API call
  //   axios
  //     .post('https://arena-backend-zj42.onrender.com/finance', {
  //       name: name,
  //       phone: phone,
  //       email: email,
  //       outlet: outlet,
  //       comments: comments,
  //       model: model,
  //       purchase_time: purchaseTime,
  //       loan_amount: formLoanAmount,
  //       loan_duration: loanDuration,
  //     })
  //     .then((res) => {
  //       setMethod('POST');
  //       toast.success('Enquiry sent successfully');
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       toast.error('Something went wrong!');
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');

  function calculateEMI() {
    const principal = parseFloat(loanAmount);
    const calculateInterest = parseFloat(interestRate) / 100 / 12;
    const calculatePayments = parseFloat(loanTerm) * 12;

    //calculate the monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);
    const monthlyPayment = parseFloat(monthly).toFixed(2);

    //calculate interest
    const totalInterest = (monthly * calculatePayments - principal).toFixed(2);
    const totalPayment = (monthly * calculatePayments).toFixed(2);

    document.getElementById('month').innerHTML = parseFloat(monthlyPayment);
    document.getElementById('interest').innerHTML = totalInterest;
    document.getElementById('total').innerHTML = totalPayment;
  }

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Car loans, Finance in Secunderabad & Hyderabad | Saboo Maruti
        </title>
        <meta
          name='title'
          content='Maruti Car loans, Finance in Secunderabad & Hyderabad | Saboo Maruti'
        />
        <meta
          name='description'
          content='Get best car finance deals on Maruti cars. Saboo Maruti offers car loans with low down payment, low interest & low cost EMI. For more info call now 98488 98488.'
        />
        <meta
          name='keywords'
          content='maruti car loans, finance in, saboomaruti in car, suzuki secunderabad services'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/maruti-suzuki-car-finance-services'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Car Finance | Lowest EMI Options  | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki Finance service offer car loans with features like low down payment, low interest rates. For more info call us 9848898488.'
        />
        <meta property='og:image' content='img/og-tags/finance.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/maruti-suzuki-car-finance-services'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Car Finance | Lowest EMI Options  | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki Finance service offer car loans with features like low down payment, low interest rates. For more info call us 9848898488.'
        />
        <meta property='twitter:image' content='img/og-tags/finance.webp' />
      </Helmet>
      <img
        src={require('../../assets/banners/Saboo-Maruti-Suzuki-Finance-Banner.webp')}
        className='max-w-full w-full lg:mt-16'
        alt='finance banner'
      />
      <div className='container mx-auto py-16 px-5'>
        <p className='text-red-500 font-semibold text-2xl'>Maruti Finance</p>
        <p>
          Maruti has tied up with all major nationalised banks, private banks,
          multinational banks to offer the best rates of interest and
          installment schemes are designed to suit your convenience and other
          requirements.
        </p>
        <h5 className='font-bold mt-2'>Value Added Services</h5>
        <p>
          Extended warranty: Maruti Finance gives you the privilege of extended
          warranty that goes up to four years! This means four years of
          hassle-free maintenance. You can get up to 30% discount on extended
          warranty under Maruti Finance.
        </p>
        <h5 className='font-bold mt-2'>Loans for Insurance and Accessories</h5>
        <p>
          Loans for insurance and accessories are built into the EMI's, keeping
          the whole deal simple and hassle free. So if you haven't already made
          up your mind, just walk into any of our showrooms for the best cars
          and best finance options.
        </p>
        <div className='grid md:grid-cols-2 gap-4 px-5 mt-5'>
          {/* new grid column opens */}
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
            <div className='space-y-4'>
              <p className='uppercase font-bold text-md'>my car details :</p>
              <div className='grid md:grid-cols-2 gap-3'>
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
                    id='Email'
                    name='Email'
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
                    <option>Select Outlet City</option>
                    <option>Hyderabad</option>
                    <option>Secunderabad</option>
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Phone
                  </label>
                  <input
                    className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                    type='text'
                    id='Phone'
                    name='Phone'
                    value={phone}
                    maxLength='10'
                    required
                    minLength='10'
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
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Comments
                </label>
                <textarea
                  className='border h-20 outline-none px-1 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  type='text'
                  id='message'
                  name='message'
                  placeholder='Enter your message'
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* check here later */}

              <div>
                <p className='uppercase font-bold text-md'>
                  share loan requirements :
                </p>
                <div className='grid md:grid-cols-2 gap-3'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
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
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Purchase Time
                    </label>
                    <select
                      onChange={(e) => setPurchaseTime(e.target.value)}
                      name='car_purchase_time'
                      className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    >
                      <option>Select Purchase Time</option>
                      <option>Immediate</option>
                      <option>2 Weeks</option>
                      <option>3 Weeks</option>
                      <option>4 Weeks</option>
                      <option>4-6 Weeks</option>
                      <option>6+ Weeks</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Loan Amount
                    </label>
                    <input
                      className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                      type='text'
                      id='Company'
                      name='Company'
                      onChange={(e) => setFormLoanAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Loan Duration
                    </label>
                    <input
                      className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                      type='text'
                      onChange={(e) => setLoanDuration(e.target.value)}
                      name='car_loan_duration_years'
                    />
                  </div>
                </div>
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

          {/* new grid column opens */}
          <div>
            <p className='text-2xl font-bold mb-7'>EMI Calculator</p>
            <div className='flex items-center justify-between mt-2'>
              <p>Curreny :</p>
              <select
                disabled
                name='currency'
                className='block py-2 w-full max-w-[75%] px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              >
                <option>Select Curreny</option>
                <option defaultValue>₹ INR</option>
                <option>$ USD</option>
              </select>
            </div>
            <div className='flex items-center justify-between mt-2'>
              <p>Loan Amount :</p>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-blue-500 focus:border-blue-500'
                type='text'
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            <div className='flex items-center justify-between mt-2'>
              <p>Interest Rate :</p>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-blue-500 focus:border-blue-500'
                type='text'
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between mt-2'>
              <p>Years :</p>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-blue-500 focus:border-blue-500'
                type='text'
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
            <div className='flex justify-center mt-3'>
              <button
                className='bg-blue-800 rounded flex items-center text-white px-4 py-1.5'
                type='submit'
                onClick={calculateEMI}
              >
                Submit
              </button>
            </div>

            <div className='text-center space-y-3 mt-8'>
              <div>
                <p>Loan EMI</p>
                <p id='month'></p>
              </div>
              <div>
                <p>Total Interest Payable</p>
                <p id='interest'></p>
              </div>
              <div>
                <p>Total Payment(Principal + Interest)</p>
                <p id='total'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finance;

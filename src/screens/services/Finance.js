import React, { useState } from 'react';
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
  const [comments, setComments] = useState('');
  const [model, setModel] = useState('');
  const [purchaseTime, setPurchaseTime] = useState('');
  const [formLoanAmount, setFormLoanAmount] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [loading, setLoading] = useState(false);
  const [methodpopup, setMethodPopup] = useState();

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
    try {
      axios.post('https://saboogroups.com/admin/api/arena-finance', {
        name: name,
        phone: phone,
        email: email,
        outlet: outlet,
        comments: comments,
        model: model,
        purchase_time: purchaseTime,
        loan_amount: formLoanAmount,
        loan_duration: loanDuration,
      });
      setMethodPopup('POST');
      setLoading(false);
    } catch (error) {
      toast.error('Something went wrong');
      setLoading(false);
      console.log(error);
    }
  }

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
          Maruti Car Loan | Get 100% Finance | Low Interest Rates| Low Cost EMI
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
            action='https://crm.zoho.in/crm/WebToLeadForm'
            name='WebToLeads54158000001051349'
            // method={methodpopup}
            method='POST'
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
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Comments
                </label>
                <textarea
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                  type='text'
                  onChange={(e) => setComments(e.target.value)}
                  name='user_comments'
                ></textarea>
              </div>

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
                    <option>Alto K10</option>
                    <option>Brezza</option>
                    <option>Swift</option>
                    <option>Dzire</option>
                    <option>SPresso</option>
                    <option>WagonR</option>
                    <option>Alto</option>
                    <option>Ertiga</option>
                    <option>EECO</option>
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
              <p className='text-gray-700'>
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
              </div>
              <button
                className='bg-black text-white rounded py-2.5 px-5'
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
                  'Get Your Loan Now'
                )}
              </button>
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
                className='bg-black text-white rounded py-2.5 px-5'
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

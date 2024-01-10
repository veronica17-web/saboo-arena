import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import Header from '../../components/header/Header';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function DrivingSchool() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Driving School in Hyderabad | Fees & Offers on Maruti Driving
          School
        </title>
        <meta
          name='title'
          content='Maruti Driving School in Hyderabad | Fees & Offers on Maruti Driving School'
        />
        <meta
          name='description'
          content='Maruti Driving School in Hyderabad. Special initiatives that have lady instructors for women learners. Get world-class driving training at Maruti Driving School. Call now 9848898488 for fees & Offers.'
        />
        <meta name='keywords' content='suzuki, maruti suzuki suzuki' />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/maruti-suzuki-driving-school'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Driving School in Hyderabad | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Saboo Maruti Driving School in Hyderabad. Maruti Driving School locations in Hyderabad & Secunderabad. Call now for more info 98488 98488.'
        />
        <meta
          property='og:image'
          content='img/og-tags/maruti_driving_school.webp'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/maruti-suzuki-driving-school'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Driving School in Hyderabad | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Saboo Maruti Driving School in Hyderabad. Maruti Driving School locations in Hyderabad & Secunderabad. Call now for more info 98488 98488.'
        />
        <meta
          property='twitter:image'
          content='img/og-tags/maruti_driving_school.webp'
        />
      </Helmet>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/saboo-driving-school-december-2023.webp'
        className='w-full mt-16'
        alt='default - dont delete'
      />
      {/* <RegisterInterest /> */}
      {/* <CarEnquiry /> */}

      <p className='mx-auto text-center max-w-6xl my-5 p-6 sm:px-0 text-3xl font-semibold text-[#232053]'>
        A pioneer in driving training since 2005, sets the gold standard with
        state-of-the-art technology and a progressive curriculum. <br></br>
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto container'>
        {/* Card 1: Happy Students */}
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/happy-student.webp'
            alt='Happy Student'
            className='object-cover mb-4 '
          />
          <p className='text-gray-500 text-3xl font-semibold mb-2 animate-pulse'>
            10,656
          </p>
          <p className=' font-semibold mb-2 text-[#232053]'>HAPPY STUDENTS</p>
          <p className='text-center font-light text-gray-500 text-sm'>
            We have successfully transformed 14,57,712 beginners into skilled
            and confident drivers.
          </p>
        </div>

        {/* Card 2: Certified Trainers */}
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/trained-faculty.webp'
            alt='Certified Trainers'
            className='object-cover mb-4 '
          />
          <p className='text-gray-500 text-3xl font-semibold mb-2 animate-pulse'>
            10
          </p>
          <p className=' font-semibold mb-2 text-[#232053]'>
            CERTIFIED TRAINERS
          </p>
          <p className='text-center font-light text-gray-500 text-sm'>
            Get driving training from our team of driving professionals that has
            1,328 certified male and female trainers.
          </p>
        </div>

        {/* Card 3: Training Schools */}
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/authorised-dealers.webp'
            alt='Training Schools'
            className='object-cover mb-4 '
          />
          <p className='text-gray-500 text-3xl font-semibold mb-2 animate-pulse'>
            3
          </p>
          <p className='text-gray-700 font-semibold mb-2'>TRAINING SCHOOLS</p>
          <p className='text-center font-light text-gray-500 text-sm'>
            We have made quality driving training accessible with our widespread
            network of 475+ Training Schools.
          </p>
        </div>
      </div>

      {/* <p className='mx-auto text-center max-w-6xl my-5 p-6 sm:px-0 text-3xl font-bold text-[#232053]'>
        Our commitment to excellence has redefined driving training nationwide,
        ensuring learners receive unparalleled instruction and confidence on the
        roads. <br></br>
      </p> */}
      <Confidence />
      <Tabs />
      {/* <LearnerCourse />
      <AdvanceCourse />
      <CorporateCourse /> */}
      <DrivingSchoolForm />
    </>
  );
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='container mx-auto p-2'>
      <div className='flex flex-col sm:flex-row mb-4'>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 1 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Learner
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 2 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Advanced
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 rounded-t flex items-center justify-center ${
            activeTab === 3 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Corporate
        </div>
      </div>

      <div className='bg-white rounded'>
        {activeTab === 1 && <LearnerCourse />}
        {activeTab === 2 && <AdvanceCourse />}
        {activeTab === 3 && <CorporateCourse />}
      </div>
    </div>
  );
};

const DrivingSchoolForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [email, setEmail] = useState('noname@gmail.com');

  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone || !email || !outlet) {
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

          outlet: outlet,
        })
        .then((res) => {
          toast.success('Enquiry sent successfully');
          setSubmitted(true);
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
        .post('https://arena-backend-zj42.onrender.com/arena-onRoadPrice', {
          name: name,
          phone: phone,

          email: email,

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
      <div className='container mx-auto border text-center p-5 my-7 rounded shadow-md'>
        <div className='container mx-auto space-y-5 lg:px-0 px-5'>
          <h3 className='text-2xl font-semibold text-[#232053] mb-5'>
            Start Your Driving Journey
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
              type='hidden'
              name='xnQsjsdp'
              value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
            />
            <input type='hidden' name='zc_gad' id='zc_gad' value='' />
            <input
              type='hidden'
              name='xmIwtLD'
              value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
            />
            <input type='hidden' name='actionType' value='TGVhZHM=' />
            <input
              type='hidden'
              name='returnURL'
              value='https://www.saboomaruti.in/thank-you-for-contact-us'
            />
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
              <div>
                <input
                  type='text'
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
                  type='text'
                  className={`border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500 ${
                    phone.length > 0 && phone.length < 10
                      ? 'border-red-500'
                      : ''
                  }`}
                  placeholder='Phone'
                  value={phone}
                  id='Mobile'
                  name='Phone'
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
                <input
                  type='email'
                  ftype='email'
                  id='Email'
                  name='Email'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                />
                {email.length > 0 && !emailPattern.test(email) ? (
                  <small className='text-red-500'>Invalid email address</small>
                ) : (
                  ''
                )}
              </div>
              <div>
                <select
                  id='LEADCF23'
                  name='LEADCF23'
                  onChange={(e) => setOutlet(e.target.value)}
                  className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                >
                  <option>Select Driving School</option>
                  <option value='MDS - Kushaiguda'>MDS - Kushaiguda</option>
                  <option value='MDS - Nampally'>MDS - Nampally</option>
                  <option value='MDS - Malakpet'>MDS - Malakpet</option>
                </select>
              </div>
            </div>

            <button
              className='h-10 inline-flex justify-center py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
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
                'ENQUIRE'
              )}
            </button>
            <div className='flex items-start py-1 '>
              <div className='ml-2 text-sm '>
                <label
                  htmlFor='disclaimer'
                  className='font-medium text-gray-700'
                >
                  <span className='text-[#232053] font-bold'>Disclaimer</span>
                  <span className='-[#232053] font-light'>
                    : By clicking 'SUBMIT', you have agreed to our
                  </span>
                  <a
                    href='/maruti-car-terms-and-conditions'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-2  text-sm font-light text-red-700 hover:text-red-500'
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const Confidence = () => {
  return (
    <div className='container mx-auto border text-center p-5 my-7 rounded shadow-md '>
      <p className='font-semibold text-3xl text-[#232053] normal-case'>
        Elevate your driving skills with our expert courses.
      </p>
      <p className='text-gray-500 text-lg mt-3 font-extralight'>
        Discover confidence on the road through our thoughtfully crafted driving
        courses. Whether you're a beginner or looking to refine your skills, our
        diverse training programs are tailored to make you a skilled and
        self-assured driver. <br />
        <br />
        <span className='font-light text-[#232053]'>
          Join Saboo Maruti Suzuki Driving School and embark on a journey
          towards driving excellence,{' '}
          <span className='text-red-700 font-extralight'>
            pick your favourite course below.
          </span>
        </span>
      </p>
    </div>
  );
};

const LearnerCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow-lg rounded p-5 mb-7'>
      <div className='grid sm:grid-cols-2 items-center'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/learner-course.webp'
          alt='1'
          className='mx-auto w-full md:w-2/3 h-auto object-cover'
        />
        <div className='p-6'>
          <p className='text-blue-800 font-semibold text-2xl mb-5'>
            Learner Course
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Session</p>
              <p className='text-sm text-gray-500'>07 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Session</p>
              <p className='text-sm text-gray-500'>10 Hours</p>
            </div>
            {/* demo session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Simulator Session</p>
              <p className='text-sm text-gray-500'>2.5 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            {/* demo session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
          </div>
          <p className='my-5'>
            If you’ve never been behind the steering wheel, this course is for
            you. At the end of 21 days, you’ll know the basic traffic rules and
            have a hands-on driving experience through simulators and on-road
            driving. What’s more, you’ll have the confidence of taking the RTO
            driving exam to obtain a permanent driving license.
          </p>
          <a
            href='tel:9848898488'
            className='px-4 py-2 bg-blue-800 rounded text-white uppercase inline-block hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};

const AdvanceCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow-lg rounded  p-5 mb-7'>
      <div className='grid sm:grid-cols-2 items-center'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/advance-course.webp'
          alt='1'
          className='w-full h-auto'
        />
        <div className='p-6'>
          <p className='text-blue-800 font-semibold text-2xl mb-5'>
            Advance Course
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Session</p>
              <p className='text-sm text-gray-500'>02 Hours</p>
            </div>

            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Session</p>
              <p className='text-sm text-gray-500'>06 Hours</p>
            </div>
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
          </div>
          <p className='my-5'>
            If you’ve never been behind the steering wheel, this course is for
            you. At the end of 21 days, you’ll know the basic traffic rules and
            have a hands-on driving experience through simulators and on-road
            driving. What’s more, you’ll have the confidence of taking the RTO
            driving exam to obtain a permanent driving license.
          </p>
          <a
            href='tel:9848898488'
            className='px-4 py-2 bg-blue-800 rounded text-white uppercase inline-block hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};

const CorporateCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow-lg rounded  p-5'>
      <div className='grid sm:grid-cols-2 items-center'>
        <div className='p-6'>
          <p className='text-blue-800 font-semibold text-2xl mb-5'>
            Corporate Course
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Session</p>
              <p className='text-sm text-gray-500'>04 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
          </div>
          <p className='my-5'>
            Hiring a driver? Or looking to brush up the skills of your
            executives? Have them take this course. By the end of it, you’ll be
            able to assess the proficiency of the driver on 25 parameters like
            the ability to manage cars, adherence to traffic rules, and practice
            of safety norms, among others. For the executives, special emphasis
            is laid on changing their attitude and road culture.
          </p>
          <a
            href='tel:9848898488'
            className='px-4 py-2 bg-blue-800 rounded text-white uppercase inline-block hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/corporate-course.webp'
          alt='1'
          className='w-full h-auto'
        />
      </div>
    </div>
  );
};

export default DrivingSchool;

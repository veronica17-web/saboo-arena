import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
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
          content='Maruti Driving School in Hyderabad. Special initiatives that have lady instructors for women learners. Get world-class driving training at Maruti Driving School. Call now 9848898488 for fees & Offers.'
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
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driving-school-banner.webp'
        className='w-full mt-16'
        alt='default - dont delete'
      />
      <RegisterInterest />
      <p className='mx-auto text-center max-w-4xl my-5 px-4 sm:px-0'>
        Saboo Maruti Suzuki Driving School has been a pioneer in the field of
        driving training since 2005. Driven by world-class technology & training
        curriculum, Saboo Maruti Suzuki Driving School has elevated and
        redefined the standards of driving training in the country.
      </p>
      <div className='grid grid-cols-3 gap-4 mx-auto container '>
        <div className='flex flex-col items-center'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/happy-student.webp'
            alt='1'
          />
          <p className='text-gray-500 text-2xl font-semibold mt-2'>10,656</p>
          <p className='text-gray-500 font-semibold mt-2'>HAPPY STUDENTS</p>
          <p className='text-center text-gray-500 text-sm mt-2'>
            We have successfully transformed 14,57,712 beginners into skilled
            and confident drivers.
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/trained-faculty.webp'
            alt='2'
          />
          <p className='text-gray-500 text-2xl font-semibold mt-2'>10</p>
          <p className='text-gray-500 font-semibold mt-2'>CERTIFIED TRAINERS</p>
          <p className='text-center text-gray-500 text-sm mt-2'>
            Get driving training from our team of driving professionals that has
            1,328 certified male and female trainers.
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/authorised-dealers.webp'
            alt='3'
          />
          <p className='text-gray-500 text-2xl font-semibold mt-2'>3</p>
          <p className='text-gray-500 font-semibold mt-2'>TRAINING SCHOOLS</p>
          <p className='text-center text-gray-500 text-sm mt-2'>
            We have made quality driving training accessible with our widespread
            network of 475+ Training Schools.
          </p>
        </div>
      </div>
      <Confidence />
      <LearnerCourse />
      <AdvanceCourse />
      <CorporateCourse />
    </>
  );
}

const RegisterInterest = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  // const [model, setModel] = useState('');
  const [outlet, setOutlet] = useState();
  const [method, setMethod] = useState();
  const [email, setEmail] = useState();
  const [showToast, setShowToast] = useState(false);
  // const navigate = useNavigate();

  // const [methodpopup, setMethodPopup] = useState();
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);

    // First API call
    axios
      .post('https://saboogroups.com/admin/api/arena-driving-school', {
        name: name,
        email: email,
        phone: phone,
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

  return (
    <div className='py-12 bg-[#232053]'>
      <div className='container mx-auto space-y-3 lg:px-0 px-5'>
        <h3 className='text-xl font-semibold text-white uppercase'>
          Register your interest
        </h3>
        <form
          action='https://crm.zoho.in/crm/WebToLeadForm'
          name='WebToLeads54158000009604042'
          method={method}
          // method="POST"
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

          <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4'>
            <div>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                placeholder='Name'
                id='Last_Name'
                name='Last Name'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <input
                type='email'
                ftype='email'
                id='Email'
                name='Email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
              />
            </div>

            <div>
              <input
                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                type='text'
                maxLength='10'
                minLength='10'
                required
                id='Phone'
                name='Phone'
                placeholder='Phone'
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

            <>
              <select
                id='LEADCF23'
                name='LEADCF23'
                onChange={(e) => setOutlet(e.target.value)}
                className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              >
                <option>Select Outlet</option>
                <option value='MDS-Kushaiguda'>MDS-Kushaiguda</option>
                <option value='MDS-Nampally'>MDS-Nampally</option>
                <option value='MDS-Malakpet'>MDS-Malakpet</option>
              </select>
            </>

            <>
              <select className='hidden' id='Lead_Source' name='Lead Source'>
                <option value='-None-'>-None-</option>
                <option selected value='WEBSITE VISIT'>
                  WEBSITE VISIT
                </option>
              </select>
            </>
            <div>
              <button
                type='submit'
                onClick={handleSubmit}
                className='h-10 inline-flex justify-center mr-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                disabled={
                  pattern.test(phone) && phone.length === 10 ? false : true
                }
              >
                {loading ? (
                  <div className='flex items-center justify-center'>
                    <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                    Loading
                  </div>
                ) : (
                  'ENQUIRY'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Confidence = () => {
  return (
    <div className='container mx-auto border p-5 my-7 rounded shadow-sm'>
      <p className='font-semibold text-2xl'>
        CHOOSE YOUR COURSE TO DRIVE WITH CONFIDENCE ON THE ROAD
      </p>
      <p className='text-gray-600 text-sm mt-3'>
        Our meticulously designed courses help transform beginners into skilled
        and confident drivers. Choose your desired course from a range of
        driving training courses and master the skill of driving at Saboo Maruti
        Suzuki Driving School.
      </p>
    </div>
  );
};

const LearnerCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow rounded border p-5 mb-8'>
      <p className='text-blue-800 font-semibold mb-5'>Learner Course</p>
      <div className='grid sm:grid-cols-2'>
        <div>
          <div className='grid grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Theory Session</p>
              <p>07 Hours</p>
            </div>
            {/* Theory Session End*/}

            {/* Practical Session */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Practical Session</p>
              <p>10 Hours</p>
            </div>
            {/* Practical Session End*/}

            {/* Demo Session */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Demo Session</p>
              <p>30 Hours</p>
            </div>
            {/* Demo Session End*/}

            {/* Simulator Session */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Simulator Session</p>
              <p>2.5 Hours</p>
            </div>
            {/* Simulator Session End */}

            {/* Theory Exam */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Theory Exam</p>
              <p>30 Minutes</p>
            </div>
            {/* Theory Exam End*/}

            {/* Practical Exam */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Practical Exam</p>
              <p>30 Minutes</p>
            </div>
            {/* Practical Exam End*/}
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
            className='px-4 py-1.5 bg-blue-800 rounded text-white uppercase'
          >
            Interested
          </a>
        </div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/learner-course.webp'
          alt='1'
        />
      </div>
    </div>
  );
};

const AdvanceCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow rounded border p-5 mb-7'>
      <div className='grid sm:grid-cols-2'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/advance-course.webp'
          alt='1'
        />
        <div>
          <p className='text-blue-800 font-semibold mb-5'>Advance Course</p>
          <div className='grid grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Theory Session</p>
              <p>02 Hours</p>
            </div>
            {/* Theory Session End*/}

            {/* Practical Session */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Practical Session</p>
              <p>06 Hours</p>
            </div>
            {/* Practical Session End*/}

            {/* Demo Session */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Demo Session</p>
              <p>30 Minutes</p>
            </div>
            {/* Demo Session End*/}
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
            className='px-4 py-1.5 bg-blue-800 rounded text-white uppercase'
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
    <div className='bg-white container mx-auto shadow rounded border p-5'>
      <div className='grid sm:grid-cols-2'>
        <div>
          <p className='text-blue-800 font-semibold mb-5'>Corporate Course</p>
          <div className='grid grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto'
                alt='1'
              />
              <p>Theory Session</p>
              <p>04 Hours</p>
            </div>
            {/* Theory Session End*/}
          </div>
          <p className='my-5'>
            Hiring a driver? Or Looking to brush up the skills of your
            executives? Have them take this course. By the end of it, you’ll be
            able to access the proficiency of the driver on 25 parameters like
            the ability to manage cars, adherence to traffic rules and practice
            of safety norms, among others. For the executives, special emphasis
            is laid on changing their attitude and road culture.
          </p>
          <a
            href='tel:9848898488'
            className='px-4 py-1.5 bg-blue-800 rounded text-white uppercase'
          >
            Interested
          </a>
        </div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/corporate-course.webp'
          alt='1'
        />
      </div>
    </div>
  );
};

export default DrivingSchool;

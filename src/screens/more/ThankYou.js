import React from 'react';
import Header from '../../components/header/Header';
import { TiTick } from 'react-icons/ti';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ThankYou() {
  return (
    <>
      <Helmet>
        <title>
          Thanks for Contacting Authorized Maruti Dealers | Saboo Maruti
        </title>
        <meta
          name='title'
          content='Thanks for Contacting Authorized Maruti Dealers | Saboo Maruti'
        />
        <meta
          name='description'
          content='Thank you for sharing your concern & contact details with us. Our team member will connect with you in a short while to take this forward. Get in touch with Saboo Maruti for best deals on Maruti Suzuki Brezza, S-Presso, Alto, Dzire & Ertiga.'
        />
      </Helmet>
      <Header />
      <div className='pt-32 pb-16'>
        <h1 className='flex justify-center text-green-700 text-9xl'>
          <TiTick />
        </h1>
        <h4 className='text-center font-semibold text-3xl'>THANK YOU!</h4>
        <p className='text-center mt-6'>
          Your Enquiry has been Processed Successfully. Our Executive will get
          in touch with you shortly.
        </p>
        <Link className='flex items-center justify-center py-8' to='/'>
          <FiArrowRight size={20} />
          &nbsp;<span className='text-indigo-600'>Back to Home</span>
        </Link>
      </div>
    </>
  );
}

export default ThankYou;

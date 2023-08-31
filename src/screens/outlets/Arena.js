import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import { showrooms } from '../../constants';

function Arena() {
  return (
    <>
      <Header />
      <Helmet>
        <title>Authorized Maruti Showrooms in Hyderabad | Saboo Maruti</title>
        <meta
          name='title'
          content='Authorized Maruti Showrooms in Hyderabad | Saboo Maruti'
        />
        <meta
          name='description'
          content='Authorized Maruti Suzuki Showrooms in Hyderabad. Visit our nearest Saboo Maruti branch to get best offers & discounts on new Maruti cars. Call us 98488 98488'
        />
        <meta
          name='keywords'
          content='maruti suzuki showrooms in hyderabad, maruti showrooms near me, maruti showrooms in hyderabad, maruti showroom'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/showrooms'
        />
        <meta
          property='og:title'
          content='Authorized Maruti Showrooms in Hyderabad | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Authorized Maruti Suzuki Showrooms in Hyderabad. Visit our nearest Saboo Maruti branch to get best offers & discounts on new Maruti cars. Call us 98488 98488'
        />
        <meta property='og:image' content='img/og-tags/saboo_rks.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/showrooms'
        />
        <meta
          property='twitter:title'
          content='Authorized Maruti Showrooms in Hyderabad | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Authorized Maruti Suzuki Showrooms in Hyderabad. Visit our nearest Saboo Maruti branch to get best offers & discounts on new Maruti cars. Call us 98488 98488'
        />
        <meta property='twitter:image' content='img/og-tags/saboo_rks.webp' />
      </Helmet>
      <Banner />
      <div className='my-8'>
        <p className='font-semibold text-3xl text-center'>Arena</p>
        <div className='container mx-auto pt-16'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 md:px-0 gap-5'>
            {showrooms.map((item, index) => (
              <div className='shadow-lg bg-gray-200 rounded lg:mt-0 mt-10 mb-10'>
                <div className='space-y-6 px-3 -mt-8 mb-5' key={index}>
                  <div className='bg-gradient-to-r from-blue-800 to-cyan-500 shadow-md p-4 text-sm text-white rounded'>
                    <p className='font-light'>{item.address}</p>
                  </div>
                  <iframe
                    title='map'
                    className='w-full shadow-lg'
                    src={item.map}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className='bg-[#40a7e4]'>
      <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 text-white md:px-0 px-5 lg:mt-16'>
        <div className='text-2xl text-center sm:text-left py-6 sm:text-5xl my-auto'>
          Wherever you are <br />{' '}
          <span className='uppercase font-bold'>
            saboo <span className='text-red-600'>rks</span>
          </span>{' '}
          <br /> is by your side.
        </div>
        <div>
          <img
            src={require('../../assets/banners/outlets-banner.webp')}
            alt='Saboo-Maruti-Suzuki-Outlet'
          />
        </div>
      </div>
    </div>
  );
};

export default Arena;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { products } from '../../constants';
import { BiRupee } from 'react-icons/bi';

function ArenaCars() {
  return (
    <>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/1920x400-Backdrop.webp'
        className='w-full lg:mt-20'
        alt='banner'
      />
      <div className='m-10'>
        {' '}
        <p className='text-red-500 text-center text-2xl mt-4'>
          Explore the Unrivaled Excellence of Maruti Suzuki Arena Cars
        </p>
        <p className='text-sm text-center mb-4 px-5 font-light text-gray-500'>
          Our professional and well trained staff is ready to assist you.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-5 pb-5'>
        {products.map((item, index) => (
          <div
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image h-[250px] w-full object-cover'
                />
              </Link>
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-5' />
                  <div>
                    <p className='flex items-center font-bold'>
                      <BiRupee />
                      ₹&nbsp;{item.price} Lakh<sup>*</sup>
                    </p>{' '}
                    <p className='font-light'>ex-showroom</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-3 pb-5'>
                  <Link
                    to={item.explore}
                    className='bg-blue-800 hover:bg-rose-700 hover:border hover:text-red duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center'
                  >
                    Explore
                  </Link>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-black  p-2 max-w-[44%] w-full text-center text-sm uppercase'
                  >
                    View Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArenaCars;

import React, { Fragment } from 'react';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { products } from '../../constants';

function Cars() {
  return (
    <>
      <div className='container mx-auto px-5 lg:px-0 md:px-3 mt-5 '>
        <div className='grid  grid-cols-1 gap-2'>
          <div className='flex items-center justify-center my-3'>
            <Link
              to='/maruti-suzuki-car-offers-page'
              className=' bg-blue-800 text-white py-2 font-light tracking-wide px-4 md:px-6 md:py-2 text-sm md:text-base rounded hover:bg-rose-700 hover:border-red duration-300 ease-in'
            >
              View Offers
            </Link>
          </div>
          <div className='text-center space-y-3'>
            <p className='uppercase font-bold text-2xl md:py-4 text-red-500'>
              The Maruti Suzuki Fleet
            </p>

            {/* <p className='text-base max-w-5xl md:max-w-3xl md:pb-8 mx-auto '>
              Saboo RKS is the leading Maruti Suzuki dealer in Hyderabad. Built
              with innovations that stand out with a whole new world of enhanced
              driving experience. Any Questions? Our professional and
              well-trained staff are always ready to assist!
            </p> */}
          </div>
        </div>
        <VehicleProducts />
        {/* <div className="flex-auto overflow-hidden">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Brezza2022_June30_banner.webp"
          className="mx-auto product_image h-full w-full"
          alt="banner"
        />
      </div> */}
      </div>
    </>
  );
}

const VehicleProducts = () => {
  return (
    <>
      <div className='grid sm:grid-1 lg:grid-cols-3 gap-2 container mx-auto pb-5'>
        {products.map((item, index) => (
          <div
            className='flex flex-col bg-white rounded-md shadow-md border border-gray-300 hover:shadow-lg  transform transition duration-500 hover:scale-106'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <div className='relative'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center rounded-t-md'
                  />
                  <div className='absolute inset-0 opacity-10 rounded-t-md'></div>
                </div>
              </Link>
            </div>
            <div className='flex-auto bg-white rounded-b-md'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-5 w-auto' />

                  <div>
                    <p className='flex items-center font-bold text-xl'>
                      <span className='text-xs'>
                        {' '}
                        <BiRupee />
                      </span>
                      {item.price}
                      <span className='font-extralight'>
                        <sup>*</sup>
                      </span>
                    </p>{' '}
                    <p className='font-extralight text-xs mx-1'>ex-showroom</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-2 p-2.5 mb-2'>
                  <Link
                    to='/compare-cars'
                    className='bg-blue-800 hover:bg-rose-700 hover:border  duration-100 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded  '
                  >
                    Compare
                  </Link>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-blue-900 text-blue-900 hover:border-red-900  hover:text-red-900 p-2 max-w-[44%] w-full text-center text-sm uppercase rounded'
                  >
                    Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='sm:col-span-2'>
          <a href='/maruti-suzuki-driving-school'>
            {' '}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/new-tile-banner.webp'
              className='lg:mx-auto product_image lg:h-[400px] lg:w-full rounded-md shadow-2xl'
              alt='banner'
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Cars;

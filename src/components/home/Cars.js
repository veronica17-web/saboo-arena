import React, { Fragment } from 'react';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { products } from '../../constants';

function Cars() {
  return (
    <>
      <div className='container mx-auto px-5 lg:px-0 md:px-3 mt-5'>
        <div className='grid  grid-cols-1 gap-2'>
          <div className='flex items-center justify-center my-3'>
            <Link
              to='/maruti-suzuki-car-offers-page'
              className='animate-pulse bg-blue-800 text-white py-2 font-light tracking-wide px-4 md:px-6 md:py-2 text-sm md:text-base rounded hover:bg-rose-700 hover:border-red duration-300 ease-in'
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
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center'
                />
              </Link>
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-8 ' />
                  <div>
                    <p className='flex items-center font-bold'>
                      <BiRupee />
                      {item.price}*
                    </p>{' '}
                    <p className='font-light'>ex-showroom</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-2 p-2.5 mb-2'>
                  <Link
                    to='/compare-cars'
                    className='bg-blue-800 hover:bg-rose-700 hover:border hover:text-red duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded'
                  >
                    Compare
                  </Link>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-black  p-2 max-w-[44%] w-full text-center text-sm uppercase rounded'
                  >
                    View Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className='sm:col-span-2'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/new-alto-k10-grid.webp'
            className='lg:mx-auto product_image lg:h-[400px] lg:w-full'
            alt='banner'
          />
        </div>
      </div>
    </>
  );
};

export default Cars;

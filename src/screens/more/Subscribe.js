import React from 'react';

function Subscribe() {
  return (
    <div className='bg-[#15151e] py-12'>
      <div className='container mx-auto'>
        <div className=' block lg:flex items-center justify-between lg:px-20 space-y-3 lg:space-y-0'>
          <div>
            <p className='text-gray-100 text-center text-2xl font-extralight uppercase tracking-wider'>
              Subscribe and Get Notified <br></br>
              about our Latest offers
            </p>
          </div>

          <form className='flex items-center justify-center p-5'>
            <input
              className='md:max-w-[230px] lg:w-[350px] md:w-full w-[230px] px-4 outline-none py-3 rounded-tl rounded-bl'
              type='text'
              placeholder='Email Address'
              name='Email'
            />
            <button className='bg-blue-900 text-white py-3 px-5 font-semibold rounded-br rounded-tr'>
              Get Notified
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;

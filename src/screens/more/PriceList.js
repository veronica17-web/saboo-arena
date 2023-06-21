import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Select, Option } from '@material-tailwind/react';

const PriceList = () => {
  const [price, setPrice] = useState('3,54,000');
  const [altok10price, setaltok10Price] = useState('3,99,000');
  const [spressoprice, setspressoPrice] = useState('4,26,500');
  const [celerioprice, setcelerioPrice] = useState('5,36,500');
  const [wagonrprice, setwagonrPrice] = useState('5,54,500');
  const [swiftprice, setswiftPrice] = useState('5,99,450');
  const [dzireprice, setdzirePrice] = useState('6,51,500');
  const [brezzaprice, setbrezzaPrice] = useState('8,29,000');
  const [ertigaprice, setertigaPrice] = useState('8,64,000');
  const [eecoprice, seteecoPrice] = useState('5,27,000');

  return (
    <div class='header'>
      <nav class='bg-white py-2 md:py-4 bg-blue-800'>
        <div class='container px-2 mx-auto md:flex md:items-center'>
          <div class='flex justify-between items-center'>
            <a href='#' class='font-bold text-xl text-indigo-600'>
              {' '}
              <img
                className='h-12 w-auto'
                src={require('../../assets/whitelogo.webp')}
                alt='logo'
              />
            </a>
            {/* <button
                class='border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden'
                id='navbar-toggle'
              >
                <i class='fas fa-bars'></i>
              </button> */}
          </div>

          <div
            class='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'
            id='navbar-collapse'
          >
            <a href='#' class='p-2 lg:px-4 md:mx-2 text-xl text-white rounded'>
              Price List
            </a>
          </div>
        </div>
      </nav>

      <div class='bg-indigo-100 py-6 md:py-12'>
        <div class='container mx-auto px-4 sm:px-8'>
          <h1 class='block text-3xl font-semibold text-center my-auto'>
            Arena Price List
          </h1>
          <div class='py-2'>
            {/* <div>
              <h2 class='text-2xl font-semibold leading-tight'>Arena</h2>
            </div> */}
            <div class='lg-mx-2 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto'>
              <div class='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
                <table class='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Model
                      </th>
                      {/* <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Fuel / Transmission
                      </th> */}
                      <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Variant
                      </th>
                      <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Ex Showroom Price ₹
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://imgd.aeplcdn.com/1280x720/cw/ec/39013/Maruti-Suzuki-Alto-Right-Front-Three-Quarter-154833.jpg?wm=0&q=75'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>
                              Alto 800
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$20,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>
                          <div className='space-y-3 mx-auto md:mx-0'>
                            <select
                              name='model'
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                            >
                              <option value='3,54,000'>STD (O)</option>
                              <option value='4,23,000'>LXI (O)</option>
                              <option value='4,43,000'>VXI</option>
                              <option value='4,56,500'>VXI+</option>
                              <option value='5,13,000'>LXI (O) CNG</option>
                              <option value='4,20,000'>ALTO TOUR H1 (O)</option>
                            </select>
                          </div>
                        </p>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0 opacity-50 rounded-full'
                          ></span>
                          <div className='py-2 lg:text-lg sm:text-sm'>
                            {price}
                          </div>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-k10.webp'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>
                              Alto K10
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={altok10price}
                          onChange={(e) => setaltok10Price(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='3,99,000'>STD</option>
                          <option value='4,83,500'>LXI</option>
                          <option value='5,06,000'>VXI</option>
                          <option value='4,96,000'>VXI CNG</option>
                          <option value='5,35,000'>VXI+</option>
                          <option value='5,61,000'>VXI AGS</option>
                          <option value='5,90,000'>VXI+ AGS</option>
                        </select>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0 opacity-50 rounded-full'
                          ></span>
                          <span class='relative lg:text-lg sm:text-sm'>
                            {altok10price}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-spresso.webp'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>
                              S-Presso
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={spressoprice}
                          onChange={(e) => setspressoPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='4,26,500'>STD</option>
                          <option value='5,01,500'>LXI</option>
                          <option value='5,21,500'>VXI</option>
                          <option value='5,50,500'>VXI+</option>
                          <option value='5,76,500'>VXI AGS</option>
                          <option value='6,05,500'>VXI+ AGS</option>
                          <option value='5,91,500'>LXI CNG</option>
                          <option value='6,11,500'>VXI CNG</option>
                        </select>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span class='relative lg:text-lg sm:text-sm'>
                            {spressoprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-celerio.webp'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Celerio</div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={celerioprice}
                          onChange={(e) => setcelerioPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='5,36,500'>LXI</option>
                          <option value='5,83,500'>VXI</option>
                          <option value='6,11,500'>ZXI</option>
                          <option value='6,59,500'>ZXI+</option>
                          <option value='6,38,500'>VXI AGS</option>

                          <option value='6,66,500'>ZXI AGS</option>
                          <option value='7,14,500'>ZXI+ AGS</option>
                          <option value='6,73,500'>VXI CNG</option>
                        </select>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span class='relative lg:text-lg sm:text-sm'>
                            {celerioprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-wagonr.webp'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Wagon R</div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={wagonrprice}
                          onChange={(e) => setwagonrPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='5,54,500'>LXI</option>
                          <option value='5,99,500'>VXI</option>
                          <option value='6,54,500'>VXI AGS </option>
                          <option value='6,28,000'>ZXI </option>
                          <option value='6,83,000'>ZXI AGS</option>
                          <option value='6,87,500'>ZXI+ (D)</option>
                          <option value='6,75,500'>ZXI+</option>
                          <option value='7,42,500'>ZXI+ AGS (D)</option>
                          <option value='7,30,500'>ZXI+ AGS</option>
                          <option value='6,44,500'>LXI CNG </option>
                          <option value='6,89,500'>VXI CNG</option>

                          <option value='5,51,500'>TOUR H3</option>
                          <option value='6,41,500'>TOUR H3 CNG</option>
                        </select>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold  leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span class='relative lg:text-lg sm:text-sm'>
                            {wagonrprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-swift.webp'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Swift</div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={swiftprice}
                          onChange={(e) => setswiftPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='5,99,450'>LXI</option>
                          <option value='6,95,000'>VXI</option>
                          <option value='7,50,000'>VXI AGS</option>
                          <option value='7,63,000'>ZXI</option>
                          <option value='8,18,000'>ZXI AGS</option>

                          <option value='8,34,000'>ZXI+</option>
                          <option value='8,48,000'>ZXI+ (D)</option>
                          <option value='8,89,000'>ZXI+ AGS</option>

                          <option value='9,03,000'>ZXI+ AGS (D)</option>
                          <option value='7,85,000'>VXI CNG</option>
                          <option value='8,53,000'>ZXI CNG</option>
                        </select>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold  leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span class='relative lg:text-lg sm:text-sm'>
                            {swiftprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-dzire.webp'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Dzire</div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={dzireprice}
                          onChange={(e) => setdzirePrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='6,51,500'>LXI</option>
                          <option value='7,44,250'>VXI</option>
                          <option value='8,12,250'>ZXI</option>
                          <option value='8,83,750'>ZXI+</option>
                          <option value='7,99,250'>VXI AGS</option>

                          <option value='8,67,250'>ZXI AGS</option>
                          <option value='9,38,750'>ZXI+ AGS</option>
                          <option value='8,39,250'>VXI CNG</option>
                          <option value='9,07,250'>ZXI CNG</option>
                          <option value='6,51,250'>TOUR S</option>
                          <option value='7,46,000'>TOUR S CNG</option>
                        </select>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span class='relative lg:text-lg sm:text-sm'>
                            {dzireprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-brezza.webp'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Brezza</div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={brezzaprice}
                          onChange={(e) => setbrezzaPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='8,29,000'>LXI</option>
                          <option value='9,64,500'>VXI</option>
                          <option value='11,14,500'>VXI AT</option>
                          <option value='11,04,500'>ZXI</option>

                          <option value='11,20,500'>ZXI (D)</option>
                          <option value='12,54,500'>ZXI AT</option>
                          <option value='12,70,500'>ZXI AT (D)</option>
                          <option value='12,48,000'>ZXI+ AT</option>
                          <option value='12,64,000'>ZXI+ (D)</option>
                          <option value='13,98,000'>ZXI+ AT</option>
                          <option value='14,14,000'>ZXI+ AT (D)</option>
                          <option value='09,24,000'>LXI CNG</option>
                          <option value='10,59,500'>VXI CNG</option>
                          <option value='12,15,500'>ZXI CNG (D)</option>
                          <option value='11,99,500'>ZXI (O) CNG</option>
                        </select>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold  leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span class='relative lg:text-lg sm:text-sm'>
                            {brezzaprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-ertiga.webp'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-xs'>Ertiga</div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$20,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={ertigaprice}
                          onChange={(e) => setertigaPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='8,64,000'>LXI </option>
                          <option value='9,78,000'>VXI</option>
                          <option value='10,88,000'>ZXI</option>
                          <option value='11,58,000'>ZXI+ </option>
                          <option value='11,28,000'>VXI AT </option>

                          <option value='12,38,000'>ZXI AT</option>
                          <option value='13,08,000'>ZXI+ AT </option>
                          <option value='10,73,000'>VXI CNG</option>
                          <option value='11,83,000'>ZXI CNG</option>
                          <option value='9,75,000'>TOUR M</option>
                          <option value='10,70,000'>TOUR M CNG</option>
                        </select>
                      </td>
                      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold  leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span class='relative lg:text-lg sm:text-sm'>
                            {ertigaprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class='px-5 py-5 bg-white text-sm'>
                        <div class='flex'>
                          {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-eeco.webp'
                              alt=''
                            />
                          </div> */}
                          <div class='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>EECO</div>
                          </div>
                        </div>
                      </td>
                      {/* <td class='px-5 py-5 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$12,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td class='px-5 py-5 bg-white text-sm'>
                        <select
                          name='model'
                          value={eecoprice}
                          onChange={(e) => seteecoPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='5,27,000'>5 STR STD 1.2L</option>
                          <option value='5,63,000'>5 STR AC 1.2L</option>
                          <option value='6,53,000'>5 STR AC CNG 1.2L</option>
                          <option value='5,56,000'>7 STR STD 1.2L</option>
                          <option value='5,42,000'>CARGO PETROL</option>

                          <option value='6,32,000'>CARGO CNG</option>
                          <option value='6,74,000'>CARGO AC CNG</option>

                          <option value='5,24,000'>
                            TOUR V 5 STR STD 1.2L
                          </option>
                          <option value='5,60,000'>TOUR V 5 STR AC 1.2L</option>
                          <option value='6,50,000'>TOUR V 5 STR AC CNG</option>
                          <option value='5,53,000'>
                            TOUR V 7 STR STD 1.2L
                          </option>
                          <option value='6,54,000'>
                            AMBULANCE (SHELL) 1.2L
                          </option>

                          <option value='827,000'>AMBULANCE 1.2L</option>
                        </select>
                      </td>
                      <td class='px-5 py-5 bg-white text-sm'>
                        <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            class='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span class='relative lg:text-lg sm:text-sm'>
                            {eecoprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h1 class='block text-3xl font-semibold text-center py-6'>
                Nexa Price List
              </h1>
              <NexaPriceList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NexaPriceList = () => {
  const [price, setPrice] = useState('7,46,500');
  const [jimnyprice, setjimnyPrice] = useState('12,74,000');
  const [vitaraprice, setvitaraPrice] = useState('10,70,000');
  const [xl6price, setxl6Price] = useState('11,56,000');
  const [ciazprice, setciazPrice] = useState('9,30,000');
  const [balenoprice, setbalenoPrice] = useState('6,61,000');
  const [ignisprice, setignisPrice] = useState('5,84,000');

  return (
    <div class='container px-2 mx-auto md:flex md:items-center'>
      <div></div>
      <div class='py-2'>
        <table class='min-w-full leading-normal'>
          <thead>
            <tr>
              <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                Model
              </th>
              {/* <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Fuel / Transmission
                      </th> */}
              <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                Variant
              </th>
              <th class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                Ex Showroom Price ₹
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div class='flex'>
                  {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://imgd.aeplcdn.com/1280x720/cw/ec/39013/Maruti-Suzuki-Alto-Right-Front-Three-Quarter-154833.jpg?wm=0&q=75'
                              alt=''
                            />
                          </div> */}
                  <div class='ml-3'>
                    <div className='lg:text-lg sm:text-sm'>Fronx</div>
                  </div>
                </div>
              </td>
              {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$20,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p class='text-gray-900 whitespace-no-wrap'>
                  <div className='space-y-3 mx-auto md:mx-0'>
                    <select
                      name='model'
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                    >
                      <option value='7,46,500'>SIGMA</option>
                      <option value='8,32,500'>DELTA</option>
                      <option value='8,72,500'>DELTA+</option>
                      <option value='8,87,500'>DELTA AGS</option>
                      <option value='9,27,500'>DELTA+ AGS</option>

                      <option value='9,72,500'>DELTA+ MT (SMART HYBRID)</option>
                      <option value='10,55,500'>ZETA MT (SMART HYBRID) </option>
                      <option value='11,47,500'>
                        ALPHA(M) MT (SMART HYBRID)
                      </option>
                      <option value='11,63,500'>
                        ALPHA(D) MT (SMART HYBRID)
                      </option>
                      <option value='12,05,500'>ZETA AT (SMART HYBRID)</option>
                      <option value='12,97,500'>ALPHA(M) (SMART HYBRID)</option>
                      <option value='13,13,500'>
                        ALPHA(D) AT (SMART HYBRID)
                      </option>
                    </select>
                  </div>
                </p>
              </td>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                  <span
                    aria-hidden
                    class='absolute inset-0 opacity-50 rounded-full'
                  ></span>
                  <div className='py-2 lg:text-lg sm:text-sm'>{price}</div>
                </span>
              </td>
            </tr>
            <tr>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div class='flex'>
                  {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-k10.webp'
                              alt=''
                            />
                          </div> */}
                  <div class='ml-3'>
                    <div className='lg:text-lg sm:text-sm'>Jimny</div>
                  </div>
                </div>
              </td>
              {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <select
                  name='model'
                  value={jimnyprice}
                  onChange={(e) => setjimnyPrice(e.target.value)}
                  className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option value='12,74,000'>ZETA</option>
                  <option value='13,69,000'>ALPHA(M)</option>
                  <option value='13,85,000'>ALPHA(D)</option>
                  <option value='13,94,000'>ZETA 4AT</option>
                  <option value='14,89,000'>ALPHA(M) 4AT</option>
                  <option value='15,05,000'>ALPHA(D) 4AT</option>
                </select>
              </td>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                  <span
                    aria-hidden
                    class='absolute inset-0 opacity-50 rounded-full'
                  ></span>
                  <span class='relative lg:text-lg sm:text-sm'>
                    {jimnyprice}
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div class='flex'>
                  {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-spresso.webp'
                              alt=''
                            />
                          </div> */}
                  <div class='ml-3'>
                    <div className='lg:text-lg sm:text-sm'>Grand Vitara</div>
                  </div>
                </div>
              </td>
              {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <select
                  name='model'
                  value={vitaraprice}
                  onChange={(e) => setvitaraPrice(e.target.value)}
                  className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option value='10,70,000'>SIGMA</option>
                  <option value='12,10,000'>DELTA</option>
                  <option value='13,91,000'>ZETA</option>
                  <option value='15,41,000'>ALPHA</option>
                  <option value='15,57,000'>ALPHA (DT)</option>
                  <option value='13,60,000'>DELTA AT</option>
                  <option value='15,41,000'>ZETA AT</option>
                  <option value='16,91,000'>ALPHA AT</option>
                  <option value='17,07,000'>ALPHA AT (DT)</option>
                  <option value='16,91,000'>ALPHA AWD AG</option>
                  <option value='17,07,000'>ALPHA AWD AG (DT)</option>
                  <option value='18,29,000'>ZETA+ ECVT</option>
                  <option value='18,45,000'>ZETA+ ECVT (DT)</option>
                  <option value='19,79,000'>ALPHA+ ECVT</option>
                  <option value='19,95,000'>ALPHA ECVT (DT)</option>
                  <option value='13,05,000'>DELTA CNG</option>
                  <option value='14,86,000'>ZETA CNG</option>
                </select>
              </td>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                  <span
                    aria-hidden
                    class='absolute inset-0  opacity-50 rounded-full'
                  ></span>
                  <span class='relative lg:text-lg sm:text-sm'>
                    {vitaraprice}
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div class='flex'>
                  {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-celerio.webp'
                              alt=''
                            />
                          </div> */}
                  <div class='ml-3'>
                    <div className='lg:text-lg sm:text-sm'>XL6</div>
                  </div>
                </div>
              </td>
              {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <select
                  name='model'
                  value={xl6price}
                  onChange={(e) => setxl6Price(e.target.value)}
                  className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option value='11,56,000'>ZETA</option>
                  <option value='12,56,000'>ALPHA</option>
                  <option value='13,16,000'>ALPHA+</option>
                  <option value='13,32,000'>ALPHA+ (D)</option>
                  <option value='12,51,000'>ZETA</option>
                  <option value='13,06,000'>ZETA AT</option>
                  <option value='14,06,000'>ALPHA AT</option>
                  <option value='14,66,000'>ALPHA+ AT</option>
                  <option value='14,82,000'>ALPHA+ AT (D)</option>
                </select>
              </td>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                  <span
                    aria-hidden
                    class='absolute inset-0  opacity-50 rounded-full'
                  ></span>
                  <span class='relative lg:text-lg sm:text-sm'>{xl6price}</span>
                </span>
              </td>
            </tr>
            <tr>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div class='flex'>
                  {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-wagonr.webp'
                              alt=''
                            />
                          </div> */}
                  <div class='ml-3'>
                    <div className='lg:text-lg sm:text-sm'>Ciaz</div>
                  </div>
                </div>
              </td>
              {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <select
                  name='model'
                  value={ciazprice}
                  onChange={(e) => setciazPrice(e.target.value)}
                  className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option value='9,30,000'>SIGMA</option>
                  <option value='9,90,000'>DELTA</option>
                  <option value='10,30,000'>ZETA</option>
                  <option value='11,09,000'>ALPHA </option>
                  <option value='11,25,000'>ALPHA (D)</option>
                  <option value='11,10,000'>DELTA AT</option>
                  <option value='11,50,000'>ZETA AT</option>
                  <option value='12,29,000'>ALPHA AT</option>
                  <option value='12,45,000'>ALPHA (D) AT</option>
                </select>
              </td>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span class='relative inline-block px-3 py-1 font-semibold  leading-tight'>
                  <span
                    aria-hidden
                    class='absolute inset-0  opacity-50 rounded-full'
                  ></span>
                  <span class='relative lg:text-lg sm:text-sm'>
                    {ciazprice}
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div class='flex'>
                  {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-swift.webp'
                              alt=''
                            />
                          </div> */}
                  <div class='ml-3'>
                    <div className='lg:text-lg sm:text-sm'>Baleno</div>
                  </div>
                </div>
              </td>
              {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <select
                  name='model'
                  value={balenoprice}
                  onChange={(e) => setbalenoPrice(e.target.value)}
                  className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option value='6,61,000'>SIGMA </option>
                  <option value='7,45,000'>DELTA</option>
                  <option value='8,38,000'>ZETA</option>
                  <option value='9,33,000'>ALPHA </option>
                  <option value='8,35,000'>DELTA CNG</option>
                  <option value='9,28,000'>ZETA CNG</option>
                  <option value='8,00,000'>DELTA AT</option>
                  <option value='8,90,000'>ZETA AT</option>
                  <option value='9,88,000'> ALPHA AT</option>
                </select>
              </td>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span class='relative inline-block px-3 py-1 font-semibold  leading-tight'>
                  <span
                    aria-hidden
                    class='absolute inset-0  opacity-50 rounded-full'
                  ></span>
                  <span class='relative lg:text-lg sm:text-sm'>
                    {balenoprice}
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div class='flex'>
                  {/* <div class='flex-shrink-0 w-10 h-10'>
                            <img
                              class='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-dzire.webp'
                              alt=''
                            />
                          </div> */}
                  <div class='ml-3'>
                    <div className='lg:text-lg sm:text-sm'>Ignis</div>
                  </div>
                </div>
              </td>
              {/* <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p class='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p class='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <select
                  name='model'
                  value={ignisprice}
                  onChange={(e) => setignisPrice(e.target.value)}
                  className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option value='5,84,000'>SIGMA</option>
                  <option value='6,38,000'>DELTA</option>
                  <option value='6,96,000'>ZETA</option>
                  <option value='7,10,000'>ZETA(D)</option>
                  <option value='7,61,000'>ALPHA</option>
                  <option value='7,75,000'>ALPHA(D)</option>
                  <option value='6,93,000'>DELTA AGS (M)</option>
                  <option value='7,51,000'>ZETA AGS (M)</option>
                  <option value='8,16,000'>ALPHA AGS (M)</option>
                  <option value='7,65,000'>ZETA AGS (D)</option>

                  <option value='8,30,000'>ALPHA AGS (D)</option>
                </select>
              </td>
              <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span class='relative inline-block px-3 py-1 font-semibold leading-tight'>
                  <span
                    aria-hidden
                    class='absolute inset-0  opacity-50 rounded-full'
                  ></span>
                  <span class='relative lg:text-lg sm:text-sm'>
                    {ignisprice}
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p className='text-red-600 font-thin p-2'>
          Disclaimer: The given price list is provided for informational
          purposes only and is subject to change without prior notice. Please
          note that the prices mentioned in this list may vary depending on
          factors such as location, availability, market conditions, and any
          applicable taxes or fees.
        </p>
      </div>
    </div>
  );
};

export default PriceList;

import { useState } from 'react';
import React from 'react';

const Careers = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  // Define city-to-postal code, city-to-state, and city-to-country mappings
  const cityData = {
    Hyderabad: {
      postalCode: '500xxx',
      state: 'Telangana',
      country: 'India',
    },
    Secunderabad: {
      postalCode: '500xxx',
      state: 'Telangana',
      country: 'India',
    },
    Warangal: {
      postalCode: '506xxx',
      state: 'Telangana',
      country: 'India',
    },
    Nizamabad: {
      postalCode: '503xxx',
      state: 'Telangana',
      country: 'India',
    },
    Karimnagar: {
      postalCode: '505xxx',
      state: 'Telangana',
      country: 'India',
    },
    Khammam: {
      postalCode: '507xxx',
      state: 'Telangana',
      country: 'India',
    },
    Ramagundam: {
      postalCode: '505xxx',
      state: 'Telangana',
      country: 'India',
    },
    // Add more cities and data here
  };

  // Handle city selection
  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);

    // Get city data based on the selected city
    const cityInfo = cityData[selectedCity] || {};
    setPostalCode(cityInfo.postalCode || '');
    setSelectedState(cityInfo.state || '');
    setSelectedCountry(cityInfo.country || '');
  };

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-4xl font-bold text-center p-4'>Registration</h1>
      {/* Form layout */}
      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='mt-5 md:col-span-3 md:mt-0'>
            <div className='overflow-hidden shadow sm:rounded-md p-4'>
              <form>
                <div className='space-y-4'>
                  <div className='grid md:grid-cols-2 gap-3 p-2'>
                    <div>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                        First Name
                      </label>

                      <input
                        className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                        type='text'
                        id='Last_Name'
                        name='Last Name'
                      />
                    </div>
                    <div>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                        Last Name
                      </label>

                      <input
                        className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                        type='text'
                        id='Last_Name'
                        name='Last Name'
                      />
                    </div>
                    <div>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                        Email
                      </label>
                      <input
                        className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                        type='text'
                        id='Email'
                        name='Email'
                      />
                    </div>

                    <div>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                        Phone
                      </label>
                      <input
                        className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                        type='text'
                        id='Phone'
                        minLength='10'
                        maxLength='10'
                        required
                        name='Phone'
                        value=''
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='position'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                      >
                        Position Applying For
                      </label>
                      <select
                        id='position'
                        name='position'
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      >
                        <option value='' disabled>
                          Select a position
                        </option>
                        <option value='Consultant'>Consultant</option>
                        <option value='Developer'>Developer</option>
                        <option value='Sales'>Sales</option>
                        <option value='Service'>Service</option>
                        <option value='Finance'>Finance</option>
                        <option value='HR'>HR</option>
                        <option value='Other'>Other</option>
                        {/* Add more position options as needed */}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor='dob'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                      >
                        Date of Birth
                      </label>
                      <div className='flex space-x-2'>
                        <div className='w-1/4'>
                          <select
                            id='day'
                            name='day'
                            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          >
                            <option value='' disabled>
                              Day
                            </option>
                            {/* Add day options */}
                            {Array.from({ length: 31 }, (_, i) => (
                              <option key={i} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className='w-1/4'>
                          <select
                            id='month'
                            name='month'
                            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          >
                            <option value='' disabled>
                              Month
                            </option>
                            {/* Add month options */}
                            {Array.from({ length: 12 }, (_, i) => (
                              <option key={i} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className='w-1/4'>
                          <select
                            id='year'
                            name='year'
                            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          >
                            <option value='' disabled>
                              Year
                            </option>
                            {/* Add year options */}
                            {Array.from({ length: 100 }, (_, i) => {
                              const currentYear = new Date().getFullYear();
                              const year = currentYear - i;
                              return (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='border-t border-gray-300 my-6' />

                  <div className='grid md:grid-cols-1 gap-3'>
                    <div>
                      <label
                        htmlFor='addressLine1'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                      >
                        Address Line 1
                      </label>
                      <input
                        type='text'
                        id='addressLine1'
                        name='addressLine1'
                        className='block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Address Line 1'
                      />
                    </div>

                    <div className='mt-4'>
                      <label
                        htmlFor='addressLine2'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                      >
                        Address Line 2 (optional)
                      </label>
                      <input
                        type='text'
                        id='addressLine2'
                        name='addressLine2'
                        className='block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Address Line 2'
                      />
                    </div>
                    <div className='grid grid-cols-2 gap-3'></div>
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='mt-4'>
                        <label
                          htmlFor='city'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                        >
                          City
                        </label>
                        <select
                          id='city'
                          name='city'
                          value={selectedCity}
                          onChange={handleCityChange}
                          className='block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        >
                          <option value='' disabled>
                            Select a city
                          </option>
                          {Object.keys(cityData).map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className='mt-4'>
                        <label
                          htmlFor='postalCode'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                        >
                          Postal Code
                        </label>
                        <input
                          type='text'
                          id='postalCode'
                          name='postalCode'
                          value={postalCode}
                          readOnly
                          className='block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='Postal Code'
                        />
                      </div>

                      <div className='mt-4'>
                        <label
                          htmlFor='state'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                        >
                          State/Province
                        </label>
                        <input
                          type='text'
                          id='state'
                          name='state'
                          value={selectedState}
                          readOnly
                          className='block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='State/Province'
                        />
                      </div>

                      <div className='mt-4'>
                        <label
                          htmlFor='country'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                        >
                          Country
                        </label>
                        <input
                          type='text'
                          id='country'
                          name='country'
                          value={selectedCountry}
                          readOnly
                          className='block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='Country'
                        />
                      </div>
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
                        Please agree with the disclaimer
                      </label>
                    </div>
                  </div>
                  <button
                    className='bg-blue-700 text-white py-3 px-5 rounded'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

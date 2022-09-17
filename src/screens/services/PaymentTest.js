import React from 'react';
import Header from '../../components/header/Header';

const PaymentTest = () => {
  return (
    <>
      <Header />
      <div></div>
      <div className='container mx-auto py-5 rounded-lg'>
        <div className='mt-4 md:mt-0 bg-gray-100 shadow-2xl rounded-lg p-7 '>
          <div class='gap-6 items-center py-6 px-2 mx-auto max-w-screen-xl xl:gap-14 md:grid md:grid-cols-2 sm:py-14 lg:px-4'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/payment-system/saboo-rks-qrcode.webp'
              className='w-96'
              alt='dashboard'
            />
            <div className='mt-4 md:mt-0 bg-gray-100 shadow-2xl rounded-lg mr-6'>
              <h2 className='mb-4 mt-5 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center'>
                Bank Details
              </h2>
              <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                  <div className='border-t border-gray-200' />
                </div>
              </div>
              {/* <table class=' border-collapse border text-center border-slate-400 p-2'>
                <thead>
                  <tr>
                    <td className='text-sm text-gray-900 border border-slate-300 font-light px-6 py-4 whitespace-nowrap'>
                      Name:
                    </td>
                    <th className='text-sm text-gray-900 border border-slate-300 font-strong px-6 py-4 whitespace-nowrap'>
                      RKS Motor Pvt. Ltd.
                    </th>
                  </tr>
                </thead>
                <tbody className='p-10'>
                  <tr className=''>
                    <td className='text-sm text-gray-900 border border-slate-300 font-light px-6 py-4 whitespace-nowrap'>
                      Ac.No:
                    </td>
                    <th className='text-sm text-gray-900 border border-slate-300 font-strong px-6 py-4 whitespace-nowrap'>
                      50200004137964
                    </th>
                  </tr>
                  <tr>
                    <td className='text-sm text-gray-900 border border-slate-300 font-light px-6 py-4 whitespace-nowrap'>
                      Bank:
                    </td>
                    <th className='text-sm text-gray-900 border border-slate-300 font-strong px-6 py-4 whitespace-nowrap'>
                      HDFC Bank
                    </th>
                  </tr>
                  <tr>
                    <td className='text-sm text-gray-900 border border-slate-300 font-light px-6 py-4 whitespace-nowrap'>
                      Branch:
                    </td>
                    <th className='text-sm text-gray-900 border border-slate-300 font-strong px-6 py-4 whitespace-nowrap'>
                      Somajiguda, Hyderabad
                    </th>
                  </tr>
                  <tr>
                    <td className='text-sm text-gray-900 border border-slate-300 font-light px-6 py-4 whitespace-nowrap'>
                      RTGS/NEFT IFSC Code:
                    </td>
                    <th className='text-sm text-gray-900 border border-slate-300 font-strong px-6 py-4 whitespace-nowrap'>
                      HDFC0000512
                    </th>
                  </tr>
                </tbody>
              </table> */}

              <div class='overflow-x-auto relative p-2 m-10'>
                <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border text-center border-slate-400'>
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='py-3 px-6 invisible'>
                        Product name
                      </th>
                      <th scope='col' class='py-3 px-6 invisible'>
                        Color
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class='text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th
                        scope='row'
                        class='py-4 px-6  text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        Ac.No:
                      </th>
                      <td class='py-4 px-6'>50200004137964</td>
                    </tr>
                    <tr class='text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th
                        scope='row'
                        class='py-4 px-6  text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        Bank:
                      </th>
                      <td class='py-4 px-6'>HDFC Bank</td>
                    </tr>
                    <tr class='text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th
                        scope='row'
                        class='py-4 px-6  text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        Branch:
                      </th>
                      <td class='py-4 px-6'>Somajiguda</td>
                    </tr>
                    <tr class='text-left bg-white dark:bg-gray-800'>
                      <th
                        scope='row'
                        class='py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        RTGS/NEFT IFSC Code:
                      </th>
                      <td class='py-4 px-6'>HDFC0000512</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentTest;

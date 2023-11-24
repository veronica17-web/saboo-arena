import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import ReadMoreReact from 'read-more-react';


import '../../App.css';

// const secondPara =
//   'Our unwavering commitment to exceptional service quality and customer satisfaction has established a stellar reputation, and we are excited to continue growing in an ever-evolving business landscape. As a customer-centric organization, we strive to exceed your expectations every time. Our dedication to this vision is reflected in our remarkable sales numbers, with the highest referral sales and repeat buyers in India. We are proud to have sold over 1,00,000 Maruti Suzuki cars to date and serviced over 10,00,000 cars, a testament to our commendable growth trajectory at Saboo RKS';

const longText =
  "At Saboo RKS Group, we have a robust presence in Hyderabad with extensive coverage that includes five sales outlets, nine workshops, four True Value (pre-owned) sales outlets, one commercial outlet, and two premium car outlets, Nexa. As Hyderabad's leading automobile dealership, we have been at the forefront of driving growth in automobile sales and service over the last four decades. Our unwavering commitment to customer satisfaction is reflected in our extensive network and our belief in the 'Customers for Life' concept. We consistently strive to offer world-class products and services that provide the best value for money to our customers. Saboo RKS Group's values of dependability, assurance, trustworthiness, and loyalty have gained the trust of our customers since our inception, and we continue to prioritize understanding and anticipating their needs to ensure our continued success.";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | RKS Motor Pvt Ltd</title>
        <meta name='title' content='About Us | RKS Motor Pvt Ltd' />
        <meta
          name='description'
          content='SABOO Maruti is Hyderabad’s leading automobile dealership and has been driving growth in domains of automobile sales and service over the last four decades. We are extensively spread across the city with four sales outlets, seven workshops, one commercial outlet and two premium car outlets NEXA.'
        />
        <meta name='keywords' content='About Us' />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/about-maruti-suzuki-dealers'
        />
        <meta
          property='og:title'
          content='Best Maruti Suzuki Dealers in Hyderabad | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Saboo Maruti is the best Maruti Suzuki authorized dealers in Hyderabad. Visit our nearest Saboo Maruti Showroom and get best deals on all Maruti cars. Call now 98488 98488.'
        />
        <meta property='og:image' content='img/og-tags/about_us.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/about-maruti-suzuki-dealers'
        />
        <meta
          property='twitter:title'
          content='Best Maruti Suzuki Dealers in Hyderabad | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Saboo Maruti is the best Maruti Suzuki authorized dealers in Hyderabad. Visit our nearest Saboo Maruti Showroom and get best deals on all Maruti cars. Call now 98488 98488.'
        />
        <meta property='twitter:image' content='img/og-tags/about_us.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/1920x400-Backdrop.webp'
        className='max-w-full w-full lg:mt-16'
        alt='Maruti-Suzuki-Nexa_Lumbini'
      />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/about.webp'
        className=' w-full mb-8 container mx-auto'
        alt='Maruti-Suzuki-Nexa_Lumbini'
      />
      <div className='container mx-auto px-5 shadow-md border rounded-md p-2 leading-loose text-center'>
        <p className='text-gray-100'>
          <span className='text-blue-900 font-medium'>
            For over four decades, Saboo RKS has been the driving force behind
            the growth of automobile sales and service in Hyderabad, solidifying
            our position as the city's premier automobile dealership. Since our
            inception in 1973, we have evolved from a 2-wheeler dealership to a
            4-wheeler dealership and gained the prestigious Maruti Suzuki
            dealership in 1997.{' '}
            {/* <ReadMoreReact
              text={}
              min={80}
              ideal={100}
              max={200}
              readMoreText='Read More'
            /> */}
          </span>
        </p>
        <p className='text-gray-100 py-3'>
          <span className='text-blue-900 font-medium'>
            <ReadMoreReact
              text={longText}
              min={80}
              ideal={100}
              max={200}
              readMoreText='Read More'
            />
          </span>{' '}
        </p>

        {/* <p className='text-gray-100 py-3'>
          <span className='text-gray-500 font-medium'>
            <br></br>
            At SABOO RKS Group, we consider understanding and anticipating
            customer needs as crucial to our continued success. We believe in
            "Customers for Life" concept and strive to provide the best value
            for money to our customers by offering world-class products and
            services. Dependability, Assurance, Trust Worthy and Loyal – values
            synonymous to the SABOO RKS Group, have helped us gain the trust of
            our customers, since inception.
          </span>{' '}
        </p> */}
        {/* <p className='text-gray-100 py-3'>
          <span className='text-gray-500 font-medium'>
            <ReadMoreReact
              text={secondPara}
              min={150}
              ideal={150}
              max={200}
              readMoreText='Read More'
            />
            <br></br>
          </span>{' '}
        </p>
        <p className='text-gray-100 py-3'>
          <span className='text-gray-500 font-medium'></span>{' '}
        </p> */}
      </div>
      <br></br>
      <div className='container mx-auto px-5 text-center py-6'>
        <h2 className='text-red-500 font-medium text-5xl p-2'>
          OUR MANAGEMENT
        </h2>
        <p className='text-blue-900'>
          At Saboo RKS, we pride ourselves on the quality of our team - our
          experts are not only the finest in the industry but also leaders in
          their field, giving you unparalleled access to the best and most
          up-to-date resources available.
        </p>
      </div>

      <div className='text-center shadow-md mx-auto border px-5 sm:max-w-[400px] w-full rounded-md mb-5'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/RKSABOO.webp'
          className='max-w-full mx-auto rounded-lg p-1'
          alt='RKSABOO'
        />
        <h1 className='text-xl py-2'>
          <small>LATE</small> SHRI R K SABOO <br />
          <small className='text-slate-400 text-sm'>FOUNDER</small>
        </h1>
      </div>

      <div className='container grid  md:grid-cols-4 sm:grid-cols-2 gap-8 mx-auto px-5 p-2'>
        <div className='text-center shadow-md border rounded-md'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Madhu-madam.webp'
            className='max-w-full mx-auto rounded-lg p-1'
            alt='RKSABOO'
          />
          <h1 className='py-2 text-xl'>
            MRS. MADHU SABOO
            <br />
            <span className='text-slate-400 text-sm'>
              JOINT MANAGING DIRECTOR
            </span>
          </h1>
        </div>

        <div className='text-center shadow-md border rounded-md'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Vinay-sir.webp'
            className='max-w-full mx-auto rounded-lg p-1'
            alt='RKSABOO'
          />
          <h1 className='py-2 text-xl'>
            MR.VINAY SABOO
            <br />
            <span className='text-slate-400 text-sm'>
              CHAIRMAN & MANAGING DIRECTOR
            </span>
          </h1>
        </div>
        <div className='text-center shadow-md border rounded-md'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Tanay-sir.webp'
            className='max-w-full mx-auto rounded-lg p-1'
            alt='RKSABOO'
          />
          <h1 className='py-2 text-xl'>
            {' '}
            MR. TANAY SABOO
            <br />
            <span className='text-slate-400 text-sm'>
              DIRECTOR OF SALES & MARKETING
            </span>
          </h1>
        </div>
        <div className='text-center shadow-md border rounded-md'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Purva-Saboo.webp'
            className='max-w-full mx-auto rounded-lg p-1'
            alt='RKSABOO'
          />
          <h1 className='py-2 text-xl'>
            MRS. PURVA SABOO
            <br />
            <span className='text-slate-400 text-sm'>
              VICE PRESIDENT FINANCE
            </span>
          </h1>
        </div>
      </div>

      <div className='sm:flex items-center justify-center space-y-5 sm:space-y-0 px-5 sm:space-x-8 mx-auto mt-5'>
        <div className='text-center shadow-md border sm:max-w-[300px] w-full rounded-md'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Patel-sir.webp'
            className='max-w-full mx-auto rounded-lg p-1'
            alt='RKSABOO'
          />
          <h1 className='py-2 text-xl'>
            MR.N.K.PATEL
            <br />
            <span className='text-slate-400 text-sm'>
              DIRECTOR OF OPERATIONS
            </span>
          </h1>
        </div>

        <div className='text-center shadow-md border sm:max-w-[300px] w-full rounded-md'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Pramod.webp'
            className='max-w-full mx-auto rounded-lg p-1'
            alt='RKSABOO'
          />
          <h1 className='py-2 text-xl'>
            MR. M. PRAMOD
            <br />
            <span className='text-slate-400 text-sm'>
              DIRECTOR OF FINANCE & PLANNING
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default About;

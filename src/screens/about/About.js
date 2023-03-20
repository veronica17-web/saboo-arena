import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import ReadMoreReact from 'read-more-react';
import ReactReadMoreReadLess from 'react-read-more-read-less';

import '../../App.css';

const secondPara =
  'With an excellent track record for the impeccable quality of our service and customer satisfaction, we look forward to growing in a dynamic business environment, and keep up with the need to anticipate and embrace change, and continuously reinvent ourselves. We strive for customer satisfaction. The testimony of our success is in having highest number of referral sales & repeat buyers in India. We have sold over 1, 00,000 Maruti Suzuki cars till date and have serviced over 10,00,000 cars. This, in short, sums up the commendable growth route of SABOO RKS.';

const longText =
  'We are extensively spread across the city with five sales outlets, nine workshops, four true value(pre-owned) sales outlets, one commercial outlet and two premium car outlets NEXA. SABOO RKS is Hyderabad’s leading automobile dealership and has been driving growth in domains of automobile sales and service over the last four decades. We have been into automobile business since 1973 and have graduated from 2-wheeler to 4-wheeler with the prestigious dealership of Maruti Suzuki in 1997. We are extensively spread across the city with five sales outlets, nine workshops, four true value(pre-owned) sales outlets, one commercial outlet and two premium car outlets NEXA. At SABOO RKS Group, we consider understanding and anticipating customer needs as crucial to our continued success. We believe in Customers for Life concept and strive to provide the best value for money to our customers by offering world-class products and services. Dependability, Assurance, Trust Worthy and Loyal – values synonymous to the SABOO RKS Group, have helped us gain the trust of our customers, since inception.';

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
      <div className='container mx-auto px-5'>
        <p className='text-gray-100'>
          <span className='text-gray-500 font-medium'>
            SABOO RKS is Hyderabad’s leading automobile dealership and has been
            driving growth in domains of automobile sales and service over the
            last four decades. We have been into automobile business since 1973
            and have graduated from 2-wheeler to 4-wheeler with the prestigious
            dealership of Maruti Suzuki in 1997.{' '}
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
          <span className='text-gray-500 font-medium'>
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
      <div className='container mx-auto px-5 text-center py-6'>
        <h2 className='text-red-500 font-medium text-3xl'>OUR MANAGEMENT</h2>
        <p>
          Our experts are the finest in the industry and leaders in their field,
          meaning you have access to the best possible resources.
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

      <div className='container grid  md:grid-cols-4 sm:grid-cols-2 gap-8 mx-auto px-5'>
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

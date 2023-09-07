import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
//import awardsData from "../../constants/awardsData";
function AwardsTest() {
  const awardsData = [
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Platinum-Award.webp',
      title: 'Maruti Suzuki Platinum Award',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Young-Enterprenuer-Award-Tanay-Saboo-RKS-Motor.webp',
      title: 'Maruti Suzuki Young Entrepreneur Award Tanay Saboo RKS Motor',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Highest-FTIR-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Highest FTIR Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/all-india-Dealers+Award-+Maruti+800+Launch+1997.webp',
      title: 'All India Dealers Award Maruti 800 Launch 1997',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/awarded-best-service-quality-award-1-position-south-4-+q1-2007-by-maruti-suzuk-2007.webp',
      title:
        'Awarded Best Service Quality Award 1 Position South 4 Q1 2007 by Maruti Suzuki 2007',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/awarded-for-highest-maruti-genuine-accessories-mga-offtake-per-vehicle-4000-vehicles-at-maruti-suzuki-dealers-conferencein-2003-2004.webp',
      title:
        'Awarded for Highest Maruti Genuine Accessories (MGA) Offtake per Vehicle 4000 Vehicles at Maruti Suzuki Dealers Conference in 2003-2004',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Accessories-Managers-Meet-Saboo-RKS.webp',
      title: 'Maruti Suzuki Accessories Managers Meet Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Achievers-Club-2013-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Achievers Club 2013 Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-AF-STN-Begumpet.webp',
      title: 'Maruti Suzuki AF-STN Begumpet',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-All-India-Skill-Competition-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki All India Skill Competition Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Alloy-Wheels-Champion-RKS-Motor.webp',
      title: 'Maruti Suzuki Alloy Wheels Champion RKS Motor',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/ICICI-Bank-Car-Loans-Award-Saboo-RKS.webp',
      title: 'ICICI Bank Car Loans Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-AMPS-Woofer-Champion-Saboo-RKS.webp',
      title: 'Maruti Suzuki AMPS Woofer Champion Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Authorised-Dealer-Regional-Winner-Saboo-RKS.webp',
      title: 'Maruti Suzuki Authorized Dealer Regional Winner Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Authorized-Service-Center-Secunderabad-Saboo-RKS.webp',
      title: 'Maruti Suzuki Authorized Service Center Saboo RKS Secunderabad',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Award-For-Best-Performance-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Award For Best Performance Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Best-New-Workshop-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Best New Workshop Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Best-Performance-In-House-Training-Saboo-RKS.webp',
      title: 'Maruti Suzuki Best Performance In-House Training Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Best-Performance-Training-Status-Service-Saboo-RKS.webp',
      title: 'Maruti Suzuki Best Performance Training Status Service Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Best-Work-Shop-Award.webp',
      title: 'Maruti Suzuki Best Work Shop Award',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Best-Work-Shop-Secunderabad-Saboo-RKS.webp',
      title: 'Maruti Suzuki Best Work Shop Saboo RKS Secunderabad',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Chrome-Champion-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Chrome Champion Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Dealers-Award-2019-Saboo-RKS.webp',
      title: 'Maruti Suzuki Dealers Award 2019 Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Dealers-Conference-Saboo-RKS.webp',
      title: 'Maruti Suzuki Dealers Conference Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Digit-Insurance-RKS-Motor.webp',
      title: 'Maruti Suzuki Digit Insurance RKS Motor',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Efficient-Warranty-Handling-System-RKS-Motor.webp',
      title: 'Maruti Suzuki Efficient Warranty Handling System RKS Motor',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Excellence-Award-RKS-Motor.webp',
      title: 'Maruti Suzuki Excellence Award RKS Motor',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Excellence-In-Sales-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Excellence In Sales Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Excellence-In-Service-Saboo-RKS.webp',
      title: 'Maruti Suzuki Excellence In Service Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Excellence-In-Service-Uppal-RKS-Motor.webp',
      title: 'Maruti Suzuki Excellence In Service RKS Motor Uppal',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Excellence-In-Service-Uppal-Saboo-RKS.webp',
      title: 'Maruti Suzuki Excellence In Service Saboo RKS Uppal',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Excellerate-Achievers-Club-Saboo-RKS.webp',
      title: 'Maruti Suzuki Excellerate Achievers Club Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Highest-DSE-Productivity-Tadbund-Saboo-RKS.webp',
      title: 'Maruti Suzuki Highest DSE Productivity Saboo RKS Tadbund',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Highest-Growth-of-Spare-Parts-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Highest Growth of Spare Parts Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Highest-Spares-Sales-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Highest Spares Sales Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Highest-Swift-Car-Sales-Saboo-RKS.webp',
      title: 'Maruti Suzuki Highest Swift Car Sales Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Lowest-Concerns-Tadbund-Saboo-RKS.webp',
      title: 'Maruti Suzuki Lowest Concerns Saboo RKS Tadbund',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-MOS-TAT-Workshop-Uppal-Saboo-RKS.webp',
      title: 'Maruti Suzuki MOS TAT Workshop Saboo RKS Uppal',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-No1-Customer-Satisfaction-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki No. 1 Customer Satisfaction Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Regional-Dealer-Award-RKS-Motor.webp',
      title: 'Maruti Suzuki Regional Dealer Award RKS Motor',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Regional-Dealer-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Regional Dealer Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Regional-Dealer-Conference-Saboo-RKS.webp',
      title: 'Maruti Suzuki Regional Dealer Conference Saboo RKS',
    },
    // {
    //     img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Royal-Platinum-Award-Saboo-RKS.webp",
    //     title: "Maruti Suzuki Royal Platinum Award Saboo RKS"
    // },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Service-No1-Nameplate-In-Customer-Satisfaction-RKS-Motor.webp',
      title:
        'Maruti Suzuki Service No. 1 Nameplate In Customer Satisfaction RKS Motor',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Service-Quality-Award-RKS-Motor.webp',
      title: 'Maruti Suzuki Service Quality Award RKS Motor',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Service-Quality-Award-Saboo-RKS.webp',
      title: 'Maruti Suzuki Service Quality Award Saboo RKS',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Recieved-the-Prestigious-Platinum-Dealership-Award-6-Times-Alpha-Dealership-5-Times-in-a-Row-%26-1-Royal-Platinum-Dealership-Award-2019.webp',
      title:
        'Received the Prestigious Platinum Dealership Award 6 Times, Alpha Dealership 5 Times in a Row & 1 Royal Platinum Dealership Award 2019',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Recognized-as-2nd-Runner-Up-in-Efficient-Warranty-Handling-Systems-at-Maruti-Suzuki-Dealer-Conference-Bangkok-Thailand-2009.webp',
      title:
        'Recognized as 2nd Runner-Up in Efficient Warranty Handling Systems at Maruti Suzuki Dealer Conference Bangkok, Thailand 2009',
    },
    // {
    //     img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Saboo-Maruti-Suzuki-Arena-Awards-Banner.webp",
    //     title: "Saboo Maruti Suzuki Arena Awards Banner"
    // },
  ];
  return (
    <>
      <Helmet>
        <title>
          Awards & Achievements | Maruti Suzuki Car Dealers in Hyderabad
        </title>
        <meta
          name='title'
          content='Awards & Achievements | Maruti Suzuki Car Dealers in Hyderabad'
        />
        <meta
          name='description'
          content="RKS Motor Pvt. Ltd. has won the 'Platinum Dealership Award' for 6 times. And 'Royal Platinum Band Award' for the 1st time from Maruti Suzuki based on the performance parameters for the year of 2018-19."
        />
        <meta name='keywords' content='Maruti Suzuki Awards' />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboomaruti.in/' />
        <meta
          property='og:title'
          content='Awards & Achievements | Maruti Suzuki Car Dealers in Hyderabad'
        />
        <meta
          property='og:description'
          content="RKS Motor Pvt. Ltd. has won the 'Platinum Dealership Award' for 6 times. And 'Royal Platinum Band Award' for the 1st time from Maruti Suzuki based on the performance parameters for the year of 2018-19."
        />
        <meta property='og:image' content='img/og-tags/awards_banner.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboomaruti.in/' />
        <meta
          property='twitter:title'
          content='Awards & Achievements | Maruti Suzuki Car Dealers in Hyderabad'
        />
        <meta
          property='twitter:description'
          content="RKS Motor Pvt. Ltd. has won the 'Platinum Dealership Award' for 6 times. And 'Royal Platinum Band Award' for the 1st time from Maruti Suzuki based on the performance parameters for the year of 2018-19."
        />
        <meta
          property='twitter:image'
          content='img/og-tags/awards_banner.webp'
        />
      </Helmet>
      <Header />
      <div className='bg-gray-100'>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:mt-16'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Saboo-Maruti-Suzuki-Arena-Awards-Banner.webp'
            alt='1'
            className='mx-auto'
          />
          <div className='my-auto text-center'>
            <p className='uppercase text-red-600 font-semibold text-2xl'>
              saboo rks awards and accomplishments
            </p>
            <p className='text-gray-700 text-center mt-2'>
              Our longstanding reputation is sure to continue with strong growth
              in the future. Over the years we have received innumerable awards
              that showcase the innovations introduced by us and the various
              milestones we have achieved.
            </p>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 container gap-6 mx-auto p-5 my-10'>
        {awardsData.map((award, index) => (
          <div className='border shadow rounded p-5' key={index}>
            <img src={award.img} alt={award.index} />
            <p className='text-gray-600 text-center pr-3 pl-3 mt-2'>
              {award.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
export default AwardsTest;

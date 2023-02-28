import React from 'react';
import Slider from '../../components/home/Slider';
import CarEnquiry from '../../components/home/CarEnquiry';
import MobileSlider from '../../components/home/MobileSlider';
import Cars from '../../components/home/Cars';
import About from '../../components/home/About';
import Accomplishments from '../../components/home/Accomplishments';
import { FaStar } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//confetti
import Confetti from 'react-confetti';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper';
import { reviews } from '../../constants/carservice';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';

// const width = window.innerWidth;
function Home() {
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo
          Maruti
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta
          name='description'
          content='Saboo Maruti authorized Maruti Suzuki dealer in Hyderabad & Secunderabad. Get best deals & offers on new Maruti Celerio, Maruti Swift, Maruti brezza,Maruti S-Presso, Maruti Wagon R, Maruti Ertiga, Maruti Alto 800, Maruti Eeco, Maruti Omni, Maruti Vitara brezza.'
        />
        <meta
          name='keywords'
          content='Maruti Suzuki Dealers, Maruti Authorized Dealers, Nexa Dealers Maruti Car Dealers in Hyderabad, Offers on Maruti Cars, offers on maruti cars Hyderabad, maruti car offers 2022, maruti showroom near me, maruti service center near me'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboomaruti.in/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Saboo Maruti authorized Maruti Suzuki dealer in Hyderabad & Secunderabad. Get best deals & offers on new Maruti Celerio, Maruti Swift, Maruti brezza,Maruti S-Presso, Maruti Wagon R, Maruti Ertiga, Maruti Alto 800, Maruti Eeco, Maruti Omni, Maruti Vitara brezza.'
        />
        <meta property='og:image' content='img/og-tags/saboo_rks.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboomaruti.in/' />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Saboo Maruti authorized Maruti Suzuki dealer in Hyderabad & Secunderabad. Get best deals & offers on new Maruti Celerio, Maruti Swift, Maruti brezza,Maruti S-Presso, Maruti Wagon R, Maruti Ertiga, Maruti Alto 800, Maruti Eeco, Maruti Omni, Maruti Vitara brezza.'
        />
        <meta property='twitter:image' content='img/og-tags/saboo_rks.webp' />
      </Helmet>

      <Header />
      {/* {width > 425 ? <Slider /> : <MobileSlider />} */}
      <Slider />
      {/* <Confetti /> */}
      <MobileSlider />
      <CarEnquiry />
      <Cars />
      <About />
      {/* <Accomplishments /> */}
      <Testimonials />
    </>
  );
}

const Testimonials = () => {
  return (
    <div className='container mx-auto my-5'>
      <p className='text-3xl text-blue-800 text-center '>Testimonials</p>
      <p className='mb-8 text-center'>What people have to say</p>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className='mySwiper'
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='px-8'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
                className='mx-auto'
                alt='offers'
              />
              <p className='text-center text-base text-blue-800 font-semibold py-2'>
                {item.author}
              </p>
              <div className='flex items-center justify-center space-x-1'>
                <FaStar className='text-orange-400' />
                <FaStar className='text-orange-400' />
                <FaStar className='text-orange-400' />
                <FaStar className='text-orange-400' />
                <FaStar className='text-orange-400' />
              </div>
              <p className='text-sm text-center'>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;

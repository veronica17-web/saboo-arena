import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination,EffectFade } from "swiper";
import { mobileSliders } from "../../constants";

function MobileSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
        loop={true}
        pagination={{
          clickable: true,
        }}
         effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper slider-home mobile_slider"
      >
        {mobileSliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              className="max-w-full w-full lg:mt-16"
              alt={item.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MobileSlider;

import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper";
import { sliders } from "../../constants";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Swiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="mySwiper lg:mt-16 desktop_slider"
      >
        {sliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt="offers" className="w-full" />
          </SwiperSlide>
        ))}

        <div
          ref={navigationPrevRef}
          className="absolute left-10 top-1/2 z-10 bg-white rounded-full p-3 cursor-pointer"
        >
          <GrFormPrevious />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute right-10 top-1/2 z-10 bg-white rounded-full p-3 cursor-pointer"
        >
          <GrFormNext />
        </div>
      </Swiper>
    </>
  );
}

export default Slider;

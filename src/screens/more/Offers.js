import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { mobileOffersSliders } from "../../constants";
import { offersSliders } from "../../constants";
import { Link } from "react-router-dom";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet";

const offer_products = [
  {
    name: "Alto K10",
    price: "34000",
    logo: "Alto",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-k10/new-alto-k10.webp",
    explore: "/maruti-alto-800-on-road-price-in-hyderabad",
  },
  {
    name: "Alto",
    price: "34000",
    logo: "Alto",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/new-alto.webp",
    explore: "/maruti-alto-800-on-road-price-in-hyderabad",
  },
  {
    name: "WagonR ",
    price: "49000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/wagon-r/new-wagonr.webp",
    explore: "/maruti-wagon-r-on-road-price-in-hyderabad",
  },
  {
    name: "S-Presso",
    price: "59000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/spresso/new-spresso.webp",
    explore: "/maruti-s-presso-on-road-price-in-hyderabad",
  },
  // {
  //   name: "Vitara Breeza",
  //   price: "26600",
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/offers/maruti-suzuki-brezza.webp",
  //   explore: "/maruti-new-brezza-on-road-price-in-hyderabad",
  // },
  {
    name: "Dzire",
    price: "49000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/dzire/new-dzire.webp",
    explore: "/maruti-swift-dzire-on-road-price-in-hyderabad",
  },
  {
    name: "Swift",
    price: "59000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift/new-swift.webp",
    explore: "/maruti-swift-car-on-road-price-in-hyderabad",
  },
  {
    name: "Celerio",
    price: "59000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/celerio/new-celerio.webp",
    explore: "/the-all-new-celerio",
  },
  {
    name: "EECO",
    price: "29000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/eeco-new.webp",
    explore: "/maruti-eeco-on-road-price-in-hyderabad",
  },
  // {
  //   name: "Ertiga",
  //   price: "0",
  //   discount: "Low Cost EMI",
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-ertiga/ertiga_2.png",
  //   explore: "/maruti-ertiga-on-road-price-in-hyderabad",
  // },
  // {
  //   name: "Tour H1",
  //   price: "28000",

  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/alto-tour-h1/Alto800_car.png",
  //   explore: "/maruti-alto-tour-h1-on-road-price-in-hyderabad",
  // },
  // {
  //   name: "Tour H3",
  //   price: "55000",

  //   img: "https://saboomaruti.in/static/media/wagonR.47c3c101c4c120a22870.webp",
  //   explore: "/maruti-wagnor-tour-h3-on-road-price-in-hyderabad",
  // },
  // {
  //   name: "Tour V",
  //   price: "37500",

  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/Eeco_Car.png",
  //   explore: "/maruti-eeco-tour-v-on-road-price-in-hyderabad",
  // },
  // {
  //   name: "Tour S",
  //   price: "35000",

  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/Dzire_car.png",
  //   explore: "/maruti-dzire-tour-s-on-road-price-in-hyderabad",
  // },
];

function Offers() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Helmet>
        <title>
          Offers on Maruti Suzuki Cars |Exchange offers & Discounts on Maruti
          Cars
        </title>
        <meta
          name="title"
          content="Offers on Maruti Suzuki Cars |Exchange offers & Discounts on Maruti Cars"
        />
        <meta
          name="description"
          content="Maruti Suzuki new car offers, discounts & deals in Hyderabad. Get exclusive offers and discounts on your favorite Maruti cars from Saboo RKS authorized Maruti Suzuki dealer in Hyderabad. Visit now your nearest Saboo RKS showroom for on going offers. Call now."
        />
        <meta
          name="keywords"
          content="Maruti offers, maruti exchange offers, maruti car offers, maruti spresso offers, maruti alto offers, maruti wagonr offers, maruti celerio offers, maruti celerio x offers, maruti eeco offers, maruti ertiga offers, maruti brezza offers, maruti swift offers, maruti dzire offers, spresso offers, alto offers, wagonr offers, celerio offers, celerio x offers, ertiga offers, swift offers, dzire offers, brezza offers,eeco offers"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboomaruti.in/" />
        <meta
          property="og:title"
          content="Offers on Maruti Suzuki Cars |Exchange offers & Discounts on Maruti Cars"
        />
        <meta
          property="og:description"
          content="Explore exciting Maruti Suzuki Car Offers for Maruti Suzuki cars. Maruti SPresso, Alto, Wagon R, Celerio, Celerio X, Swift, Dzire, Ertiga, Brezza, Eeco Models. Avail amazing discounts & exchange offers on your preferred car."
        />
        <meta property="og:image" content="img/og-tags/offers.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.saboomaruti.in/" />
        <meta
          property="twitter:title"
          content="Offers on Maruti Suzuki Cars |Exchange offers & Discounts on Maruti Cars"
        />
        <meta
          property="twitter:description"
          content="Explore exciting Maruti Suzuki Car Offers for Maruti Suzuki cars. Maruti SPresso, Alto, Wagon R, Celerio, Celerio X, Swift, Dzire, Ertiga, Brezza, Eeco Models. Avail amazing discounts & exchange offers on your preferred car."
        />
        <meta property="twitter:image" content="img/og-tags/offers.webp" />
      </Helmet>
      <Header />
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
        className="mySwiper lg:mt-16"
      >
        {offersSliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              alt="offers"
              className="w-full desktop_slider"
            />
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
      <MobileSlider />
      <div className="my-10 text-center space-y-2">
        <p className="text-red-600 font-semibold text-3xl">
          Save with Saboo RKS Maruti Suzuki Offers in Hyderabad, India
        </p>
        <p>
          Last Chance to buy, before price hike. Limited Period to avail
          exciting offers before prices go up
        </p>
        <p className="text-xs">
          <strong>Note:</strong> This Saboo RKS Maruti Suzuki offer is updated
          on 01-{months[new Date().getMonth()]}-{new Date().getFullYear()}. This
          offers is provided for only information purpose. This is a limited
          period offer till 31-{months[new Date().getMonth()]}-
          {new Date().getFullYear()}.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 px-5 sm:px-0 gap-4 container mx-auto pb-5">
        {offer_products.map((item) => (
          <div
            className="flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden"
            key={item.name}
          >
            <p className="absolute top-3 -right-7 uppercase text-sm text-center text-white rotate-45 bg-[#ec1b23] py-1 w-28">
              Offer
            </p>

            <div className=" flex-auto">
              <img src={item.img} alt={item.name} className="mx-auto w-full" />
            </div>
            <div className="flex-auto bg-white">
              <div>
                <div className="flex items-center justify-between p-5 ">
                  {/* <img src={item.logo} alt={item.name} /> */}
                  <p className="text-xl font-bold">
                    <i>{item.name}</i>
                  </p>
                  <p className="uppercase font-bold">
                    Save up to <br />{" "}
                    <span className="text-red-500">
                      ₹ {Intl.NumberFormat("en-IN").format(item.price)}*
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="text-blue-500">{item.discount}</span>
                  </p>
                </div>
                <div className="flex flex-col w-full px-5 mb-3">
                  <Link
                    to={item.explore}
                    className="bg-blue-900 rounded-md text-white text-center font-bold uppercase py-2 hover:animate-pulse"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function MobileSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
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
        {mobileOffersSliders.map((item, index) => (
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

export default Offers;

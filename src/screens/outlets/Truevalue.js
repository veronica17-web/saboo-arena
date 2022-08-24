import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import { truevalue } from "../../constants";

function Truevalue() {
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki True Value in Hyderabad | Buy & Sell Used Cars in
          Hyderabad
        </title>
        <meta
          name="title"
          content="Maruti Suzuki True Value in Hyderabad | Buy & Sell Used Cars in Hyderabad"
        />
        <meta
          name="description"
          content="Maruti Suzuki True Value in Hyderabad. Buy & Sell used cars in Hyderabad. Saboo Maruti offers best deals on used cars. Sell your used car at Saboo Maruti True Value & get best price ."
        />
        <meta
          name="keywords"
          content="maruti suzuki truevalue showrrom in hyderabad, maruti truevalue showroom, maruti true value showroom near me, true value, preowned cars near me"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboomaruti.in/true-value"
        />
        <meta
          property="og:title"
          content="Maruti Suzuki Outlets in Hyderabad | Saboo Maruti"
        />
        <meta
          property="og:description"
          content="Saboo Maruti is the leading Maruti Suzuki dealers in Hyderabad. Visit our web site www.saboomaruti.in or call 98488 98488 to know the locations of Maruti Suzuki Service Centers, Maruti True Value, Maruti Suzuki Showrooms."
        />
        <meta property="og:image" content="img/og-tags/saboomaruti-maps.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboomaruti.in/true-value"
        />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Outlets in Hyderabad | Saboo Maruti"
        />
        <meta
          property="twitter:description"
          content="Saboo Maruti is the leading Maruti Suzuki dealers in Hyderabad. Visit our web site www.saboomaruti.in or call 98488 98488 to know the locations of Maruti Suzuki Service Centers, Maruti True Value, Maruti Suzuki Showrooms."
        />
        <meta
          property="twitter:image"
          content="img/og-tags/saboomaruti-maps.webp"
        />
      </Helmet>
      <Header />
      <Banner />
      <div className="my-8">
        <p className="font-semibold text-3xl text-center">True Value</p>
        <div className="container mx-auto pt-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 md:px-0 gap-5">
            {truevalue.map((item, index) => (
              <div className="shadow-lg bg-gray-200 rounded lg:mt-0 mt-10 mb-10">
                <div className="space-y-6 px-3 -mt-8 mb-5" key={index}>
                  <div className="bg-gradient-to-r from-blue-800 to-cyan-500 shadow-md p-4 text-sm text-white rounded">
                    <p className="font-light">{item.address}</p>
                  </div>
                  <iframe
                    title="map"
                    className="w-full shadow-lg"
                    src={item.map}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="bg-[#40a7e4]">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 text-white md:px-0 px-5 lg:mt-16">
        <div className="text-2xl text-center sm:text-left py-6 sm:text-5xl my-auto">
          Wherever you are <br />{" "}
          <span className="uppercase font-bold">
            saboo <span className="text-red-600">rks</span>
          </span>{" "}
          <br /> is by your side.
        </div>
        <div>
          <img
            src={require("../../assets/banners/Saboo-Maruti-Suzuki-Outlet.webp")}
            alt="Saboo-Maruti-Suzuki-Outlet"
          />
        </div>
      </div>
    </div>
  );
};

export default Truevalue;

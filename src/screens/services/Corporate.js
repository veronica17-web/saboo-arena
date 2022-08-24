import React from "react";
import { Helmet } from "react-helmet";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "../../components/header/Header";

function Corporate() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Cars Bulk Buy | Corporate Offers | Saboo Maruti
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Cars Bulk Buy | Corporate Offers | Saboo Maruti"
        />
        <meta
          name="description"
          content="Best discounts and offers on Maruti Suzuki cars bulk booking. Saboo Maruti offers best deals on Corporate car booking & bulk purchases. Call now 98488 98488."
        />
        <meta
          name="keywords"
          content="Maruti Suzuki Cars Bulk Buy, Corporate Offers, Saboo Maruti"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboomaruti.in/" />
        <meta
          property="og:title"
          content="Maruti Suzuki Cars Bulk Buy | Corporate Offers | Saboo Maruti"
        />
        <meta
          property="og:description"
          content="Best discounts and offers on Maruti Suzuki cars bulk booking. Saboo Maruti offers best deals on Corporate car booking & bulk purchases. Call now 98488 98488."
        />
        <meta property="og:image" content="img/og-tags/corporate.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.saboomaruti.in/" />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Cars Bulk Buy | Corporate Offers | Saboo Maruti"
        />
        <meta
          property="twitter:description"
          content="Best discounts and offers on Maruti Suzuki cars bulk booking. Saboo Maruti offers best deals on Corporate car booking & bulk purchases. Call now 98488 98488."
        />
        <meta property="twitter:image" content="img/og-tags/corporate.webp" />
      </Helmet>
      <img
        src={require("../../assets/banners/Saboo-Maruti-Suzuki-corporate.webp")}
        className="w-full lg:mt-16"
        alt="1"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto my-5">
        <div className="bg-white border shadow-md rounded p-5 mx-5">
          <p className="font-bold text-xl">Corporate Form</p>
          <p className="text-sm mb-5">
            Please fill out the form and we'll get back to you right away !
          </p>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="mr-2 mb-2.5">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                />
              </div>
              <div className="mr-2 mb-2.5">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                />
              </div>
            </div>  
            <div>
              <label htmlFor="comments">Comments</label>
              <textarea
                id="comments"
                className="border px-3 py-1.5 outline-none w-full rounded focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <input type="checkbox" id="check" className="mr-2" />
              <label htmlFor="check">I agree toTerms and conditions</label>
            </div>
            <button
              type="submit"
              className="bg-blue-800 hover:bg-red-500 duration-500 text-white rounded py-2.5 px-5 mt-2"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="mx-5">
          <div className="flex items-center mb-2 space-x-2">
            <a
              href="tel:9848898488"
              className="bg-blue-800 rounded flex items-center text-white px-4 py-1.5"
            >
              <FaPhoneAlt className="mr-2" size={15} />
              98488 98488
            </a>
            <a
              href="mailto:info@saboomaruti.in"
              className="bg-blue-800 rounded text-white px-4 py-1.5 flex items-center"
            >
              <FaEnvelope className="mr-2" size={15} />
              info@saboomaruti.in
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30453.94782709998!2d78.457389!3d17.424094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e0a3e3dabcb8701!2sMaruti%20Suzuki%20Car%20Dealer%20-%20RKS%20Motor!5e0!3m2!1sen!2sin!4v1614840403705!5m2!1sen!2sin"
            title="map"
            className="max-h-[340px] w-full h-full"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Corporate;

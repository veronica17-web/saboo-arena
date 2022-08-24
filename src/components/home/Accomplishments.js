import React from "react";
import { Link } from "react-router-dom";

function Accomplishments() {
  return (
    <>
      <div className="space-y-2 mb-7 px-5">
        <p className="mt-2 text-2xl text-center leading-8 text-gray-900 tracking-wider">
          <span className="text-indigo-600">Saboo </span>
          <span className="text-red-500 py-10 font-semibold">
            RKS Awards And Accomplishments
          </span>
        </p>
        <p className="text-center">
          Our longstanding reputation is sure to continue with strong growth in
          the future. Over the years we have received innumerable awards. we
          have achieved.
        </p>
      </div>
      <div className="container bg-white mx-auto space-y-3 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg border text-sm">
          <div className="bg-[#edf6f9]">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Royal-Platinum-Award-Saboo-RKS.webp"
              className="mx-auto product_image object-contain h-60"
              alt="Saboo RKS Royal Platinum Award"
            />
          </div>
          <div className="space-y-3 p-5">
            <p className="font-semibold text-xl tracking-wide text-blue-900">
              Royal Platinum Band
            </p>
            <p className="text-gray-500">
              It gives us immense pleasure to inform you that SABOO RKS has
              achieved the coveted "Royal Platinum Band" in BSC 2018-19
            </p>

            <p className="text-gray-500">
              We would like to extend our Heart Felt Thanks to our Customers for
              being part of the SABOO RKS Family and contributing towards this
              Success. We wish to continue to serve you as ever.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg border text-sm">
          <div className="space-y-3 p-5">
            <p className="font-semibold text-xl tracking-wide text-blue-900">
              Platinum Dealership Award
            </p>
            <p className="text-gray-500">
              RKS Motor has been awarded the ‘Platinum Dealership Award’ for its
              4th consecutive year from Maruti Suzuki.
            </p>
            <p className="text-gray-500">
              This prestigious award considers key parameters for recognition of
              sustained efforts in achieving excellent performance & visionary
              leadership, demonstrating 360 degree of dynamism in all aspects of
              business with focus on customer retention.
            </p>
          </div>

          <div className="bg-[#edf6f9]">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Maruti-Suzuki-Platinum-Award.webp"
              className="mx-auto product_image object-contain h-60"
              alt="Saboo RKS Royal Platinum Award"
            />
          </div>
        </div>
      </div>
      <div className="text-center py-10">
        <Link to="/awards"
          className="bg-blue-800 hover:bg-rose-700 hover:border-red duration-300 ease-in text-white p-2 text-sm text-center px-6 py-2 rounded"
        >
          View More
        </Link>
      </div>
    </>
  );
}

export default Accomplishments;

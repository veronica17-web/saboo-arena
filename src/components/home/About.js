import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container py-12 bg-white mx-auto">
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mt-2 text-3xl tracking-wider leading-8 text-center text-gray-900 sm:text-2xl">
            About <span className="text-indigo-600">SABOO</span>
            <span className="text-red-500"> RKS</span>
          </p>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="rounded overflow-hidden shadow-xl">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/about.webp"
                  className="mx-auto product_image h-full w-full"
                  alt="about-banner"
                />
              </div>

              <div className="my-auto space-y-5 px-8 py-2">
                <p className="text-left text-base text-black leading-8">
                  We are extensively spread across the city with four sales
                  outlets, seven workshops, one commercial outlet and two
                  premium car outlets NEXA.
                </p>
                <div className="h-px w-full bg-gray-300 md:max-w-[500px] rounded"></div>
                <p className="text-left text-base text-black leading-8">
                  We have been into automobile business since 1973 and have
                  graduated from 2-wheeler to 4-wheeler with the prestigious
                  dealership of Maruti Suzuki in 1997.
                </p>
                <div>
                  <Link
                    to="/about-maruti-suzuki-dealers"
                    className="bg-blue-800 rounded py-2 px-6 text-white hover:bg-rose-700 hover:border-red duration-300 ease-in"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

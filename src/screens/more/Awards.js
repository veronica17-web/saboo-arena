import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import awardsData from "../../constants/awardsData";

function Awards() {
  return (
    <>
      <Helmet>
        <title>
          Awards & Achievements | Maruti Suzuki Car Dealers in Hyderabad
        </title>
        <meta
          name="title"
          content="Awards & Achievements | Maruti Suzuki Car Dealers in Hyderabad"
        />
        <meta
          name="description"
          content="RKS Motor Pvt. Ltd. has won the 'Platinum Dealership Award' for 6 times. And 'Royal Platinum Band Award' for the 1st time from Maruti Suzuki based on the performance parameters for the year of 2018-19."
        />
        <meta name="keywords" content="Maruti Suzuki Awards" />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboomaruti.in/" />
        <meta
          property="og:title"
          content="Awards & Achievements | Maruti Suzuki Car Dealers in Hyderabad"
        />
        <meta
          property="og:description"
          content="RKS Motor Pvt. Ltd. has won the 'Platinum Dealership Award' for 6 times. And 'Royal Platinum Band Award' for the 1st time from Maruti Suzuki based on the performance parameters for the year of 2018-19."
        />
        <meta property="og:image" content="img/og-tags/awards_banner.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.saboomaruti.in/" />
        <meta
          property="twitter:title"
          content="Awards & Achievements | Maruti Suzuki Car Dealers in Hyderabad"
        />
        <meta
          property="twitter:description"
          content="RKS Motor Pvt. Ltd. has won the 'Platinum Dealership Award' for 6 times. And 'Royal Platinum Band Award' for the 1st time from Maruti Suzuki based on the performance parameters for the year of 2018-19."
        />
        <meta
          property="twitter:image"
          content="img/og-tags/awards_banner.webp"
        />
      </Helmet>
      <Header />
      <div className="bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:mt-16">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/awards/Saboo-Maruti-Suzuki-Arena-Awards-Banner.webp"
            alt="1"
            className="mx-auto"
          />
          <div className="my-auto text-center">
            <p className="uppercase text-red-600 font-semibold text-2xl">
              saboo rks awards and accomplishments
            </p>
            <p className="text-gray-700 text-center mt-2">
              Our longstanding reputation is sure to continue with strong growth
              in the future. Over the years we have received innumerable awards
              that showcase the innovations introduced by us and the various
              milestones we have achieved.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 container gap-6 mx-auto my-10">
        {awardsData.map((award, index) => (
        <div className="border shadow rounded p-4" key={index}>
          <img
            src={award.img}
            alt={award.index}
          />
          <p className="text-gray-600 text-xs mt-2">
            {award.title}
          </p>
        </div>
        ))}
      </div>
    </>
  );
}

export default Awards;

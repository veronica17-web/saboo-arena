import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import { workshop } from "../../constants";

function WorkShop() {
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Authorized Service Center in Hyderabad | Maruti Car
          Service
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Authorized Service Center in Hyderabad | Maruti Car Service"
        />
        <meta
          name="description"
          content="Saboo Maruti Authorized Maruti Suzuki Service Center in Hyderabad. Visit our nearest Saboo Maruti workshop for Maruti car Servicing, Repairing, Painting, Battery repair. Free pickup & Drop facility available. Call now 9848898488"
        />
        <meta
          name="keywords"
          content="maruti service cente near me, maruti car service locations, maruti service center address, car service center"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboomaruti.in/" />
        <meta
          property="og:title"
          content="Maruti Suzuki Authorized Service Center in Hyderabad | Maruti Car Service"
        />
        <meta
          property="og:description"
          content="Saboo Maruti Authorized Maruti Suzuki Service Center in Hyderabad. Visit our nearest Saboo Maruti workshop for Maruti car Servicing, Repairing, Painting, Battery repair. Free pickup & Drop facility available. Call now 9848898488"
        />
        <meta property="og:image" content="img/og-tags/saboo_rks.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.saboomaruti.in/" />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Authorized Service Center in Hyderabad | Maruti Car Service"
        />
        <meta
          property="twitter:description"
          content="Saboo Maruti Authorized Maruti Suzuki Service Center in Hyderabad. Visit our nearest Saboo Maruti workshop for Maruti car Servicing, Repairing, Painting, Battery repair. Free pickup & Drop facility available. Call now 9848898488"
        />
        <meta property="twitter:image" content="img/og-tags/saboo_rks.webp" />
      </Helmet>
      <Header />
      <Banner />
      {/* <div className="my-8">
        <p className="font-semibold text-3xl text-center">Workshop</p>
        <div className="container mx-auto pt-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 md:px-0 gap-5">
            {workshop.map((item, index) => (
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
      </div> */}
      <div className='my-8'>
  <p className='font-semibold text-3xl text-center'>WorkShop</p>
  <div className='container mx-auto pt-16'>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-3 md:px-0 gap-5'>
      {workshop.map((item, index) => (
     <div
     className="w-full  h-60 pt-1 px-4 text-left py-3 p hover:text-white shadow-xl shadow-[#B0B0B0] group duration-500 border-t rounded-3xl relative overflow-hidden"
   >
     <div className="bg-blue-800  h-16 w-20 duration-500 group-hover:h-[130%] group-hover:w-[170%] group-hover:-top-11 group-hover:-right-20 rounded-full absolute -top-20 -right-20 -z-10"></div>
     <div className="mb-2 mt-2 text-base  font-medium uppercase">
      {item.address}
     </div>
     {/* <div className="mb-2">Adarsh Nagar, Hyderabad - 500063</div> */}
     <a
       href={item.map}
       target="_blank"
       rel="noreferrer"
     >
       <div
         className="flex justify-center duration-500 bg-center my-5 h-32 lg:h-40 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
         style={{
           backgroundImage:
             `url(${item.image})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
       ></div>
     </a>
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
            src={require("../../assets/banners/outlets-banner.webp")}
            alt="Saboo-Maruti-Suzuki-Outlet"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkShop;

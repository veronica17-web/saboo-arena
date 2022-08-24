import React from "react";

function Testimonials() {
  return (
    <>
      <p className="text-red-600 text-2xl font-semibold text-center">
        Testimonials
      </p>
      <p className="text-center">What people have to say</p>
      <div className="bg-[#15151e] py-12">
        <div className=" block lg:flex items-center justify-between lg:px-20 space-y-3 lg:space-y-0">
          <div>
            <p className="text-gray-100 text-center text-2xl uppercase tracking-wider">
              Subscribe and Get Notified <br></br>
              about our Latest offers.
            </p>
          </div>

          <form className="flex items-center justify-center">
            <input
              className="w-[350px] px-4 outline-none py-3 rounded-tl rounded-bl"
              type="text"
              placeholder="Email Address"
              name="Email"
            />
            <button className="bg-blue-700 text-white py-3 px-5 rounded-br rounded-tr">
              Get Notified
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Testimonials;

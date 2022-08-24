import React from "react";
import Header from "../../components/header/Header";

function ServiceSubscribe() {
  return (
    <>
      <Header />
      <img
        src={require("../../assets/banners/Saboo-Maruti-Suzuki-Subscribe-Banner.webp")}
        className="max-w-full w-full lg:mt-16"
        alt="Service Subscribe"
      />
      <div className="container mx-auto my-8">
        <p className="font-bold text-3xl text-blue-900 mx-5">
          WHY SUBSCRIBE FROM MARUTI SUZUKI?
        </p>
        <p className="mx-5">
          Introducing a surprisingly easy way of bringing home a car. Simply
          choose a car for a preferred tenure and drive ahead to enjoy for an
          all-inclusive monthly fee which takes care of your maintenance and
          insurance cost also.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mx-5 md:mx-0">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/subscription-benefits.webp"
            alt="1"
          />
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/subscription-benifits-2.webp"
            alt="2"
          />
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/subscription-benefits-3.webp"
            alt="3"
          />
        </div>
        <ul className="list-disc mx-10 md:mx-0">
          <li>
            In White plate, vehicle will be registered in customer’s name.
            Tenure options available in white plate are 24, 36 or 48 months.
          </li>
          <li>
            In Back plate, vehicle will be registered in the name of
            subscription partner. Tenure options available in black plate are
            12, 18, 24, 30, 36, 42 or 48 months.
          </li>
          <li>MS Subscribe is available in select cities only.</li>
        </ul>
      </div>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <p className="font-bold text-3xl text-blue-900 mx-5">
            EASY STEPS TO SUBSCRIBE YOUR CAR
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-5 md:mx-0">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-1.webp"
              alt="1"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-2.webp"
              alt="2"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-3.webp"
              alt="3"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-4.webp"
              alt="4"
            />
          </div>
        </div>
      </div>
      <PreferenceForm />
    </>
  );
}

const PreferenceForm = () => {
  return (
    <>
      <div className="container mx-auto my-8">
        <p className="font-bold text-3xl text-blue-900 uppercase">
          Select your Preference
        </p>
        <form className="bg-white shadow-md border mt-7 rounded-lg p-7">
          <div className="grid sm:grid-cols-3 gap-3">
            <div>
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

            <div>
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
                Outlets
              </label>
              <select className="block w-full py-2 h-10 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option> Select Outlet </option>
                {/* <option value="NEXA Jubilee">NEXA Jubilee</option>
                <option value="NEXA Lumbini">NEXA Lumbini</option>
                <option value="NEXA KOMPALLY">NEXA KOMPALLY</option> */}
                <option value="Somajiguda">Somajiguda</option>
                <option value="Malakpet">Malakpet</option>
                <option value="Kushaiguda">Kushaiguda</option>
                <option value="Tadbund">Tadbund</option>
                <option value="Uppal">Uppal</option>
                <option value="Nampally">Nampally</option>
                <option value="Kukatpally">Kukatpally</option>
                <option value="shamirpet">Shamirpet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registeration Type
              </label>
              <select className="block w-full py-2 h-10 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option> Select Type</option>
                <option value="White Plate">White Plate</option>
                <option value="Black Plate">Black Plate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subscription Tenure
              </label>
              <select className="block w-full py-2 h-10 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option> Select Tenure </option>
                <option value="12">12</option>
                <option value="18">18</option>
                <option value="24">24</option>
                <option value="30">30</option>
                <option value="36">36</option>
                <option value="42">42</option>
                <option value="48">48</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-1.5 rounded hover:bg-red-500 duration-500 mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ServiceSubscribe;

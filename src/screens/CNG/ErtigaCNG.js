import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Header from "../../components/header/Header";
import ErtigaRed from "../../assets/banners/RED.webp";
import { Tab } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";

function ErtigaCNG() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [outlet, setOutlet] = useState("");
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      sessionStorage.setItem("popup", "false");
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  // function handleSubmit() {
  //   setLoading(true);
  //   try {
  //     axios.post("https://broaddcast.com/admin/api/arena-onRoadPrice", {
  //       name: name,
  //       phone: phone,
  //       model: model,
  //       outlet: outlet,
  //     });
  //     setMethod("POST");
  //   } catch (err) {
  //     toast.error("Something went wrong!");
  //     console.log(err);
  //   }
  //   setLoading(false);
  // }

  return (
    <>
      <Header />
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/ertiga/Ertiga_banner.jpg"
        className="max-w-full w-full lg:mt-16"
        alt="1"
      />
      <div className="container mx-auto pt-6 lg:px-0 md:px-3 py-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
          <div className="space-y-3 justify-between px-6">
            <p className="uppercase font-bold text-4xl">ERTIGA S-CNG</p>
            <p className="font-bold text-green-900">
              10.50 lakh <sup>*</sup>
              <p className="font-light text-green-900">ex-show room price</p>
            </p>

            <p className="text-s">
              The New Ertiga S-CNG is among the line-up of environment-friendly
              cars offered by Maruti Suzuki that come equipped with the
              revolutionary S-CNG technology. With 30.1 kW @ 6000 rpm of power
              and 60 Nm @ 3500 rpm of torque, the New Ertiga S-CNG is peppy to
              drive. The car’s tank capacity allows it to hold up to 60 L(Water
              equivalent filling capacity). The New Ertiga S-CNG from Maruti
              Suzuki can provide an average mileage is 31.59 km/kg.
            </p>
            <br></br>
            <p className="text-s">
              The New Ertiga S-CNG features a factory-fitted S-CNG kit that has
              a leak proof design to help ensure that safety is not compromised.
              The use of advanced components contributes to the engine’s longer
              lifespan. The New Ertiga S-CNG by Maruti Suzuki comes equipped
              with dual interdependent ECUs and an Intelligent Injection System,
              with which it manages to offer smoother pickup, great drivability,
              and an overall superior performance.
            </p>
            <br></br>
            <div className="flex flex-row">
              <div className="basis-1/1">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/ertiga/icon1.png"
                  className="max-w-full w-full pr-3"
                  alt="1"
                />
              </div>
              <div className="basis-1/1">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/ertiga/icon2.png"
                  className="max-w-full w-full pr-3"
                  alt="1"
                />
              </div>
              <div className="basis-1/1">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/ertiga/icon3.png"
                  className="max-w-full w-full pr-3"
                  alt="1"
                />
              </div>
            </div>
          </div>
          <div className="object-contain h-50 w-100 object-right pt-14">
            <img src={ErtigaRed} alt="vehicle_banner" />
          </div>
        </div>
      </div>

      <div className="bg-[#1b72b7] py-12 mt-12">
        <div className="container mx-auto space-y-5 lg:px-0 px-5">
          <h3 className="text-xl font-semibold text-white">
            GET ERTIGA CNG ON-ROAD PRICE IN HYDERABAD
          </h3>
          <form
            action="https://crm.zoho.in/crm/WebToLeadForm"
            name="WebToLeads54158000007156717"
            // method={method}
            method="POST"
            acceptCharset="UTF-8"
          >
            <input
              type="text"
              className="hidden"
              name="xnQsjsdp"
              value="5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b"
            />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input
              type="text"
              className="hidden"
              name="xmIwtLD"
              value="3e4c511e1bfac462fb9ac158b261b0d3e54ddbaf41eb8a08b30b4fc061369283"
            />
            <input
              type="text"
              className="hidden"
              name="actionType"
              value="TGVhZHM="
            />
            <input
              type="text"
              className="hidden"
              name="returnURL"
              value="https://www.saboomaruti.in/thank-you-for-contact-us"
            />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <input
                  className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Name"
                  id="Last_Name"
                  name="Last Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Phone"
                  minlength="10"
                  maxlength="10"
                  id="Mobile"
                  name="Phone"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/[^1-9 ]/g, "") &&
                        e.target.value.replace(/ /g, "")
                    )
                  }
                />
              </div>

              <div>
                <select
                  id="LEADCF6"
                  name="LEADCF6"
                  onChange={(e) => setModel(e.target.value)}
                  className="block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select Model</option>
                  <option value="Swift CNG">Swift CNG</option>
                  <option value="Alto CNG">Alto CNG</option>
                  <option value="EECO CNG">EECO CNG</option>
                  <option value="S-Presso CNG">S-Presso CNG</option>
                  <option value="Ertiga CNG">Ertiga CNG</option>
                  <option value="Dzire CNG">Dzire CNG</option>
                  <option value="Wagon R CNG">Wagon R CNG</option>
                </select>
              </div>
              <div>
                <select
                  id="LEADCF23"
                  name="LEADCF23"
                  onChange={(e) => setOutlet(e.target.value)}
                  className="block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select Outlet</option>
                  <option value="RKS Motor - Somajiguda">
                    RKS Motor - Somajiguda
                  </option>
                  <option value="RKS Motor - Malakpet">
                    RKS Motor - Malakpet
                  </option>
                  <option value="RKS Motor - Secunderabad">
                    RKS Motor - Secunderabad
                  </option>
                  <option value="RKS Motor - Kushaiguda">
                    RKS Motor - Kushaiguda
                  </option>
                  <option value="RKS Motor - Kompally">
                    RKS Motor - Kompally
                  </option>
                  <option value="RKS Motor - Shamirpet">
                    RKS Motor - Shamirpet
                  </option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-1 my-3">
              <input id="comments" name="comments" type="checkbox" required />
              <label htmlFor="comments" className="font-medium text-gray-200">
                I Agree
              </label>
            </div>
            <p className="text-gray-200 mb-2">
              <span className="font-semibold">Disclaimer :</span> I agree that
              by clicking the ‘Submit’ button below, I am explicitly soliciting
              a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
              Representatives on my ‘Mobile’
            </p>
            <button
              type="submit"
              // onClick={handleSubmit}
              className="h-10 inline-flex justify-center mr-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <CgSpinner className="animate-spin h-5 mr-2 text-white w-5" />
                  Loading
                </div>
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto pt-6 lg:px-0 md:px-3 py-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
          <div className="space-y-3 justify-between px-6">
            <p className="uppercase font-bold text-4xl">
              ERTIGA S-CNG features
            </p>

            <p className="font-bold text-green-900">
              <div className="object-fill">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/ertiga/Ertiga.webp"
                  alt="alto-logo"
                />
              </div>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Accordian />
      </div>
    </>
  );
}

function Accordian() {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-end">
          <Tab.List className="space-x-1 p-5">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow"
              }
            >
              Features
            </Tab>

            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow"
              }
            >
              Specifications
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* exterior */}
            <Tab.Panel>
              <div className="flex items-center bg-gray-100  justify-between">
                <p className="flex-1 border px-5 py-3">Features</p>
                <p className="flex-1 border px-5 py-3">LXI CNG</p>
                <p className="flex-1 border px-5 py-3">LXI (O) CNG</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Exterior</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Body Coloured Outside door Handles
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Body Coloured Bumpers
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Wheel Covers (Full)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">INTERIOR</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Dual-tone interiors
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          2nd Row Seats 60:40 Spilt with Slide and Recline
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          3rd Row Seats 50:50 Split with Recline
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          2nd Row Armrest
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Headrest Front Row Seats
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Headrest 2nd Row Seats
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Headrest 3rd Row Seats
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Headrest 3rd Row Seats
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Driver Sode Sunvisor with Ticket Holder
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Chrome Tipped Parking Brake lever
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        COMFORT AND CONVENIENCE
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Manual AC</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Air Cooled Twin Cup Holder (Console)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Accessory Socket Front Row with Smartphone Storage
                          Space
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Power Windows (Fr/Rr) with Dr. Side Auto Down
                          Functions
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Power & Tilt Steering
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Bottle Holders (In Each Row)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Cabin Lamp (Fr.+ Rr.)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          2nd Row Adjustable AC
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Remote Keyless Entry
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Accessory Socket 2nd Row with SmartPhone Storage Space
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Day & Night Adjustable IRVM
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Electrical Adjustable ORVM
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Electrical Foldable ORVM
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Passenger Side Sunvisor with Vanity Mirror
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        SAFETY AND SECURITY
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Dual Airbag</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Rear Parking Sensors
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Central Locking)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          High Speed Alert System
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Security Alarm
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          ABS with EBD and Brake Assist
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Engine Immobilizer
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          ISOFIX Child Seat Anchorages (2nd Row Seats98)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Front Seat Belts with Pre-tensioner & Force Limiters
                          (Dr.+Co-Dr.)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Seat Belt Reminder Lamp with Buzzer (Dr.+Co- Dr.)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Speed Sensitive Auto Door Lock)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        AUDIO & ENTERTAINMENT
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Headlight Leveling
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          RR Seat belt ELR Type
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          High Mounted Stop Lamp
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Immobiliser</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Front Wiper &#38; Washer (2 Speed + intermittent)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Tubeless Tyres
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Collapsible Steering Column
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Rear Door Child Lock
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Driver Side Airbag
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Passenger Airbag
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Reverse Parking Sensor
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">ABS with EBD</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Sear Belt Reminder - Dr. + Co - Dr.
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Speed Alert System
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <div className="flex items-center bg-gray-100  justify-between">
                <p className="flex-1 border px-5 py-3">Specifications</p>
                <p className="flex-1 border px-5 py-3">VXI CNG</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Dimensions</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Overall Length
                        </p>
                        <p className="flex-1 border px-5 py-3">4395 mm</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Overall Width
                        </p>
                        <p className="flex-1 border px-5 py-3">1735 mm</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Overall Height
                        </p>
                        <p className="flex-1 border px-5 py-3">1690 mm</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Wheelbase</p>
                        <p className="flex-1 border px-5 py-3">2740 mm</p>
                      </div>

                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Turning Radius
                        </p>
                        <p className="flex-1 border px-5 py-3">5.2 m</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Seating Capacity
                        </p>
                        <p className="flex-1 border px-5 py-3">7</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Engine</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Engine Type</p>
                        <p className="flex-1 border px-5 py-3">K15B</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Capacity</p>
                        <p className="flex-1 border px-5 py-3">1462 CC</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Compress Ratio
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          (10.5 ± 0.3):1
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Bore X Stroke
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          74.0 x 85.0 mm
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Power (Petrol)
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          77 kW @6,000 RPM
                        </p>
                      </div>

                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Torque (Petrol)
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          138 Nm @4,400 RPM
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Fuel Tank Capacity (Petrol)
                        </p>
                        <p className="flex-1 border px-5 py-3">45 L</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Emission Type
                        </p>
                        <p className="flex-1 border px-5 py-3">BS6</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Power (CNG)</p>
                        <p className="flex-1 border px-5 py-3">
                          68 kW @ 6,000 RPM
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Torque (CNG)</p>
                        <p className="flex-1 border px-5 py-3">
                          122 Nm @ 4,400 RPM
                        </p>
                      </div>

                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Fuel Efficiency (CNG)
                        </p>
                        <p className="flex-1 border px-5 py-3">26.08 km/kg</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Fuel Tank Capacity (CNG)
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          60 L (Water Equivalent)
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        Suspension System
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Front</p>
                        <p className="flex-1 border px-5 py-3">
                          MacPherson strut & Coil Spring
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Rear</p>
                        <p className="flex-1 border px-5 py-3">
                          Torsion Beam & Coil Spring
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Tyre Size</p>
                        <p className="flex-1 border px-5 py-3">185/65 R15</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">WEIGHT</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Kerb Weight</p>
                        <p className="flex-1 border px-5 py-3">1235 KG</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Gross Vehical Weight
                        </p>
                        <p className="flex-1 border px-5 py-3 ">1795 KG</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Brakes</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Front</p>
                        <p className="flex-1 border px-5 py-3">
                          (Ventilated) Disc
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Rear</p>
                        <p className="flex-1 border px-5 py-3">
                          (Leading & Trailing) Drum
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        DRIVE AND TRANSMISSION
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Transmission</p>
                        <p className="flex-1 border px-5 py-3">5 MT</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3">Drive</p>
                        <p className="flex-1 border px-5 py-3">2WD, FF</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
      <br></br>
      <div className="text-xs px-5">
        <p>
          <sup>*</sup>Black glass on the vehicles is due to lighting effect.
        </p>
        <p>
          <sup>*</sup>
          <sup>*</sup>Car models and accessories shown may vary from actual
          product. Images are used for illustration purpose only.
        </p>
        <p>
          <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
        </p>
        <p>
          <sup>*</sup>Prices shown above are ex showroom Delhi.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
        <div className="space-y-3 my-auto text-left px-6">
          <p className="uppercase font-bold text-4xl">ERTIGA S-CNG FAQ'S</p>
        </div>
        <div className="object-contain h-50 w-100 object-right pt-14">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                  <span className="text-base uppercase font-bold">
                    1. should i get my ertiga s-cng kit checked regularly?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <ul className="list-disc">
                    <li>
                      Yes. It is advised to get the CNG kit checked at least
                      once in every three years. At the same time, it is
                      recommended to get the CNG tank checked as well. In
                      Ertiga, you get a tank capacity of 60L (water equivalent).
                    </li>
                  </ul>
                  <ul className="list-disc">
                    <li>
                      You can contact the Maruti Suzuki team or else visit the
                      nearest Maruti Suzuki service centre.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                  <span className="text-base uppercase font-bold">
                    2. What happens if i get the s-cng kit tuned from outside.
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    Since the Ertiga comes with a company fitted CNG kit, it is
                    recommended that you get the kit tuned from an authorised
                    Maruti Suzuki service centre for the right tuning and
                    optimum performance.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                  <span className="text-base uppercase font-bold">
                    3. What are the modes for driving the ertiga s-cng?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    you can drive the new Ertiga S-CNG in three different
                    modes:-
                  </p>
                  <br />
                  <ul className="list-disc">
                    <li>
                      Petrol Mode: In this mode, the car starts and drives on
                      petrol.
                    </li>
                  </ul>
                  <ul className="list-disc">
                    <li>
                      Auto Mode: In this mode, the car starts on petrol and
                      automatically switches over to CNG when you start driving
                    </li>
                  </ul>
                  <ul className="list-disc">
                    <li>
                      Forced CNG mode – Here, you can start the car on CNG.
                      However, this is only suggested when there is no petrol in
                      the car.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                  <span className="text-base uppercase font-bold">
                    4. what to do if the cng malfunctioning warning light keeps
                    glowing when i am driving?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    If this continuously happens, please head over to an
                    authorised Maruti Suzuki service centre near you.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export default ErtigaCNG;

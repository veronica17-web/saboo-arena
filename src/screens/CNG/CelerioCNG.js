import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Header from "../../components/header/Header";
import CelerioCNG1 from "../../assets/banners/Speedy-Blue.webp";
import { Tab } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
// import axios from "axios";
import { CgSpinner } from "react-icons/cg";

function CelerioCNG() {
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
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/Celerio_Web-Banner.webp"
        className="max-w-full w-full lg:mt-16"
        alt="1"
      />
      <div className="container mx-auto pt-6 lg:px-0 md:px-3 py-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
          <div className="space-y-3 justify-between px-6">
            <p className="uppercase font-bold text-4xl">Celerio S-CNG</p>
            <p className="font-bold text-green-900">
              6.69 lakh <sup>*</sup>
              <p className="font-light text-green-900">ex-show room price</p>
            </p>

            <p className="text-s">
              The All-New Celerio CNG now comes equipped with the revolutionary
              S-CNG Technology by Maruti Suzuki. The stylish hatchback is
              powered by a K10C CNG engine which makes 41.7 kW @5300 rpm of
              power and 82.1 Nm @ 3400 rpm of torque, ensuring a lively and
              invigorated drive. Available in the VXI MT variant, Celerio S-CNG
              has a fuel tank capacity of 60 litres (water equivalent) and
              offers incredible fuel efficiency of 35.60 km/kg.
            </p>
            <br></br>
            <p className="text-s">
              Celerio S-CNG comes with a factory-fitted S-CNG kit which is
              integrated by experts into the mainframe of the car on the
              manufacturing floor itself. This CNG system has a special leak
              proof design so that there are no compromises on safety, while the
              use of advanced components helps enhance the engine’s longevity.
              The S-CNG technology also includes an Intelligent Injection System
              and interdependent ECUs that ensure stylishly smooth driving
              performance and enhanced fuel efficiency.
            </p>
            <br></br>
            <div className="flex flex-row">
              <div className="basis-1/1">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/celerio/icon1.png"
                  className="max-w-full w-full pr-3"
                  alt="1"
                />
              </div>
              <div className="basis-1/1">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/celerio/icon2.png"
                  className="max-w-full w-full pr-3"
                  alt="1"
                />
              </div>
              <div className="basis-1/1">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/celerio/icon3.png"
                  className="max-w-full w-full pr-3"
                  alt="1"
                />
              </div>
            </div>
          </div>
          <div className="object-contain h-50 w-100 object-right pt-14">
            <img src={CelerioCNG1} alt="vehicle_banner" />
          </div>
        </div>
      </div>

      <div className="bg-[#1b72b7] py-12 mt-12">
        <div className="container mx-auto space-y-5 lg:px-0 px-5">
          <h3 className="text-xl font-semibold text-white">
            GET CELERIO CNG ON-ROAD PRICE IN HYDERABAD
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
                  onChange={(e) => setName(e.target.value)}
                  required
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
              Celerio S-CNG features
            </p>

            <p className="font-bold text-green-900">
              <div className="object-fill">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/celerio/Celerio_logo_CNG.jpg"
                  alt="celerio_logo"
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
                <p className="flex-1 border px-5 py-3">VXI CNG</p>
                <p className="flex-1 border px-5 py-3">VXI CNG (O)</p>
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
                        <p className="flex-1 border px-5 py-3 ">Chrome Grill</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Body coloured Bumpers
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Full Wheel Covers
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Body Coloured Back Door Garnish
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Body Coloured Outside Door Handles
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Body Coloured ORVMS
                        </p>
                        <p className="flex-1 border px-5 py-3">-</p>
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
                          Co-Dr Vanity Mirror in Sunvisor
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">-</p>
                        <p className="flex-1 border px-5 py-3">-</p>
                      </div>

                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Day night IRVM
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Drink Holder - 5
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">-</p>
                        <p className="flex-1 border px-5 py-3">-</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Rear Seat (60:40 split)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
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
                        <p className="flex-1 border px-5 py-3 ">
                          Air Conditioner (Manual)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Outside Mirrors Type (Inside Manual)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Central Door Lock (5 Doors)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Front & Rear Power Windows - Auto Down (Driver side)
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Power Steering
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Electric Windows (Power Windows)(Front+Rear)
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
                        <p className="flex-1 border px-5 py-3 ">
                          Driver Airbag
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
                          Seat Belt Reminder (Driver and Passenger)
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
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Reverse Parking Sensors
                        </p>
                        <p className="flex-1 border px-5 py-3">✔</p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Pedestrian Protection
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Child Proof Rear Door Locks
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Head Light Leveling
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Front Ventilated Disc
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Immobilizer</p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Passenger Airbag
                        </p>
                        <p className="flex-1 border px-5 py-3">-</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Front Seat Belts Pre-tensioner
                        </p>
                        <p className="flex-1 border px-5 py-3">-</p>
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
                        CENTRAL CONSOLE & INSTRUMENT PANEL
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
                          Illumination Colour - Amber
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Urethane Steering Wheel
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>

                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Accessory Socket
                        </p>

                        <p className="flex-1 border px-5 py-3">✔</p>
                        <p className="flex-1 border px-5 py-3">✔</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3">
                          Silver Painted Dial-type Climate Control
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
                <p className="flex-1 border px-5 py-3">VXI CNG (O)</p>
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
                        <p className="flex-1 border px-5 py-3">3695 mm</p>
                        <p className="flex-1 border px-5 py-3">3695 mm</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Overall Width
                        </p>
                        <p className="flex-1 border px-5 py-3">1600 mm</p>
                        <p className="flex-1 border px-5 py-3">1600 mm</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Overall Height
                        </p>
                        <p className="flex-1 border px-5 py-3">1560 mm</p>
                        <p className="flex-1 border px-5 py-3">1560 mm</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Wheelbase</p>
                        <p className="flex-1 border px-5 py-3">2425 mm</p>
                        <p className="flex-1 border px-5 py-3">2425 mm</p>
                      </div>

                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Tread (Front)
                        </p>
                        <p className="flex-1 border px-5 py-3">1420 mm</p>
                        <p className="flex-1 border px-5 py-3">1420 mm</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Tread (Rear)</p>
                        <p className="flex-1 border px-5 py-3">1410 mm</p>
                        <p className="flex-1 border px-5 py-3">1410 mm</p>
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
                        <p className="flex-1 border px-5 py-3 ">Type</p>
                        <p className="flex-1 border px-5 py-3">K10B</p>
                        <p className="flex-1 border px-5 py-3">K10B</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Capacity</p>
                        <p className="flex-1 border px-5 py-3">998 CC</p>
                        <p className="flex-1 border px-5 py-3">998 CC</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          No. of Cylinders
                        </p>
                        <p className="flex-1 border px-5 py-3">3</p>
                        <p className="flex-1 border px-5 py-3">3</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Max Power (CNG)
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          43.5 kW @ 6000 rpm
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          43.5 kW @ 6000 rpm
                        </p>
                      </div>

                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Max Power (Petrol)
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          50 kW @6,000 RPM
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          50 kW @6,000 RPM
                        </p>
                      </div>

                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Max. Torque (CNG)
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          78 Nm @ 3500 RPM
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          78 Nm @ 3500 RPM
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Max. Torque (Petrol)
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          90 Nm @ 3000 RPM
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          90 Nm @ 3000 RPM
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Emission Standard Type
                        </p>
                        <p className="flex-1 border px-5 py-3">BS6 + OBD-1</p>
                        <p className="flex-1 border px-5 py-3">BS6 + OBD-1</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Max. Torque (Petrol)
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          98 Nm @ 3000 RPM
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          98 Nm @ 3000 RPM
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          No of Valves in each Cylinder
                        </p>
                        <p className="flex-1 border px-5 py-3">4</p>
                        <p className="flex-1 border px-5 py-3">4</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Accelerator Pedal Type
                        </p>
                        <p className="flex-1 border px-5 py-3">Electric type</p>
                        <p className="flex-1 border px-5 py-3">Electric type</p>
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
                          MacPherson strut with Coil Spring
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          MacPherson strut with Coil Spring
                        </p>
                      </div>

                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Rear</p>
                        <p className="flex-1 border px-5 py-3">
                          Coupled Torison Beam Axle with Coil Spring
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          Coupled Torison Beam Axle with Coil Spring
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
                        Power Steering
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Type</p>
                        <p className="flex-1 border px-5 py-3 ">
                          Electronic Power Steering
                        </p>
                        <p className="flex-1 border px-5 py-3 ">
                          Electronic Power Steering
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
                          Ventilated disc
                        </p>
                        <p className="flex-1 border px-5 py-3">
                          Ventilated disc
                        </p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">Rear</p>
                        <p className="flex-1 border px-5 py-3">Drum</p>
                        <p className="flex-1 border px-5 py-3">Drum</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Capacity</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3 ">
                          Fuel Tank Capacity
                        </p>
                        <p className="flex-1 border px-5 py-3">Petrol: 35 L</p>
                        <p className="flex-1 border px-5 py-3">Petrol: 35 L</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3">
                          Seating Capacity
                        </p>
                        <p className="flex-1 border px-5 py-3">5</p>
                        <p className="flex-1 border px-5 py-3">5</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3">
                          Fuel Tank Capacity (Petrol)
                        </p>
                        <p className="flex-1 border px-5 py-3">60L</p>
                        <p className="flex-1 border px-5 py-3">60L</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3">Tyre Size</p>
                        <p className="flex-1 border px-5 py-3">165/70R14</p>
                        <p className="flex-1 border px-5 py-3">165/70R14</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3">Kerb Weight</p>
                        <p className="flex-1 border px-5 py-3">920 KG</p>
                        <p className="flex-1 border px-5 py-3">920 KG</p>
                      </div>
                      <div className="flex items-center text-base justify-between">
                        <p className="flex-1 border px-5 py-3">
                          Gross Vehicle Weight
                        </p>
                        <p className="flex-1 border px-5 py-3">1350 KG</p>
                        <p className="flex-1 border px-5 py-3">1350 KG</p>
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
          <p className="uppercase font-bold text-4xl pt-5">
            New Celerio s-CNG FAQ's
          </p>
        </div>
        <div className="object-contain h-50 w-100 object-right pt-8">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                  <span className="text-base uppercase">
                    1. IS THE CELERIO S-CNG A SAFE CAR
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    Yes. The Celerio VXI MT S-CNG has a factory-fitted CNG kit
                    that is integrated into the car on the manufacturing floor
                    by experts. The entire CNG structure of the car boasts of a
                    leak-proof design, with stainless steel pipes and joints
                    which are corrosion-resistant as well. Apart from this, the
                    S-CNG technology also includes an integrated system wiring
                    harness to further improve the car's safety quotient by
                    eliminating chances of short circuits.
                  </p>
                  <br></br>
                  <p className="indent-8">
                    To offer more assurance in terms of safety, the Maruti
                    Suzuki Celerio S-CNG has also been thoroughly evaluated and
                    tested for durability and crash worthiness with its CNG
                    structure in place.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                  <span className="text-base uppercase">
                    2. WHAT DRIVING MODES ARE AVAILABLE IN THE NEW CELERIO
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <br></br>
                <Disclosure.Panel className="pb-2 text-sm racking-normal">
                  <p className="indent-8">
                    You can drive your new Celerio S-CNG in one of three basic
                    fuel modes:-
                  </p>
                  <ul className="list-disc">
                    <li>
                      <strong>Petrol Mode:</strong> the car starts and drives on
                      petrol
                    </li>
                    <li>
                      <strong>Auto Mode:</strong> The car starts on petrol and
                      automatically switches over to CNG later. This is the most
                      preferred mode and the one recommended by the company as
                      well for driving your new Celerio S-CNG.
                    </li>
                    <li>
                      <strong>Forced CNG mode:</strong> This mode allows for the
                      car to be started on CNG, which is not the optimum choice.
                      This is a mode that should only be used as a last resort
                      when there is absolutely no petrol in the car.
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
                  <span className="text-base uppercase">
                    3. IF CELERIO'S CNG MALFUNCTION WARNING LIGHT TURNS ON WHILE
                    I'M DRIVING, WHAT SHOULD I DO?
                  </span>
                </Disclosure.Button>
                <br></br>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    If your car’s CNG malfunction warning light is blinking or
                    continuously glowing when the engine is running, it means
                    that the CNG system may have an issue. Visit an authorised
                    Maruti Suzuki service centre immediately to have the problem
                    rectified.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                  <span className="text-base uppercase">
                    4. CAN I GET THE TUNNING OF MY NEW CELERIO S-CNG DONE FROM
                    OUTSIDE?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    Getting the CNG kit of your new Celerio S-CNG tuned from an
                    unauthorised workshop is not advised. Unlike retrofitted CNG
                    kits, each component of the S-CNG system is integrated into
                    the car at the time of manufacture to ensure complete
                    safety. It takes the right tuning equipment and specialised
                    expertise to calibrate the kit properly, which you will only
                    be able to find at an authorised Maruti Suzuki service
                    centre.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2  px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none">
                  <span className="text-base uppercase">
                    5. What are the best features of the all new celerio s-cng?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    The All-New Celerio S-CNG comes with the following features:
                    -
                  </p>
                  <ul className="list-disc">
                    <li>
                      <strong>Micro Switch:</strong> To make driving and
                      refuelling your new Celerio S-CNG safer, the car comes
                      equipped with a micro switch that turns the car off at the
                      time of refuelling and prevents it from turning on during
                      the process as well.
                    </li>
                    <li>
                      <strong>Auto-Switch:</strong> You no longer have to keep
                      your finger on the fuel switch, waiting to change from
                      petrol to CNG and back when the situation calls for it, as
                      Celerio S-CNG has a changeover switch that includes an
                      Auto Mode that does the switching for you.
                    </li>
                    <li>
                      <strong>NGV Receptacle:</strong> Celerio S-CNG comes with
                      an NGV receptacle, which is a special nozzle that allows
                      for safer and faster refuelling.
                    </li>
                    <li>
                      <strong>Fuel Level Indicator:</strong> There’s no longer
                      any need to guess when you need to refuel your car as the
                      Celerio S-CNG comes with a precision fuel level indicator
                      that lets you track the CNG levels in your car.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export default CelerioCNG;

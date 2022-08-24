import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";

function CarEnquiry() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className="container mx-auto py-2">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 lg:px-0  px-5">
          <button onClick={() => setOpen(true)}>
            <div className="bg-white drop-shadow-lg hover:shadow-lg outline-none rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 ">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/test-drive.webp"
                alt="test drive"
                className="mx-auto h-16"
              />
              <p className="uppercase font-bold text-center text-sm text-gray-700">
                book a test drive
              </p>
            </div>
          </button>
          <Link to="/showrooms">
            <div className="bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 ">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/locate.webp"
                alt="locate a showroom"
                className="mx-auto h-16"
              />
              <p className="uppercase font-bold text-center text-sm text-gray-700">
                locate a showroom
              </p>
            </div>
          </Link>
          <button onClick={() => setOpen(true)}>
            <div className="bg-white drop-shadow-lg outline-none hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 ">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/Calender.webp"
                alt="test drive"
                className="mx-auto h-16"
              />
              <p className="uppercase font-bold text-center text-sm text-gray-700">
                book a showroom visit
              </p>
            </div>
          </button>
          <Link to="/maruti-suzuki-car-insurance-renewal">
            <div className="bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 ">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/insurance.webp"
                alt="test drive"
                className="mx-auto h-16"
              />
              <p className="uppercase font-bold text-center text-sm text-gray-700">
                insurance renewal
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <form
                  action="https://crm.zoho.in/crm/WebToLeadForm"
                  name="WebToLeads54158000000752015"
                  method="POST"
                  acceptCharset="UTF-8"
                >
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xnQsjsdp"
                    value="5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b"
                  />
                  <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xmIwtLD"
                    value="3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92"
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="actionType"
                    value="TGVhZHM="
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="returnURL"
                    value="https://www.saboomaruti.in/thank-you-for-contact-us"
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    id="ldeskuid"
                    name="ldeskuid"
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    id="LDTuvid"
                    name="LDTuvid"
                  />
                  <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="mt-3">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900 text-center"
                        >
                          Book A Test Drive / Showroom Visit
                        </Dialog.Title>
                        <div className="mt-2 space-y-3">
                          <div className="mt-2 py-8 space-y-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Name
                              </label>
                              <input
                                type="text"
                                id="Last_Name"
                                name="Last Name"
                                required
                                className="mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Email
                              </label>
                              <input
                                type="email"
                                ftype="email"
                                id="Email"
                                name="Email"
                                className="mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Phone
                              </label>
                              <input
                                className="mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10"
                                type="text"
                                maxLength="10"
                                minLength="10"
                                required
                                id="Phone"
                                name="Phone"
                                value={phone}
                                onChange={(e) =>
                                  setPhone(
                                    e.target.value.replace(/[^1-9 ]/g, "") &&
                                      e.target.value.replace(/ /g, "")
                                  )
                                }
                              />
                              {!pattern.test(phone) && phone.length === 10 ? (
                                <small className="text-red-500">
                                  phone number is invalid
                                </small>
                              ) : (
                                ""
                              )}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Model
                              </label>
                              <select
                                id="LEADCF6"
                                name="LEADCF6"
                                required
                                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              >
                                <option>Select Model</option>
                                <optgroup label="Arena">
                                <option value="Maruti Alto K10">
                                    Maruti Alto K10
                                  </option>
                                  <option value="Maruti Alto 800">
                                    Maruti Alto
                                  </option>
                                  <option value="Maruti Wagon R">
                                    Maruti Wagon R
                                  </option>
                                  <option value="Maruti Celerio">
                                    Maruti New Celerio
                                  </option>
                                  <option value="Maruti Swift">
                                    Maruti Swift
                                  </option>
                                  <option value="Maruti Dzire">
                                    Maruti Dzire
                                  </option>
                                  <option value="Maruti S-Presso">
                                    Maruti S-Presso
                                  </option>
                                  <option value="Maruti Ertiga">
                                    Maruti Ertiga
                                  </option>
                                  <option value="Maruti Brezza">
                                    Maruti  Brezza
                                  </option>
                                  <option value="Maruti Eeco">
                                    Maruti Eeco
                                  </option>
                                </optgroup>

                                <optgroup label="CNG">
                                  <option value="Maruti Swift CNG">
                                    Maruti Swift CNG
                                  </option>
                                  <option value="Maruti Alto CNG">
                                    Maruti Alto CNG
                                  </option>
                                  <option value="Maruti Wagon R CNG">
                                    Maruti Wagon R CNG
                                  </option>
                                  <option value="Maruti Celerio CNG">
                                    Maruti New Celerio CNG
                                  </option>
                                  <option value="Maruti Dzire CNG">
                                    Maruti Dzire CNG
                                  </option>
                                  <option value="Maruti S-Presso CNG">
                                    Maruti S-Presso CNG
                                  </option>
                                  <option value="Maruti Ertiga CNG">
                                    Maruti Ertiga CNG
                                  </option>
                                  <option value="Maruti Eeco CNG">
                                    Maruti Eeco CNG
                                  </option>
                                </optgroup>

                                <optgroup label="Tour">
                                  <option value="Maruti Tour H1">
                                    Maruti Tour H1
                                  </option>
                                  <option value="Maruti Tour H3">
                                    Maruti Tour H3
                                  </option>
                                  <option value="Maruti Tour S">
                                    Maruti Tour S
                                  </option>
                                  <option value="Maruti Tour V">
                                    Maruti Tour V
                                  </option>
                                  <option value="Maruti Tour M">
                                    Maruti Tour M
                                  </option>
                                </optgroup>
                              </select>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 mb-5">
                            <input
                              id="comments"
                              type="checkbox"
                              className=" h-4 w-4 border-gray-300 rounded"
                              required
                            />
                            <label
                              htmlFor="comments"
                              className="text-gray-700 text-sm"
                            >
                              I agree to the Privacy Policy and Terms of
                              Service.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default CarEnquiry;

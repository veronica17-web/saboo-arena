import React, { useState } from "react";
import Header from "../../components/header/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment() {
  const [phone, setPhone] = useState("");
  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }
  return (
    <>
      <Header />

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200 mt-20" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg m-2 font-medium leading-6 text-gray-900">
                Payment Information
              </h3>
              <div className="overflow-hidden shadow sm:rounded-md">
                <p className="m-10 text-sm text-gray-600">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/payment-system/saboo-rks-qrcode.webp"
                    class="max-w-full h-auto"
                    alt="..."
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div class="flex justify-start flex-col-span-2">
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg m-5 bg-white shadow-lg">
                <div class="p-6 flex flex-col justify-start">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Bank Details
                  </h5>
                  <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-2">
                      <div className="border-t border-gray-200" />
                    </div>
                  </div>
                  <p class="text-gray-700 text-base mb-4">
                    Name:{" "}
                    <span className="font-bold">RKS Motor Pvt. Ltd. </span>
                    <br></br>Ac.No:{" "}
                    <span className="font-bold">50200004137964 </span>
                    <br></br>Bank: <span className="font-bold">HDFC Bank</span>{" "}
                    <br></br>Branch:{" "}
                    <span className="font-bold">Somajiguda, Hyderabad </span>
                    <br></br>RTGS/NEFT IFSC Code:{" "}
                    <span className="font-bold">HDFC0000512</span>
                  </p>
                  <p class="text-red-600 text-xs italic">
                    Disclaimer: Dealer not responsible for errors and omissions.
                    All offers subject to change without notice. Please confirm
                    listings with dealer.
                  </p>
                </div>
              </div>
            </div>
            <br></br>
            {/* <h3 className="text-lg m-2 font-medium leading-6 text-gray-900">
            Enquiry
          </h3> */}
            <div className="overflow-hidden shadow sm:rounded-md p-4">
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
                  value="https://www.saboonexa.in/thank-you"
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
                <div className="zcwf_row wfrm_fld_dpNn hidden">
                  <div className="zcwf_col_fld">
                    <select
                      className="zcwf_col_fld_slt"
                      id="Lead Source"
                      name="Lead Source"
                    >
                      <option selected value="Arena&#x20;Payment&#x20;Enquiry">
                        Arena Payment Enquiry
                      </option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Name
                      </label>
                      <input
                        className="border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500"
                        type="text"
                        id="Last_Name"
                        name="Last Name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Email
                      </label>
                      <input
                        className="border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500"
                        type="text"
                        id="Email"
                        name="Email"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Phone
                      </label>
                      <input
                        className="border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500"
                        type="text"
                        id="Phone"
                        minLength="10"
                        maxLength="10"
                        required
                        name="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Comments
                      </label>
                      <textarea
                        id="Description"
                        rows="1"
                        name="Description"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    <span className="text-black font-bold">Disclaimer</span>: I
                    agree that by clicking the ‘Submit’ button below, I am
                    explicitly soliciting a call/Message from Saboo Maruti (RKS
                    Motor Pvt. Ltd) or its Representatives on my ‘Mobile’.
                  </p>
                  <div className="flex items-start">
                    <input
                      id="disclaimer"
                      name="disclaimer"
                      type="checkbox"
                      className="h-4 w-4 rounded"
                    />
                    <div className="ml-2 text-sm">
                      <label
                        htmlFor="disclaimer"
                        className="font-medium text-gray-700"
                      >
                        Please agree with the disclaimer
                      </label>
                    </div>
                  </div>
                  <button
                    className="bg-blue-700 text-white py-3 px-5 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}

export default Payment;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Country, State } from "country-state-city";
import toast from "react-hot-toast";
import { saveShippingInfo } from "../../actions/cartAction";

const Shipping = ({ history }) => {
  const dispatch = useDispatch();

  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10) {
      toast.custom((t) => (
        <div
          className={`bg-white px-6 py-2 shadow-md rounded-md ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          ⚠️ Incorrect Phone No
        </div>
      ));
      return;
    }

    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );

    history.push("/order/confirm");
  };

  return (
    <>
      <div>
        <div class="flex h-screen bg-gray-100">
          <div class="m-auto">
            <form
              class="mt-5 bg-white rounded-lg shadow max-w-md"
              onSubmit={shippingSubmit}
            >
              <div class="flex">
                <div class="flex-1 py-5 pl-5 overflow-hidden">
                  <svg
                    class="inline align-text-top"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g>
                      <path
                        d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                        fill="none"
                        id="svg_1"
                        stroke="null"
                      ></path>
                      <path
                        d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                        id="svg_2"
                      ></path>
                      <circle
                        cx="7.04807"
                        cy="6.97256"
                        r="2.5"
                        id="svg_3"
                      ></circle>
                    </g>
                  </svg>
                  <h1 class="inline text-2xl font-semibold leading-none">
                    Shipping Address
                  </h1>
                </div>
              </div>
              <div class="px-5 pb-5">
                <input
                  placeholder="Address"
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div class="flex">
                  <div class="flex-grow w-1/2 pr-2">
                    <select
                      placeholder="Country"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Country</option>
                      {Country &&
                        Country.getAllCountries().map((item) => (
                          <option key={item.isoCode} value={item.isoCode}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div class="flex-grow">
                    <input
                      placeholder="City"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-grow w-1/2 pr-2">
                    <input
                      placeholder="PIN CODE"
                      type="number"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                  </div>
                  <div class="flex-grow">
                    {/* <select
                      placeholder="Country"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Country</option>
                      {Country &&
                        Country.getAllCountries().map((item) => (
                          <option key={item.isoCode} value={item.isoCode}>
                            {item.name}
                          </option>
                        ))}
                    </select> */}
                    <select
                      placeholder="State"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">State</option>
                      {State &&
                        State.getStatesOfCountry(country).map((item) => (
                          <option key={item.isoCode} value={item.isoCode}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  maxlength="10"
                />

                <div class="flex items-center pt-3">
                  <input
                    type="checkbox"
                    class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                  />
                  <label
                    for="safeAdress"
                    class="block ml-2 text-sm text-gray-900"
                  >
                    Save as default address
                  </label>
                </div>
              </div>

              <hr class="mt-4" />
              <div class="flex flex-row-reverse p-3">
                <div class="flex-initial pl-3">
                  <button
                    type="submit"
                    disabled={state ? false : true}
                    class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                  >
                    Send
                  </button>
                </div>
                <div class="flex-initial">
                  <button
                    type="button"
                    class="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                  >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M8 9h8v10H8z" opacity=".3"></path>
              <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
           </svg> */}
                    <span class="pl-2 mx-1">Delete</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;

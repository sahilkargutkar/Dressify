import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { clearErrors, getOrderDetails } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";

const OrderDetails = ({ match }) => {
  const { loading, error, order } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const history = useHistory();
  const fullAddress = `${order?.shippingInfo?.address},
    ${order?.shippingInfo?.city},
    ${order?.shippingInfo?.state},
    ${order?.shippingInfo?.country} ,
    ${order?.shippingInfo?.pinCode}`;

  //   const totalPrice = `${order?.orderItems?.price}`;

  //   console.log("totalPrice", totalPrice);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, toast, error, match.params.id]);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div class="mx-auto px-4 py-8 max-w-xl my-20">
            <div className="bg-white shadow-xl border-2 overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Order Details
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  #{order && order._id}
                </p>
              </div>
              {order?.orderItems &&
                order.orderItems?.map((item) => {
                  return (
                    <div class="bg-white shadow-md mt-3 rounded-3xl p-4">
                      <div class="flex-none lg:flex">
                        <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                          <img
                            src={item?.image}
                            alt="Product"
                            class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
                          />
                        </div>
                        <div class="flex-auto ml-3 justify-evenly py-2">
                          <div class="flex flex-wrap ">
                            <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                              Shop
                            </div>
                            <h2 class="flex-auto text-lg font-medium">
                              {item?.name}
                            </h2>
                          </div>
                          <p class="mt-3"></p>
                          {/* <div class="flex py-4  text-sm text-gray-500">
                        <div class="flex-1 inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-3 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          <p class="">Cochin,KL</p>
                        </div>
                        <div class="flex-1 inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-2 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <p class="">05-25-2021</p>
                        </div>
                      </div> */}
                          <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                          <div class="flex space-x-3 text-sm font-medium">
                            <div class="flex-auto flex space-x-3">
                              <div class="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                <span class="text-green-400 hover:text-green-500 rounded-lg">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="shopify"
                                    class="svg-inline--fa fa-shopify  w-5 h-5  "
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"
                                    ></path>
                                  </svg>
                                </span>
                                <span>{item?.quantity} Nos </span>
                              </div>
                            </div>
                            <button
                              disabled
                              class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full"
                              type="button"
                              aria-label="like"
                            >
                              ₹{item?.price * item?.quantity}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div class="px-6 py-4">
                <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
                  {order && order?.user?.name}
                </h1>

                <p class="py-2 text-gray-700 dark:text-gray-400">
                  {fullAddress}
                </p>

                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>

                  <h1 class="px-2 text-sm">{order && order?.orderStatus}</h1>
                </div>

                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <h1 class="px-2 text-sm">
                    {order && order?.shippingInfo?.phoneNo}
                  </h1>
                </div>

                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                    />
                  </svg>

                  <h1 class="px-2 text-sm">{order?.user?.email}</h1>
                </div>
                <button
                  disabled
                  class="mb-2 mt-3 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full"
                  type="button"
                  aria-label="like"
                >
                  ₹{order?.totalPrice}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDetails;

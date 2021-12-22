import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { toast } from "react-hot-toast";
// import { Popover, Transition } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";

const Header = ({ user }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const history = useHistory();

  function toDashboard() {
    history.push("/admin/dashboard");
  }
  function toOrders() {
    history.push("/orders");
  }
  function toAccount() {
    history.push("/account");
  }
  function toCart() {
    history.push("/cart");
  }

  function logoutAccount() {
    dispatch(logout());
    toast.success("Logged out successfully");
  }

  return (
    <>
      <div class="p-3  text-gray-700 bg-gray-900 rounded-lg shadow-lg font-medium capitalize">
        <span class="px-2 mr-2 ">
          <h4 className="w-8 h-8 -mt-1 inline mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Dressify
          </h4>
        </span>
        <span class="px-2 py-1 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm rounded mb-5">
          <button onClick={() => history.push("/")} class="mx-1">
            Home
          </button>
        </span>
        <span class="px-2 py-1 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm rounded mb-5">
          <button onClick={toOrders} class="mx-1">
            My Orders
          </button>
        </span>
        <span class="px-2 py-1 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm rounded mb-5">
          <button onClick={() => history.push("/products")} class="mx-1">
            Products
          </button>
        </span>

        {/* <span class="px-1 hover:text-white cursor-pointer w-8 relative">
      <i class="w-8 fas fa-bell p-2 bg-gray-800 rounded-full"></i>
      <span class="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
        3
      </span>
    </span> */}
        {user ? (
          <span class="flex cursor-pointer  relative float-right ">
            {user ? (
              <>
                <Menu>
                  <Menu.Button className="">
                    <div class="flex justify-center px-3">
                      <div class="flex relative w-12 items-center text-2xl rounded-full text-white">
                        {user?.avatar.url ? (
                          <img
                            class="rounded-full"
                            alt="Profile"
                            src={user?.avatar.url}
                          />
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mr-10  w-32 mt-10 origin-top-right z-50 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={
                              " hover:text-white text-gray-300 bg-gray-900 group rounded-md items-center w-full py-2 text-sm"
                            }
                            onClick={toAccount}
                          >
                            Profile
                          </button>
                        )}
                      </Menu.Item>

                      {user?.role === "admin" ? (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={
                                "hover:text-white text-gray-300 bg-gray-900 group rounded-md items-center w-full py-2 text-sm"
                              }
                              onClick={toDashboard}
                            >
                              Dashboard
                            </button>
                          )}
                        </Menu.Item>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={
                                "hover:text-white text-gray-300 bg-gray-900 group rounded-md items-center w-full py-2 text-sm"
                              }
                              onClick={toOrders}
                            >
                              Orders
                            </button>
                          )}
                        </Menu.Item>
                      )}
                      {/* <Menu.Item>
                      {({ active }) => (
                        <button
                          className="hover:text-white text-gray-300 items-center bg-gray-900 group rounded-md w-full px-2 py-2 text-sm"
                          onClick={toCart}
                        >
                          Cart
                          {cartItems.length === 0 ? (
                            <div></div>
                          ) : (
                            <span class="absolute right-0 top-0 -mt-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                              {cartItems.length}
                            </span>
                          )}
                        </button>
                      )}
                    </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className="hover:text-white text-gray-300 items-center bg-gray-900 group rounded-md w-full px-2 py-2 text-sm"
                            onClick={logoutAccount}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <div className="flex pr-3 ">
                  <button onClick={toCart}>
                    <ShoppingBagIcon width={30} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <button
                    onClick={() => history.push("/login")}
                    class="align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg"
                  >
                    LOGIN
                  </button>
                </div>
              </>
            )}
            {cartItems.length === 0 ? (
              <div></div>
            ) : (
              <span class="absolute right-0 top-0 -mt-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                {cartItems.length}
              </span>
            )}
          </span>
        ) : (
          <>
            <span className="absolute right-0 pr-10">
              <button
                onClick={() => history.push("/login")}
                class=" rounded px-3 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white hover:border-transparent"
              >
                Login
              </button>
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default Header;

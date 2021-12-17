import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../actions/userAction";

import toast from "react-hot-toast";
import Loader from "../layout/Loader/Loader";

const Login = ({ history, location }) => {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  console.log(error, "skcscbucabac");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    console.log("login form submitted");
    dispatch(login(loginEmail, loginPassword));
  };

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    debugger;

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, toast, isAuthenticated, history, redirect]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div class="container max-w-full mx-auto py-24 px-6">
            <div class="font-sans">
              <div class="max-w-sm mx-auto px-6">
                <div class="relative flex flex-wrap">
                  <div class="w-full relative">
                    <div class="mt-6">
                      <div class="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
                        {/* <span>
                      By
                      <a
                        class="text-blue-500"
                        href="https://twitter.com/framansi"
                      >
                        @framansi
                      </a>
                    </span> */}
                      </div>
                      <h1 class="text-xl font-semibold">
                        Hello👋,{" "}
                        <span class="font-normal">
                          Please login to continue
                        </span>
                      </h1>

                      <form class="mt-8">
                        <div class="mx-auto max-w-lg">
                          <div class="py-2">
                            <span class="px-1 text-sm text-gray-600">
                              Email
                            </span>
                            <input
                              placeholder="johndoe6@gmail.com"
                              type="text"
                              value={loginEmail}
                              onChange={(e) => setLoginEmail(e.target.value)}
                              class="text-md block px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                          </div>
                          <div class="py-2" x-data="{ show: true }">
                            <span class="px-1 text-sm text-gray-600">
                              Password
                            </span>
                            <div class="relative">
                              <input
                                placeholder="JohnDoe123"
                                class="text-md block px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none"
                                type="password"
                                value={loginPassword}
                                onChange={(e) =>
                                  setLoginPassword(e.target.value)
                                }
                              />
                            </div>
                          </div>
                          <div class="flex justify-between">
                            <label class="block text-gray-500 font-bold my-4">
                              <input
                                type="checkbox"
                                class="leading-loose text-pink-600"
                              />{" "}
                              <span class="py-2 text-sm text-gray-600 leading-snug">
                                {" "}
                                Remember Me{" "}
                              </span>
                            </label>{" "}
                            <label class="block text-gray-500 font-bold my-4">
                              <a
                                href="#"
                                class="cursor-pointer text-center font-semibold text-black"
                              >
                                <span>Forgot Password?</span>
                              </a>
                            </label>
                          </div>{" "}
                          <button
                            class="mt-3 text-lg font-semibold 
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                            onClick={onLogin}
                          >
                            Login
                          </button>
                          <span className="text-xs text-gray-600 ">
                            Don't have an Account?{" "}
                            <Link
                              className=" text-blue-600 hover:text-black"
                              to="/register"
                            >
                              Register
                            </Link>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;

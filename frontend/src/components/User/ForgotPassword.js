import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/profileAction";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const onForgotPassword = (e) => {
    console.log("form submitted");

    const myForm = new FormData();

    myForm.set("email", email);

    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, toast, message]);

  return (
    <div>
      <div>
        <div class="container max-w-full mx-auto py-24 px-6">
          <div class="font-sans">
            <div class="max-w-sm mx-auto px-6">
              <div class="relative flex flex-wrap">
                <div class="w-full relative">
                  <div class="mt-6">
                    <div class="mb-5 pb-1border-b-2 text-center font-base text-gray-700"></div>
                    <h1 class="text-xl font-semibold pl-24">
                      <span class="font-normal">Forgot Password</span>
                    </h1>
                    <form class="mt-8" onSubmit={onForgotPassword}>
                      <div class="mx-auto max-w-lg">
                        <div class="py-2">
                          <span class="px-1 text-sm text-gray-600">Email</span>
                          <input
                            placeholder="JohnDoe123"
                            type="email"
                            class="text-md block px-3 py-2  rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <button
                          class="mt-3 text-lg font-semibold 
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                          type="submit"
                          value="Register"
                        >
                          Send Mail
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

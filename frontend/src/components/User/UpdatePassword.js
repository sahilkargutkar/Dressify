import React, { useState, useEffect } from "react";
import { UploadIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { clearErrors, updatePassword } from "../../actions/profileAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/profileConstants";

const UpdatePassword = ({ history }) => {
  const dispatch = useDispatch();
  const { isUpdated, loading, error } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();

  const onUpdatePassword = (e) => {
    debugger;
    console.log("form submitted");

    const myForm = new FormData();
    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(updatePassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile Updated Successfully");
      //   dispatch(loadUser());
      //   history.push("/account");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, toast, history, isUpdated]);

  return (
    <div>
      <div class="container max-w-full mx-auto py-24 px-6">
        <div class="font-sans">
          <div class="max-w-sm mx-auto px-6">
            <div class="relative flex flex-wrap">
              <div class="w-full relative">
                <div class="mt-6">
                  <div class="mb-5 pb-1border-b-2 text-center font-base text-gray-700"></div>
                  <h1 class="text-xl font-semibold pl-24">
                    <span class="font-normal">Change password</span>
                  </h1>
                  <form class="mt-8" onSubmit={onUpdatePassword}>
                    <div class="mx-auto max-w-lg">
                      <div class="py-2">
                        <span class="px-1 text-sm text-gray-600">
                          Old Password
                        </span>
                        <input
                          placeholder="JohnDoe123"
                          type="password"
                          class="text-md block px-3 py-2  rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                        />
                      </div>
                      <div class="py-2" x-data="{ show: true }">
                        <span class="px-1 text-sm text-gray-600">
                          New Password
                        </span>
                        <div class="relative">
                          <input
                            name="password"
                            type="password"
                            placeholder="JohnDoe321"
                            class="text-md block px-3 py-2 rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
            focus:placeholder-gray-500
            focus:bg-white 
            focus:border-gray-600  
            focus:outline-none"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="py-2" x-data="{ show: true }">
                        <span class="px-1 text-sm text-gray-600">
                          Confirm Password
                        </span>
                        <div class="relative">
                          <input
                            name="password"
                            type="password"
                            placeholder="JohnDoe321"
                            class="text-md block px-3 py-2 rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
            focus:placeholder-gray-500
            focus:bg-white 
            focus:border-gray-600  
            focus:outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <button
                        class="mt-3 text-lg font-semibold 
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                        type="submit"
                        value="Register"
                      >
                        Update
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
  );
};

export default UpdatePassword;

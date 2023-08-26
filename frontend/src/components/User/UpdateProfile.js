import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UploadIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProfile } from "../../actions/profileAction";
import toast from "react-hot-toast";
import { UPDATE_PROFILE_RESET } from "../../constants/profileConstants";
import { loadUser } from "../../actions/userAction";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";

const UpdateProfile = ({ history }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { isUpdated, loading, error } = useSelector((state) => state.profile);

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("./Profile.png");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onUpdateProfile = (e) => {
    console.log("form submitted");

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  const onUpdateChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
      setAvatarPreview(user?.avatar.url);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile Updated Successfully");
      dispatch(loadUser());
      history.push("/account");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, toast, history, user, isUpdated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Update Profile" />
          <div>
            <div class="container max-w-full mx-auto py-20 px-6">
              <div class="font-sans">
                <div class="max-w-sm mx-auto px-6">
                  <div class="relative flex flex-wrap">
                    <div class="w-full relative">
                      <div class="mt-6">
                        <h1 class="text-xl font-semibold">
                          <span class="font-normal pl-28">Update Profile</span>
                        </h1>
                        <div class="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
                          <img
                            src={avatarPreview}
                            className="h-24 w-24 object-cover rounded-full"
                          />
                        </div>

                        <form
                          class="mt-8"
                          encType="multipart/form-data"
                          onSubmit={onUpdateProfile}
                        >
                          <div class="flex gap-6 mx-auto w-full">
                            <span class="w-1/2">
                              <span class="px-1 text-sm text-gray-600">
                                Name
                              </span>
                              <input
                                type="text"
                                name="name"
                                placeholder="John"
                                class="text-md block px-3 py-2  rounded-lg w-full 
              bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </span>
                            <div class="items-center justify-center bg-grey-lighter">
                              <span class="px-1 text-sm text-gray-600">
                                Profile Image
                              </span>
                              <label class="flex flex-col w-full items-center px-3 py-2 border-2 border-gray-300  bg-white text-blue rounded-lg shadow-lg border-blue cursor-pointer hover:bg-blue-500 hover:text-black">
                                <span class=" flex flex-row-reverse text-base leading-normal">
                                  {" "}
                                  <UploadIcon className="h-6 w-6 pl-1" /> Choose
                                  a file
                                </span>
                                <input
                                  type="file"
                                  class="hidden"
                                  onChange={onUpdateChange}
                                  accept="image/*"
                                />
                              </label>
                            </div>
                          </div>
                          <div class="mx-auto max-w-lg">
                            <div class="py-2">
                              <span class="px-1 text-sm text-gray-600">
                                Email
                              </span>
                              <input
                                placeholder="johndoe6@gmail.com"
                                type="email"
                                name="email"
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
                              value="updateProfile"
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
        </>
      )}
    </>
  );
};

export default UpdateProfile;

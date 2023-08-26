import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UploadIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../actions/userAction";
import toast from "react-hot-toast";

const Register = ({ history }) => {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("./Profile.png");

  const { name, email, password } = user;

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/account");
    }
  }, [dispatch, error, toast, history, isAuthenticated]);

  const onRegister = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);

    dispatch(register(myForm));
  };

  const registerChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <div class="container max-w-full mx-auto py-24 px-6">
        <div class="font-sans">
          <div class="max-w-sm mx-auto px-6">
            <div class="relative flex flex-wrap">
              <div class="w-full relative">
                <div class="mt-6">
                  <div class="mb-5 pb-1border-b-2 text-center font-base text-gray-700"></div>
                  <h1 class="text-xl font-semibold">
                    Hello👋,{" "}
                    <span class="font-normal">Welcome to ClothesNow</span>
                  </h1>
                  <form
                    class="mt-8"
                    encType="multipart/form-data"
                    onSubmit={onRegister}
                  >
                    <div class="flex gap-6 mx-auto w-full">
                      <span class="w-1/2">
                        <span class="px-1 text-sm text-gray-600">Name</span>
                        <input
                          type="text"
                          name="name"
                          placeholder="John"
                          class="text-md block px-3 py-2  rounded-lg w-full 
              bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          value={name}
                          onChange={registerChange}
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
                            <UploadIcon className="h-6 w-6 pl-1" /> Choose a
                            file
                          </span>
                          <input
                            type="file"
                            class="hidden"
                            name="avatar"
                            onChange={registerChange}
                            accept="image/*"
                            required
                          />
                        </label>
                      </div>
                    </div>
                    <div class="mx-auto max-w-lg">
                      <div class="py-2">
                        <span class="px-1 text-sm text-gray-600">Email</span>
                        <input
                          placeholder="johndoe6@gmail.com"
                          type="email"
                          name="email"
                          class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          value={email}
                          onChange={registerChange}
                        />
                      </div>
                      <div class="py-2" x-data="{ show: true }">
                        <span class="px-1 text-sm text-gray-600">Password</span>
                        <div class="relative">
                          <input
                            name="password"
                            type="password"
                            placeholder="JohnDoe123"
                            class="text-md block px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none"
                            value={password}
                            onChange={registerChange}
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
                        Register
                      </button>
                      <span className="text-xs text-gray-600 ">
                        Already Registered?{" "}
                        <Link
                          className="text-blue-600 hover:text-black"
                          to="/login"
                        >
                          Login
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
    </div>
  );
};

export default Register;

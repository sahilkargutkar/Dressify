import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserDetails, loadUser } from "../../actions/userAction";
import Loader from "../layout/Loader/Loader";

const Contact = () => {
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const sendMessage = () => {
    return <Link to="mailto:sahilkargutkar.sk@gmail.com" />;
  };

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="bg-gray-200">
            <div class="mx-5 min-h-screen grid place-content-center ">
              <div class="bg-gradient-to-r from-blue-400 to-indigo-500 mt-3 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                <h1 class="text-3xl mb-3 capitalize">Hi {user?.name}</h1>
                <p class="text-lg">
                  You can contact me whenever you need help or just curious
                  about something.
                </p>
              </div>
              <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
                <h2 class="font-semibold text-2xl mb-6">Start chatting</h2>
                <img
                  class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                  src="https://sahilkargutkar.github.io/myResume/static/media/Screenshot1.cd7305fe.png"
                  alt="User avatar"
                />
                <p class="capitalize text-xl mt-1">sahil kargutkar</p>
                <span class="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
                  <div class="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
                  Active
                </span>
                <button
                  onClick={sendMessage}
                  class="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline"
                >
                  Send a message
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;

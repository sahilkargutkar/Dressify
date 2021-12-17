import React, { useEffect } from "react";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MetaData title={`${user?.name}'s Profile`} />
          <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
            <div class="top h-64 w-full bg-blue-600 overflow-hidden relative">
              <img
                src={user?.avatar.url}
                alt=""
                class="bg w-full h-full object-cover object-center absolute z-0"
              />
              <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                <img
                  src={user?.avatar.url}
                  class="h-24 w-24 object-cover rounded-full"
                />
                <h1 class="text-2xl font-semibold">{user?.name}</h1>
                <h4 class="text-sm font-semibold">
                  {`Joined On ${String(user?.createdAt).substr(0, 10)}`}
                </h4>
              </div>
            </div>
            <div class="grid grid-cols-12 bg-white ">
              <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
                <a
                  href="#"
                  class="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold"
                >
                  Basic Information
                </a>

                <button class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">
                  <Link to="/me/update">Edit Profile</Link>
                </button>
                <a
                  href="#"
                  class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
                >
                  Contact Support
                </a>
              </div>

              <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
                <div class="px-4 pt-4">
                  <form action="#" class="flex flex-col space-y-8">
                    <div>
                      <h3 class="text-2xl font-semibold">Basic Information</h3>
                      <hr />
                    </div>

                    <div class="form-item">
                      <label class="text-xl ">Full Name</label>
                      <input
                        type="text"
                        value={user?.name}
                        class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                        disabled
                      />
                    </div>

                    <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                      <div class="form-item w-full">
                        <label class="text-xl ">Email</label>
                        <input
                          type="text"
                          value={user?.email}
                          class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
                          disabled
                        />
                      </div>
                    </div>

                    <div>
                      <button className=" h-12 rounded-lg bg-red-600 cursor-pointer uppercase font-semibold hover:bg-red-700 text-gray-100 w-40 transition mb-4">
                        <Link to="/password/update" className="cursor-pointer">
                          Change Password
                        </Link>
                      </button>
                      <hr />
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold ">My Orders</h3>
                      <hr />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

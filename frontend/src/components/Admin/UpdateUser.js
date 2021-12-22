import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  clearErrors,
  getUserDetails,
  updateUser,
} from "../../actions/userAction";
import { UPDATE_USER_RESET } from "../../constants/userConstants";
import { userDetailsReducer } from "../../reducers/UserReducer";
import Loader from "../layout/Loader/Loader";

const UpdateUser = ({ history, match }) => {
  const dispatch = useDispatch();

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.updateUser);

  const {
    loading: updateLoading,
    user,
    error,
  } = useSelector((state) => state.userDetails);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const userId = match.params.id;

  useEffect(() => {
    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (user && user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user?.name);
      setEmail(user?.email);
      setRole(user?.role);
    }

    if (isUpdated) {
      toast.success("User Updated Successfully");
      history.push("/admin/users");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, toast, updateError, isUpdated, history, user, userId]);

  const updateUserhandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("role", role);

    dispatch(updateUser(userId, myForm));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            <div class=" bg-gray-100 py-6  justify-center sm:py-12">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                  <div class="max-w-md mx-auto">
                    <div class="flex items-center space-x-5">
                      <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                        i
                      </div>
                      <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                        <h2 class="leading-relaxed">Update User</h2>
                        <p class="text-sm text-gray-500 font-normal leading-relaxed">
                          This user will be updated into the website
                        </p>
                      </div>
                    </div>
                    <form
                      class="divide-y divide-gray-200"
                      encType="multipart/form-data"
                      onSubmit={updateUserhandler}
                    >
                      <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div class="flex flex-col">
                          <label class="leading-loose">User's Name</label>
                          <input
                            type="text"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div class="flex flex-col">
                          <label class="leading-loose">Email</label>
                          <input
                            type="email"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div class="flex flex-col">
                          <label class="leading-loose">Category</label>
                          {/* <input
            type="text"
            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Choose"
          /> */}
                          <select
                            value={role}
                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            onChange={(e) => setRole(e.target.value)}
                          >
                            <option value="">Choose Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                          </select>
                        </div>
                        {/* <div class="flex items-center space-x-4">
                      <div class="flex flex-col">
                        <label class="leading-loose">Role</label>
                        <div class="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="number"
                            class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="admin"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                          />
                          <div class="absolute left-3 top-2"></div>
                        </div>
                      </div>
                    </div> */}
                      </div>
                      <button
                        type="submit"
                        class="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-black text-white"
                      >
                        Update
                      </button>
                    </form>
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

export default UpdateUser;

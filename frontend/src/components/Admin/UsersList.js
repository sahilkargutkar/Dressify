import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearErrors, deleteUser, getAllUsers } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";
import Loader from "../layout/Loader/Loader";

const UsersList = ({ history }) => {
  const dispatch = useDispatch();

  const { error, users, loading } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.updateUser);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success(message);
      history.push("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [error, dispatch, toast, deleteError, history, isDeleted, message]);

  const onHandleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const onHandleEdit = (id) => {
    history.push(`/admin/user/${id}`);
  };

  return (
    <>
      {loading ? (
        <>
          {" "}
          <Loader />{" "}
        </>
      ) : (
        <>
          <div>
            <div>
              <button
                onClick={() => history.push("/admin/product")}
                className="px-2 mt-2 mb-3 bg-blue-400 rounded-lg py-2 ml-3"
              >
                Create
              </button>
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      User Id
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Role
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users && users.length > 0 ? (
                    users?.map((item) => {
                      console.log(item, "order items");

                      return (
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="ml-3">
                                <Link to={`/admin/user/${item?._id}`}>
                                  <p class="text-gray-900 hover:text-blue-600 whitespace-no-wrap">
                                    {item?._id}
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {item?.email}
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {item?.name}
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {item?.role}
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-black-900 leading-tight">
                              <button
                                class="mr-6 bg-green-400"
                                onClick={() => onHandleEdit(item?._id)}
                              >
                                Edit
                              </button>
                              <button
                                class="ml-10 bg-red-500"
                                onClick={() => onHandleDelete(item?._id)}
                              >
                                Delete
                              </button>
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <>
                      <Loader />
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UsersList;

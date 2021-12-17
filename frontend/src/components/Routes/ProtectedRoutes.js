import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  return (
    <>
      {!loading && (
        <Route
          {...rest}
          render={(props) => {
            if (!isAuthenticated) {
              return <Redirect to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </>
  );
};

export default ProtectedRoutes;

import React, { use,} from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import Loader from "../commnents/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

const location =  useLocation() 


  if(loading){


    return<Loader></Loader>

  }

  if (user && user.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/loginpages/login"></Navigate>; 
 
};

export default PrivateRoute;

// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import Cookies from "js-cookie";

// const PrivateRoute = ({ children }) => {
//   const location = useLocation();
//   const authToken = Cookies.get("authToken");

//   if (!authToken) {
//     return <Navigate to="/signin" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default PrivateRoute;

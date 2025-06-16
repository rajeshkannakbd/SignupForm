import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { nameContext } from "./App";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(nameContext);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

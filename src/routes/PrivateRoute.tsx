import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  isAuthenticated: boolean;
  children: ReactNode;
};

const PrivateRoute = ({ isAuthenticated, children }: PrivateRouteProps) => {
  return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;

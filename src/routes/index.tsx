import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import SignIn from "@/pages/sign-in";
import PrivateRoute from "./PrivateRoute";
import Cart from "@/pages/cart.tsx";
import { useSelector } from "react-redux";

const routes = () => {
  const user = useSelector((state: any) => state.user);
  const publicRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
  ];

  const privateRoutes = [
    {
      path: "/cart",
      element: <Cart />,
    },
  ];

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <PrivateRoute isAuthenticated={user?.id}>
              {route.element}
            </PrivateRoute>
          }
        />
      ))}
    </Routes>
  );
};

export default routes;

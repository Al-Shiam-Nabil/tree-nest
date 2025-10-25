import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import PrivateRoutes from "../Context/PrivateRoutes";
import ToyDetails from "../Pages/ToyDetails";
import MyProfile from "../Pages/MyProfile";
import ErrorPage from "../Pages/ErrorPage";

import Plants from "../Pages/Plants";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "log-in",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "forget-password",
        Component: ForgetPasswordPage,
      },
      {
        path: "plant-details/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "plants",
      Component:Plants
      },
     
    ],
  },
]);

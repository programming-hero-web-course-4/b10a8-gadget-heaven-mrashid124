import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Components/Home";
import Statistics from "../Components/Statistics";
import Dashboard from "../Components/Dashboard";
import Login from "../Components/Login";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
          },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
          },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
          },
        {
            path: "/login",
            element: <Login></Login>
          },
      ]
    },
  ])

  export default routes
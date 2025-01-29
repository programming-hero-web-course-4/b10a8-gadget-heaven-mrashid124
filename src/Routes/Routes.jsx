import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Components/Home";
import Statistics from "../Components/Statistics";
import Dashboard from "../Components/Dashboard";
import Login from "../Components/Login";
import Error from "../Components/Error/Error";
import ProductDetail from "../Components/ProductDetail";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,

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
            element: <Dashboard></Dashboard>,
            loader: ()=> fetch('/public/dataOfGadgets.json')
          },
        {
            path: "/product/:productId",
            element: <ProductDetail></ProductDetail>,
            loader: ()=> fetch('/public/dataOfGadgets.json')
          },
        {
            path: "/login",
            element: <Login></Login>
          },
      ]
    },
  ])

  export default routes
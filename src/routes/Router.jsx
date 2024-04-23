import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
// import AddCoffee from "../pages/AddCoffee";
import Coffee from "../pages/Coffee";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import DetailsCoffee from "../pages/DetailsCoffee";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
          path:'/coffee',
          element: <Coffee/>,
          children: [
            {
              path: '/coffee/addcoffee',
              element: <AddCoffee/>
            },
            {
              path: '/coffee/updatecoffee',
              element: <UpdateCoffee/>
            },
            {
              path: '/coffee/coffeedetails',
              element: <DetailsCoffee/>
            }
          ]
      },
    ]
    },
  ]);

export default router;
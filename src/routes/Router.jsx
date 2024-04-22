import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
          path:'/addcoffee',
          element: <AddCoffee/>
      },
    ]
    },
  ]);

export default router;
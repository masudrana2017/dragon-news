import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../SignUp/Signup";
import AllNews from "../pages/AllNews/AllNews";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import NewsDetails from "../pages/NewsDetails/NewsDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('news.json')
        },
        {
          path:"/allNews",
          element:<AllNews></AllNews>,
          loader:()=>fetch('news.json')
        },
        {
          path:"/news/:id",
          element:<NewsDetails></NewsDetails>,
          loader:()=>fetch('/news.json')
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path:"/profile",
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        }
      ]
    },
  ]);
  

export default router;
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import UpcomingEvents from "../pages/upcomingEvents/UpcomingEvents";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : [
      {
        index :true,
        Component : Home
      },
      {
        path : '/upcomingevents',
        Component : UpcomingEvents
      },
      {
        path : '/login',
        Component : Login
      },
      {
        path : '/register',
        Component : Register
      },
    ]
  },
]);

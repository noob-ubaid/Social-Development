import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import UpcomingEvents from "../pages/upcomingEvents/UpcomingEvents";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../contexts/PrivateRoute";

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
        element : <UpcomingEvents></UpcomingEvents>
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

import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import UpcomingEvents from "../pages/upcomingEvents/UpcomingEvents";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../contexts/PrivateRoute";
import CreateEvent from "../pages/Create/CreateEvent";
import ManageEvents from "../pages/Manage/ManageEvents";
import JoinedEvents from "../pages/Joined/JoinedEvents";

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
        path : '/create',
        element : <PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
      },
      {
        path : '/manage',
        element : <PrivateRoute><ManageEvents></ManageEvents></PrivateRoute>
      },
      {
        path : '/joined',
        element : <PrivateRoute><JoinedEvents></JoinedEvents></PrivateRoute>
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

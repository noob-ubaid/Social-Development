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
import Details from "../pages/Details/Details";

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
        Component : UpcomingEvents,
        loader : () => fetch(`${import.meta.env.VITE_api_url}/events`)
      },
      {
        path : '/details/:id',
        element : <PrivateRoute><Details></Details></PrivateRoute>,
        loader : ({params}) => fetch(`${import.meta.env.VITE_api_url}/events/${params.id}`)
      },
      {
        path : '/create',
        element : <PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
      },
      {
        path : '/manage/:email',
        element : <PrivateRoute><ManageEvents></ManageEvents></PrivateRoute>,
        loader : ({params})=> fetch(`${import.meta.env.VITE_api_url}/manage-events/${params.email}`)
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

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Booking from "../pages/Booking/Booking";
import BookingInfo from "../pages/BookingInfo/BookingInfo";
import Contacts from "../pages/Contacts/Contacts";
import Destination from "../pages/Destination/Destination";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import Sajek from "../pages/VisitPlaces/Sajek";
import Srimongol from "../pages/VisitPlaces/Srimongol";
import Sunderban from "../pages/VisitPlaces/Sunderban";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/destination',
                element:<PrivateRoutes><Destination></Destination></PrivateRoutes>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/contact-info',
                element:<Contacts></Contacts>
            },
            {
                path:'/booking',
                element:<Booking></Booking>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/booking-info',
                element: <PrivateRoutes><BookingInfo></BookingInfo></PrivateRoutes>
            },
            {
                path:'/visit-sajek',
                element:<Sajek></Sajek>  
            },
            {
                path: 'visit-srimongol',
                element:<Srimongol></Srimongol>
            },
            {
                path: 'visit-sunderban',
                element:<Sunderban></Sunderban>
            },
        ]
    }
])
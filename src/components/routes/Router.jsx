import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import CheckOut from "../CheckOut/CheckOut";
import Booking from "../../pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";
import AddService from "../../pages/AddService/AddService";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<PrivateRoute><Services></Services></PrivateRoute>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/addService',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
               
            },

            {
                path:'/service/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/booking',
                element:<PrivateRoute><Booking></Booking></PrivateRoute>
            },


            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
           

        ]
    }
])

export default Router;
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import CheckOut from "../CheckOut/CheckOut";


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
                element:<Services></Services>
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
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
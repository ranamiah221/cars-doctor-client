import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import LoadingPage from "../LoadingPage/LoadingPage";


const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location=useLocation();
 

    if(loading){
        return <LoadingPage></LoadingPage>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/signin' state={location.pathname}></Navigate>
};

export default PrivateRoute;
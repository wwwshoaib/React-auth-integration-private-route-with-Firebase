import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router";



const PrivateRoute = ( {children} ) => {
    const { user, loading } = useContext(AuthContext);

    
    if(loading) {
        return <span className="loading loading-spinner text-accent"></span>
    }
    
    if(user) {
        return children;
    } 

    return (
        <div>
            <Navigate to ="/login"></Navigate>
            
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;
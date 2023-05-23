import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    if(loading){
        <p>Loading...</p>
    }
    if(!user){
        return <Navigate to ='/login'></Navigate>
    }
    return children;

    
   
};

export default PrivateRoutes;
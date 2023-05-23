import React from "react";
import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => {
        if(localStorage.getItem('token')){
            return <Component {...props}/>
        }else {
            return <Navigate to="/login" />
        }
        
    }}/>
  );
}
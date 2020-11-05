import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = (props) => {
    if(props.username.localeCompare("") !== 0) {
        return (
            <div>
                <NavLink to="">Homepage</NavLink>
                <NavLink to="/joblist">Joblist</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <header>User: {props.username}</header>
            </div>
        );
    }
    else{
        return (
            <div>
                <NavLink to="">Homepage</NavLink>
                <NavLink to="/joblist">Joblist</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <header>Click Login to log into your account</header>
            </div>
        );
    }
}
 
export default Navigation;
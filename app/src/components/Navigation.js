import React from 'react';
import "./Navigation.css";
import "./App.css"
 
import { NavLink } from 'react-router-dom';
 
const Navigation = (props) => {
    if(props.username.localeCompare("") !== 0) {
        return (
            <div>
                <NavLink to="" className="Nav">Homepage</NavLink>
                <NavLink to="/login" className="Nav">Login</NavLink>
                <NavLink to="/joblist" className="Nav">Joblist</NavLink>
                <header className="Nav_header">User: {props.username}</header>
            </div>
        );
    }
    else{
        return (
            <div>

                <NavLink to="" className="Nav">Homepage</NavLink>
                <NavLink to="/login" className="Nav">Login</NavLink>
                <NavLink to="/signup" className="Nav">Signup</NavLink>
                <NavLink to="/joblist" className="Nav">Joblist</NavLink>
                <header className="Nav_header">Click Login to log into your account</header>
            </div>
        );
    }
}
 
export default Navigation;
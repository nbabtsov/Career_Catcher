import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
           <NavLink to="">Homepage</NavLink>
           <NavLink to="/joblist">Joblist</NavLink>
           <NavLink to="/login">Login</NavLink>
           <NavLink to="/signup">Signup</NavLink>
       </div>
    );
}
 
export default Navigation;
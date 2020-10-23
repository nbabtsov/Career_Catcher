import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
           <div>
               <NavLink to="">Homepage</NavLink>
           </div>
          <div>
              <NavLink to="/joblist">Joblist</NavLink>
          </div>

           <NavLink to="/login">Login</NavLink>
       </div>
    );
}
 
export default Navigation;
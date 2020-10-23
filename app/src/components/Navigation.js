import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import './App.css';
import { NavLink, Link } from 'react-router-dom';
 /*
const Navigation = () => {
   const button = this.props.authState.isAuthenticated ?
		<button onClick={this.logout}>Logout</button> :
		<button onClick={this.login}>Login</button>;
    return (
       <div>
          <NavLink to="">Homepage</NavLink>
		  <NavLink to="/joblist">Joblist</NavLink>
        <Link to='/protected'>Protected</Link><br/>
        {button}
       </div>
    );
}
 
export default Navigation;*/

export default withOktaAuth(class Navigation extends Component {
	constructor(props) {
	  super(props);
	  this.login = this.login.bind(this);
	  this.logout = this.logout.bind(this);
	}
  
	async login() {
	  this.props.history.push('/login');
	}
  
	async logout() {
	  this.props.authService.logout('/');
	}
  
	render() {
	  if (this.props.authState.isPending) return null;
     const button = this.props.authState.isAuthenticated ?
      <button onClick={this.logout}>Logout</button> :
      <button onClick={this.login}>Login</button>;
	  return (
       <div>
          <NavLink to="">Homepage</NavLink>
		  <NavLink to="/joblist">Joblist</NavLink>
        <Link to='/protected'>Protected</Link><br/>
       
        {button}
       </div>
	  );
	}
  });
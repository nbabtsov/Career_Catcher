import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Protected from './Protected';
import Navigation from './Navigation'
import Homepage from './Homepage'
import Joblistpage from './Joblistpage'
import Login from './Login'



export default withRouter(class AppWithRouterAccess extends Component {
  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired() {
    this.props.history.push('/login')
  }

  render() {

    // Note: If your app is configured to use the Implicit Flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add the below property to what is passed to <Security>
    //
    // pkce={false}

    return (
        <Security issuer='https://dev-6511042.okta.com/oauth2/default'
                  clientId='0oadqxbggFBJPFpBo5d5'
                  redirectUri={window.location.origin + '/login/callback'}
                  onAuthRequired={this.onAuthRequired} >
                    <Navigation history={this.props.history}/>
                  
                    <Route path='/' exact={true} component={Homepage} />
                    <Route path="/joblist" component={Joblistpage}/>
                    <SecureRoute path='/protected' component={Protected} />
                    <Route path='/login' render={() => <Login baseUrl='https://dev-6511042.okta.com' />} />
                    <Route path='/login/callback' component={LoginCallback} />
                 
                   
                    
         
        </Security>
    );
  }
});
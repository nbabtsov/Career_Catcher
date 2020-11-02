import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Joblistpage from './components/Joblistpage'
import Login from './components/Login'
import Signup from './components/Signup'


class App extends React.Component {

	render(){
		return(
			<BrowserRouter>
				<div>
					<Navigation />
					<Switch>
						<Route path="/joblist" component={Joblistpage}/>
						<Route path="/Login" component={Login} />
						<Route exact path="/" component={Homepage}/>

					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

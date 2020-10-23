import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Joblistpage from './components/Joblistpage'
import Error from './components/Error'
import Login from './components/Login'
class App extends React.Component {
	
	render(){
		return(
			<BrowserRouter>
				<div>
					<Navigation />
					<Switch>
						<Route path="/joblist" component={Joblistpage}/>
						<Route path="/Login" component={Login} />
						<Route component={Homepage}/>

					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

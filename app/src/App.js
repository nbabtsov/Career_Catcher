import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './Navigation'
import Homepage from './Homepage'
import Joblist from './Joblist'
import Error from './Error'

class App extends React.Component {
	
	render(){
		return(
			<BrowserRouter>
				<div>
					<Navigation />
					<Switch>
						<Route path="/home" component={Homepage}/>
						<Route path="/joblist" component={Joblist}/>
						<Route component={Error}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

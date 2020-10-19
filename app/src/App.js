import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Joblistpage from './components/Joblistpage'
import Error from './components/Error'

class App extends React.Component {
	
	render(){
		return(
			<BrowserRouter>
				<div>
					<Navigation />
					<Switch>
						<Route path="/home" component={Homepage}/>
						<Route path="/joblist" component={Joblistpage}/>
						<Route component={Error}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

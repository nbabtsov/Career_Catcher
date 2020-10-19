import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import SearchBar from './SearchBar';
import Navigation from './Navigation'
import Homepage from './Homepage'

class App extends React.Component {
	
	render(){
		return(
			<BrowserRouter>
				<div>
					<Navigation />
					<Switch>
						<Route path="/" component={Homepage} exat />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;

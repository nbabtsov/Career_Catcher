import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Joblistpage from './components/Joblistpage'
import Login from './components/Login'
import Signup from './components/Signup'


const App = () => {
	const [username, setUsername] = useState("");
	return(
		<BrowserRouter>
			<div>
				<Navigation />
				<Switch>
					<Route path="/joblist" component={Joblistpage}/>
					<Route path="/Login" component={Login} />
					<Route path="/Signup" component={Signup}/>
					<Route exact path="/" component={Homepage}/>

				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;

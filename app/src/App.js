import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Joblistpage from './components/Joblistpage'
import Login from './components/Login'
import Signup from './components/Signup'

/*
class App extends Component {
constructor(props){
	super(props);
	this.state = {apiResponse : "", username:""};
}
	callAPI(){
		fetch('http://localhost:9000/testAPI')
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }));
	}
	componentDidMount() {
	this.callAPI();
	}
	render(){
	return(
		<BrowserRouter>
			<div>
				<Navigation username={this.state.username}/>
				<Switch>
					<Route path="/joblist" component={Joblistpage}/>
					<Route path="/Login" render={(props) => (<Login username={this.state.username} />)} />
					<Route path="/Signup" component={Signup}/>
					<Route exact path="/" component={Homepage}/>

				</Switch>
				<div>
					<p className="App-intro">{this.state.apiResponse}</p>
				</div>

			</div>
		</BrowserRouter>
		);
	}
}*/


const App = () => {
	const [username, setUsername] = useState("");
	const [loginState, setLoginState] = useState("");
	const [signupState, setSignupState] = useState("");
	function handleUser(newValue){
		setUsername(newValue);
	}
	function handleLogin(newValue){
		setLoginState(newValue);
	}
	function handleSignup(newValue){
		setSignupState(newValue);
	}

	return(
		<BrowserRouter>
			<div>
				<Navigation username={username}/>
				<Switch>
					<Route path="/joblist" render={(props) => (<Joblistpage username={username} handleUser={handleUser} />)}/>
					<Route path="/Login" render={(props) => (<Login username={username} handleUser={handleUser}/>)} />
					<Route path="/Signup" render={(props) => (<Signup username={username} handleUser={handleUser}/>)}/>
					<Route exact path="/" component={Homepage}/>

				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;

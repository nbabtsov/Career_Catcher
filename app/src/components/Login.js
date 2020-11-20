import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        let verify = {"email": email, "password": password, "job":1}
        console.log(verify.email);
        console.log(verify.password);
        let response = await fetch('http://localhost:9000/users', {method: 'POST', body: JSON.stringify(verify), headers: {'content-type': 'application/json'}});

        if(response.ok){

            let user = await response.text();
            console.log(user);
            if(user.localeCompare("false") !== 0){
                props.handleUser(user);
                props.handleLogin("true");
            }
            else{
                props.handleLogin("false");
            }




        }
        else{
            console.log("error: " + response.status);
        }

    }

    function logout(){
        props.handleUser("");
        props.handleLogin("");
        console.log("logout")
    }

    if(props.username.localeCompare("") !== 0 && props.username.localeCompare("false") !== 0){
        return(
        <div className="Login">
            <header className="App-header">
                <p>Welcome Back {props.username}</p>
                <button onClick={logout}>Logout</button>
            </header>
        </div>
        );
    }
    else if(props.loginState.localeCompare("false") === 0){
        return (
            <div className="Login">
                <header className="App-header">
                    <p>Login</p>
                </header>
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormControl
                            style={Styling}
                            placeholder='Email'
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            style={Styling}
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!validateForm()} type="submit">
                        Login
                    </Button>
                </form>
                <p className="LoginError">Incorrect Password/email, Try again</p>
            </div>
        );
    }
    else {
        return (
            <div className="Login">
                <header className="App-header">
                    <p>Login</p>
                </header>
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormControl
                            style={Styling}
                            placeholder='Email'
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            style={Styling}
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!validateForm()} type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default Login;
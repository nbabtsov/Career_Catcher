import React, { useState } from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";
import Signup from "./Signup";
import {userData} from "../users";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};
    let flag = false;
    let temp = 0;

    const [username, setUsername] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);

        userData.map(submitHelper);
        console.log(flag)
        if(flag === true){
            //do something
            //TODO
            setUsername(userData[temp].username);
        }


    }

    function submitHelper(user, index){
        if(user.email.localeCompare(email) === 0 && user.password.localeCompare(password) === 0){
            console.log("correct");
            temp = index;
            flag = true;
        }
    }

    if(flag === true){
        return(
        <div className="Login">
            <header className="App-header">
                <p>Welcome Back {username}</p>
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
                <Button block bsSize="large" disabled={!validateForm()} type="submit" >
                    Login
                </Button>
                <BrowserRouter>
                    <div style={{color: "white"}}>
                        Don't have an account?
                        <Link to="/Signup">Sign Up</Link>
                        <Route path="/Signup" component={Signup} />
                    </div>
                </BrowserRouter>

            </form>
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
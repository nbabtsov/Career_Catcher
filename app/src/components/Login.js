import React, { useState } from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";
import Signup from "./Signup";
import {userData} from "../users";


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};
    let flag = false;
    let temp = 0;

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
            //console.log(props.username);
            //console.log(userData[temp].name);
            props.handleUser(userData[temp].name);
        }


    }

    function submitHelper(user, index){
        if(user.email.localeCompare(email) === 0 && user.password.localeCompare(password) === 0){
            console.log("correct");
            temp = index;
            flag = true;
        }
    }

    function logout(){
        props.handleUser("");
        console.log("logout")
        flag = false;
    }

    if(props.username.localeCompare("") !== 0){
        return(
        <div className="Login">
            <header className="App-header">
                <p>Welcome Back {props.username}</p>
                <button onClick={logout}>Logout</button>
            </header>
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
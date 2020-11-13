import React, {useState} from 'react';
import {Button, FormControl, FormGroup} from "react-bootstrap";
import "./Login.css";
import {userData} from "../users";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};
    let flag = true;
    var express = require('express')
    var app = express()

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(username);
        console.log(email);
        console.log(password);
        userData.map(submitHelper);
        console.log(flag)
        if(flag == true){
            //add account to database
            //TODO
            app.post('/', function (req, res) {
                res.send('POST request to the homepage')
            })
        }


    }

    //flag set to false if user is already in data
    function submitHelper(user){
        if(user.email.localeCompare(email) == 0 && user.password.localeCompare(password) == 0 && user.username.localeCompare(username) == 0){
            console.log("correct");
            flag = false;
        }
    }


        return(
            <div className="Login">
                <header className="App-header">
                    <p>Signup</p>
                </header>
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormControl
                            style={Styling}
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            type="username"
                        />
                    </FormGroup>
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
                </form>
            </div>
        );
}

export default Signup;
import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import {userData} from "../users";
import "./Login.css"


export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};
    let flag = true;

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        userData.map(submitHelper);
        console.log(flag)
        if(flag === true){
            //add account to database
            console.log("valid signup")
            //TODO

        }
    }

    //flag set to false if user is already in data
    function submitHelper(user){
        if(user.email.localeCompare(email) === 0 && user.password.localeCompare(password) === 0 && user.name.localeCompare(name) === 0){
            console.log("Existing User Found");
            flag = false;
        }
    }

    return (
        <div  className="Signup">
            <header className="App-header">
                <p>Sign Up</p>
            </header>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="name" bsSize="large">
                    <FormControl
                        style={Styling}
                        placeholder='Name'
                        autoFocus
                        type="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
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
                    Sign Up
                </Button>
                <div>Already have an account? <a href="">Login</a></div>
            </form>
        </div>
    );
}
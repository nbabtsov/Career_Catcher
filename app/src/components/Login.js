import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import {userData} from "../users";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};
    let flag = false;


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        userData.map(submitHelper);
        console.log(flag)
        if(flag == true){
            //do something
            //TODO
        }


    }

    function submitHelper(user){
        if(user.email.localeCompare(email) == 0 && user.password.localeCompare(password) == 0){
            console.log("correct");
            flag = true;
        }
    }

    return (
        <div  className="Login">
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
                <Button block bsSize="large" disabled={!validateForm()} type="submit" >
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;
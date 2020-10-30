import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

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
import React from 'react';

const Login = () => {
    const Styling = {width:"20rem", background:"#FFFFFF", border:"none", padding:"0.5rem"};
    return (
        <div>
            <div>
                <input
                    style={Styling}
                    id='keyword'
                    type='text'
                    placeholder='Login'
                />
            </div>
    <div>
        <input
            style={Styling}
            id='keyword'
            type='text'
            placeholder='Password'
        />
    </div>
            <button type="button">Login</button>


        </div>

    );
}

export default Login;
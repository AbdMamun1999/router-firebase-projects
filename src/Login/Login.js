import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Please log in</h1>
            <form action="">
                <input type='email' placeholder='Your Email'/><br />
                <input type='password' placeholder='Your Password'/><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
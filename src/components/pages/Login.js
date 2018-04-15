import React, { Component } from 'react';
import LoginForm from '../auth/LoginForm';

class Login extends Component {
    render(){
        return(
            <div>
                <h1>Login</h1>
                <LoginForm/>
            </div>
        );
    }
}

export default Login;




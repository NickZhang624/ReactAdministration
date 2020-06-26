import React, { Component } from 'react';
import './login.less'
import logo from './images/logo.png'
import LoginForm from './login_form'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="login">
                <header className="login-header">
                <img src={logo} alt="logo"/>
                <h1>React Project： Administration System</h1>
                </header>
                <section className="login-content">
                    <h2>Login In</h2>
                    <LoginForm />
                </section>
            </div>
         );
    }
}
 
export default Login;
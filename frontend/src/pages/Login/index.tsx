import React from 'react';

import LoginForm from './components/LoginForm';

import './styles.css';


const Login = (): JSX.Element => {
    return (
        <div className="login_page">
            <LoginForm />
        </div>
    );
};

export default Login;

import './LoginPage.css'
import { useState } from 'react';



const LoginPage = () => {

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };

    return (
        <div className='loginPage'>
            <div className='loginFormContainer'>
                <form onSubmit={handleSubmit}></form>
            </div>
            Login Page
        </div>
    );
}
 
export default LoginPage;
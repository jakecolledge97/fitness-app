import './LoginPage.css'
import { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';



const LoginPage = () => {
    const adminUser = {
        email: "email@admin.com",
        password: "password"
    };

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const login = details => {
        console.log(details);
    }

    const logout = () => {
        console.log("Logout");
    }

    return (
        <div className='loginPage'>
            {(user.email !== "") ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <LoginForm login={login} error={error}/>
            )}
        </div>
    );
}
 
export default LoginPage;
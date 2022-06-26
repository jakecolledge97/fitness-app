import './LoginPage.css'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';



const LoginPage = () => {
    const adminUser = {
        email: "email@admin.com",
        password: "password"
    };

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const login = details => {
        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }else{
            console.log("Details don't match");
            setError("Details don't match");
        }
    }

    const signUp = details => {
        console.log("signUp")
    }

    const logout = () => {
        setUser({name: "", email: ""});
    }

    return (
        <div className='loginPage'>
            {(user.email !== "") ? (
                <div className='welcome'>
                    {(user.name.toLowerCase() !== "jade") ? (
                        <h2>Welcome, <span>{user.name}</span></h2>
                    ) : (
                        <h2>I ❤️ You</h2> 
                    )}

                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <>
                    <h2>Fitness</h2>
                    <Routes>
                        <Route path="/login" element={<LoginForm login={login} error={error}/>}/>
                        <Route path="/signUp" element={<SignUpForm signUp={signUp} error={error}/>}/>
                    </Routes>
                </>

            )}
        </div>
    );
}
 
export default LoginPage;
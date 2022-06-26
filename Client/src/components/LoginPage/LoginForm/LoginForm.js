import './LoginForm.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

const LoginForm = ({login, error, signUpView}) => {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const handleSubmit = e => {
        e.preventDefault();

        login(details);
    }

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <h2>Log In</h2>
            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
            <div className="form-group">
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} placeholder="Name"/>
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder="Password"/>
            </div>
            <input className="login-button" type="submit" value="Login" />
            <h6 className="noAccount">Don't have an Account? <span><Link to="/SignUp">Sign Up</Link></span></h6>
        </form>
    );
}
 
export default LoginForm;
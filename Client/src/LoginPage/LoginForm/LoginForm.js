import './LoginForm.css';
import { useState } from "react";

const LoginForm = ({login, error}) => {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const handleSubmit = e => {
        e.preventDefault();

        login(details);
    }

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <h2>Login</h2>
            {/* ERROR! */}
            <div className="form-group">
                <label htmlFor="name">Name: </label><br/>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label><br/>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label><br/>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input class="login-button"type="submit" value="Login" />
        </form>
    );
}
 
export default LoginForm;
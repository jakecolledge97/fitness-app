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
            {/* ERROR! */}
            <div className="form-group">
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} placeholder="Name"/>
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder="Password"/>
            </div>
            <input class="login-button"type="submit" value="Login" />
        </form>
    );
}
 
export default LoginForm;
import './SignUpForm.css';
import { Link } from 'react-router-dom';

const SignUpForm = ({signUp, error}) => {

    const handleSubmit = e => {
        e.preventDefault();
        signUp();
    }

    return (
        <form className="signUpForm" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" name="name" id="name" placeholder="Desired Username" />
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" placeholder="Desired Password"/>
            </div>
            <div className="form-group">
                <input type="password" name="verify-password" id="verify-password" placeholder="Re-enter Password"/>
            </div>
            <input class="signup-button" type="submit" value="sign Up" />
            <h6 className="noAccount">Already have an Account? <span><Link to="/Login">Log In</Link></span></h6>
        </form>
    );
}
 
export default SignUpForm;
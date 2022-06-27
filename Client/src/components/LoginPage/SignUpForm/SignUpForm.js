import './SignUpForm.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../../../firebase';

const SignUpForm = () => {
    const [details, setDetails] = useState({name: '', email: '', password: '', verifyPassword: ''});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(details.password !== details.verifyPassword){
            return setError("Passwords do not match.");
        }
        try {
            setLoading(true);
            const user = await createUserWithEmailAndPassword(
                auth, 
                details.email, 
                details.password
            );
            console.log(user);
        } catch (err) {
            console.log(err)
            setError(JSON.stringify(err));
        }
        setLoading(false);

    };

    return (

        <form className="signUpForm" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {(user.email)}
            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
            <div className="form-group">
                <input type="text" name="name" id="name" placeholder="Desired Username" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" placeholder="Desired Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <div className="form-group">
                <input type="password" name="verify-password" id="verify-password" placeholder="Re-enter Password" onChange={e => setDetails({...details, verifyPassword: e.target.value})} value={details.verifyPassword} />
            </div>
            <input className="signup-button" disabled={loading} type="submit" value="sign Up" />
            <h6 className="noAccount">Already have an Account? <span><Link to="/Login">Log In</Link></span></h6>
        </form>
    );
}
 
export default SignUpForm;
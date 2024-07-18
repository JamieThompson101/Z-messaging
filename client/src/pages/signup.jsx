import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Login } from '../utils/mutations';
import { Auth } from '../utils/auth';
import './loginsignup.css';

const Signup = () => {
    const [fromState, setFormState] = useState({ email: '', password: '' });
    const [login, {error }] = useMutation(LOGIN);

    // needs to be reformatted for signup vs login
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: fromState.email, password: fromState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
     };

     const handleChange = (event) => {
        const {name,value } = event.target;
        setFormState({
            ...fromState,
            [name]:value,
        });
     };
     
    return (
        <div className="row signup">
            <form className="input" onSubmit={handleFormSubmit}>
            <h2>Signup</h2>
            <div className="email">
                <label htmlFor="email">Email address:</label>
                <input
                    className="email-input"
                    placeholder="youremail@test.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                />
            </div>
            <div className="password">
                <label htmlFor="pwd">Password:</label>
                <input
                    className="password-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                />
            </div>
            <div className="submit">
                <button className="signup-submit" type="submit">Submit</button>
                <Link to="/login">Have an account? Login</Link>
            </div>
            </form>
        </div>
    )
}

export default Signup;
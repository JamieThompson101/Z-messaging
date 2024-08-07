import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom'; // Import the 'navigate' function
import { LOGIN } from '../utils/mutation';
import Auth from '../utils/auth';
import './loginsignup.css';

function Login(_props) {
    const [fromState, setFormState] = useState({ email: '', password: '' });
    const [login, {error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: fromState.email, password: fromState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
            useNavigate('/dashboard'); // Redirect to dashboard on successful login
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
        <div className="row login">
            <form className="input" onSubmit={handleFormSubmit}>
            <h2>Login</h2>
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
            {error ? (
                <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                </div>
            ) : null}
            <div className="submit">
                <button className="login-submit" type="submit">Submit</button>
                <Link to="/signup"> Go to Signup</Link>
            </div>
            </form>
        </div>
  );
}

export default Login;
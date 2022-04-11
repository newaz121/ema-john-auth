import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="emil">Email: </label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password: </label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>

                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }

                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='p'>New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link></p>

                <div>
                    <button className='form-submit'>Continue with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;
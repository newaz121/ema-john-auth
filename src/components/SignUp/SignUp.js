import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    // 1st ai kaj


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    // 5th kaj aiavabe

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    // 2nd kaj
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    // 6th kaj kono akta jaigai pathai de=ibo
    if (user) {
        navigate('/shop');
    }


    // 4th kaj prevent reload handle
    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Your password didn not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be 6 character');
            return;
        }

        // 5th kaj show user in firebase authentication
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>

                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="emil">Email: </label>

                        {/* 3rd kaj */}

                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password: </label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password: </label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' required />
                    </div>

                    <p style={{ color: 'red' }}> {error}</p>


                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='p'>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                </p>

                <div>
                    <button className='form-submit'>Continue with Google</button>
                </div>
            </div>

        </div>
    );
};

export default SignUp;
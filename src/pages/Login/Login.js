
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Form from 'react-bootstrap/Form';
import avatar from '../../images/login-avatar.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from "../../images/google.png"
import auth from '../../firebase.init';

import SpinnerAdd from '../Spinner/SpinnerAdd';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return SpinnerAdd()
    }


    //    ------login with google------
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    //------------- login with pass---------------------
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleUserLogin = (e) => {
        e.preventDefault()

        if (!email) {
            return
        }
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true })

    }





    return (

        <div className='w-50 mx-auto'>
            <div className='text-center'>
                <img style={{ borderRadius: "50%", width: "100px", height: "100px" }} src={avatar} alt="" />
                <h2 >Please,Log In</h2>
            </div>

            <Form onSubmit={handleUserLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <h6 className='text-danger'>{error?.message}</h6>
                <Button className='w-100' variant="primary" type="submit">
                    Log In
                </Button>
            </Form>

            <h5>Are Youe New Here?Please, <Link to="/register">Register</Link>  </h5>

            <p> login with</p>
            <div className='w-100 mx-auto ps-5 gap-4'>
                <div>
                    <button onClick={handleGoogleSignIn} className='rounded px-5 py-1'>
                        <img width={30} src={googleLogo} alt="" /> Google</button>
                </div>

            </div>

        </div>

    );
};

export default Login;
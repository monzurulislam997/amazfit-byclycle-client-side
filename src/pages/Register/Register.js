import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import avatar from '../../images/login-avatar.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import googleLogo from "../../images/google.png"
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SpinnerAdd from '../Spinner/SpinnerAdd';


const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error1, setError1] = useState('');
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleRegister = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError1('Password must have 6 charecter');
            return;
        }
        createUserWithEmailAndPassword(email, password);
        e.target.reset()
    }
    if (user || user1) {
        navigate('/home')
    }
    if (loading1 || loading) {
        return SpinnerAdd()
    }

    return (
        <div className='w-50 mx-auto'>
            <div className='text-center'>
                <img style={{ borderRadius: "50%", width: "100px", height: "100px" }} src={avatar} alt="" />
                <h2 >Please,Register</h2>
            </div>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                {<h6>{error1} {error?.message} </h6>}
                <Button className='w-100' variant="primary" type="submit">
                    Register
                </Button>


            </Form>

            <h5>Already Registerd?Please,</h5> <Link to="/login">Log In</Link>
            <p> login with</p>
            <div className='w-100 mx-auto ps-5 d-flex gap-4'>
                <div>
                    <button onClick={handleGoogleSignIn} className='rounded px-5 py-1'>
                        <img width={30} src={googleLogo} alt="" /> Google</button>
                </div>

            </div>

        </div>
    );
};

export default Register;
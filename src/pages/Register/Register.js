import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import avatar from '../../images/login-avatar.png';
import { Link } from 'react-router-dom';
import googleLogo from "../../images/google.png"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }


    return (
        <div className='w-50 mx-auto'>
            <div className='text-center'>
                <img style={{ borderRadius: "50%", width: "100px", height: "100px" }} src={avatar} alt="" />
                <h2 >Please,Register</h2>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Log In
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
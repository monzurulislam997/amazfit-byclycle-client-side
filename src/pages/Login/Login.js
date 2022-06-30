
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Form from 'react-bootstrap/Form';
import avatar from '../../images/login-avatar.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SpinnerAdd from '../Spinner/SpinnerAdd';
import SocialLogin from '../SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorShow;
    if (error) {

        errorShow = <p className='text-danger'>{error?.message} </p>
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


    if (loading) {
        return <SpinnerAdd></SpinnerAdd>
    }


    if (user) {
        navigate(from, { replace: true })

    }



    //resetPassword
    const resetPassword = async () => {
        if (!email) {
            alert("Please Input Email First")
        }
        await sendPasswordResetEmail(email);
        toast("Reset Email Send")

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

                {errorShow}
                <Button className='w-100' variant="primary" type="submit">
                    Log In
                </Button>
            </Form>

            <p className='d-inline me-5'>Are You New Here?Please, <Link to="/register">Register</Link>  </p>
            <p className='d-inline ms-5 '>Forget Passowrd <Link onClick={() => resetPassword()} to="#">Rest Password </Link>  </p>

            <p className='text-center'> login with</p>


            <SocialLogin></SocialLogin>

            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />



        </div>

    );
};

export default Login;
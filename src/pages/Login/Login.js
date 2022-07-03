
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
import bg from '../../images/add2.jpg'
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
            return alert("Please Input Email First")
        }
        await sendPasswordResetEmail(email);
        toast("Reset Email Send")

    }


    return (

        <div style={{ backgroundImage: `url(${bg})`, height: "100vh" }} className='w-100   '>
            <div className='w-50 mx-auto'>
                <div className='text-center'>
                    <img style={{ borderRadius: "50%", width: "80px", height: "8    0px" }} src={avatar} alt="" />
                    <h2 className='text-light' >Please,Log In</h2>
                </div>

                <Form onSubmit={handleUserLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>

                    {errorShow}
                    <Button className='w-100' variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>

                <h5 className='d-inline me-5 text-light'>Are You New Here?Please, <Link className='text-warning' to="/register">Register</Link>  </h5>
                <h5 className='d-inline text-light mt-5 ms-2 '>Forget Passowrd ?<Link className='text-danger  ' onClick={() => resetPassword()} to="#">Rest Password </Link>  </h5>

                <p className='text-center  mt-4 fs-4 fw-4  text-light  w-50 mx-auto '> or </p>


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
        </div>



    );
};

export default Login;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import avatar from '../../images/login-avatar.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SpinnerAdd from '../Spinner/SpinnerAdd';
import SocialLogin from '../SocialLogin/SocialLogin';
import bg from '../../images/add2.jpg'


const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error1, setError1] = useState('');
    const [
        createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [user, loading, error] = useAuthState(auth)


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    if (loading) {
        return SpinnerAdd()
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return setError1("Password or Email can't be empty")
        }
        if (password.length < 6) {
            setError1('Password must have 6 charecter');
            return;
        }



        createUserWithEmailAndPassword(email, password);
        e.target.reset()
    }
    if (user) {
        navigate('/home')
    }


    return (
        <div style={{ backgroundImage: `url(${bg})`, height: "100vh" }}>
            <div className='w-50 mx-auto'>
                <div className='text-center'>
                    <img style={{ borderRadius: "50%", width: "80px", height: "80px" }} src={avatar} alt="" />
                    <h2 className='text-light mt-1' >Please,Register</h2>
                </div>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>

                    <h6 className='text-danger'>{error1}  </h6>
                    <h6 className='text-danger'>{error?.message}</h6>

                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>


                </Form>

                <h5 className='text-light mt-2'>Already Registerd?Please, <Link className='text-warning' to="/login">Log In</Link> </h5 >
                <h5 className='text-light text-center my-4'> Or</h5>


                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Register;
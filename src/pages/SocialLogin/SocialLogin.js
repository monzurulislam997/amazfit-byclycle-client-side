import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleLogo from "../../images/google.png"
import SpinnerAdd from '../Spinner/SpinnerAdd';
const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true })

    }
    if (loading) {
        return SpinnerAdd()
    }

    return (
        <div className='w-100 mx-auto  gap-4'>
            <div>
                <h6 className='text-danger'>{error?.message}  </h6>
                <button onClick={() => { signInWithGoogle() }} className='rounded w-100 bg-primary text-light font-weight-bold  py-1'>
                    <img width={30} src={googleLogo} alt="" /> Google</button>
            </div>

        </div>
    );
};

export default SocialLogin;
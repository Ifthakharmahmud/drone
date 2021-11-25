import React from 'react';
import { Button } from 'react-bootstrap';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Account.css';

const Sociallogin = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();

    // handle login redirect 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleGithubLogin = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <br /><h3>Social Login</h3><br />

            {/* Social button  */}

            <Button variant="light" onClick={handleGoogleLogin}><AiFillGoogleCircle />    Google sign In</Button>
            <br /><br />
            <Button variant="light" onClick={handleGithubLogin}><AiFillGithub />  Github sign In</Button> <br /><br />

        </div>
    );
};

export default Sociallogin;
import React, { useContext, useState } from 'react';
import * as Firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


Firebase.initializeApp(firebaseConfig);

const Login = () => {
    const { loginItem } = useContext(userContext);
    const [login, setLogin] = loginItem;

    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    

    const provider = new GoogleAuthProvider();

    const signIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const { email, displayName, photoURL } = user;
                setLogin({
                    isLogin: true,
                    email: email,
                    name: displayName,
                    photo: photoURL,
                })
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
            });
    }

    const signout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setLogin({
                isLogin: false,
                email: '',
                name: '',
                photo: '',
            })
        }).catch((error) => {
            console.log(error)
        });
    }

    const button = {
        backgroundColor:'orange',
        padding:'20px',
        cursor:'pointer',
        color:'white',
        borderRadius:'5px',
        outline:'none',
        border:"none"
    }

    return (
        <div style={{ display: 'flex', marginTop: '50px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {
                login.email ? <button onClick={signout}
                    style={button}>Sign Out</button>
                    :
                    <button onClick={signIn}
                        style={button}>Login</button>

            }

            {
                login.name &&
                <div>
                    <p>Welcome <h3 style={{ display: 'inline-block' }}>{login.name}</h3> </p>
                    <img src={login.photo} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;
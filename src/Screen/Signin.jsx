import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
 import '../App.css'

const Signin = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <div className='signin'>
            <input ref={emailRef} placeholder='Enter Email' type='email' />
            <input ref={passwordRef} placeholder='Enter Password' type='password' />

            <button
                onClick={() => {
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;

             signInWithEmailAndPassword(auth,email,password).then((userData)=>{
                if(userData){
                    alert("Sign in Successfuuly")
                    navigate('/loged')
                }
             }).catch((err)=>{
                alert(err.messgae);
                console.log(err.messgae)
             })
                }}
            >
                Signin
            </button>
        </div>
    );
};

export default Signin;

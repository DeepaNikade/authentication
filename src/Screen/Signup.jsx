import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../App.css'

const Signup = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <div className='signup'>
            <input ref={emailRef} placeholder='Enter Email' type='email' />
            <input ref={passwordRef} placeholder='Enter Password' type='password' />

            <button
                onClick={() => {
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;

                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userData) => {
                            console.log(userData);
                            if(userData){
                                alert("Account created")
                                navigate('/signin')
                            }
                        })
                        .catch((err) => {
                            alert(err.message);
                            console.log(err.message);
                        });
                }}
            >
                Register
            </button>
        </div>
    );
};

export default Signup;

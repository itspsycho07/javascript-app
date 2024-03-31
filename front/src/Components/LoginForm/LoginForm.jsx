// LoginForm.jsx
import React, { useState } from 'react';

import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const[name,setName]=useState('')
const[password,setPassword]=useState('')


return (


        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    <FaUser className="icon"/>

                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    <FaLock className="icon"/>
                </div>

                <div className="remember-forget">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forget password?</a>
                </div>

                <button type="submit" onClick={handleClick}> Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
                <div className="line">

                </div>






                <div className="media-option">
                    <a href="" className="field github">
                        <img src="" alt="" className="github-img"/>
                        <span>Login with GitHub</span>
                    </a>
                </div>

                <div className="media-option">
                    <a href="" className="field linkedin">
                        <img src="./Components/google.png" alt="" className="linkedin-img"/>
                        <span>Login with Linkedin</span>
                    </a>
                </div>



            </form>
        </div>


);

export default function  LoginForm(){
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
}

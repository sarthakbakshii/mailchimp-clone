import React, { useRef, useState } from "react";
import logoimg from "../assets/logo-img.svg"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BlockIcon from '@mui/icons-material/Block';
import { login } from "../firebase-config";
import {Link, useNavigate} from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux';
import { userEmail} from '../Redux/action'


export const Loginpage=()=>{

    // ------------- redux
    const userReduxEmail = useSelector( store => store.email);
    console.log("redux data",userReduxEmail );

    const dispatch = useDispatch()




    const [loading,setloading]=useState(false)
    const [userNotFound,setuserNotFount]=useState(false)
    const emailRef=useRef()
    const passwordRef=useRef()
    const usenavigate=useNavigate()

    async function signin(){
        setloading(true)

        dispatch( userEmail(emailRef.current.value));
        try{
            await login(emailRef.current.value,passwordRef.current.value)
            alert("Login Succesful")
            usenavigate("/")
        }catch(error){
            setuserNotFount(true)
            var errorMessage = error.message;
            console.log(errorMessage);
            alert("User not Exist")
        }
        setloading(false)
    }
    return (
        <div id="login">
            <div id="Lbody">
                <div>
                    <img src={logoimg} alt="logo" id="logo"/>
                </div>
                <div>
                    <div id="logInDiv">
                        <h1>Log In</h1>
                        <p>
                         Need a Mailchimp account? <a href="www.google.com">Create an account</a>
                        </p>
                        {userNotFound?<div id="usernotfound">
                            <BlockIcon id="notallowed"/>
                            <p>Sorry, we couldn't find an account with that username. Can we help you recover your <Link to="/forgot-username" style={{color:"#007c89"}}>username?</Link></p>    
                        </div>:null}
                        <div className="form">
                            <form action="" >
                                <div className="LinputFields">
                                    <div>
                                        <label for="username">Username</label>
                                    </div>
                                    <input type="email" id="username" ref={emailRef}/>
                                </div>
                                <div className="LinputFields">
                                    <div>
                                        <label id="passwordLabel" for="password">
                                            Password
                                            <div id="Leye">
                                                <VisibilityOutlinedIcon className="show"/>
                                                <span className="show">Show</span>
                                            </div>
                                        </label>
                                    </div>
                                    <input type="password" id="passsword" ref={passwordRef}/>
                                </div>
                                <button id="signInButton" disabled={loading} onClick={signin}>Log In</button>
                                <div id="LcheckBok">
                                    <input type="checkbox" />
                                    <label>Keep me logged in</label>
                                </div>
                            </form>
                            <div id="Lforgot">
                                <Link to="/forgot-username">Forgot username?</Link>
                                <span>.</span>
                                <Link to="/forgot-password">Forgot password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Lfooter">
                        <p>
                        ©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.
                        </p>
                </div>
            </div>
            <div>
                <div>
                    <div id="imageDiv"></div>
                    <div id="LimageBottom">
                        <p>
                            <h3>E-commerce Time Savers</h3>
                            <p>Use these powerful automations to drive customer loyalty and repeat business, while saving time.</p>
                            <button>Learn More</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}  
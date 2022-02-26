import React, { useRef, useState } from "react";
import logoimg from "../assets/logo-img.svg"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { HidePassword } from "./smallfunctions";
import BlockIcon from '@mui/icons-material/Block';
import { login } from "../firebase";

export const Loginpage=()=>{
    const [loading,setloading]=useState(false)
    const [userNotFound,setuserNotFount]=useState(false)
    const emailRef=useRef()
    const passwordRef=useRef()

    async function signin(){
        setloading(true)
        try{
            await login(emailRef.current.value,passwordRef.current.value)
            alert("login succesful")
        }catch(error){
            setuserNotFount(true)
            // var errorCode = error.code;
            var errorMessage = error.message;
            // console.log(errorCode);
            console.log(errorMessage);
            alert("user not exist")
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
                            <p>Sorry, we couldn't find an account with that username. Can we help you recover your <a href="/">username?</a></p>    
                        </div>  :null}
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
                                <a href="/">Forgot username?</a>
                                <span>.</span>
                                <a href="/">Forgot password?</a>
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
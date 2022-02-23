import React from "react";
import loginpagebackimg from "../assets/loginpage-backimg.jpeg"
import logoimg from "../assets/logo-img.svg"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { HidePassword } from "./smallfunctions";

export const Loginpage=()=>{
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
                        <div className="form">
                            <form action="" >
                                <div className="LinputFields">
                                    <div>
                                        <label for="username">Username</label>
                                    </div>
                                    <input type="text" id="username"/>
                                </div>
                                <div className="LinputFields">
                                    <div>
                                        <label id="passwordLabel" for="password">
                                            <div>Password </div>
                                            <div id="Leye" onClick={hidepassword}>
                                                <VisibilityOutlinedIcon className="show"/>
                                                <span className="show">Show</span>
                                            </div>
                                        </label>
                                    </div>
                                    <input type="password" id="passsword"/>
                                </div>
                                <button id="signInButton">Log In</button>
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

export const hidepassword=()=>{
    document.getElementById("Leye").innerHTML=""
}
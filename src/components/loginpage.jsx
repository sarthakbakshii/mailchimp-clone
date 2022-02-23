import React from "react";
import loginpagebackimg from "../assets/loginpage-backimg.jpeg"
import logoimg from "../assets/logo-img.svg"

export const Loginpage=()=>{
    return (
        <div id="login">
            <div>
                <div>
                    <img src={logoimg} alt="logo"/>
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
                                        <label>Username</label>
                                    </div>
                                    <input type="text" />
                                </div>
                                <div className="LinputFields">
                                    <div>
                                        <label>Password</label>
                                    </div>
                                    <input type="text" />
                                </div>
                                <button id="signInButton">Log In</button>
                                <div>
                                    <input type="checkbox" />
                                    <label>Keep me logged in</label>
                                </div>
                            </form>
                            <div>
                                <a href="/">Forgot username?</a>
                                <span>.</span>
                                <a href="/">Forgot password?</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                        ©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.
                        </p>
                    </div>
                </div>
                <div></div>
            </div>
            <div>
                <div>
                    <img src={loginpagebackimg} alt="loginpage-img" />
                </div>
            </div>
        </div>
    )
}
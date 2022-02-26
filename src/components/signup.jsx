import logoimg from "../assets/logo-img.svg"
// import leftimg from "../assets/ezgif.com-gif-maker.jpg"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { signup } from "../firebase-config";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup=()=>{
    const [loading,setloading]=useState(false)
    const emailRef=useRef()
    const passwordRef=useRef()
    const navigate=useNavigate()

    async function createuser(){
        setloading(true)
        try{
            await signup(emailRef.current.value,passwordRef.current.value)
            navigate("/login")
        }catch{        
            alert("user already exist")
        }
        setloading(false)
    }

    return (
        <div id="signup">
            <div id="SformDiv">
                <div >
                    <img src={logoimg} alt="logo" id="logo" />
                </div>
                <div id="Sform">
                    <div>
                        <h1>Welcome to Mailchimp </h1>
                        <h4>Create an account or <a href="/">log in</a></h4>
                    </div>
                    <form>
                        <div className="LinputFields">
                            <div>
                                <label for="email">Email</label>
                            </div>
                            <input type="email" id="email" ref={emailRef}/>
                        </div>
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
                                    <div id="Leye" >
                                        <VisibilityOutlinedIcon className="show"/>
                                        <span className="show">Show</span>
                                    </div>
                                </label>
                            </div>
                            <input type="password" id="passsword" ref={passwordRef}/>
                        </div>
                        <div id="LcheckBok ScheckBox" className="Sparagraph" >
                            <input type="checkbox" id="ScheckBoxInput"/>
                            <label> I don't want to receive <a href="/">promotional emails</a> from Mailchimp. </label>
                        </div>
                        <div className="Sparagraph">
                            <p>By creating an account, you agree to our <a href="/">Terms</a> and have read and acknowledge the <a href="/">Global Privacy Statement</a></p>
                        </div>
                        <button id="signUpButton" onClick={createuser} disabled={loading}>Sign Up</button>
                    </form>
                </div>
                <div id="StermsConditions">
                    <p>
                    ©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC. <a href="/">Cookie Preferences</a> <a href="/">Privacy</a> and <a href="/">Terms</a>
                    </p>
                </div>
            </div>
            <div id="SimageDiv"></div>
        </div>
    )
}
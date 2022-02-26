import { useRef } from "react"
import logoimg from "../assets/logo-img.svg"
import { resetpassword } from "../firebase"

export const Resetpassword=()=>{
    const RemailRef=useRef()

    async function resetP(){
        try{
            await resetpassword(RemailRef.current.value)
            alert("reset link send succesful")
        }catch(error){
            var errorMessage = error.message;
            console.log(errorMessage);
            alert("user not exist")
        }
    }

    return (
        <div id="signup" >
            <div id="SformDiv">
                <div >
                    <img src={logoimg} alt="logo" id="logo" />
                </div>
                <div id="Rform" className="recoverDone">
                    <div id="Rhead">
                        <h1>Reset Your Password</h1>
                        <p className="REpara" id="RSpassworda">Fear not. We’ll email you instructions to reset your password. If you don’t have access to your email anymore, you can try <a href="/" >account recovery</a>.</p>
                    </div>
                    <div className="Rselectinput">
                        <label>Username</label>
                        <br/>
                        <input type="email" className="Rinput1" id="Rinput3" ref={RemailRef}/>
                    </div>
                    <div id="Rbuttons">
                        <button onClick={resetP}>Reset Password</button>
                        <a href="/">Return to login</a>
                    </div>
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
import logoimg from "../assets/logo-img.svg"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Recoverdone=()=>{
    
    const userReduxEmail = useSelector( store => store.email);
    console.log("redux data",userReduxEmail );

    const usenavigate=useNavigate()

    function navigatetologin(){
        usenavigate("/login")
    }
    return (
        <div id="signup" >
            <div id="SformDiv">
                <div >
                    <img src={logoimg} alt="logo" id="logo" />
                </div>
                <div id="Rform" className="recoverDone">
                    <div id="Rhead">
                        <h1>Done And Done!</h1>
                        <div id="SuccessDiv">
                            <div>
                                <CheckCircleOutlineIcon/>
                            </div>
                            <div id="greenSuccessDiv">
                                <div>Success!</div>
                                <div>An email with your username has been sent to</div>
                                <div>{userReduxEmail}</div>
                            </div>
                        </div>
                        <p className="Rpara">If the email does not arrive soon, check your spam folder. It was sent from <span id="RDpbold">confirm@mailchimp.com</span>.</p>
                    </div>
                    <div id="Rbuttons">
                        <button onClick={navigatetologin}>Return To Login</button>
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
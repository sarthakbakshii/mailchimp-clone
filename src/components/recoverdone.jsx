import logoimg from "../assets/logo-img.svg"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Recoverdone=()=>{

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
                            <div>
                                <div>Success!</div>
                                <div>An email with your username has been sent to</div>
                                <div>pavithranr65@gmail.com</div>
                            </div>
                        </div>
                        <p className="Rpara">If the email does not arrive soon, check your spam folder. It was sent from <span id="RDpbold">confirm@mailchimp.com</span>.</p>
                    </div>
                    <div id="Rbuttons">
                        <button>Return To Login</button>
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
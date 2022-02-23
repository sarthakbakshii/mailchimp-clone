import logoimg from "../assets/logo-img.svg"
// import leftimg from "../assets/ezgif.com-gif-maker.jpg"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export const Signup=()=>{
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
                            <input type="email" id="email"/>
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
                            <input type="password" id="passsword"/>
                        </div>
                        <div id="LcheckBok ScheckBox" className="Sparagraph" >
                            <input type="checkbox" id="ScheckBoxInput"/>
                            <label> I don't want to receive <a href="/">promotional emails</a> from Mailchimp. </label>
                        </div>
                        <div className="Sparagraph">
                            <p>By creating an account, you agree to our <a href="/">Terms</a> and have read and acknowledge the <a href="/">Global Privacy Statement</a></p>
                        </div>
                        <button id="signUpButton">Sign Up</button>
                    </form>
                </div>
                <div id="StermsConditions">
                    <p>
                    ©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC. <a href="/">Cookie Preferences</a> <a href="/">Privacy</a> and <a href="/">Terms</a>
                    </p>
                </div>
            </div>
            <div id="SimageDiv">
                {/* <img src={leftimg} alt="imageDiv" /> */}
                {/* <div id="rightYellowDiv"></div> */}
            </div>
        </div>
    )
}
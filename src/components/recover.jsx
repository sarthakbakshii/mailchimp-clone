import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoimg from "../assets/logo-img.svg"
import { resetpassword } from "../firebase-config";
import {Link} from "react-router-dom"

export const Recover=()=>{
    const [rEmail,setrEmail]=useState("")
    const usenavigate=useNavigate()

    async function resetP(){
        try{
            await resetpassword(rEmail)
            alert("reset link send succesful")
            usenavigate("/forgot-username-post")
        }catch(error){
            var errorMessage = error.message;
            console.log(errorMessage);
            alert("user not exist")
        }
    }

    function Rradiobox1(){
        document.getElementById("Rradiobox2input").style.display = "none";
        document.getElementById("Rradiobox1input").style.display = "block";
    }
    function Rradiobox2(){
        document.getElementById("Rradiobox1input").style.display = "none";
        document.getElementById("Rradiobox2input").style.display = "block";
    }
    return (
        <div id="signup">
            <div id="SformDiv">
                <div >
                    <img src={logoimg} alt="logo" id="logo" />
                </div>
                <div id="Rform">
                    <div id="Rhead">
                        <h1>Recover Your Username</h1>
                        <p className="Rpara">Having an identity crisis? You can recover your Mailchimp username using the email address or SMS number associated with your account.</p>
                    </div>
                    <form>
                        <div id="Rradio1">
                            <label class="container" id="Rradiobox1" onClick={Rradiobox1}>Recover using the email address on your account
                                <input type="radio" name="radio"/>
                                <span class="checkmark"></span>
                            </label>
                            <div id="Rradiobox1input" className="Rselectinput" >
                                <input type="text" placeholder="Ex: freddie@mailchimp.com" className="Rinput1" id="Rinput1" onChange={(e)=>{
                                    setrEmail(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <div>
                            <label class="container" id="Rradiobox2" onClick={Rradiobox2}>Recover using the mobile number on your account
                                <input type="radio" name="radio"/>
                                <span class="checkmark"></span>
                            </label>
                            <div  id="Rradiobox2input">
                                <div className="Rselectinput">
                                    <select className="Rinput1" style={{width: "400px"}}>
                                        <option>Select Country</option>
                                        <option>India (+91)</option>
                                        <option>USA, US territories, Canada, and some Caribbean countries (+1)</option>
                                        <option>Afghanistan (+93)</option>
                                        <option>Albania (+355)</option>
                                        <option>Algeria (+213)</option>
                                        <option>Andorra (+376)</option>
                                        <option>Austria (+43)</option>
                                        <option>Bangladesh (+880)</option>
                                        <option>Brazil (+55)</option>
                                        <option>Burundi (+257)</option>
                                        <option>Cape Verde (+238)</option>
                                        <option>Ireland (+353)</option>
                                        <option>Lebanon (+961)</option>
                                        <option>Mauritius (+230)</option>
                                    </select>
                                </div>
                                <div className="Rselectinput">
                                    <label>Mobile number</label>
                                    <input type="number" className="Rinput1" id="Rinput3"/>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                    <div id="Rbuttons" onClick={()=>{
                        console.log(rEmail)
                    }}>
                        <button onClick={resetP}>Recover Username</button>
                        <Link to="/login">Return to login</Link>
                    </div>
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
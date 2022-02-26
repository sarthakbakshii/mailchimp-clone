import { useState } from "react";
import { HoverDiv } from "./hoverDiv";
import { Inspiration } from "./inspiration";
import "./navbar.css";
import { Resourecs } from "./resources";
import { SearchSection } from "../search/SearchSection";
import { Link } from "react-router-dom";
import logoimg from "../assets/logoimg.svg"


export const Navbar =()=>{
    const [isopen,setIsopen] = useState(false);
    const [resource,setResource] = useState(false);
    const[isnpiration,setInspiration] = useState(false);

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("testNavbar").style.background = "white";
        } else {
            document.getElementById("testNavbar").style.background = "#FFE01B";
        }
    }
    function onmouseover(e) {
        document.getElementById("testNavbar").style.background = "white";
    }
    function onmouseout(e) {
        document.getElementById("testNavbar").style.background = "#FFE01B";
    }
    const showSearch = (e) =>{
        window.scrollTo(0, 0);
        //  document.getElementById("hand").style.opacity = "2";
        document.getElementById("SearchSection").style.height = "89vh";
        document.getElementById("SearchSection").classList.remove("overflowNo")
        
         document.querySelector("body").style.overflow = "hidden"
         document.getElementById("testNavbar").style.background = "white";
    }  
    const cancleSearch = (e) =>{
        //  document.getElementById("hand").style.opacity = "0";
        document.getElementById("SearchSection").style.height = "0vh";
        document.getElementById("SearchSection").classList.add("overflowNo")
        
         document.querySelector("body").style.overflow = "auto"
         document.getElementById("testNavbar").style.background = "white";
    }  

return (<div id="testNavbar" onMouseOver={onmouseover}
onMouseOut={onmouseout} > 
    <SearchSection cancleSearch={cancleSearch } />
<div class="navbar"  onMouseEnter={()=>{
    setInspiration(false);
    setIsopen(false);
    setResource(false);
}} onMouseLeave={()=>{
    
}}>

    <div className="nav-left" >
        <div onMouseEnter={()=>{
            setIsopen(!isopen);
            setResource(false);
            
        }} onMouseLeave={()=>{
            // setIsopen(false)
        }}>
        
            Products
            
            
            </div>
            
            
        <div onMouseEnter={()=>{
            setIsopen(false)
            setInspiration(false);
            setResource(!resource);
            
        }} onMouseLeave={()=>{
            // setResource(false)
        }}>Resources
        
        </div>
        <div onMouseEnter={()=>{
            setResource(false)
            // setIsopen(false)
            setInspiration(!isnpiration);
            
        }} onMouseLeave={()=>{
            //  setInspiration(false);
        }}>Inspiration</div>
        <div onMouseEnter={()=>{
            setInspiration(false);
            setIsopen(false);
            setResource(false);
        }}>Pricing</div>
    </div>
    
    <Link to="/"><div className="nav-center">
    <img src={logoimg} className="logoimg"/>
      <h1>Mail Chimp</h1> 
      
        {/* <img src="https://www.pikpng.com/pngl/m/274-2747614_mailchimp-logo-transparent-mailchimp-clipart.png" alt="" className="logo-chimp" onClick={()=>{

        }}></img> */}
    </div></Link>
    <div className="nav-right">
    {/* <img src={require("../icons/search.png")} className="search"/> */}
    <i class="fi fi-br-search search" onClick={showSearch}></i>
    <button className="nav-login">Log In</button>
    <button className="nav-signup" style={{border:"none"}}>Sign Up Free</button>
    </div>
   

    


</div>
{/* <div className="navSpace"></div>   */}
<div className="hoverDivs"> 
{isopen&& <HoverDiv isopen={isopen} setIsopen={setIsopen} />}

</div>
<div>
{resource&& <Resourecs resource={resource} setResource={setResource} />}
</div>
<div>
{isnpiration&& <Inspiration resource={resource} setResource={setResource} />}
  
</div>
</div>)
}
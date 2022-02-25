import { useState } from "react";
import { HoverDiv } from "./hoverDiv";
import { Inspiration } from "./inspiration";
import "./navbar.css";
import { Resourecs } from "./resources";


export const Navbar =()=>{
    const [isopen,setIsopen] = useState(false);
    const [resource,setResource] = useState(false);
    const[isnpiration,setInspiration] = useState(false);

return (<div>
<div class="navbar">
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
    <div className="nav-center">
        <img src="https://dislack.com/blog/content/images/2019/06/horizontal-anim-2.gif"></img>
    </div>
    <div className="nav-right">
    {/* <img src={require("../icons/search.png")} className="search"/> */}
    <i class="fi fi-br-search search"></i>
    <button className="nav-login">Log In</button>
    <button className="nav-signup">Sign Up Free</button>
    </div>
   

    


</div>
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
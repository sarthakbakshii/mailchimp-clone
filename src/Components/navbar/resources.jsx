import { useState } from "react";
import { resource } from "../common/resources";
import { HoverRes } from "./hover 2/hoverRes";
import { HoverRes2 } from "./hover 2/hoverRes2";
import "./resources.css";


export const Resourecs = ({props})=>{
    const [isopen,setIsopen] = useState(false);
    const [open2,setOpen2] = useState(false);

    return (<div id="pr">
    <div className="resources" >
       {resource.map((e)=>{
           return(<div onMouseEnter={()=>{
            props.setIsopen(!props.isopen)
        }} onMouseLeave={()=>{
            props.setIsopen(false)
        }}>
               <p>{e.title}</p>
               <h3 onMouseEnter={()=>{
                //    setIsopen(false);
                   setIsopen(!isopen);
                   setOpen2(false);

               }} onMouseLeave={()=>{
                //    setIsopen(!isopen);
               }}>{e.desc1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <p>></p></h3>
               <h3 onMouseEnter={()=>{
                   setIsopen(false);
                //    setIsopen(!isopen);
                setOpen2(!open2);
               }} onMouseLeave={()=>{
                  
               }}>{e.desc2}<p>></p> </h3>
               <h3 onMouseEnter={()=>{
                   setIsopen(false);
                   
                      setOpen2(false);
               }}>{e.desc3}<p></p> </h3>
               <br/>
               <hr/>
               <br/>
           </div>)
       })}
    </div>
    <div>{isopen&&<HoverRes2/>}</div>
    <div>{open2&& <HoverRes  />}</div>

    
    </div>)
}
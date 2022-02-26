import { useState } from "react";
import { product } from "../common/products";
import { Hover1 } from "./hover 2/hover1";
import { Hover2 } from "./hover 2/hover2";
import "./products.css";

export const HoverDiv = ({props})=>{
    const [isopen,setIsopen] = useState(false);
    const [open2,setOpen2] = useState(false);

    return (<div id="pr">
    <div className="products" >
       {product.map((e)=>{
           return(
               <div>
               <p onMouseEnter={()=>{
                   setIsopen(false);
                   setOpen2(false);
               }}>{e.title}</p>
               <br/>
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
               <br/>
               <hr/>
               <br/>
               
               
           </div>)
       })}
       
    </div>
    <div>{isopen&& <Hover1 isopen={isopen} setIsopen={setIsopen} />}
    <div>{open2&& <Hover2 open2={open2} setOpen2={setOpen2} />}</div>
    
    </div>
    </div>
    )
}
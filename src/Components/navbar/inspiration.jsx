import { inspirations } from "../common/inspirations";
import { resource } from "../common/resources";
import "./inspiration.css";


export const Inspiration = ({props})=>{

    return (<div className="inspiration" >
       {inspirations.map((e)=>{
           return(<div onMouseEnter={()=>{
            props.setIsopen(!props.isopen)
        }} onMouseLeave={()=>{
            props.setIsopen(false)
        }}>
               <p>{e.title}</p>
               <h3>{e.desc1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <p></p></h3>
               <h3>{e.desc2}<p></p> </h3>
               <h3>{e.desc3}<p></p> </h3>
               <br/>
               <hr/>
               <br/>
           </div>)
       })}
    </div>)
}
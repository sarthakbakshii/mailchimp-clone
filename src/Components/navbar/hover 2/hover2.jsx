import { data2 } from "../../common/hover 2/hover2";
import "./hover1.css";
export const Hover2 = (props)=>{
    return(<div className="hover1" onMouseLeave={()=>{
        props.setOpen2(false);
    }}>
        {data2.map((e)=>{
            return(<div className="hover1-div">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <hr/>
            </div>)
        })}
    </div>)
}
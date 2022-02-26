import { data } from "../../common/hover 2/hover1";
import "./hover1.css";
export const Hover1 = (props)=>{
    return(<div className="hover1" onMouseLeave={()=>{
        props.setIsopen(false);
    }}>
        {data.map((e)=>{
            return(<div className="hover1-div">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <hr/>
            </div>)
        })}
    </div>)
}
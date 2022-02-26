import { data3 } from "../../common/hover 2/hover3";
import "./hover1.css";
export const HoverRes2 = ()=>{
    return(<div className="hover1">
        {data3.map((e)=>{
            return(<div className="hover1-div">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <hr/>
            </div>)
        })}
    </div>)
}
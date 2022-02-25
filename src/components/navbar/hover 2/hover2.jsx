import { data2 } from "../../common/hover 2/hover2";
import "./hover1.css";
export const Hover2 = ()=>{
    return(<div className="hover1">
        {data2.map((e)=>{
            return(<div className="hover1-div">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
            </div>)
        })}
    </div>)
}
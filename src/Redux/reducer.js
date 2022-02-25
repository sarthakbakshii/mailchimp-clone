import { GET_DATA } from "./actionTypes";
import { FILTER_DATA } from './actionTypes'

const initState = {
    pages : [],
    sorted : [],
}

const reducer = ( store = initState , {type , payload}) =>{
    switch (type) {
        case GET_DATA : {
                return { ...store , pages : payload , sorted : payload }
        }

        case FILTER_DATA : {
            if( payload == ""){
                return  { ...store , sorted : store.pages }
            }
            
            const filter = store.pages.filter( a =>{
                return a.type == payload
            });
            console.log(filter, "filter")
            return { ...store , sorted : filter }
        }
            
        default:
            return store;
    }
}

export {reducer};
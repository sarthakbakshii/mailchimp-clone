import { GET_DATA} from './actionTypes';
import { FILTER_DATA } from './actionTypes'


export const getData = (payload) =>{
    return {
        type : GET_DATA,
        payload : payload
    }
}

export const filterData = (payload) =>{
    return {
        type : FILTER_DATA,
        payload : payload
    }
}
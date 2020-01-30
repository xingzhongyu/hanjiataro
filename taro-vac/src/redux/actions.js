import {ADD_COMMENT,DELETE_COMMENT,GET_USERSLISR,ERR_MSG} from './action-types'

const userlist=(userlist)=>({type:GET_USERSLISR,data:userlist})
const errmsg=(msg)=>({type:ERR_MSG,data:msg})

export function getUserlist(keyword,sort){
    
    
}

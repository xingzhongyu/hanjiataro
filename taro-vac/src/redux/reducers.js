import {combineReducers} from 'redux'
import {ADD_COMMENT,DELETE_COMMENT,GET_USERSLISR,ERR_MSG} from './action-types'

const initUserlist=[]
function userlist(state=initUserlist,action){
    switch (action.type){
        case GET_USERSLISR:
            return action.data
        case ERR_MSG:
            return action.data
        default:
            return state
    }
}

export default combineReducers({userlist})
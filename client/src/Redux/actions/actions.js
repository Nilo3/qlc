

import axios from "axios"
import {
    POST_USER,
    GET_USERS
} from "../action-types/action-types"

export function postUser(payload) {
    return async function(dispatch){
        try {
            const response = await axios.post("http://localhost:3002/auth/register", payload)
            dispatch({
                type: POST_USER,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getAllUsers() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3002/user")
            dispatch({
                type: GET_USERS,
                payload: response.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}
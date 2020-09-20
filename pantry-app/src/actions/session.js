import {BASE_URL} from '../index.js'

export const signUp = (user) => {
    // User is an object with keys of username and password
    return function (dispatch) {
        fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(userObj => {
            dispatch({type: "SIGNUP", payload: userObj.data.attributes})
        })
    }
}
export const logIn = (user) => {
    return function (dispatch) {
        fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(userObj => {
            if(!!userObj.data){
                dispatch({type: "LOGIN", payload: userObj.data.attributes})
            }
        })
    }
}
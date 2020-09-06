export const signUp = (user) => {
    // User is an object with keys of username and password
    return function (dispatch) {
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(userObj => dispatch({type: "SIGNUP", payload: userObj.data.attributes}))
    }
}
export const logIn = (user) => {
    return function (dispatch) {
        fetch('http://localhost:3001/login', {
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
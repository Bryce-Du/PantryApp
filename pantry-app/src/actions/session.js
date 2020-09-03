export default function signUp(user){
    // User is an object with keys of username and password
    console.log("calling action creator")
    console.log(user)
    return function (dispatch) {
        fetch('http://localhost:3001/users',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(userObj => dispatch({type: "SIGNUP", payload: userObj}))
    }
}
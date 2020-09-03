export default (state = {}, action) => {
    switch (action.type){
        case "SIGNUP":
            return {...state, user: action.payload.user}
        case "LOGIN":
            return {...state, user: action.payload.user}
        default:
            return state
    }
}
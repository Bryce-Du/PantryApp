export default (state = {}, action) => {
    switch (action.type){
        case "SIGNUP":
            return {user: action.payload.username}
        case "LOGIN":
            return {user: action.payload.username}
        default:
            return state
    }
}
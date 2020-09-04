export default (state = {ingredients: []}, action) => {
    console.log("ingredient reducer")
    switch (action.type){
        case "ADD_INGREDIENTS":
            console.log("state: ", state, "action: ", action)
            return {...state, ingredients: action.payload}
        default:
            return state
    }
}
export default (state = {ingredients: []}, action) => {
    switch (action.type){
        case "ADD_INGREDIENTS":
            return {...state, ingredients: action.payload}
        default:
            return state
    }
}
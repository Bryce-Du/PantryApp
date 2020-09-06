export default (state = {ingredients: []}, action) => {
    switch (action.type){
        case "INDEX_INGREDIENTS":
            return {...state, ingredients: action.payload}
        default:
            return state
    }
}
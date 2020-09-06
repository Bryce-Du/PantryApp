export default (state = {ingredients: [], processing: false}, action) => {
    switch (action.type){
        case "PROCESSING":
            return {...state, ingredients: [...state.ingredients], processing: true}
        case "INDEX_INGREDIENTS":
            return {...state, ingredients: action.payload, processing: false}
        default:
            return state 
    }
}
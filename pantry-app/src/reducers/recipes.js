export default (state = {recipes: [], processing: false}, action) => {
    //let recipe;

    switch (action.type){
        case "PROCESSING":
            return {...state, recipes: [...state.recipes], processing: true}
        case "INDEX_RECIPES":
            return {...state, recipes: action.payload, processing: false}
        case "ADD_RECIPE":
            return {...state, recipes: state.recipes.concat(action.payload), processing: false}
        case "UPDATE_RECIPE":
            let removed = state.recipes.filter(recipe => recipe.id !== action.payload.id) // remove the old recipe and concat the updated one
            return {...state, recipes: removed.concat(action.payload), processing: false}
        default:
            return state 
    }
}
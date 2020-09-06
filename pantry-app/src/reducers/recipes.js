export default (state = {recipes: [], processing: false}, action) => {
    //let recipe;

    switch (action.type){
        case "PROCESSING":
            return {...state, recipes: [...state.recipes], processing: true}
        case "INDEX_RECIPES":
            return {...state, recipes: action.payload, processing: false}
        case "ADD_RECIPE":
            return {...state, recipes: state.recipes.concat(action.payload), processing: false}
        default:
            return state 
    }
}
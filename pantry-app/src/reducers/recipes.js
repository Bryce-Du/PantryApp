export default (state = {recipes: []}, action) => {
    //let recipe;

    switch (action.type){
        case "INDEX_RECIPES":
            console.log("state: ", state, "action: ", action)
            return {...state, recipes: action.payload}
        case "ADD_RECIPE":
            return {...state, recipes: state.recipes.concat(action.payload)}
        default:
            return state
    }
}
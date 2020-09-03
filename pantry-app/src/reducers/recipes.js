export default (state = {recipes: []}, action) => {
    let recipe;

    switch (action.type){
        case "ADD_RECIPES":
            return {...state, recipes: action.payload}

        default:
            return state
    }
}
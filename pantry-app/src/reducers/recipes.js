export default (state = {recipes: []}, action) => {
    let recipe;

    switch (action.type){
        case "ADD_RECIPES":
            console.log("state: ", state, "action: ", action)
            return {...state, recipes: action.payload}

        default:
            return state
    }
}
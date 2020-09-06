export const fetchRecipes = () => {
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch('http://localhost:3001/recipes')
        .then(res => res.json())
        .then(recipes => {
            dispatch({type: "INDEX_RECIPES", payload: recipes.data})
        })
    }
}
export const fetchUserRecipes = (userID) => { 
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch(`http://localhost:3001/users/${userID}/recipes`) 
        .then(res => res.json())
        .then(recipes => {
            dispatch({type: "INDEX_RECIPES", payload: recipes.data})
        })
    }
}
export const addRecipe = (recipe, userID) => {
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch(`http://localhost:3001/users/${userID}/recipes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({recipe})
        })
        .then(res => res.json())
        .then(recipe => {
            dispatch({type: "ADD_RECIPE", payload: recipe.data})
        })
    }
}
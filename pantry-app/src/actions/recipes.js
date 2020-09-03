export const fetchRecipes = () => {
    return function (dispatch) {
        fetch('http://localhost:3001/recipes')
        .then(res => res.json())
        .then(recipes => dispatch({type: "ADD_RECIPES", payload: recipes}))
    }
}
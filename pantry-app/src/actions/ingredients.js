export const fetchIngredients = () => {
    return function (dispatch) {
        fetch('http://localhost:3001/ingredients')
        .then(res => res.json())
        .then(ingredients => {
            console.log("fetch request returns:", ingredients.data)
            dispatch({type: "ADD_INGREDIENTS", payload: ingredients.data})
        })
    }
}
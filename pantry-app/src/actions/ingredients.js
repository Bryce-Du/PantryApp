export const fetchIngredients = () => {
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch('http://localhost:3001/ingredients')
        .then(res => res.json())
        .then(ingredients => {
            dispatch({type: "INDEX_INGREDIENTS", payload: ingredients.data})
        })
    }
}
export const fetchUserIngredients = (userID) => { 
    return function (dispatch) {
        dispatch({type: "PROCESSING_PANTRY"})
        fetch(`http://localhost:3001/users/${userID}/ingredients`)
        .then(res => res.json())
        .then(ingredients => {
            console.log("fetch request returns:", ingredients.data)
            dispatch({type: "INDEX_PANTRY", payload: ingredients.data})
        })
    }
}
export const addUserIngredients = (ingredients, userID) => {
    return function (dispatch) {
        dispatch({type: "PROCESSING_PANTRY"})
        fetch(`http://localhost:3001/users/${userID}/users_ingredients`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({ingredients})
        })
        .then(res => res.json())
        .then(ingredient => {
            console.log(ingredient.data)
            dispatch({type: "INDEX_PANTRY", payload: ingredient.data})
        })
    }
}
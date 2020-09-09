import {BASE_URL} from '../index.js'

export const fetchRecipes = () => {
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch(`${BASE_URL}/recipes`)
        .then(res => res.json())
        .then(recipes => {
            dispatch({type: "INDEX_RECIPES", payload: recipes.data})
        })
    }
}
export const fetchUserRecipes = (userID) => { 
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch(`${BASE_URL}/users/${userID}/recipes`) 
        .then(res => res.json())
        .then(recipes => {
            dispatch({type: "INDEX_RECIPES", payload: recipes.data})
        })
    }
}
export const addRecipe = (recipe, userID) => {
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch(`${BASE_URL}/users/${userID}/recipes`, {
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
export const updateRecipe = (recipe, userID, recipeID) => {
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch(`${BASE_URL}/users/${userID}/recipes/${recipeID}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({recipe})
        })
        .then(res => res.json())
        .then(recipe => {
            dispatch({type: "UPDATE_RECIPE", payload: recipe.data})
        })
    }
}
export const deleteRecipe = (userID, recipeID) => {
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch(`${BASE_URL}/users/${userID}/recipes/${recipeID}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            }
        })
        .then(res => res.json())
        .then(recipe => {
            dispatch({type: "DELETE_RECIPE", payload: recipe.data})
        })
    }
}
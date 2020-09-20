import {BASE_URL} from '../index.js'

export const fetchIngredients = (limit) => {
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch(`${BASE_URL}/ingredients`)
        .then(res => res.json())
        .then(ingredients => {
            dispatch({type: "INDEX_INGREDIENTS", payload: ingredients.data})
        })
    }
}
export const fetchUserIngredients = (userID) => { 
    return function (dispatch) {
        dispatch({type: "PROCESSING_PANTRY"})
        fetch(`${BASE_URL}/users/${userID}/ingredients`)
        .then(res => res.json())
        .then(ingredients => {
            dispatch({type: "INDEX_PANTRY", payload: ingredients.data})
        })
    }
}
export const addUserIngredients = (ingredients, userID) => {
    return function (dispatch) {
        dispatch({type: "PROCESSING_PANTRY"})
        fetch(`${BASE_URL}/users/${userID}/users_ingredients`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({ingredients})
        })
        .then(res => res.json())
        .then(ingredient => {
            dispatch({type: "INDEX_PANTRY", payload: ingredient.data})
        })
    }
}
export const searchIngredients = (searchTerm) => {
    return function (dispatch) {
        dispatch({type: "PROCESSING"})
        fetch(`${BASE_URL}/ingredients/search/${searchTerm}`)
        .then(res => res.json())
        .then(ingredients => {
            dispatch({type: "SEARCH_INGREDIENTS", payload: ingredients.data})
        })
    }
}
import React from 'react'
import {Link} from 'react-router-dom'

export default function IngredientListLink (props) {
    return (
        <li className="list-group-item">{props.ingredient.name}</li>
    )
}
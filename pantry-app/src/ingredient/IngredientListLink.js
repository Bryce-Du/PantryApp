import React from 'react'
import {Link} from 'react-router-dom'

export default function IngredientListLink (props) {
    return (
        <li className="list-group-item py-1">{props.quantity} {props.ingredient.name}</li>
    )
}
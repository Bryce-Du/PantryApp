import React from 'react'

export default function IngredientShow (props) {
    return (
        <div>
            <h2>{props.ingredient.attributes.name}</h2>
        </div>
    )
}
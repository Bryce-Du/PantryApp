import React from 'react'
import IngredientListLink from '../ingredient/IngredientListLink'

export default function RecipeShow (props) {
    console.log(props)
    return (
        <div>
            <h2>{props.recipe.attributes.name}</h2>
            <p>Instructions: {props.recipe.attributes.instructions}</p>
            <ul className="list-group py-1">Ingredients:
                {props.recipe.attributes.ingredients.map(ingredient => {
                    let rI = props.recipe.attributes.recipes_ingredients.find(rI => rI.ingredient_id === ingredient.id)
                    return <IngredientListLink key={ingredient.id} ingredient={ingredient} quantity={rI.quantity}/>
                })}
            </ul>
        </div>
    )
}
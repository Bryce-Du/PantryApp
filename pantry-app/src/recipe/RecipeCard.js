import React from 'react'
import IngredientListLink from '../ingredient/IngredientListLink'

export default function RecipeCard (props) {
    return (
        <div className="card">
            {console.log(props.recipe.attributes)}
            <h5 className="card-header">{props.recipe.attributes.name}</h5>
            <div className="card-body">
                
                <ul className="list-group list-group-flush">Ingredients:
                    {props.recipe.attributes.ingredients.map(ingredient => <IngredientListLink key={ingredient.id} ingredient={ingredient}/>)}
                </ul>
            </div>
        </div>
    )
}
import React from 'react'
import IngredientListLink from '../ingredient/IngredientListLink'
import { useHistory } from 'react-router-dom'

export default function RecipeCard (props) {
    const history = useHistory();
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     history.push(`/recipes/${props.recipe.id}`)
    // }
    const handleEdit = (e) => {
        e.preventDefault()
        history.push(`/recipes/${props.recipe.id}/edit`)
    } 
    
    return (
        <div className="card">
            <h5 className="card-header">{props.recipe.attributes.name}</h5>
            {/* <div className="card-body py-1" onClick={handleClick}> */}
            <div className="card-body py-1">
                <p>{props.recipe.attributes.instructions}</p>
                <ul className="list-group py-1">Ingredients:
                    {props.recipe.attributes.ingredients.map(ingredient => {
                        let rI = props.recipe.attributes.recipes_ingredients.find(rI => rI.ingredient_id === ingredient.id)
                        return <IngredientListLink key={ingredient.id} ingredient={ingredient} quantity={rI.quantity}/>
                    })}
                </ul>
            </div>
            <div className="card-footer py-1">
                <button onClick={handleEdit}>Edit</button>
                <button id={`delete-recipe-${props.recipe.id}`} onClick={event => props.handleDelete(event)}>Delete</button>
            </div>
        </div>
    )
}
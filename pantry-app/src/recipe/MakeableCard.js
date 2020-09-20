import React from 'react'
import IngredientListLink from '../ingredient/IngredientListLink'
import { useHistory } from 'react-router-dom'

export default function MakeableCard (props) {
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
            {console.log(props)}
            <h5 className="card-header">{props.makeable.recipe.data.attributes.name}</h5>
            {/* <div className="card-body py-1" onClick={handleClick}> */}
            <div className="card-body py-1">
                <p>{props.makeable.recipe.data.attributes.instructions}</p>
                <ul className="list-group py-1">Ingredients:
                    {props.makeable.ingredients.map(ingredient => {
                        let rI = props.makeable.recipe.data.attributes.recipes_ingredients.find(rI => rI.ingredient_id === ingredient.id)
                        return (
                            <div>
                                <IngredientListLink key={ingredient.id} ingredient={ingredient.attributes.data.attributes} quantity={rI.quantity}/>
                                <p>Remaining: {ingredient.remaining}</p>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className="card-footer py-1">
                <button onClick={handleEdit}>Edit</button>
                <button id={`delete-recipe-${props.makeable.recipe.data.id}`} onClick={event => props.handleDelete(event)}>Delete</button>
            </div>
        </div>
    )
}
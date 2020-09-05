import React from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../actions/recipes'
import IngredientAddForm from './IngredientAddForm'

class RecipeForm extends React.Component {
    state = {
        recipe: {
            name: '',
            instructions: ''
        },
        ingredients: [],
        ingredientInputs: [] 
    }
    handleRecipeChange = (event) => {
        let key = event.target.name
        let value = event.target.value
        this.setState({
            ...this.state,
            recipe: {
                [key]: value
            }
        })
    }
    handleIngredientChange = (event) => {
        let key = event.target.name
        let value = event.target.value
        let index = event.target.id-1
        let ingredient = {
            ...this.state.ingredients[index],
            [key]: value
        }
        this.setState({
            ...this.state,
            ingredients: this.state.ingredients.concat(ingredient)
        })
    }
    handleAddIngredientInput = (event) => {
        event.preventDefault()
        let id = this.state.ingredientInputs.length+1
        this.setState({
            ...this.state,
            ingredientInputs: this.state.ingredientInputs.concat(<IngredientAddForm key={id} id={id} value={this.state.ingredients[id-1]} handleChange={this.handleIngredientChange} handleRemove={this.handleRemoveIngredientInput}/>)
        })
    }
    handleRemoveIngredientInput = (event) => {
        event.preventDefault()
        let id = event.target.id.split("-")[2]
        this.setState({
            ...this.state,
            ingredientInputs: this.state.ingredientInputs.filter(input => input.key !== id)
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatchedAddRecipe(this.state)
    }
    render(){
        
        
        return(
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <h2>Create a new Recipe:</h2>
                <label>Name: <input type="text" name="name" value={this.state.recipe.name} onChange={this.handleRecipeChange}/></label><br/>
                <label>Instructions: <textarea name="instructions" value={this.state.recipe.instructions} onChange={this.handleRecipeChange}/></label><br/>
                <h6>Add Ingredients:</h6>
                {this.state.ingredientInputs}
                <button onClick={this.handleAddIngredientInput}>Add more Ingredients</button>
            </form>
        )
    }
}

const mDTP = (dispatcher) => {
    return {
        dispatchedAddRecipe: recipe => dispatcher(addRecipe(recipe))
    }
}

export default connect(null, mDTP)(RecipeForm)
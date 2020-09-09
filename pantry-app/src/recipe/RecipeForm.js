import React from 'react'
import { connect } from 'react-redux'
import { addRecipe, updateRecipe } from '../actions/recipes'
import RecipeInputs from './RecipeInputs'
import IngredientInputsContainer from '../ingredient/IngredientInputsContainer'
import { Redirect } from 'react-router-dom'
import IngredientInput from '../ingredient/IngredientInput'

class RecipeForm extends React.Component {
    state = {
        name: '',
        instructions: '',
        ingredients: [{
            name: "",
            quantity: ""
        }]
    }
    redirect = false
    componentDidMount(){
        if (this.props.recipe) {
            let ingredients = []
            this.props.recipe.attributes.ingredients.forEach((ingredient, index) => {
                let quantity = this.props.recipe.attributes.recipes_ingredients[index].quantity
                ingredients.push({name: ingredient.name, quantity: quantity})
            })
            this.setState({
                name: this.props.recipe.attributes.name,
                instructions: this.props.recipe.attributes.instructions,
                ingredients: ingredients
            })
        }
    }
    handleRecipeChange = (event) => {
        let key = event.target.name
        let value = event.target.value
        this.setState((pS)=>({
            ...pS,
            [key]: value
        }))
    }
    handleIngredientChange = (event) => {
        let key = event.target.name
        let value = event.target.value
        let i = parseInt(event.target.id.split("-")[2])
        console.log("ingr change: ", {[key]: value}, i)
        this.setState((prevState) => {
            const ingrs = prevState.ingredients.map((ingr, j) => {
                if (i === j){
                    return {...ingr, [key]: value}
                } else {
                    return ingr
                }
            })
            return {
                ...this.state,
                ingredients: ingrs
            }
        })
        
    }
    handleAddIngredientInput = (event) => {
        event.preventDefault()
        this.setState((pS)=>({
            ...this.state,
            ingredients: pS.ingredients.concat({name: "", quantity: ""})
        }))        
    }
    handleRemoveIngredientInput = (event) => {
        event.preventDefault()
        let id = parseInt(event.target.id.split("-")[2])
        this.setState((pS)=>({
            ...this.state,
            ingredients: pS.ingredients.filter((ingredient, index) => index !== id)
        }))

    }
    handleSubmit = (event) => {
        event.preventDefault()
        let id = this.props.user.id
        this.props.recipe 
            ? this.props.dispatchedUpdateRecipe(this.state, id, this.props.recipe.id)
            : this.props.dispatchedAddRecipe(this.state, id)
        this.redirect = true
        this.forceUpdate()
    }

    render(){
        return(
            this.redirect ? <Redirect to="/recipes" /> :
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <h2>Create a new Recipe:</h2>
                    <RecipeInputs name={this.state.name} instructions={this.state.instructions} handleChange={this.handleRecipeChange}/>
                    {this.state.ingredients.map((ingredient, index) => {
                        return <IngredientInput 
                            key={index} 
                            id={index} 
                            ingredient={ingredient}
                            handleChange={this.handleIngredientChange}
                            handleRemove={this.handleRemoveIngredientInput} />
                    })}
                    <button onClick={this.handleAddIngredientInput}>Add more Ingredients</button>
                    <br/><input type="submit" value={this.props.recipe ? "Update Recipe" : "Add Recipe"}/>
                </form>
        )
    }
}
const mSTP = (state) => {
    return {user: state.usersReducer.user}
}
const mDTP = (dispatcher) => {
    return {
        dispatchedAddRecipe: (recipe, userID) => dispatcher(addRecipe(recipe, userID)),
        dispatchedUpdateRecipe: (recipe, userID, recipeID) => dispatcher(updateRecipe(recipe, userID, recipeID))
    }
}

export default connect(mSTP, mDTP)(RecipeForm)
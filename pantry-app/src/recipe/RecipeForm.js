import React from 'react'
import { connect } from 'react-redux'
import { addRecipe } from 'actions/recipes'
import RecipeInputs from './RecipeInputs'
import IngredientInputsContainer from '../ingredient/IngredientInputsContainer'

class RecipeForm extends React.Component {
    state = {
        recipe: {
            name: '',
            instructions: ''
        },
        ingredients: [{
            name: "",
            quantity: ""
        }]
    }
    handleRecipeChange = (event) => {
        let key = event.target.name
        let value = event.target.value
        this.setState((pS)=>({
            ...pS,
            recipe: {
                ...pS.recipe,
                [key]: value
            }
        }))
    }
    handleIngredientChange = (event) => {
        let key = event.target.name
        let value = event.target.value
        let i = parseInt(event.target.id.split("-")[2])
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
        this.props.dispatchedAddRecipe(this.state, id)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <h2>Create a new Recipe:</h2>
                <RecipeInputs recipe={this.state.recipe} handleChange={this.handleRecipeChange}/>
                <IngredientInputsContainer 
                    ingredients={this.state.ingredients} 
                    handleChange={this.handleIngredientChange} 
                    handleAdd={this.handleAddIngredientInput} 
                    handleRemove={this.handleRemoveIngredientInput} 
                />
                <br/><input type="submit" value="Add Recipe"/>
            </form>
        )
    }
}
const mSTP = (state) => {
    return {user: state.usersReducer.user}
}
const mDTP = (dispatcher) => {
    return {
        dispatchedAddRecipe: (recipe, userID) => dispatcher(addRecipe(recipe, userID))
    }
}

export default connect(mSTP, mDTP)(RecipeForm)
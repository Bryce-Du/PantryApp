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
        ingredients: [
            {
                name: "",
                quantity: ""
            }
        ]
    }
    handleRecipeChange = (event) => {
        let key = event.target.name
        let value = event.target.value
        console.log({[key]: value})
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
        let i = event.target.id-1
        console.log({[key]: value})
        console.log(this.state)
        this.setState((prevState) => {
            const ingrs = prevState.ingredients.map((ingr, j) => {
                if (i === j){
                    return {[key]: value}
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
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatchedAddRecipe(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <h2>Create a new Recipe:</h2>
                <RecipeInputs recipe={this.state.recipe} handleChange={this.handleRecipeChange}/>
                <IngredientInputsContainer ingredients={this.state.ingredients} handleChange={this.handleIngredientChange}/>
                
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
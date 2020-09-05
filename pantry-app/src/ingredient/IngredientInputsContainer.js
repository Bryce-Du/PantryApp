import React from 'react'
import IngredientInput from './IngredientInput'

class IngredientInputsContainer extends React.Component {
    state = {
        // ingredients: this.props.ingredients,
        ingredientInputs: []
    }
    
    handleAddIngredientInput = (event) => {
        event.preventDefault()
        
        let id = this.state.ingredientInputs.length+1
        this.setState((prevState) => ({
            // ingredients: [...prevState.ingredients, {name: '', quantity: ''}],
            ingredientInputs: this.state.ingredientInputs.concat(<IngredientInput key={id} id={id} ingredient={this.props.ingredients[this.props.ingredients.length-1]} handleChange={this.props.handleChange} handleRemove={this.handleRemoveIngredientInput}/>)
        }))
        console.log("state: ", this.state, "props: ", this.props)
    }
    handleRemoveIngredientInput = (event) => {
        event.preventDefault()
        let id = event.target.id.split("-")[2]
        this.setState({
            ...this.state,
            ingredientInputs: this.state.ingredientInputs.filter(input => input.key !== id)
        })
    }
    render(){
        return(
            <div className="ingredient-inputs">
                <h6>Add Ingredients:</h6>
                {/* {this.props.ingredients.map((ingredient, index) => <IngredientAddForm key={index} id={index} ingredient={ingredient} handleChange={this.props.handleChange} handleRemove={this.handleRemoveIngredientInput}/>)} */}
                <IngredientInput key={1} id={1} name={this.props.ingredients[0].name} quantity={this.props.ingredients[0].quantity} handleChange={this.props.handleChange} handleRemove={this.handleRemoveIngredientInput}/>
                {this.state.ingredientInputs}
                <button onClick={this.handleAddIngredientInput}>Add more Ingredients</button>
            </div>
        )
    }
}

export default IngredientInputsContainer
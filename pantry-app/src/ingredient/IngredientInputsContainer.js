import React from 'react'
import IngredientInput from './IngredientInput'

class IngredientInputsContainer extends React.Component {
    render(){
        return(
            <div className="ingredient-inputs">
                <h6>Add Ingredients:</h6>
                {this.props.ingredients.map((ingredient, index) => {
                    return <IngredientInput key={index} id={index} ingredient={ingredient} handleChange={this.props.handleChange} handleRemove={this.props.handleRemove}/>
                })}

                <button onClick={this.props.handleAdd}>Add more Ingredients</button>
            </div>
        )
    }
}

export default IngredientInputsContainer
import React from 'react'

class IngredientAddForm extends React.Component {
    render(){
        return (
            <div>
                <label>Name: <input type="text" name="name" id={`ingredient-name-${this.props.id}`} value={this.props.value} onChange={this.props.handleChange}/></label>
                <input type="number" name="quantity" id={`ingredient-quantity-${this.props.id}`} value={this.props.value} onChange={this.props.handleChange} style={{width: "50px"}}/>
                <button id={`ingredient-remove-${this.props.id}`} onClick={this.props.handleRemove}>X</button>
            </div>
        )
    }
}

export default IngredientAddForm
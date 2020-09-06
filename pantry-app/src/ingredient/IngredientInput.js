import React from 'react'

class IngredientInput extends React.Component {
    render(){
        return (
            <div autoComplete="off">
                {this.props.readonly ? "" : <label htmlFor={`ingredient-name-${this.props.id}`}>Name: </label>}
                <input type="text" name="name" id={`ingredient-name-${this.props.id}`} value={this.props.ingredient.name} onChange={this.props.handleChange} autoComplete="off" readOnly={this.props.readonly}/>
                <input type="number" name="quantity" id={`ingredient-quantity-${this.props.id}`} value={this.props.ingredient.quantity} onChange={this.props.handleChange} style={{width: "50px"}} autoComplete="off"/>
                {this.props.readonly ? "" : <button id={`ingredient-remove-${this.props.id}`} onClick={this.props.handleRemove}>X</button>}
            </div>
        )
    }
}

export default IngredientInput
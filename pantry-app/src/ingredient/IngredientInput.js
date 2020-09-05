import React from 'react'

class IngredientInput extends React.Component {
    render(){
        return (
            <div>
                {console.log("ingredient form props:", this.props)}
                <label>Name: <input type="text" name="name" id={`ingredient-name-${this.props.id}`} value={this.props.name} onChange={this.props.handleChange} autoComplete="off"/></label>
                <input type="number" name="quantity" id={`ingredient-quantity-${this.props.id}`} value={this.props.quantity} onChange={this.props.handleChange} style={{width: "50px"}} autoComplete="off"/>
                <button id={`ingredient-remove-${this.props.id}`} onClick={this.props.handleRemove}>X</button>
            </div>
        )
    }
}

export default IngredientInput
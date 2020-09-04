import React from 'react'

class IngredientAddForm extends React.Component {
    state = {
        name: "",
        quantity: ""
    }
    
    render(){
        return (
            <div>
                <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.props.handleChange}/></label>
                <label><input type="number" name="quantity" value={this.state.quantity} onChange={this.props.handleChange} style={{width: "50px"}}/></label>
                <button id={`ingredient-remove-${this.props.id}`} onClick={this.props.handleRemove}>X</button>
            </div>
        )
    }
}

export default IngredientAddForm
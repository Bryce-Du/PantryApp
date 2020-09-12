import React from 'react'

class PantryInput extends React.Component {
    render(){
        return (
            <tr id={`ingredient-${this.props.id}`}>
                <td className="col-sm-auto" align="right">{!!this.props.ingredient.name ? this.props.ingredient.name : this.props.ingredient.description}</td>
                <td className="col-sm-auto"><input 
                    type="number" 
                    name="quantity" 
                    id={`ingredient-quantity-${this.props.id}`} 
                    value={this.props.ingredient.quantity} 
                    onChange={this.props.handleChange} 
                    style={{width: "50px"}} 
                    autoComplete="off"
                /></td>
                {/* <small>{this.props.ingredient.description}</small> */}
            </tr>
        )
    }
}

export default PantryInput
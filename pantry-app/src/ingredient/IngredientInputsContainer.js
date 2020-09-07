import React from 'react'
import IngredientInput from './IngredientInput'
import IngredientSearch from './IngredientSearch'

class IngredientInputsContainer extends React.Component {
    state = {
        searchTerm: ""
    }
    
    handleSearch = (e) => {
        let term = e.target.value
        this.setState({searchTerm: term})
    }
    
    render(){
        return(
            <div className="ingredient-inputs">
                {this.props.readonly ? <IngredientSearch searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />: "" }
                <h6>Add Ingredients:</h6>
                {this.props.ingredients.map((ingredient, index) => {
                        if (ingredient.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())){ 
                            return <IngredientInput 
                                key={index} 
                                id={ingredient.id}
                                ingredient={ingredient} 
                                handleChange={this.props.handleChange} 
                                handleRemove={this.props.handleRemove} 
                                readonly={this.props.readonly}
                            />
                        } else {
                            return null
                        }
                    }) 
                }

                <button onClick={this.props.handleAdd}>{this.props.readonly ? "Add Items to Pantry" : "Add more Ingredients"}</button>
            </div>
        )
    }
}

export default IngredientInputsContainer
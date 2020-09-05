import React from 'react'

class RecipeInputs extends React.Component {
    render(){
        return (
            <div className="recipe-inputs">
                <label>Name: <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange}/></label><br/>
                <label>Instructions: <textarea name="instructions" value={this.props.instructions} onChange={this.props.handleChange}/></label>
            </div>
        )
    }
}

export default RecipeInputs
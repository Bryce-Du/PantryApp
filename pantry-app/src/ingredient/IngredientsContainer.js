import React from 'react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../actions/ingredients'
import IngredientListLink from './IngredientListLink'

class IngredientsContainer extends React.Component {
    componentDidMount(){
        this.props.dispatchedFetchIngredients()
    }
    
    render(){
        return (
            <div><ul>
                {this.props.ingredients ? this.props.ingredients.map(ingredient => <IngredientListLink key={ingredient.id} ingredient={ingredient.attributes}/>) : ""}
            </ul></div>
        )
    }
}

const mSTP = (state) => {
    return {
        ingredients: state.ingredientsReducer.ingredients,
        user: state.usersReducer.user
    }
}
const mDTP = (dispatcher) => {
    return {
        dispatchedFetchIngredients: () => dispatcher(fetchIngredients())
    }
}

export default connect(mSTP, mDTP)(IngredientsContainer)
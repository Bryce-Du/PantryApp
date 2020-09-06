import React from 'react'
import { connect } from 'react-redux'
import { fetchUserIngredients } from '../actions/ingredients'
import IngredientListLink from './IngredientListLink'


class PantryContainer extends React.Component {
    componentDidMount(){
        this.props.dispatchedFetchUserIngredients(this.props.user.id)
    }
    
    render(){
        return(
            <div>
                {this.props.ingredients.map(ingredient => {
                    let uI = this.props.user.users_ingredients.find(uI => uI.ingredient_id === ingredient.id)
                    return <IngredientListLink key={ingredient.id} ingredient={ingredient} quantity={uI.quantity}/>
                })}
            </div>
        )
    }
}

const mSTP = (state) => {
    return {
        user: state.usersReducer.user,
        ingredients: state.ingredientsReducer.ingredients
    }
}
const mDTP = (dispatcher) => {
    return {
        dispatchedFetchUserIngredients: (userID) => dispatcher(fetchUserIngredients(userID))
    }
}

export default connect(mSTP, mDTP)(PantryContainer)
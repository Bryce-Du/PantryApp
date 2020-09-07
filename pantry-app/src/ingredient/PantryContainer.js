import React from 'react'
import { connect } from 'react-redux'
import { fetchUserIngredients } from '../actions/ingredients'
import IngredientListLink from './IngredientListLink'


class PantryContainer extends React.Component {
    componentDidMount(){
        this.props.dispatchedFetchUserIngredients(this.props.user.id)
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.pantry.map(i => {
                    let q = i.attributes.users_ingredients[0].quantity
                    return <IngredientListLink key={i.id} ingredient={i.attributes} quantity={q}/>
                })}
            </div>
        )
    }
}

const mSTP = (state) => {
    return {
        user: state.usersReducer.user,
        pantry: state.pantryReducer.pantry
    }
}
const mDTP = (dispatcher) => {
    return {
        dispatchedFetchUserIngredients: (userID) => dispatcher(fetchUserIngredients(userID))
    }
}

export default connect(mSTP, mDTP)(PantryContainer)
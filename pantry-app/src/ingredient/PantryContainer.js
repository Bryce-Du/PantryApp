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
                {this.props.pantry.map(i => i.attributes.name)}
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
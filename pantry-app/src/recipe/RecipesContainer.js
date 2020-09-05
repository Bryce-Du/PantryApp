import React from 'react'
import {connect} from 'react-redux'
import { fetchUserRecipes } from '../actions/recipes'
import RecipeCard from './RecipeCard'
import RecipeForm from './RecipeForm'

class RecipesContainer extends React.Component {
    componentDidMount(){
        console.log("userid in state: ", this.props.user.id)
        this.props.dispatchedFetchUserRecipes(this.props.user.id)
    }
    
    render(){
        return (
            <div className="card-deck">
                {this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
                <RecipeForm />
            </div>
        )
    }
}

const mSTP = (state) => {
    return {
        recipes: state.recipesReducer.recipes,
        user: state.usersReducer.user
    }
}
const mDTP = (dispatcher) => {
    return {
        dispatchedFetchUserRecipes: (userID) => dispatcher(fetchUserRecipes(userID))
    }
}

export default connect(mSTP,mDTP)(RecipesContainer)
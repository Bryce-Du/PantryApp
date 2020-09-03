import React from 'react'
import {connect} from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import RecipeCard from './RecipeCard'

class RecipesContainer extends React.Component {
    render(){
        return (
            <div>
                <h1>Showing Recipes for {this.props.user.username}</h1>
                <ul>{this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}</ul>
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
        dispatchedFetchRecipes: () => dispatcher(fetchRecipes())
    }
}

export default connect(mSTP,mDTP)(RecipesContainer)
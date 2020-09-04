import React from 'react'
import {connect} from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import RecipeCard from './RecipeCard'

class RecipesContainer extends React.Component {
    componentDidMount(){
        console.log(this.props)
        this.props.dispatchedFetchRecipes()
    }
    
    render(){
        return (
            <div>
                
                <div className="card-deck">{this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}</div>
            </div>
        )
    }
}

const mSTP = (state) => {
    debugger
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
import React from 'react'
import {connect} from 'react-redux'
import { fetchUserRecipes } from '../actions/recipes'
import RecipeCard from './RecipeCard'
import RecipeForm from './RecipeForm'
import { Route } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

class RecipesContainer extends React.Component {
    componentDidMount(){
        this.props.dispatchedFetchUserRecipes(this.props.user.id)
    }
    
    render(){
        return (
            <div>
                <NavLink exact to="/recipes" className="btn btn-md" activeClassName="text-info">Show All Recipes</NavLink>
                <NavLink to="/recipes/new" className="btn btn-md" activeClassName="text-info">Create New Recipe</NavLink><br/>
                <Route exact path="/recipes">
                    <div className="card-deck">
                        {this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
                    </div>
                </Route>    
                <Route path="/recipes/new">
                    <RecipeForm />
                </Route>
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
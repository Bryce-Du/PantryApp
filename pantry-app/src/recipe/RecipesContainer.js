import React from 'react'
import {connect} from 'react-redux'
import { fetchUserRecipes } from '../actions/recipes'
import RecipeCard from './RecipeCard'
import RecipeForm from './RecipeForm'
import RecipeShow from './RecipeShow'
import { Route } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

class RecipesContainer extends React.Component {
    componentDidMount(){
        this.props.dispatchedFetchUserRecipes(this.props.user.id)
    }

    // cardWrap = (recipe, index, array) => {
    //     if (index%3 === 0) {
            
    //         return `<div className="row"><RecipeCard key=${recipe.id} recipe=${recipe}/>`
    //     } else if (index%3 === 2 || index === array.length) {
    //         return `<RecipeCard key=${recipe.id} recipe=${recipe}/></div>`
    //     } else {
    //         return `<RecipeCard key=${recipe.id} recipe=${recipe}/>`
    //     }
    // }
    
    render(){
        return (
            <div>
                <NavLink exact to="/recipes" className="btn btn-md" activeClassName="text-info">Show All Recipes</NavLink>
                <NavLink to="/recipes/new" className="btn btn-md" activeClassName="text-info">Create New Recipe</NavLink><br/>
                <Route exact path="/recipes">
                    <div className="container">
                        <div className="flex-row d-flex flex-wrap">
                            {this.props.recipes.map(recipe => <div className="px-2"><RecipeCard key={recipe.id} recipe={recipe}/></div>)}
                        </div>
                    </div>
                </Route>    
                <Route exact path="/recipes/new">
                    <RecipeForm />
                </Route>
                <Route exact path="/recipe/:id" render={(routerProps) => <RecipeShow {...routerProps} key={routerProps.match.params.id} recipe={this.props.recipes.find(recipe => recipe.id === routerProps.match.params.id)}/>}/>
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
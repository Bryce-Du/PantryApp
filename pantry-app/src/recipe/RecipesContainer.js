import React from 'react'
import {connect} from 'react-redux'
import { fetchUserRecipes, deleteRecipe, fetchRecipes } from '../actions/recipes'
import RecipeCard from './RecipeCard'
import RecipeForm from './RecipeForm'
import RecipeShow from './RecipeShow'
import { Route, Switch } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

class RecipesContainer extends React.Component {
    componentDidMount(){
        if (this.props.cookbook) {
            this.props.dispatchedFetchUserRecipes(this.props.user.id)
        } else {
            this.props.dispatchedFetchRecipes()
        }
    }

    handleDelete = (e) => {
        e.preventDefault()
        let recipeID = e.target.id.split("-")[2]
        this.props.dispatchedDeleteRecipe(this.props.user.id, recipeID)
    }
    
    render(){
        return (
            <div>
                <NavLink exact to="/recipes" className="btn btn-md" activeClassName="text-info">Show All Recipes</NavLink>
                <NavLink to="/recipes/new" className="btn btn-md" activeClassName="text-info">Create New Recipe</NavLink>
                <NavLink to="/recipes/makeable" className="btn btn-md" activeClassName="text-info">What Can I Make?</NavLink><br/>
                <Switch>
                    <Route exact path="/recipes">
                        {this.props.processing 
                            ? "fetching recipes, one moment"
                            : <div className="container">
                                <div className="flex-row d-flex flex-wrap">
                                    {this.props.recipes.map((recipe, index) => <div key={index} className="px-2"><RecipeCard key={index} recipe={recipe} handleDelete={this.handleDelete}/></div>)}
                                </div>
                            </div>
                        }
                    </Route>    
                    <Route path="/recipes/new">
                        <RecipeForm />
                    </Route>
                    <Route 
                        exact path="/recipes/:id" 
                        render={(routerProps) => <RecipeShow 
                            {...routerProps} 
                            key={routerProps.match.params.id} 
                            recipe={this.props.recipes.find(recipe => recipe.id === routerProps.match.params.id)}
                        />}
                    />
                    <Route path="/recipes/makeable">

                    </Route>
                    <Route path="/users/:user_id/recipes">
                        {this.props.processing 
                            ? "fetching recipes, one moment"
                            : <div className="container">
                                <div className="flex-row d-flex flex-wrap">
                                    {this.props.recipes.map((recipe, index) => <div key={index} className="px-2"><RecipeCard key={index} recipe={recipe} handleDelete={this.handleDelete}/></div>)}
                                </div>
                            </div>
                        }
                    </Route>
                    <Route 
                        exact path="/recipes/:id/edit"
                        render={(routerProps) => <RecipeForm
                            {...routerProps}
                            recipe={this.props.recipes.find(recipe => recipe.id === routerProps.match.params.id)}
                        />}
                    />
                </Switch>
            </div>
        )
    }
}

const mSTP = (state) => {
    return {
        recipes: state.recipesReducer.recipes,
        processing: state.recipesReducer.processing,
        user: state.usersReducer.user
    }
}
const mDTP = (dispatcher) => {
    return {
        dispatchedFetchUserRecipes: (userID) => dispatcher(fetchUserRecipes(userID)),
        dispatchedFetchRecipes: () => dispatcher(fetchRecipes()),
        dispatchedDeleteRecipe: (userID, recipeID) => dispatcher(deleteRecipe(userID, recipeID))
    }
}

export default connect(mSTP,mDTP)(RecipesContainer)
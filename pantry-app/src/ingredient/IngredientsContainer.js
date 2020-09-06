import React from 'react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../actions/ingredients'
import IngredientListLink from './IngredientListLink'
import { Route, Switch } from 'react-router-dom';
import IngredientShow from './IngredientShow'

class IngredientsContainer extends React.Component {
    componentDidMount(){
        this.props.dispatchedFetchIngredients()
    }
    
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/ingredients">
                        <ul>
                            {this.props.ingredients ? this.props.ingredients.map(ingredient => <IngredientListLink key={ingredient.id} ingredient={ingredient.attributes}/>) : ""}
                        </ul>
                    </Route>
                    <Route 
                        path="/ingredients/:id"
                        render={(routerProps) => <IngredientShow 
                            {...routerProps} 
                            key={routerProps.match.params.id} 
                            ingredient={this.props.ingredients ? this.props.ingredients.find(ingredient => ingredient.id === routerProps.match.params.id) : ""}
                        />}
                    />
                    
                </Switch>
            </div>
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
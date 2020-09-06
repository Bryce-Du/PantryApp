import React from 'react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../actions/ingredients'
import IngredientListLink from './IngredientListLink'
import { Route, Switch } from 'react-router-dom';
import IngredientShow from './IngredientShow'
import IngredientInput from './IngredientInput';
import IngredientInputsContainer from './IngredientInputsContainer';

class IngredientsContainer extends React.Component {
    componentDidMount(){
        this.props.dispatchedFetchIngredients()
    }    
    render(){
        let ingredient
        return (
            <div>
                <Switch>
                    <Route exact path="/ingredients">
                        {console.log("ingredient container props:", this.props)}
                        {this.props.processing ? "fetching Ingredients, one moment" : <IngredientInputsContainer ingredients={this.props.ingredients} readonly={true}/>}
                    </Route>
                    {console.log("ingredients in container:", this.props.ingredients)}
                    <Route 
                        path="/ingredients/:id"
                        render={(routerProps) => <IngredientInputsContainer 
                            {...routerProps} 
                            key={routerProps.match.params.id} 
                            ingredients={this.props.ingredients.find(i => i.id === routerProps.match.params.id)}
                            readonly={true}
                        />}
                    />
                    
                </Switch>
            </div>
        )
    }
}

const mSTP = (state) => {
    return {
        ingredients: state.ingredientsReducer.ingredients.map(i => i.attributes),
        processing: state.ingredientsReducer.processing,
        user: state.usersReducer.user
    }
}
const mDTP = (dispatcher) => {
    return {
        dispatchedFetchIngredients: () => dispatcher(fetchIngredients())
    }
}

export default connect(mSTP, mDTP)(IngredientsContainer)
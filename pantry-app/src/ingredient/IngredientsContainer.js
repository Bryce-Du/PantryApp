import React from 'react';
import { connect } from 'react-redux';
import { fetchIngredients, addUserIngredients } from '../actions/ingredients'
import { Route, Switch, Redirect } from 'react-router-dom';
import IngredientInputsContainer from './IngredientInputsContainer';

class IngredientsContainer extends React.Component {
    state = {
        ingredients: []
    }
    redirect = false
    componentDidMount(){
        this.props.dispatchedFetchIngredients()
    }
    handleChange = (e) => {
        let quantity = e.target.value
        let id = parseInt(e.target.id.split("-")[2])
        
        this.setState((pS) => {
            let existing, index
            if(pS.ingredients.some(i => !!i.id)){ // array is empty
                existing = pS.ingredients.find(i => i.id === id)
                index = pS.ingredients.findIndex(i => i.id === id)
            }
            if (!!existing) { // ingredient has already been changed and is in the state ingredient array
                console.log("existing id found")
                console.log("existing: ", existing, "index: ", index)
                let newIngrs = pS.ingredients
                newIngrs[index] = {id: existing.id, quantity}
                console.log("new ingrs: ", newIngrs)
                return {ingredients: newIngrs}
            } else {
                return {
                    ingredients: pS.ingredients.concat({id: id, quantity})
                }
            }
        })
    }
    handleAdd = (e) => {
        e.preventDefault()
        this.props.dispatchedAddUserIngredients(this.state.ingredients, this.props.user.id)
        this.redirect = true
        this.forceUpdate()
    }
    render(){
        console.log("ingredients container state:", this.state)
        return (
            this.redirect ? <Redirect to="/pantry" /> :
            <div>
                <Switch>
                    <Route exact path="/ingredients">
                        {this.props.processing 
                            ? "fetching Ingredients, one moment" 
                            : <IngredientInputsContainer 
                                ingredients={this.props.ingredients} 
                                handleChange={this.handleChange}
                                handleAdd={this.handleAdd}
                                readonly={true}
                            />
                        }
                    </Route>
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
        dispatchedFetchIngredients: () => dispatcher(fetchIngredients()),
        dispatchedAddUserIngredients: (ingredients, userID) => dispatcher(addUserIngredients(ingredients, userID))
    }
}

export default connect(mSTP, mDTP)(IngredientsContainer)
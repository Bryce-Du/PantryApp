import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import RecipesContainer from '../recipe/RecipesContainer'
import IngredientsContainer from '../ingredient/IngredientsContainer'

class AppBody extends React.Component {
    render(){
        return (
            <div className="AppBody px-5 py-2 col-9 vh-100 overflow-auto">
                <Route exact path="/">
                    {this.props.user ? <div><p>dashboard for {this.props.user.username}</p></div> : ""}
                </Route>
                <Route path="/recipes">
                    {this.props.user ? <RecipesContainer /> : <p>Please log in to see Recipes.</p>}
                </Route>
                <Route path="/ingredients">
                    {this.props.user ? <IngredientsContainer /> : <p>Please log in to see Ingredients.</p>}
                </Route>
            </div>
        )
    }
}

const mSTP = (state) => {
    return {user: state.usersReducer.user}
}

export default connect(mSTP)(AppBody)
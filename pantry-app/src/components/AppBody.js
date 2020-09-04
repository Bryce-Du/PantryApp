import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import RecipesContainer from './RecipesContainer'
import IngredientsContainer from './IngredientsContainer'

class AppBody extends React.Component {
    render(){
        return (
            <div className="AppBody">
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
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import RecipesContainer from './RecipesContainer'

class AppBody extends React.Component {
    render(){
        return (
            <div className="AppBody col-9">
                <Route path="/">
                    {this.props.user ? <div><p>dashboard for {this.props.user.username}</p></div> : ""}
                </Route>
                <Route path="/recipes">
                    <RecipesContainer />
                </Route>
            </div>
        )
    }
}

const mSTP = (state) => {
    console.log(state)
    return {user: state.usersReducer.user}
}

export default connect(mSTP)(AppBody)
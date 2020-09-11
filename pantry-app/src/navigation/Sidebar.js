import React from 'react';
import {NavLink} from 'react-router-dom'
import UserForm from '../user/UserForm';

class Sidebar extends React.Component {
    handleIsActive = (match) => {
        console.log(match) 
    }

    render(){
        return (
            this.props.user ?
            <div className="col-3 text-align-right bg-secondary vh-100">
                <h3>Hello, {this.props.user.username}!</h3>
                <div className="list-group list-group-flush ml-3">
                    <NavLink exact to="/" className="list-group-item list-group-item-action" activeClassName="bg-info">Dashboard</NavLink>
                    <NavLink to="/recipes" className="list-group-item list-group-item-action" activeClassName="bg-info">View All Recipes</NavLink>
                    <NavLink to={`/users/${this.props.user.id}/recipes`} className="list-group-item list-group-item-action" activeClassName="bg-info">View Your Recipes</NavLink>
                    <NavLink to="/ingredients" className="list-group-item list-group-item-action" activeClassName="bg-info">View Ingredients</NavLink>
                    <NavLink to="/pantry" className="list-group-item list-group-item-action" activeClassName="bg-info">View Pantry</NavLink>
                </div>
            </div>
            : <div className="col-3 text-align-right bg-secondary vh-100"><UserForm /></div>
        )
    }
}

export default Sidebar
import React from 'react';
import {NavLink} from 'react-router-dom'

class Sidebar extends React.Component {
    handleIsActive = (match) => {
        console.log(match) 
    }

    render(){
        return (
            <div>
                <h3>Hello, {this.props.user.username}!</h3>
                <NavLink exact to="/" className="btn btn-light" activeClassName="text-info">Dashboard</NavLink><br/>
                <NavLink to="/recipes" className="btn btn-light" activeClassName="text-info">View Recipes</NavLink><br/>
                <NavLink to="/ingredients" className="btn btn-light" activeClassName="text-info">View Ingredients</NavLink>
            </div>
        )
    }
}

export default Sidebar
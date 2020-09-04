import React from 'react';
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
    render(){
        return (
            <div>
                <h3>Hello, {this.props.user.username}!</h3>
                <Link to="/"><button>Dashboard</button></Link><br/>
                <Link to="/recipes"><button>View Recipes</button></Link>
            </div>
        )
    }
}

export default Sidebar
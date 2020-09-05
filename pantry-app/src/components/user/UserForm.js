import React from 'react'
import { connect } from 'react-redux'
import {signUp, logIn} from '../../actions/session.js'

class UserForm extends React.Component{
    state = {
        username: '',
        password: ''
    }
    
    handleChange = event => {
        let key = event.target.name
        let value = event.target.value
        this.setState({
            [key]: value
        })
    }
    
    handleSignUp = event => {
        event.preventDefault()
        this.props.dispatchedSignUp(this.state)
    }
    handleLogIn = event => {
        event.preventDefault()
        this.props.dispatchedLogIn(this.state)
    }

    
    render(){
        return (
            <div className="form py-2">
                <h3>Login or Sign Up below:</h3>
                <label>Username: <input onChange={this.handleChange} type="text" name="username" value={this.state.username} autoComplete="off"/></label><br/>
                <label>Password: <input onChange={this.handleChange} type="password" name="password" value={this.state.password}/></label><br/>
                <input type="submit" value="Sign Up" onClick={this.handleSignUp}/>{"   |   "}<input type="submit" value="Log In" onClick={this.handleLogIn}/>
            </div>
        )
    }
}

const mDTP = (dispatcher) => {
    return {
        dispatchedSignUp: user => dispatcher(signUp(user)),
        dispatchedLogIn: user => dispatcher(logIn(user))
    }
}

export default connect(null, mDTP)(UserForm)
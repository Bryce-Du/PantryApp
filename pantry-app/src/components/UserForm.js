import React from 'react'
import { connect } from 'react-redux'
import signUp from '../actions/session.js'

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
    
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.dispatchedSignUp(this.state)
    }
    
    render(){
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label>Username: <input onChange={this.handleChange} type="text" name="username" value={this.state.username} autoComplete="off"/></label><br/>
                <label>Password: <input onChange={this.handleChange} type="password" name="password" value={this.state.password}/></label><br/>
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

const mDTP = (dispatcher) => {
    return {dispatchedSignUp: user => dispatcher(signUp(user))}
}

export default connect(null, mDTP)(UserForm)
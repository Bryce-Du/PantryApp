import React from 'react'
import { connect } from 'react-redux'
import {signUp, logIn} from '../actions/session.js'

class UserForm extends React.Component{
    state = {
        user: {username: '',
        password: ''},
        type: ''
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
        console.log(this.state.user)
        if (this.state.type === "Sign Up"){
            this.props.dispatchedSignUp(this.state.user)
        } else if (this.state.type === "Log In"){
            this.props.dispatchedLogIn(this.state.user)
        }
    }
    handleInputType = event => {
        this.setState({...this.state, type: event.target.value})
    }
    
    render(){
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label>Username: <input onChange={this.handleChange} type="text" name="username" value={this.state.username} autoComplete="off"/></label><br/>
                <label>Password: <input onChange={this.handleChange} type="password" name="password" value={this.state.password}/></label><br/>
                <input type="submit" value="Sign Up" onClick={this.handleInputType}/>{"   |   "}<input type="submit" value="Log In" onClick={this.handleInputType}/>
                {/* <button onClick={e => {
                    e.preventDefault()
                    console.log("blip")
                    if (this.type === "Log In"){this.type = "Sign Up"}
                    else if (this.type === "Sign Up"){this.type = "Log In"} 
                }}>{this.type === "Log In" ? "Register New User" : "Log In"}</button> */}
                
            </form>
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
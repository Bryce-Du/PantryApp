import React from 'react'

export default class Likes extends React.Component {
    state = {
        likes: 0
    }
    
    handleLike = (e) => {
        e.preventDefault()
        console.log(this.state.likes)
        this.setState((pS) => ({likes: pS.likes+1}))
        console.log(this.state.likes)
    }
    handleDislike = (e) => {
        e.preventDefault()
        console.log(this.state.likes)
        this.setState((pS) => ({likes: pS.likes-1}))
        console.log(this.state.likes)
    }
    render(){
        return (
            <div>
                <button onClick={this.handleDislike}>{"<"}</button>
                <p>Likes: {this.state.likes}</p>
                <button onClick={this.handleLike}>{">"}</button>
            </div>
        )
    }
}
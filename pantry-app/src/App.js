import React from 'react';
import './App.css';
import UserForm from './components/UserForm.js'
import { connect } from 'react-redux';
import TopNavbar from './components/TopNavbar';
import { Route } from 'react-router-dom'
import AppBody from './components/AppBody'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <TopNavbar />
        <div className="row">
          <div className="col-3 text-align-right bg-secondary vh-100">{this.props.user ? <h1>Hello {this.props.user.username}!</h1> : <UserForm />}</div>
          <AppBody />
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {user: state.usersReducer.user}
}

export default connect(mSTP)(App);

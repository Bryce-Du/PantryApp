import React from 'react';
import './App.css';
import UserForm from './components/UserForm.js'
import { connect } from 'react-redux';
import TopNavbar from './components/TopNavbar';
import { Route } from 'react-router-dom'
import AppBody from './components/AppBody'
import Sidebar from './components/Sidebar';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <TopNavbar />
        <div className="row">
          <div className="col-3 text-align-right bg-secondary vh-100">{this.props.user ? <Sidebar user={this.props.user}/> : <UserForm />}</div>
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

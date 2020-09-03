import React from 'react';
import './App.css';
import UserForm from './components/UserForm.js'

function App() {
  return (
    <div className="App px-4">
      <div className="row"><h1>top navbar</h1></div>
      <div className="row">
        <div className="col-3 text-align-right">Eventual Side Navbar</div>
        <div className="col-6"><UserForm /></div>
      </div>
    </div>
  );
}

export default App;

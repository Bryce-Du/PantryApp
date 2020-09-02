import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row mx-1"><h1>top navbar</h1></div>
      <div className="row">
        <div className="col-3 text-align-right">Eventual Side Navbar</div>
        <div className="col-6">main body</div>
      </div>
    </div>
  );
}

export default App;

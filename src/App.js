import React from 'react';
import './App.css';
import Login from './login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Login></Login>
        </div>
      </div>
    </div>
  );
}

export default App;

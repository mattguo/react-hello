import React from 'react';
import logo from '../static/logo.svg';
import '../static/App.css';
import MyComp from './MyComp';
import LiveCompiler from './LiveCompiler';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <hr/>
        <MyComp />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

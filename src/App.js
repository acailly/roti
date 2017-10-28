import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Choice from './Choice'
import MessageInput from './MessageInput'
import Messages from './Messages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Choice level={4} />
        <Choice level={3} />
        <Choice level={2} />
        <Choice level={1} />
        <Choice level={0} />
        <MessageInput />
        <Messages />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Counter from './components/Counter';
import EntryEMail from './components/EntryEMail';
import HelloWorld from './components/HelloWorld';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div style={{ paddingTop: 40 }}>
            <Counter />
          </div>
          <div style={{ paddingTop: 40 }}>
            <EntryEMail onClick={() => console.log('click!')} />
          </div>
          <div style={{ paddingTop: 40 }}>
            <HelloWorld />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

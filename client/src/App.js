import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);

  async function activateLasers(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    const res = await axios.post('http://localhost:8080/hello-world', { nicknames: [ 'foo', 'bar' ] })
    setCount(count + res.data.test)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {count}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <button onClick={activateLasers}>
          Activate Lasers
        </button>
      </header>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(async () => {
    try {
      const response = await fetch('/api/hello');
      const body = await response.json();
      setApiResponse(JSON.stringify(body));
    } catch (err) {
      setApiResponse(`error: ${err}`);
    }
  }, []);

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
          {apiResponse}
        </a>
      </header>
    </div>
  );
}

export default App;

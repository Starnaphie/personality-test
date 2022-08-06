import ReactDOM from 'react-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function App() { 
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

function Question() {
  return (
    <></>
  );
}

export default App;
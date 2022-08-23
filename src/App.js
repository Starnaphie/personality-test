// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header.js';
import QuestionList from './components/QuestionList.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <QuestionList />
      <Footer />
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello from V2</h1>
//       </header>
//     </div>
//   )
// }

export default App;
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import TinderCards from "./components/Cards/TinderCards";
import React from "react";

function App() {
  return (
    <div className="App">
        <Header/>
        <TinderCards/>
        <SwipeButtons/>
    </div>
  );
}

export default App;

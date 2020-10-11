import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/about"><About /></Route>
    </Router>
  );
}

export default App;

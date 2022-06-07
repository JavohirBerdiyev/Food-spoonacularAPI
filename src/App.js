import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import Search from './components/Search';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

    <Link to='/'> <h1>Home</h1></Link>
    <Search />
    <Category />
    <Home />
    </div>
  );
}

export default App;


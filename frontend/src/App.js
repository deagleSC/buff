import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Todo from './pages/Todo';

const App = () => {
  return (
    <div className="app">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/todo" element={ <Todo /> } />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

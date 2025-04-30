import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
import ThingsToRead from './components/ThingsToRead.jsx';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/things-to-read" element={<ThingsToRead />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

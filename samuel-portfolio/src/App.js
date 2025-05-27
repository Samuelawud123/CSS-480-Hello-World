import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
import ThingsToRead from './components/ThingsToRead.jsx';
import BreakthroughPage from './pages/BreakthroughPage.jsx';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/things-to-read" element={<ThingsToRead />} />
          <Route path="/breakthrough" element={<BreakthroughPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

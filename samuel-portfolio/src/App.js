import React from 'react';
import './styles/globals.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Interests from './components/Interests';

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Project />
      <Interests />
    </div>
  );
}

export default App;

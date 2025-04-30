import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Project from './Project';
import Interests from './Interests';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Project />
      <Interests />
      
      <section id="accessibility-info">
        <h2>Keyboard Navigation Instructions</h2>
        <p>
          This site is designed to be fully navigable using only a keyboard.
        </p>
        <ul>
          <li>Press the <strong>Tab</strong> key to move focus to the next interactive element (links, buttons).</li>
          <li>Press <strong>Shift + Tab</strong> to move focus to the previous interactive element.</li>
          <li>Press <strong>Enter</strong> or <strong>Space</strong> to activate a focused link or button.</li>
        </ul>
        <p>
          This site aims to support keyboard-only users and improve navigation accessibility following usability guidelines. We especially focused on making sure each element has a clear visual focus style and that the tab order follows a logical reading flow.
        </p>
      </section>
    </>
  );
};

export default HomePage; 
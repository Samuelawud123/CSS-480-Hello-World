import React from 'react';
import styles from '../styles/Card.module.css';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      
      <div className={styles.card}>
        <h3>Bachelor's degree, Computer Science and Software Engineering</h3>
        <p>University of Washington Bothell | Mar 2024 – Mar 2025</p>
      </div>
    </section>
  );
};

export default Education; 
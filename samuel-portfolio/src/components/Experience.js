import React from 'react';
import styles from '../styles/Card.module.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      
      <div className={styles.card}>
        <h3>Security Professional</h3>
        <p>Allied Universal | Jul 2023 – Present | Seattle, WA</p>
      </div>
      
      <div className={styles.card}>
        <h3>Full Stack Developer (Volunteer)</h3>
        <p>Nolawi Tutorial Service | Jun 2024 – Present | Remote</p>
      </div>
    </section>
  );
};

export default Experience; 
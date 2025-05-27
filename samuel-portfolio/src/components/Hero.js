import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Hero.module.css';
import profileImage from '../assets/Profile.jpg';
import breakthroughImg from '../assets/breakthrough/img1.jpeg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Samuel Awud</h1>
        <h2>Junior Computer Science Student @ University of Washington Bothell</h2>
        <p>Welcome to my portfolio! I'm passionate about software engineering and creating meaningful applications.</p>
      </div>
      <div className={styles.heroImageContainer}>
        <img 
          src={profileImage} 
          alt="Samuel Awud"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
};

export default Hero; 
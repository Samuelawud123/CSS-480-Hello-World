import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/things-to-read">Things to Read</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/breakthrough" className={styles.breakthroughNavBtn}>
            2025 AI Breakthroughs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar; 
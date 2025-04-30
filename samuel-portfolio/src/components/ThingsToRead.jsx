import React from 'react';
import styles from '../styles/ThingsToRead.module.css';

const links = [
  { url: 'https://www.w3schools.com/', name: 'W3Schools' },
  { url: 'https://developer.mozilla.org/', name: 'MDN Web Docs' },
  { url: 'https://webaim.org/', name: 'WebAIM' },
  { url: 'https://news.ycombinator.com/', name: 'Hacker News' },
  { url: 'https://css-tricks.com/', name: 'CSS-Tricks' },
  { url: 'https://react.dev/', name: 'React Docs' },
  { url: 'https://www.freecodecamp.org/', name: 'freeCodeCamp' },
  { url: 'https://www.smashingmagazine.com/', name: 'Smashing Magazine' },
  { url: 'https://alistapart.com/', name: 'A List Apart' },
  { url: 'https://dev.to/', name: 'DEV Community' }
];

const ThingsToRead = () => {
  return (
    <section id="things-to-read">
      <h2>Things to Read</h2>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ThingsToRead; 
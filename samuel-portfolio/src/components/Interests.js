import React, { useState } from 'react';
import styles from '../styles/Interests.module.css';

const Interests = () => {
  const initialInterests = [
    'React.js',
    'JavaScript',
    'Django',
    'RESTful APIs',
    'AI / LLMs'
  ];

  const [interests, setInterests] = useState(initialInterests);

  const shuffleInterests = () => {
    const shuffled = [...interests];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    setInterests(shuffled);
  };

  return (
    <section id="interests">
      <h2>Interests & Skills</h2>
      
      <ul className={styles.interestsList}>
        {interests.map((interest, index) => (
          <li key={index} className={styles.interestItem}>
            {interest}
          </li>
        ))}
      </ul>
      
      <button 
        className={styles.shuffleButton} 
        onClick={shuffleInterests}
      >
        Reorder Interests
      </button>
    </section>
  );
};

export default Interests; 
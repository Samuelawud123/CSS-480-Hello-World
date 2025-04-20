import React from 'react';
import styles from '../styles/Card.module.css';

const Project = () => {
  return (
    <section id="project">
      <h2>Project</h2>
      
      <div className={styles.projectCard}>
        <h3>AI Doctor's Assistant (Aug 2024 – Oct 2024)</h3>
        <p>
          Designed a full‑stack web application using React and Django; integrated a fine‑tuned Llama 3.1 model; 
          optimized a 13K‑Q&A dataset with quantization; implemented JWT authentication; 
          deployed on Hugging Face Inference Endpoints.
        </p>
      </div>
    </section>
  );
};

export default Project; 
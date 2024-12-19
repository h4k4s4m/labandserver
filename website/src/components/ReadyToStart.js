import React from 'react';
import styles from '../css/styles.module.css';

function ReadyToStart() {
  return (
    <div className={styles.ctaContainer}>
      <a href="planning-your-lab" className={`${styles.button} button button--primary`}>Plan Your Lab →</a>
      <a href="../parts-list" className={`${styles.button} button button--secondary`}>View Equipment Guide →</a>
    </div>
  );
}

export default ReadyToStart;

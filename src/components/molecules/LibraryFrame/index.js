import React from 'react';
import styles from './index.module.scss';

const LibraryFrame = ({ label, children }) => (
  <section className={styles.libraryFrame}>
    <div className={styles.inner}>
      <h4 className={styles.label}>{label}</h4>
      <div className={styles.posts}>
        {children}
      </div>
    </div>
  </section>
);

export default LibraryFrame;
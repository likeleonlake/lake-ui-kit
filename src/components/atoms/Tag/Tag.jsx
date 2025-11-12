import React from 'react';
import styles from './Tag.module.css';

export const Tag = ({ label, icon: Icon }) => {
  return (
    <span className={styles.tag}>
      {Icon && <Icon className={styles.tag__icon} />}
      <span className={styles.tag__label}>{label}</span>
    </span>
  );
};
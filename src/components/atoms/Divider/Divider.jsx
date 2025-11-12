import React from 'react';
import styles from './Divider.module.css';

export const Divider = ({ variant = 'solid', orientation = 'horizontal' }) => {
  return (
    <div 
      className={`${styles.divider} ${styles[`divider--${variant}`]} ${styles[`divider--${orientation}`]}`}
      role="separator"
      aria-orientation={orientation}
    />
  );
};

import React from 'react'
import styles from '../styles/slider.module.css';

export const Slider = ({children}: any) => {
  return (
    <div className={styles.Slider}>
      {children}
    </div>
  )
}


import React from 'react'
import styles from '../styles/slider.module.css';

interface SliderProps<T> {
  children: T[]
}

export const Slider = <T extends any>({children}: SliderProps<T> ) => {
  return (
    <div className={styles.Slider}>
      {children}
    </div>
  )
}

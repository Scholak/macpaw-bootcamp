import React from 'react'
import styles from './BreedGrid.module.scss'

interface BreedGridProps {
  children: React.ReactNode
}

const BreedGrid = ({ children }: BreedGridProps) => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  )
}

export default BreedGrid

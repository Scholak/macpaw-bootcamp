'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { FaAngleLeft } from 'react-icons/fa'
import styles from './BackButton.module.scss'

const BackButton = () => {
  const router = useRouter()
  
  return (
		<button onClick={() => router.back()} className={styles.button}>
			<FaAngleLeft />
		</button>
	)
}

export default BackButton

'use client'

import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import girlAndPet from '@/assets/girl-and-pet.png'
import styles from './HomapageImage.module.scss'

const HomapageImage = () => {
  const { theme } = useSelector((state: RootState) => state.theme)

	return (
		<div className={`${styles.imageWrapper} ${theme === 'dark' ? styles.dark : ''}`}>
			<Image src={girlAndPet} alt='girl and pet image' />
		</div>
	)
}

export default HomapageImage

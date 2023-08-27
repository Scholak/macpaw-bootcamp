import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import girlAndPet from '@/assets/girl-and-pet.png'
import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'MacPaw',
	description: 'Macpaw bootcamp test',
}

const HomePage = () => {
	return (
		<div className={styles.imageWrapper}>
			<Image src={girlAndPet} alt='girl and pet image' />
		</div>
	)
}

export default HomePage

import React from 'react'
import { Metadata } from 'next'
import { BackButton, LikesDislikes, PageTitle } from '@/components'
import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Dislikes',
}

export const revalidate = 0

const DislikesPage = () => {
	return (
		<section className={styles.dislikesSection}>
			<div className={styles.heading}>
				<BackButton />
				<PageTitle text='DISLIKES' />
			</div>
			<LikesDislikes type='dislikes' />
		</section>
	)
}

export default DislikesPage

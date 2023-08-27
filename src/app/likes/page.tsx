import React from 'react'
import { Metadata } from 'next'
import { BackButton, LikesDislikes, PageTitle } from '@/components'
import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Likes',
}

export const revalidate = 0

const LikesPage = () => {
  return (
		<section className={styles.likesSection}>
			<div className={styles.heading}>
				<BackButton />
				<PageTitle text='LIKES' />
			</div>
			<LikesDislikes type='likes' />
		</section>
	)
}

export default LikesPage

import React from 'react'
import { Metadata } from 'next'
import { BackButton, Favorites, PageTitle } from '@/components'
import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Favorites',
}

export const revalidate = 0

const FavoritesPage = () => {
  return (
		<section className={styles.favoritesSection}>
			<div className={styles.heading}>
				<BackButton />
				<PageTitle text='FAVORITES' />
			</div>
			<Favorites/>
		</section>
	)
}

export default FavoritesPage

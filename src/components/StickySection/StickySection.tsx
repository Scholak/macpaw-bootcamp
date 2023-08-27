import React from 'react'
import { store } from '@/store/store'
import { Card } from '@/components'
import voteTable from '@/assets/vote-table.png'
import petBreeds from '@/assets/pet-breeds.png'
import imagesSearch from '@/assets/images-search.png'
import styles from './StickySection.module.scss'

const StickySection = () => {
	const { theme } = store.getState().theme

  return (
		<section className={`${styles.stickySection} ${theme === 'dark' ? styles.dark : ''}`}>
			<div className={styles.wrapper}>
				<div className={styles.upperText}>
					<h1>Hi!👋</h1>
					<p>Welcome to MacPaw Bootcamp 2023</p>
				</div>
				<section className={styles.cardsSection}>
					<h2>Lets start using The Cat API</h2>
					<div className={styles.cards}>
						<Card img={voteTable} text='VOTING' to='/voting' variant='purple' />
						<Card img={petBreeds} text='BREEDS' to='/breeds' variant='green' />
						<Card
							img={imagesSearch}
							text='GALLERY'
							to='/gallery'
							variant='orange'
						/>
					</div>
				</section>
			</div>
		</section>
	)
}

export default StickySection

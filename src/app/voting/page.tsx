import React from 'react'
import { Metadata } from 'next'
import { BackButton, PageTitle, Vote } from '@/components'
import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Voting',
}

export const revalidate = 0

const VotingPage = () => {

  return (
		<section className={styles.votingSection}>
			<div className={styles.heading}>
				<BackButton />
				<PageTitle text='VOTING' />
			</div>
			<Vote />
		</section>
	)
}

export default VotingPage

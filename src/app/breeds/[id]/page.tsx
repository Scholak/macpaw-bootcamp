import React from 'react'
import { Metadata } from 'next'
import { BackButton, BreedDetail, PageTitle } from '@/components'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Breed Detail',
  description: 'Description of the breed'
}

export const revalidate = 0

interface BreedDetailPage {
	params: {
		id: string
	}
}

const BreedDetailPage = ({ params }: BreedDetailPage) => {
  return (
		<section className={styles.breedDetailSection}>
			<div className={styles.heading}>
				<BackButton />
				<PageTitle text='BREEDS' />
				<PageTitle text={params.id} />
			</div>
			<BreedDetail id={params.id} />
		</section>
	)
}

export default BreedDetailPage

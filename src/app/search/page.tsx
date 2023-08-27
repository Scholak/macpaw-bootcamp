import React from 'react'
import { Metadata } from 'next'
import { BackButton, PageTitle, SearchResults } from '@/components'
import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Search Results',
}

export const revalidate = 0

interface SearchPageProps {
	searchParams: {
		query: string
	}
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
	return (
		<section className={styles.searchSection}>
			<div className={styles.heading}>
				<BackButton />
				<PageTitle text='SEARCH' />
			</div>
			<SearchResults query={searchParams.query} />
		</section>
	)
}

export default SearchPage

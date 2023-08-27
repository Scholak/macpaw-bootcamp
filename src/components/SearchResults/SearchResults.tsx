'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useQuery } from 'react-query'
import { fetchImages } from '@/services/breedService'
import { BreedGrid } from '@/components'
import styles from './SearchResults.module.scss'

interface SearchResultsProps {
  query: string
}

const SearchResults = ({ query }: SearchResultsProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)

  const router = useRouter()

  const { data, isLoading } = useQuery({
		queryKey: ['breeds'],
		queryFn: () => fetchImages(20, 'asc', 'static', query),
	})

  useEffect(() => {
    if (query === '') {
      router.push('/breeds')
    }
  }, [query, router])

  return (
		<section className={`${styles.resultsSection} ${theme === 'dark' ? styles.dark : ''}`}>
			<p className={styles.resultText}>
				Search results for: <span>{query}</span>
			</p>
			<div
				className={styles.breeds}
			>
				{isLoading && <div className='loading-text'>loading...</div>}
				<BreedGrid>
					{data?.map((image: any) => (
						<div key={image.id} className={styles.breed}>
							<Image
								src={image?.url}
								alt='breed image'
								width={300}
								height={300}
							/>
							<p>{image.breeds[0]?.name}</p>
							<div className={styles.overlay}></div>
						</div>
					))}
				</BreedGrid>
			</div>
		</section>
	)
}

export default SearchResults

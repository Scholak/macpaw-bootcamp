'use client'

import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useQuery } from 'react-query'
import { fetchBreedById, fetchBreedImage } from '@/services/breedService'
import { Carousel } from 'react-responsive-carousel'
import styles from './BreedDetail.module.scss'

interface BreedDetailProps {
  id: string
}

const BreedDetail = ({ id }: BreedDetailProps) => {
	const { theme } = useSelector((state: RootState) => state.theme)
	
  const { data, isLoading } = useQuery({
		queryKey: ['breed', id],
		queryFn: () => fetchBreedById(id),
	})

	const { data: images } = useQuery({
		queryKey: ['breed_image'],
		queryFn: () => fetchBreedImage(data.id),
		enabled: !!data,
	})

  return (
		<div>
			{isLoading && <div className='loading-text'>Loading...</div>}
			{data && (
				<>
					<div className={styles.carouselWrapper}>
						<Carousel
							emulateTouch={true}
							showArrows={false}
							showStatus={false}
							showThumbs={false}
						>
							{images?.map((image: any) => (
								<div key={image.url} className={styles.imageWrapper}>
									<Image src={image.url} alt='breed image' width={600} height={360} />
								</div>
							))}
						</Carousel>
					</div>
					<div className={`${styles.content} ${theme === 'dark' ? styles.dark : ''}`}>
						<div className={styles.top}>
							<h2>{data.name}</h2>
							<p>Family companion cat</p>
						</div>
						<div className={styles.bottom}>
							<div className={styles.left}>
								<p>
									<span>Temperament:</span> {data.temperament}
								</p>
							</div>
							<div className={styles.right}>
								<p>
									<span>Origin:</span> {data.origin}
								</p>
								<p>
									<span>Weight:</span> {data.weight.metric}
								</p>
								<p>
									<span>Life Span:</span> {data.life_span} years
								</p>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default BreedDetail

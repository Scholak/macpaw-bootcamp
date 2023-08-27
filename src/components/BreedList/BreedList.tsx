'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useQuery } from 'react-query'
import { fetchCategories, fetchImages } from '@/services/breedService'
import { BackButton, BreedGrid, PageTitle } from '@/components'
import styles from './BreedList.module.scss'

const BreedList = () => {
	const { theme } = useSelector((state: RootState) => state.theme)

	const [limit, setLimit] = useState<number>(10)
	const [order, setOrder] = useState<'asc' | 'desc' | 'rand'>('rand')
	const [category, setCategory] = useState<string>()

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['breeds'],
		queryFn: () => fetchImages(limit, order, 'static', category),
	})

	const { data: categories } = useQuery({
		queryKey: ['categories'],
		queryFn: () => fetchCategories(),
	})

	const handleChangeOrder = (order: 'asc' | 'desc') => {
		setOrder(order)
	}

	const handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLimit(Number(e.target.value))
	}

	const handleFilterCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value)
	}

	useEffect(() => {
		refetch()
	}, [limit, order, category, refetch])

	return (
		<section
			className={`${styles.breedsSection} ${
				theme === 'dark' ? styles.dark : ''
			}`}
		>
			<div className={styles.heading}>
				<BackButton />
				<PageTitle text='BREEDS' />
				<select onChange={handleFilterCategories} className={styles.category}>
					<option value=''>All Breeds</option>
					{categories?.map((category: any, idx: number) => (
						<option key={idx} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
				<select onChange={handleChangeLimit} defaultValue='10' className={styles.limit}>
					<option value='5'>Limit 5 items per page</option>
					<option value='10'>Limit 10 items per page</option>
					<option value='15'>Limit 15 items per page</option>
					<option value='20'>Limit 20 items per page</option>
				</select>
				<button
					onClick={() => handleChangeOrder('asc')}
					className={`${styles.orderBtn} ${
						order === 'asc' ? styles.active : ''
					}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='40'
						viewBox='0 0 40 40'
						fill='none'
					>
						<rect width='40' height='40' rx='10' fill='#F8F8F7' />
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M15 9.21284C15.2603 8.92905 15.6825 8.92905 15.9428 9.21284L19.9428 13.5728L19 14.6005L16.1381 11.481V30.8H14.8047V11.481L11.9428 14.6005L11 13.5728L15 9.21284ZM26.1381 10.4533C25.0335 10.4533 24.1381 11.4294 24.1381 12.6333V14.8133H28.1381V12.6333C28.1381 11.4294 27.2426 10.4533 26.1381 10.4533ZM28.1381 16.2667V19.1733H29.4714V12.6333C29.4714 10.6267 27.979 9 26.1381 9C24.2971 9 22.8047 10.6267 22.8047 12.6333V19.1733H24.1381V16.2667H28.1381ZM22.8047 20.6267H26.8047C28.2775 20.6267 29.4714 21.928 29.4714 23.5333C29.4714 24.4015 29.1222 25.1807 28.5686 25.7133C29.1222 26.2459 29.4714 27.0252 29.4714 27.8933C29.4714 29.4986 28.2775 30.8 26.8047 30.8H22.8047V20.6267ZM26.8047 24.9867C27.5411 24.9867 28.1381 24.336 28.1381 23.5333C28.1381 22.7307 27.5411 22.08 26.8047 22.08H24.1381V24.9867H26.8047ZM24.1381 26.44H26.8047C27.5411 26.44 28.1381 27.0907 28.1381 27.8933C28.1381 28.696 27.5411 29.3467 26.8047 29.3467H24.1381V26.44Z'
							fill={order === 'asc' && theme === 'dark' ? '#FF868E' : '#8C8C8C'}
						/>
					</svg>
				</button>
				<button
					onClick={() => handleChangeOrder('desc')}
					className={`${styles.orderBtn} ${
						order === 'desc' ? styles.active : ''
					}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='40'
						viewBox='0 0 40 40'
						fill='none'
					>
						<rect width='40' height='40' rx='10' fill='#F8F8F7' />
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M14.8047 29.319V10H16.1381V29.319L19 26.1995L19.9428 27.2272L15.9428 31.5872C15.8178 31.7234 15.6482 31.8 15.4714 31.8C15.2946 31.8 15.125 31.7234 15 31.5872L11 27.2272L11.9428 26.1995L14.8047 29.319ZM26.1381 11.4533C25.0335 11.4533 24.1381 12.4294 24.1381 13.6333V15.8133H28.1381V13.6333C28.1381 12.4294 27.2426 11.4533 26.1381 11.4533ZM28.1381 17.2667V20.1733H29.4714V13.6333C29.4714 11.6267 27.979 10 26.1381 10C24.2971 10 22.8047 11.6267 22.8047 13.6333V20.1733H24.1381V17.2667H28.1381ZM22.8047 21.6267H26.8047C28.2775 21.6267 29.4714 22.928 29.4714 24.5333C29.4714 25.4015 29.1222 26.1807 28.5686 26.7133C29.1222 27.2459 29.4714 28.0252 29.4714 28.8933C29.4714 30.4986 28.2775 31.8 26.8047 31.8H22.8047V21.6267ZM26.8047 25.9867C27.5411 25.9867 28.1381 25.336 28.1381 24.5333C28.1381 23.7307 27.5411 23.08 26.8047 23.08H24.1381V25.9867H26.8047ZM24.1381 27.44H26.8047C27.5411 27.44 28.1381 28.0907 28.1381 28.8933C28.1381 29.696 27.5411 30.3467 26.8047 30.3467H24.1381V27.44Z'
							fill={
								order === 'desc' && theme === 'dark' ? '#FF868E' : '#8C8C8C'
							}
						/>
					</svg>
				</button>
			</div>
			<div>
				{isLoading && <div className='loading-text'>loading...</div>}
				<div className={styles.breeds}>
					<BreedGrid>
						{data?.map((image: any) => (
							<Link
								key={image.id}
								href={`/breeds/${image.breeds[0]?.id}`}
								className={`${styles.link}`}
							>
								<Image
									src={image?.url}
									alt='breed image'
									width={300}
									height={300}
								/>
								<p>{image.breeds[0]?.name}</p>
								<div className={styles.overlay}></div>
							</Link>
						))}
					</BreedGrid>
				</div>
			</div>
		</section>
	)
}

export default BreedList

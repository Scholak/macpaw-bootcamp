'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useMutation, useQuery } from 'react-query'
import { fetchCategories, fetchImages, voteBreed } from '@/services/breedService'
import { BreedGrid } from '@/components'
import { toast } from 'react-toastify'
import { FaRegHeart } from 'react-icons/fa'
import styles from './Filters.module.scss'

const Filters = () => {
	const { theme } = useSelector((state: RootState) => state.theme)

  const [order, setOrder] = useState<string>('rand')
	const [type, setType] = useState<string>('static')
	const [limit, setLimit] = useState<number>(10)
	const [category, setCategory] = useState<string>()

	const { mutateAsync } = useMutation(voteBreed)

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['breedImages'],
		queryFn: () => fetchImages(limit, order, type, category),
	})

	const { data: categories } = useQuery({
		queryKey: ['categories'],
		queryFn: () => fetchCategories(),
	})

	const handleChangeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setOrder(e.target.value)
	}

	const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setType(e.target.value)
	}

	const handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLimit(Number(e.target.value))
	}

	const handleFilterCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value)
	}

	const handleLikeBreed = async (id: string) => {
		await mutateAsync({image_id: id, user_id: 'my-user-1234', value: 1}, {
      onError: (error, variables, context) => {
        toast.error('could not liked')
      },
      onSuccess: (data, variables, context) => {
        toast.success('liked successfully')
      },
    })
	}

	useEffect(() => {
		refetch()
		fetchImages()
	}, [order, type, limit, category, refetch])

  return (
		<>
			<div
				className={`${styles.filters} ${theme === 'dark' ? styles.dark : ''}`}
			>
				<div className={styles.filter}>
					<p className={styles.label}>ORDER</p>
					<select onChange={handleChangeOrder} defaultValue='rand'>
						<option value='rand'>Random</option>
						<option value='asc'>Asc</option>
						<option value='desc'>Desc</option>
					</select>
				</div>
				<div className={styles.filter}>
					<p className={styles.label}>TYPE</p>
					<select onChange={handleChangeType} defaultValue='static'>
						<option value='all'>All</option>
						<option value='static'>Static</option>
						<option value='animated'>Animated</option>
					</select>
				</div>
				<div className={styles.filter}>
					<p className={styles.label}>BREED</p>
					<select onChange={handleFilterCategories}>
						<option value=''>All Breeds</option>
						{categories?.map((category: any, idx: number) => (
							<option key={idx} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</div>
				<div className={styles.filter}>
					<p className={styles.label}>LIMIT</p>
					<select onChange={handleChangeLimit} defaultValue='10'>
						<option value='5'>Limit 5 items per page</option>
						<option value='10'>Limit 10 items per page</option>
						<option value='15'>Limit 15 items per page</option>
						<option value='20'>Limit 20 items per page</option>
					</select>
				</div>
			</div>

			<div>
				<div
					className={`${styles.breeds} ${theme === 'dark' ? styles.dark : ''}`}
				>
					{isLoading && <div className='loading-text'>loading...</div>}
					<BreedGrid>
						{data?.map((image: any) => (
							<div
								key={image.id}
								className={`${styles.breed}`}
								onClick={() => handleLikeBreed(image.id)}
							>
								<Image
									src={image?.url}
									alt='breed image'
									width={300}
									height={300}
								/>
								<span>
									<FaRegHeart />
								</span>
								<div className={styles.overlay}></div>
							</div>
						))}
					</BreedGrid>
				</div>
			</div>
		</>
	)
}

export default Filters

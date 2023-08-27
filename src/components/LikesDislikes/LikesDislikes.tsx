'use client'

import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useMutation, useQuery } from 'react-query'
import { deleteBreedVote, fetchDislikes, fetchLikes } from '@/services/breedService'
import { BreedGrid } from '@/components'
import { toast } from 'react-toastify'
import { FaRegHeart } from 'react-icons/fa'
import styles from './Likes.module.scss'

interface LikesDislikesProps {
	type: 'likes' | 'dislikes'
}

const LikesDislikes = ({ type }: LikesDislikesProps) => {
	const { theme } = useSelector((state: RootState) => state.theme)

	const { data, isLoading, refetch } = useQuery({
		queryKey: type === 'likes' ? ['likes'] : ['dislikes'],
		queryFn: type === 'likes' ? fetchLikes : fetchDislikes,
	})

	const { mutateAsync } = useMutation(deleteBreedVote)

	const deleteVote = async (vote_id: number) => {
		await mutateAsync(vote_id, {
			onError: (error, variables, context) => {
				toast.error('vote could not deleted')
			},
			onSuccess: (data, variables, context) => {
				toast.success('vote deleted successfully')
			},
			onSettled: (data, error, variables, context) => {
				refetch()
			},
		})
	}

	return (
		<div className={`${styles.breeds} ${theme === 'dark' ? styles.dark : ''}`}>
			{isLoading && <div className='loading-text'>loading...</div>}
			<BreedGrid>
				{data?.map((breed: any) => (
					<div key={breed.id} className={styles.breed} onClick={() => deleteVote(breed.id)}>
						<Image src={breed.image?.url} alt='breed image' width={300} height={300} />
						<span>
							<FaRegHeart />
						</span>
						<div className={styles.overlay}></div>
					</div>
				))}
			</BreedGrid>
			{!isLoading && data?.length === 0 && (
				<p className={styles.empty}>No item found</p>
			)}
		</div>
	)
}

export default LikesDislikes

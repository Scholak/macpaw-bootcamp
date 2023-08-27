'use client'

import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useMutation, useQuery } from 'react-query'
import { fetchRandomBreed, fetchVotes, voteBreed } from '@/services/breedService'
import { toast } from 'react-toastify'
import { AiOutlineSmile, AiOutlineHeart, AiOutlineFrown } from 'react-icons/ai'
import dayjs from 'dayjs'
import styles from './Vote.module.scss'

const Vote = () => {
  const { theme } = useSelector((state: RootState) => state.theme)

  const { mutateAsync } = useMutation(voteBreed)

  const { data, refetch } = useQuery({
		queryKey: ['randomBreed'],
		queryFn: fetchRandomBreed,
	})

  const { data: votes, refetch: refetchVotes } = useQuery({
		queryKey: ['votes'],
		queryFn: fetchVotes,
	})

  const getVoteType = (voteValue: number) => {
    const valueArray = ['', 'Likes', 'Favorites', 'Dislikes']

    return valueArray[voteValue]
  }

  const generateVoteIcon = (voteValue: number) => {
    const iconArray = [
			'',
			<AiOutlineSmile key='like' className={`${styles.icon} ${styles.like}`} />,
			<AiOutlineHeart key='favorite' className={`${styles.icon} ${styles.favorite}`} />,
			<AiOutlineFrown key='dislike' className={`${styles.icon} ${styles.dislike}`} />,

		]

    return iconArray[voteValue]
  }

  const handleVote = async (value: number) => {
    await mutateAsync({image_id: data.id, user_id: 'my-user-1234', value}, {
      onError: (error, variables, context) => {
        toast.error('could not vote')
      },
      onSuccess: (data, variables, context) => {
        toast.success('voted successfully')
      },
      onSettled(data, error, variables, context) {
        refetch()
        refetchVotes()
      },
    })
  }

  return (
		<div className={`${styles.vote} ${theme === 'dark' ? styles.dark : ''}`}>
			{data && (
				<>
					<div className={styles.imageWrapper}>
						<Image src={data.url} alt='breed image' width={600} height={320} />
					</div>
					<div className={styles.actions}>
						<button onClick={() => handleVote(1)}>
							<AiOutlineSmile />
						</button>
						<button onClick={() => handleVote(2)}>
							<AiOutlineHeart />
						</button>
						<button onClick={() => handleVote(3)}>
							<AiOutlineFrown />
						</button>
					</div>
				</>
			)}
			<div className={styles.votes}>
				{votes?.map((vote: any) => (
					<div key={vote.id} className={styles.vote}>
						<span>{dayjs(vote.created_at).format('HH:mm')}</span>
						<p>
							Image ID: <strong>{vote.image_id}</strong> was added to{' '}
							{getVoteType(vote.value)}
						</p>
						{generateVoteIcon(vote.value)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Vote

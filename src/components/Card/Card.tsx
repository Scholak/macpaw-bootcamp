'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import styles from './Card.module.scss'


interface CardProps {
	img: StaticImageData
	text: string
	to: string
	variant: 'purple' | 'green' | 'orange'
}

const Card = ({ img, text, to, variant }: CardProps) => {
	const { theme } = useSelector((state: RootState) => state.theme)
	const pathname = usePathname()

  return (
		<div className={`${styles.card} ${styles[variant]} ${theme === 'dark' ? styles.dark : ''}`}>
			<div className={styles.imageWrapper}>
				<Image src={img} alt='card image' />
			</div>
			<Link
				className={`${styles.button} ${pathname === to ? styles.active : ''}`}
				href={to}
			>
				{text}
			</Link>
		</div>
	)
}

export default Card

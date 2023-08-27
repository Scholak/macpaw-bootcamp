'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { AiOutlineSmile, AiOutlineHeart, AiOutlineFrown } from 'react-icons/ai'
import styles from './NavLinks.module.scss'

const NavLinks = () => {
	const { theme } = useSelector((state: RootState) => state.theme)
	const pathname = usePathname()
	
	return (
		<ul className={`${styles.links} ${theme === 'dark' ? styles.dark : ''}`} style={{ display: pathname === '/' ? 'none' : ''}}>
			<li className={pathname === '/likes' ? styles.active : ''}>
				<Link href='/likes'>
					<AiOutlineSmile />
				</Link>
			</li>
			<li className={pathname === '/favorites' ? styles.active : ''}>
				<Link href='/favorites'>
					<AiOutlineHeart />
				</Link>
			</li>
			<li className={pathname === '/dislikes' ? styles.active : ''}>
				<Link href='/dislikes'>
					<AiOutlineFrown />
				</Link>
			</li>
		</ul>
	)
}

export default NavLinks

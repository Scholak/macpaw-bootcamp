'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import {  Logo, MobileMenu, NavLinks, SearchBar, ThemeSwitcher } from '@/components'
import { FaBars } from 'react-icons/fa'
import styles from './Navbar.module.scss'

const Navbar = () => {
	const pathname = usePathname()

	const { theme } = useSelector((state: RootState) => state.theme)

	const [open, setOpen] = useState<boolean>(false)

  return (
		<>
			<nav className={`${styles.navbar} ${theme === 'dark' ? styles.dark : ''}`}>
				<div className={styles.left}>
					<Logo />
					<ThemeSwitcher />
				</div>
				<div className={styles.right}>
					<div className={`${styles.burgerIcon} ${pathname === '/' ? styles.homepage : ''}`} onClick={() => setOpen(true)}>
						<FaBars />
					</div>
					<SearchBar />
					<NavLinks />
				</div>
				<MobileMenu open={open} setOpen={setOpen} />
			</nav>
		</>
	)
}

export default Navbar

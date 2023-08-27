import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { store } from '@/store/store'
import logo from '@/assets/logo.png'
import styles from './Logo.module.scss'

const Logo = () => {
  const { theme } = store.getState().theme

  return (
		<Link href='/' className={`${styles.logo} ${theme === 'dark' ? styles.dark : ''}`}>
			<Image src={logo} alt='logo image' />
			<span>PetsPaw</span>
		</Link>
	)
}

export default Logo

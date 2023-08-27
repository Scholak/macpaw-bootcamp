'use client'

import React, { useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
	const { theme } = useSelector((state: RootState) => state.theme)

	const searchParams = useSearchParams()

	const router = useRouter()
	const pathname = usePathname()

	const [query, setQuery] = useState<string>(searchParams.get('query') || '')

	const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const handleRedirect = () => {
		if (query !== '') {
			router.push(`/search?query=${query}`)
		}
	}

  return (
		<div className={`${styles.searchBar} ${theme === 'dark' ? styles.dark : ''}`} style={{ display: pathname === '/' ? 'none' : '' }}>
			<input type='text' placeholder='Search for breeds by name' value={query} onChange={handleChangeQuery} />
			<div className={styles.iconWrapper} onClick={handleRedirect}>
				<AiOutlineSearch />
			</div>
		</div>
	)
}

export default SearchBar

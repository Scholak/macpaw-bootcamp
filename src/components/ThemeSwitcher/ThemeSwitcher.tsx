'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { switchTheme } from '@/store/slices/themeSlice'
import { FaRegEye } from 'react-icons/fa'
import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher = () => {
  const dispatch = useDispatch()

  const { theme } = useSelector((state: RootState) => state.theme)

  const handleToggle = () => {
    dispatch(switchTheme())
  }

  return (
		<div className={`${styles.switch} ${theme === 'dark' ? styles.active : ''}`} onClick={handleToggle}>
			<div className={styles.iconWrapper}>
				<FaRegEye />
			</div>
			<button>
				<span></span>
			</button>
		</div>
	)
}

export default ThemeSwitcher

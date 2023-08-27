'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Card } from '@/components'
import { AiOutlineClose } from 'react-icons/ai'
import voteTable from '@/assets/vote-table.png'
import petBreeds from '@/assets/pet-breeds.png'
import imagesSearch from '@/assets/images-search.png'
import styles from './MobileMenu.module.scss'

interface MobileMenuProps {
  open: boolean
	setOpen: (open: boolean) => void
}

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)

  return (
		<div className={`${styles.menu} ${open ? styles.open : ''} ${theme === 'dark' ? styles.dark : ''}`}>
			<div className={styles.cards} onClick={() => setOpen(false)}>
        <Card img={voteTable} text='VOTING' to='/voting' variant='purple' />
        <Card img={petBreeds} text='BREEDS' to='/breeds' variant='green' />
        <Card img={imagesSearch} text='GALLERY' to='/gallery' variant='orange' /> 
      </div>
			<div className={styles.closeIcon} onClick={() => setOpen(false)}>
        <AiOutlineClose />
      </div>
		</div>
	)
}

export default MobileMenu

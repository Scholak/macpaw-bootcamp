'use client'

import React, { useState } from 'react'
import { BackButton, Filters, PageTitle, UploadModal } from '@/components'
import { AiOutlineUpload } from 'react-icons/ai'
import styles from './Gallery.module.scss'

const Gallery = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

	const handleFileUpload = () => {
		setOpenModal(!openModal)
	}

  return (
		<section className={styles.gallerySection}>
			<div className={styles.heading}>
				<div className={styles.leftSide}>
					<BackButton />
					<PageTitle text='GALLERY' />
				</div>
				<div className={styles.uploadBtn} onClick={handleFileUpload}>
					<AiOutlineUpload />
					<span>UPLOAD</span>
				</div>
			</div>
			{!openModal && <Filters />}
			{openModal && <UploadModal setOpenModal={setOpenModal} />}
		</section>
	)
}

export default Gallery

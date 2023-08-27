'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useMutation } from 'react-query'
import { uploadBreedImage } from '@/services/breedService'
import Dropzone from 'react-dropzone'
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClose } from 'react-icons/ai'
import styles from './UploadModal.module.scss'

interface UploadModalProps {
	setOpenModal: (openModal: boolean) => void
}

const UploadModal = ({ setOpenModal }: UploadModalProps) => {
	const { theme } = useSelector((state: RootState) => state.theme)

  const [file, setFile] = useState<string>()
	const [status, setStatus] = useState<string>('initial')

	const { mutateAsync } = useMutation(uploadBreedImage)

	const handleUploadFile = (files: any) => {
		files.forEach((file: any) => {
			const reader = new FileReader()

			reader.readAsDataURL(file)

			reader.onload = () => {
				const result = reader.result as string
				setFile(result)
			}
		})
	}

	const handleUploadImage = async () => {
		if (file) {
			await mutateAsync(file, {
				onError: (error, variables, context) => {
					setStatus('error')
				},
				onSuccess: (data, variables, context) => {
					setStatus('success')
				},
			})
			setFile('')
		}
	}

  return (
		<>
			<div className={`${styles.modal} ${theme === 'dark' ? styles.dark : ''}`}>
				<div className={styles.closeIcon} onClick={() => setOpenModal(false)}>
					<AiOutlineClose />
				</div>
				<div className={styles.text}>
					<p className={styles.title}>Upload a .jpg or .png Cat Image</p>
					<p className={styles.subTitle}>
						Any uploads must comply with the <span>upload guidelines</span> or
						face deletion.
					</p>
				</div>
				{!file ? (
					<Dropzone onDrop={acceptedFiles => handleUploadFile(acceptedFiles)}>
						{({ getRootProps, getInputProps }) => (
							<div {...getRootProps()} className={styles.dropzone}>
								<input {...getInputProps()} />
								<p>
									<span>Drag here</span> your file or <span>Click here</span> to
									upload
								</p>
							</div>
						)}
					</Dropzone>
				) : (
					<div className={styles.imageWrapper}>
						<Image src={file} alt='uploaded image' width={500} height={300} />
					</div>
				)}
				<div className={styles.info}>
					{!file ? (
						<p>No file selected</p>
					) : (
						<button onClick={handleUploadImage}>upload photo</button>
					)}
				</div>
				{status === 'success' && (
					<div className={`${styles.status} ${styles.success}`}>
						<AiOutlineCheckCircle />
						<p>Thanks for the Upload - Cat found!</p>
					</div>
				)}
				{status === 'error' && (
					<div className={`${styles.status} ${styles.error}`}>
						<AiOutlineCloseCircle />
						<p>No Cat found - try a different one</p>
					</div>
				)}
			</div>
			<div className={styles.overlay} onClick={() => setOpenModal(false)}></div>
		</>
	)
}

export default UploadModal

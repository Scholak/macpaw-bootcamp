import React from 'react'
import { Metadata } from 'next'
import { Gallery } from '@/components'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'gallery of the cute breeds'
}

export const revalidate = 0

const GalleryPage = () => {
  return <Gallery />
}

export default GalleryPage

import React from 'react'
import { Metadata } from 'next'
import { BreedList } from '@/components'

export const metadata: Metadata = {
	title: 'Breeds',
	description: 'list of the breeds'
}

export const revalidate = 0

const BreedsPage = () => {
  return <BreedList />
}

export default BreedsPage

import React from 'react'
import { Metadata } from 'next'
import { HomapageImage } from '@/components'

export const metadata: Metadata = {
	title: 'MacPaw',
	description: 'Macpaw bootcamp test',
}

const HomePage = () => {
	return <HomapageImage />
}

export default HomePage

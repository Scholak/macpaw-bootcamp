'use client'

import React from 'react'
import { ToastContainer } from 'react-toastify'
import ReduxProvider from './ReduxProvider'
import ReactQueryProvider from './ReactQueryProvider'

interface RootClientProvidersProps {
	children: React.ReactNode
}

// Windows 11 overflow issue solution
if (typeof screen !== 'undefined' && screen.width > 1200 && screen.width < 1800) {
	// @ts-ignore
	document.body.style.zoom = 0.75
}

const RootClientProvider = ({ children }: RootClientProvidersProps) => {
	return (
		<ReactQueryProvider>
			<ReduxProvider>
				{children}
				<ToastContainer />
			</ReduxProvider>
		</ReactQueryProvider>
	)
}

export default RootClientProvider

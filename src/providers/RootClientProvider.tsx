'use client'

import React from 'react'
import { ToastContainer } from 'react-toastify'
import ReduxProvider from './ReduxProvider'
import ReactQueryProvider from './ReactQueryProvider'

interface RootClientProvidersProps {
	children: React.ReactNode
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

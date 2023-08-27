'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Navbar, StickySection } from '@/components'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

interface ClientLayoutProps {
	children: React.ReactNode
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
	const pathname = usePathname()

	const { theme } = useSelector((state: RootState) => state.theme)

	return (
		<>
			<Navbar />
			<main className={theme === 'dark' ? 'dark' : ''}>
				<div className={`left ${pathname === '/' && 'homepage'}`}>
					<StickySection />
				</div>
				<div className='right'>{children}</div>
			</main>
		</>
	)
}

export default ClientLayout

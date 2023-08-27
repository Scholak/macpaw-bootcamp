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

	/*
		Windows 11 default zoom value is 1.25
		It causes overflows and bugs in UI. the 
		code below checks the screen size and 
		sets the zoom value according to screen 
		width property.
	*/
	if (typeof screen !== 'undefined' && screen.width > 1200 && screen.width < 1800) {
		// @ts-ignore
		document.body.style.zoom = 0.75
	}

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

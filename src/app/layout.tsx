import { Jost } from 'next/font/google'
import RootClientProvider from '@/providers/RootClientProvider'
import { ClientLayout } from '@/components'
import './globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const jost = Jost({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={jost.className} suppressHydrationWarning={true}>
				<RootClientProvider>
					<ClientLayout>{children}</ClientLayout>
				</RootClientProvider>
			</body>
		</html>
	)
}

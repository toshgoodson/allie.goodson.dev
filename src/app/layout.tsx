import type { Metadata, Viewport } from 'next'
import { BOOT_SCRIPT } from '@/lib/boot'
import '@/styles/base.css'

export const metadata: Metadata = {
	metadataBase: new URL('https://allie.goodson.dev'),
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: '32x32' },
			{ url: '/favicon.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: light)' },
			{ url: '/favicon-dark.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: dark)' },
		],
	},
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#FF5B4D',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		// The boot script sets the theme/canvas classes on <html> before anything is drawn.
		<html lang="en-US" suppressHydrationWarning>
			<head>
				{/* Reserve the scrollbar's space from the start, so the boot script measures the final width
				    and the canvas doesn't rescale (and the nav doesn't jump) when the scrollbar appears. */}
				<style>{'html{scrollbar-gutter:stable}'}</style>
				{/* The site has its own dark mode, so ask the Dark Reader extension not to repaint it. */}
				<meta name="darkreader-lock" />
			</head>
			<body>
				{/* First thing in <body> (not <head>), where the reserved scrollbar space is already known. */}
				<script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
				{children}
			</body>
		</html>
	)
}

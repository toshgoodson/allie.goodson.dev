import type { Metadata } from 'next'
import Page from '@/components/Page'
import built from '@/content/about'
import '@/styles/shared.css'
import '@/styles/about.css'

export const metadata: Metadata = {
	title: 'About | Allie Goodson',
	description: 'Product designer by day. The rest of the time, I make things out of whatever I can get my hands on.',
	alternates: { canonical: '/about' },
}

export default function About() {
	return <Page id="about" built={built} fonts={['corben-700', 'shantell-full']} />
}

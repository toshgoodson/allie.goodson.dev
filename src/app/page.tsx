import type { Metadata } from 'next'
import Page from '@/components/Page'
import built from '@/content/home'
import '@/styles/home.css'

export const metadata: Metadata = {
	title: 'Allie Goodson | Product designer',
	description: 'I turn tangled systems into calm, clear interfaces. Research, flows, UI, and brand, usually as the only designer in the room.',
	alternates: { canonical: '/' },
}

export default function Home() {
	return <Page id="home" built={built} fonts={['corben-700', 'corben-400']} />
}

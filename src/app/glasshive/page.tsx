import type { Metadata } from 'next'
import Page from '@/components/Page'
import built from '@/content/glasshive'
import '@/styles/shared.css'
import '@/styles/glasshive.css'

export const metadata: Metadata = {
	title: 'GlassHive | Allie Goodson',
	description: 'The go-to designer on a CRM/PRM, from scheduling to storefronts.',
	alternates: { canonical: '/glasshive' },
}

export default function GlassHive() {
	return <Page id="glasshive" built={built} fonts={['corben-700', 'shantell-full']} />
}

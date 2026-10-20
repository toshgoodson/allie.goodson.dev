import type { Metadata } from 'next'
import Page from '@/components/Page'
import built from '@/content/boss'
import '@/styles/shared.css'
import '@/styles/boss.css'

export const metadata: Metadata = {
	title: 'BOSS Startup Science | Allie Goodson',
	description: 'The only designer at an edtech startup for founders: the design system, the academy, and the admin tools.',
	alternates: { canonical: '/boss-startup-science' },
}

export default function BossStartupScience() {
	return <Page id="boss" built={built} fonts={['corben-700', 'shantell-full']} />
}

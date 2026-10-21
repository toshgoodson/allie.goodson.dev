import type { Metadata } from 'next'
import Page from '@/components/Page'
import built from '@/content/contact'
import '@/styles/shared.css'
import '@/styles/contact.css'

export const metadata: Metadata = {
	title: 'Contact | Allie Goodson',
	description: 'Have a question, a project, or just want to talk shop? My inbox is open.',
	alternates: { canonical: '/contact' },
}

export default function Contact() {
	return <Page id="contact" built={built} fonts={['corben-700', 'shantell-full']} />
}

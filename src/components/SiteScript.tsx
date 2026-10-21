'use client'

import { useEffect } from 'react'
import { initHome } from '@/client/home'
import { initSite } from '@/client/site'

/** Wires up the page's interactive bits once it's in the browser. Renders nothing. */
export default function SiteScript({ home }: { home: boolean }) {
	useEffect(() => {
		const offs = [initSite(home ? 'home' : 'inner')]
		if (home) offs.push(initHome())
		return () => offs.forEach(off => off())
	}, [home])
	return null
}

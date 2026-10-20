import '../../assets/styles/include.scss'
import SwiperCore, { Navigation, Pagination, Controller } from 'swiper'
import React, { FC, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from '../models/redux/store'
import { useRouter } from 'next/router'


SwiperCore.use([Navigation, Pagination, Controller])


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	// https://www.joshwcomeau.com/react/the-perils-of-rehydration/
	// force rerender on hydration
	const [hasMounted, setHasMounted] = useState(false)
	useEffect(() => {
		setHasMounted(true)
	}, [])

	// Disable smooth scroll during route transitions
	// https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
	const router = useRouter()
	useEffect(() => {
		router.events.on('routeChangeStart', () => {
			document.documentElement.classList.add('normal-scroll')
		})
		router.events.on('routeChangeComplete', () => {
			document.documentElement.classList.remove('normal-scroll')
		})
	}, [])

	return <Component key={hasMounted ? 'mount' : 'notmount'} {...pageProps} />
}

export default wrapper.withRedux(MyApp)

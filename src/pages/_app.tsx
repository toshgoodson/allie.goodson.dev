import '../../assets/styles/include.scss'
import SwiperCore, { Navigation, Pagination, Controller } from 'swiper'
import React, { FC, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from '../models/redux/store'


SwiperCore.use([Navigation, Pagination, Controller])


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	// https://www.joshwcomeau.com/react/the-perils-of-rehydration/
	// force rerender on hydration
	const [hasMounted, setHasMounted] = useState(false)
	useEffect(() => {
		setHasMounted(true)
	}, [])

	return <Component key={hasMounted ? 'mount' : 'notmount'} {...pageProps} />
}

export default wrapper.withRedux(MyApp)

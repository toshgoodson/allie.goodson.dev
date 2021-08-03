import '../../assets/styles/include.scss'
import SwiperCore, { Navigation, Pagination, Controller } from 'swiper'
import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from '../models/redux/store'


SwiperCore.use([Navigation, Pagination, Controller])


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)

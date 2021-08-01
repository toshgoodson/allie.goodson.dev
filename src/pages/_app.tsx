import '../../assets/styles/include.scss'
import SwiperCore, { Navigation, Pagination, Controller } from 'swiper'

SwiperCore.use([Navigation, Pagination, Controller]);


function MyApp({ Component, pageProps }: any) {
	return <Component {...pageProps} />
}

export default MyApp

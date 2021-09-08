import { GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import { BiSmile } from 'react-icons/bi'
import tigerThumb from '../../assets/images/multimedia/tiger-1-thumb.jpg'
import tigerCloseupThumb from '../../assets/images/multimedia/tiger-1-closeup-thumb.jpg'
import tiger from '../../assets/images/multimedia/tiger-1.jpg'
import tigerCloseup from '../../assets/images/multimedia/tiger-1-closeup.jpg'
import spineThumb from '../../assets/images/multimedia/spine-jacket-1-thumb.jpg'
import spinePoster from '../../assets/images/multimedia/spine-jacket-1.jpg'
import spineVideo from '../../assets/videos/spine.webm'
import symbolsThumb from '../../assets/images/multimedia/symbols-thumb.jpg'
import symbols from '../../assets/images/multimedia/symbols.jpg'
import welding1Thumb from '../../assets/images/multimedia/welding-practice-1-thumb.jpg'
import welding2Thumb from '../../assets/images/multimedia/welding-practice-2-thumb.jpg'
import welding1 from '../../assets/images/multimedia/welding-practice-1.jpg'
import welding2 from '../../assets/images/multimedia/welding-practice-2.jpg'
import macrame2Thumb from '../../assets/images/multimedia/macrame-2-thumb.jpg'
import macrame2 from '../../assets/images/multimedia/macrame-2.jpg'
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.min.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.min.js';

import { SidebarLayout } from '../components/layout/SidebarLayout'
import { Spacer } from '../components/layout/Spacer'
import { ArtEntry } from '../components/multimedia/ArtEntry'
import { PageProps } from '../interfaces/PageProps'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'

type Props = PageProps

export default function Multimedia(props: Props) {
	const { darkMode } = useAppSelector(state => state)

	useEffect(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallerySelector: '#js-gallery',
			childSelector: '.js-gallery-item',
			loop: true,
			pswpModule: PhotoSwipe,
		})
		lightbox.on('itemData', (e: any) => {
			const element = e.itemData.element;
			if (element  && element.dataset.pswpIsVideo) {
				const videoURL = element.href;
				const imgPoster= element.dataset.pswpVideoPoster;
				e.itemData = {
					html: `<video style="height: ${e.itemData.h}px; width: ${e.itemData.w}px; object-fit: contain;" class="lightbox-video" autoplay loop poster="${imgPoster}"><source src="${videoURL}"></video>`
				}
			}
		})
		lightbox.init()

		return () => {
			lightbox.destroy()
		}
	}, [])

	const entries = [{
		year: 2019,
		title: 'Tiger 1',
		medium: 'Acrylic on wood',
		items: [{
			thumb: {
				src: tigerThumb,
				alt: 'Tiger 1'
			},
			thumbColSize: 8,
			src: tiger,
			cropped: true,
			height: 4096,
			width: 2793
		}, {
			thumb: {
				src: tigerCloseupThumb,
				alt: 'Tiger 1 closeup'
			},
			src: tigerCloseup,
			cropped: true,
			height: 4096,
			width: 2882
		}]
	}, {
		year: 2017,
		title: 'Spine Jacket 1',
		medium: '3D printed pieces & LED’s',
		items: [{
			thumb: {
				src: spineThumb,
				alt: 'Spine Jacket 1'
			},
			src: spineVideo,
			posterSrc: spinePoster,
			isVideo: true,
			cropped: true,
			height: 904,
			width: 682
		}]
	}, {
		year: 2017,
		title: 'Symbols',
		medium: 'Acrylic on reclaimed canvas',
		items: [{
			thumb: {
				src: symbolsThumb,
				alt: 'Symbols'
			},
			src: symbols,
			cropped: true,
			height: 1769,
			width: 2000
		}]
	}, {
		year: 2020,
		title: 'Welding Practice 1 & 2',
		medium: 'Steel',
		items: [{
			thumb: {
				src: welding1Thumb,
				alt: 'Welding Practice 1'
			},
			src: welding1,
			cropped: true,
			height: 2014,
			width: 2000
		}, {
			thumb: {
				src: welding2Thumb,
				alt: 'Welding Practice 2'
			},
			src: welding2,
			cropped: true,
			height: 2347,
			width: 2375
		}]
	}, {
		year: 2018,
		title: 'Macrame 2',
		medium: 'Fiber',
		items: [{
			thumb: {
				src: macrame2Thumb,
				alt: 'Macrame 2'
			},
			src: macrame2,
			cropped: true,
			height: 3873,
			width: 2296
		}]	
	}]

	return <SidebarLayout {...props} darkMode={darkMode}
		sidebarContent={<>
			<div>Here is a collection of a few of my favorite personal and collaborative projects. A few were made to experiment, some made for fun, &amp; all because I love making things.</div>
			<Spacer size={52}/>
			<div className="text-end"><small>Please click image to enlarge <BiSmile/></small></div>
		</>}
	>
		<div id="js-gallery">
			{entries.map((entry, idx, array) =>
				<React.Fragment key={idx}>
					<ArtEntry {...entry}/>
					{idx !== array.length - 1 && <Spacer size={100}/>}
				</React.Fragment>
			)}
		</div>
	</SidebarLayout>
}

export const getStaticProps: GetStaticProps<Props> = wrapper.getStaticProps(store =>
	async () => {
		return {
			props: {
				meta: {
					title: 'multimedia | allie goodson',
					description: 'Here is a collection of a few of my favorite personal and collaborative projects. A few were made to experiment, some made for fun, & all because I love making things.'
				}
			}
		}
	}
)
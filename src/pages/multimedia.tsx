import { GetStaticProps } from 'next'
import React from 'react'
import { BiSmile } from 'react-icons/bi'
import tigerThumb from '../../assets/images/multimedia/tiger-thumb.jpg'
import spineThumb from '../../assets/images/multimedia/spine-thumb.jpg'
import symbolsThumb from '../../assets/images/multimedia/symbols-thumb.jpg'
import weldingThumb from '../../assets/images/multimedia/welding-thumb.jpg'
import macrameThumb from '../../assets/images/multimedia/macrame-thumb.jpg'
import { SidebarLayout } from '../components/layout/SidebarLayout'
import { Spacer } from '../components/layout/Spacer'
import { ArtEntry } from '../components/multimedia/ArtEntry'
import { PageProps } from '../interfaces/PageProps'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'

type Props = PageProps

export default function Multimedia(props: Props) {
	const { darkMode } = useAppSelector(state => state)

	return <SidebarLayout {...props} darkMode={darkMode}
		sidebarContent={<>
			<div>Here is a collection of a few of my favorite personal and collaborative projects. A few were made to experiment, some made for fun, &amp; all because I love making things.</div>
			<Spacer size={52}/>
			<div className="text-end"><small>Please click image to enlarge <BiSmile/></small></div>
		</>}
	>
			<ArtEntry
				year={2019}
				title="Tiger 1"
				medium="Acrylic on wood"
				thumb={{
					src: tigerThumb,
					alt: 'Tiger 1'
				}}
			/>
			<Spacer size={100}/>
			<ArtEntry
				year={2017}
				title="Spine Jacket 1"
				medium="3D printed pieces & LED’s"
				thumb={{
					src: spineThumb,
					alt: 'Spine Jacket 1'
				}}
			/>
			<Spacer size={100}/>
			<ArtEntry
				year={2017}
				title="Symbols"
				medium="Acrylic on reclaimed canvas"
				thumb={{
					src: symbolsThumb,
					alt: 'Symbols'
				}}
			/>
			<Spacer size={100}/>
			<ArtEntry
				year={2020}
				title="Welding Practice 1 & 2"
				medium="Steel"
				thumb={{
					src: weldingThumb,
					alt: 'Welding Practice 1 & 2'
				}}
			/>
			<Spacer size={100}/>
			<ArtEntry
				year={2018}
				title="Macrame 2"
				medium="Fiber"
				thumb={{
					src: macrameThumb,
					alt: 'Macrame 2'
				}}
			/>
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
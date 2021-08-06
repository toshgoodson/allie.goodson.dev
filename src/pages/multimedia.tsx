import { GetStaticProps } from 'next'
import React from 'react'
import { ContentContainer } from '../components/layout/ContentContainer'
import { MainLayout } from '../components/layout/MainLayout'
import { PageProps } from '../interfaces/PageProps'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'

type Props = PageProps

export default function Multimedia(props: Props) {
	const { darkMode } = useAppSelector(state => state)

	return <MainLayout {...props} darkMode={darkMode}>
			<ContentContainer>
				<p><strong>Copyright Information &amp; Credits</strong></p>
				<p>&copy; 2021 Allie Goodson</p>
				<p>All art assets are Copyright 2021 Allie Goodson, unless mentioned otherwise, and may not be used without permission.</p>
				<p>All scripts, html, stylesheets, and such things that might generally be considered "code" are Copyright 2021 Tosh Goodson, unless mentioned otherwise, and are distributed under the AGPLv3 license. Please see <a href="https://github.com/toshgoodson/allie.goodson.dev/" rel="noopener noreferrer">https://github.com/toshgoodson/allie.goodson.dev/</a> for more information.</p>
				<p>Footer icons are from <a href="https://react-icons.github.io/react-icons/" rel="noopener noreferrer">https://react-icons.github.io/react-icons/</a>. Icons used: FiSunrise, FiSunset, HiOutlineMail, IoLogoLinkedin, RiCopyrightLine.</p>
			</ContentContainer>
		</MainLayout>
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
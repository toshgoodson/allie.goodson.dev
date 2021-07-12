import { GetStaticProps } from 'next'
import React from 'react'
import styled from 'styled-components'
import { ContentContainer } from '../components/layout/ContentContainer'
import { Props as RootProps, RootLayout } from '../components/RootLayout'

const HideOuter = styled.div`
	.navbar {
		visibility: hidden;
	}
	.footer {
		visibility: hidden;
	}
`

type Props = RootProps

export default function Copyright(props: Props) {
	return <HideOuter>
		<RootLayout {...props}>
			<ContentContainer>
				<p><strong>Copyright Information &amp; Credits</strong></p>
				<p>&copy; 2021 Allie Goodson</p>
				<p>All art assets are Copyright 2021 Allie Goodson, unless mentioned otherwise, and may not be used without permission.</p>
				<p>All scripts, html, stylesheets, and such things that might generally be considered "code" are Copyright 2021 Tosh Goodson, unless mentioned otherwise, and are distributed under the AGPLv3 license. Please see <a href="https://github.com/toshgoodson/allie.goodson.dev/" rel="noopener noreferrer">https://github.com/toshgoodson/allie.goodson.dev/</a> for more information.</p>
				<p>Footer icons are from <a href="https://react-icons.github.io/react-icons/" rel="noopener noreferrer">https://react-icons.github.io/react-icons/</a>. Icons used: FiSunrise, FiSunset, HiOutlineMail, IoLogoLinkedin, RiCopyrightLine.</p>
			</ContentContainer>
		</RootLayout>
	</HideOuter>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			meta: {
				title: 'copyright | allie goodson',
				description: 'Copyright Information & Credits.'
			}
		}
	}
}
import React from 'react'
import styled from 'styled-components'
import { Brand } from '../components/Brand'
import { ContentContainer } from '../components/layout/ContentContainer'
import { RootLayout, Props as RootProps } from '../components/RootLayout'
import { rfs } from '../models/rfs'
import { GetStaticProps } from 'next'
import { BobaContainer } from '../components/kinesis/components/BobaContainer'
import { BobaElement } from '../components/kinesis/components/BobaElement'
import meImg2x from '../../assets/images/profile/profile-me@2x.jpg'


const Subheader = styled.div`
	${rfs.fontSize('36px')}
	font-weight: bold;
`
const Wide = styled.span`
	${rfs.fontSize('24px')}
	font-family: 'Lustria', sans-serif;
	font-weight: normal;
	letter-spacing: 0.5em;
	text-transform: uppercase;
	vertical-align: middle;
	span { letter-spacing: normal; }
`

type Props = RootProps

export default function Home(props: Props) {
	return <RootLayout {...props}>
		<ContentContainer>
			<h1>Hello, I'm <Brand>Allie</Brand>.</h1>
			<Subheader>I am a designer and artist based in San Francisco.<br/>I have a passion for <Wide>aesthetic<span>s</span></Wide> &amp; actually taking a moment to stop and smell the flowers.</Subheader>
		
			<div className="row">
				<div className="col"></div>
				<div className="col-8">
					<BobaContainer>
						<BobaElement type="depth" strength={5}>
							<h1><a href="#">Marshawarma</a></h1>
							<h1><a href="#">Plant Project Prolly</a></h1>
							<h1><a href="#">& A Third Project</a></h1>
							<h1><a href="#">Various Multimedia</a></h1>
						</BobaElement>
					</BobaContainer>
				</div>
			</div>
		</ContentContainer>
	</RootLayout>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			meta: {
				title: 'home | allie goodson',
				description: "Hello, I'm Allie. I am a designer and artist based in San Francisco. I have a passion for  A E S T H E T I C S  & actually taking a moment to stop and smell the flowers."
			}
		}
	}
}
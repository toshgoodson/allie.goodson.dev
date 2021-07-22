import React, {useState} from 'react'
import styled from 'styled-components'
import { Brand } from '../components/Brand'
import { ContentContainer } from '../components/layout/ContentContainer'
import { RootLayout, Props as RootProps } from '../components/RootLayout'
import { rfs } from '../models/rfs'
import { GetStaticProps } from 'next'
import { KinesisContainer } from '../components/kinesis/components/KinesisContainer'
import { KinesisElement } from '../components/kinesis/components/KinesisElement'
import { Spacer } from '../components/layout/Spacer'
import { isDarkMode } from '../models/isDarkMode'
import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'
import { PageFooter } from '../components/PageFooter'
import Link from 'next/link'


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
const CheckOut = styled.a`
	color: inherit !important;
	display: block;
	float: right;
	${rfs.margin('0 0 40px')}
	${rfs.padding('0 10px 20px 0')}
	position: relative;
	width: 100px;
`
const ArrowContainer = styled.div`
	height: 100%;
	position: absolute;
	right: 0;
	top: 0;
	width: 0;

	& > div {
		height: 100%;
	}
`
const Arrow = styled.div`
	border-radius: 2px;
	border-right: 2px solid currentColor;
	height: 100%;

	&:after {
		content: '';
		border: 8px solid currentColor;
		border-bottom: 0;
		border-left-color: transparent;
		border-right-color: transparent;
		bottom: -2px;
		height: 8px;
		position: absolute;
		right: -9px;
		width: 16px;
	}
`

const FullHeight = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

type Props = RootProps

export default function Home(props: Props) {
	const [darkMode, setDarkMode] = useState(isDarkMode())

	return <RootLayout {...props} onChangeMode={(darkMode) => setDarkMode(darkMode)}>
		<KinesisContainer>
			<FullHeight>
				<PageHeader/>
				<PageContent>
					<ContentContainer>
						<h1>Hello, I'm <Brand>Allie</Brand>.</h1>
						<Subheader>I am a designer and artist based in San Francisco.<br/>I have a passion for <Wide>aesthetic<span>s</span></Wide> &amp; actually taking a moment to stop and smell the flowers.</Subheader>
					</ContentContainer>
				</PageContent>
				<ContentContainer>
					<Link href="/#work" passHref>
						<CheckOut>
							Check out some of my work.
							<ArrowContainer>
								<KinesisElement type="translate" strength={5} axis="y" cycle={2}>
									<Arrow/>
								</KinesisElement>
							</ArrowContainer>
						</CheckOut>
					</Link>
				</ContentContainer>
			</FullHeight>
		</KinesisContainer>
		<FullHeight id="work">
			<PageContent>
				<ContentContainer>
					<div className="row justify-content-end">
						{/* <div className="col"></div> */}
						<div className="col-auto">
							<KinesisContainer>
								<KinesisElement type="depth" strength={5}>
									<h1>Project info<br/>coming soon</h1>
									{/* <h1><a href="#">Marshawarma</a></h1>
									<h1><a href="#">Plant Project Prolly</a></h1>
									<h1><a href="#">& A Third Project</a></h1>
									<h1><a href="#">Various Multimedia</a></h1> */}
								</KinesisElement>
							</KinesisContainer>
						</div>
					</div>
				</ContentContainer>
			</PageContent>
			<PageFooter darkMode={darkMode}/>
		</FullHeight>
	</RootLayout>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			plain: true,
			meta: {
				title: 'home | allie goodson',
				description: "Hello, I'm Allie. I am a designer and artist based in San Francisco. I have a passion for  A E S T H E T I C S  & actually taking a moment to stop and smell the flowers."
			}
		}
	}
}
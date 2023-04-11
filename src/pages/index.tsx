import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import startupScienceFallback from '../../assets/images/home/boss-startup-science-preview.png'
import startupScienceImg from '../../assets/images/home/boss-startup-science-preview.webp'
import cleanSfFallback from '../../assets/images/home/clean-sf-preview.png'
import cleanSfImg from '../../assets/images/home/clean-sf-preview.webp'
import marshawarmaDarkFallback from '../../assets/images/home/marshawarma-preview-dark.png'
import marshawarmaDarkImg from '../../assets/images/home/marshawarma-preview-dark.webp'
import marshawarmaFallback from '../../assets/images/home/marshawarma-preview.png'
import marshawarmaImg from '../../assets/images/home/marshawarma-preview.webp'
import multimediaImg from '../../assets/images/home/multimedia-preview.jpg'
import multimediaVid from '../../assets/videos/spine.webm'
import { Brand } from '../components/Brand'
import { KinesisContainer } from '../components/kinesis/components/KinesisContainer'
import { KinesisElement } from '../components/kinesis/components/KinesisElement'
import { ContentContainer } from '../components/layout/ContentContainer'
import { CoreLayout } from '../components/layout/CoreLayout'
import { PageContent } from '../components/PageContent'
import { PageFooter } from '../components/PageFooter'
import { PageHeader } from '../components/PageHeader'
import { ProjectPicker } from '../components/ProjectPicker'
import { PageProps } from '../interfaces/PageProps'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'
import { rfs } from '../models/rfs'

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

type Props = PageProps

export default function Home(props: Props) {
	const { darkMode } = useAppSelector(state => state)

	return <CoreLayout {...props} darkMode={darkMode}>
		<KinesisContainer>
			<FullHeight>
				<PageHeader/>
				<PageContent>
					<ContentContainer>
						<h1>Hello, I'm <Brand>Allie</Brand>.</h1>
						<Subheader>I am a designer and artist based in California.<br/>I have a passion for <Wide>aesthetic<span>s</span></Wide> &amp; actually taking a moment to stop and smell the flowers.</Subheader>
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
				<div className="container">
					<ProjectPicker darkMode={darkMode} projects={[{
						title: 'Startup Science',
						type: 'UX Design',
						url: '/boss-startup-science',
						image: {
							sources: [{
								srcSet: startupScienceImg
							}],
							fallback: {
								src: startupScienceFallback,
								alt: 'BOSS Startup Science'
							}
						}
					}, {
						title: 'Clean SF',
						type: 'UX/UI Web Design',
						url: '/clean-sf',
						image: {
							sources: [{
								srcSet: cleanSfImg
							}],
							fallback: {
								src: cleanSfFallback,
								alt: 'Clean SF'
							}
						},
					}, {
						title: 'Marshawarma',
						type: 'UX/UI App Design',
						url: '/marshawarma',
						image: {
							sources: [{
								srcSet: marshawarmaImg
							}],
							fallback: {
								src: marshawarmaFallback,
								alt: 'Marshawarma'
							}
						},
						darkModeImage: {
							sources: [{
								srcSet: marshawarmaDarkImg
							}],
							fallback: {
								src: marshawarmaDarkFallback,
								alt: 'Marshawarma'
							}
						}
					}, {
						title: 'Various Multimedia',
						type: 'Personal Projects',
						url: '/multimedia',
						video: {
							sources: [{
								src: multimediaVid
							}],
							fallback: {
								src: multimediaImg,
								alt: 'Various Multimedia'
							}
						}
					}
					]}/>
				</div>
			</PageContent>
			<PageFooter darkMode={darkMode}/>
		</FullHeight>
	</CoreLayout>
}

export const getStaticProps: GetStaticProps<Props> = wrapper.getStaticProps(store =>
	async () => {
		return {
			props: {
				meta: {
					title: 'home | allie goodson',
					description: "Hello, I'm Allie. I am a designer and artist based in California. I have a passion for  A E S T H E T I C S  & actually taking a moment to stop and smell the flowers."
				}
			}
		}
	}
)
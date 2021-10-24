import { GetStaticProps } from 'next'
import React from 'react'
import styled from 'styled-components'
import featureScreen from '../../assets/images/cleanSf/screen-feature.webp'
import featureScreenFallback from '../../assets/images/cleanSf/screen-feature.png'
import cleanMissionLogo from '../../assets/images/cleanSf/clean-mission-logo.png'
import empathyMapImg from '../../assets/images/cleanSf/empathy-map.png'
import paperMockOne from '../../assets/images/cleanSf/paper-mock-1.jpg'
import paperMockOne2x from '../../assets/images/cleanSf/paper-mock-1@2x.jpg'
import mocksImg from '../../assets/images/cleanSf/mocks.jpg'
import mocksImg2x from '../../assets/images/cleanSf/mocks@2x.jpg'
import styleGuideImg from '../../assets/images/cleanSf/style-guide.jpg'
import refuseRefuseLogo from '../../assets/images/cleanSf/refuse-refuse-logo.png'
import rubbishLogo from '../../assets/images/cleanSf/rubbish-logo.png'
import sfPublicWorksLogo from '../../assets/images/cleanSf/sf-public-works-logo.png'
import siteMapImg from '../../assets/images/cleanSf/site-map.png'
import mobileScreen from '../../assets/images/cleanSf/screen-mobile.jpg'
import mobileScreen2x from '../../assets/images/cleanSf/screen-mobile@2x.jpg'
import desktopScreen from '../../assets/images/cleanSf/screen-desktop.jpg'
import desktopScreen2x from '../../assets/images/cleanSf/screen-desktop@2x.jpg'
import { AnalysisColumn } from '../components/AnalysisColumn'
import { ContentContainer } from '../components/layout/ContentContainer'
import { MainLayout } from '../components/layout/MainLayout'
import { Padding } from '../components/layout/Padding'
import { Spacer } from '../components/layout/Spacer'
import { Card } from '../components/projects/Card'
import { PageProps } from '../interfaces/PageProps'
import { Breakpoints } from '../models/Breakpoints'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'
import { rfs } from '../models/rfs'
import { Picture } from '../components/Picture'
import Color from 'color'

const H1 = styled.h1`
	${rfs.fontSize('48px')};
	text-transform: none;
`
const ColorBox = styled.div`
	background: ${({theme}) => theme.colors[6]};
`
const OverviewText = styled.h2`
	font-family: 'Judson', serif;
	${rfs.fontSize('42px')};
	font-weight: normal;
	line-height: 1;
	margin: 0;
`
const FeaturePicture = styled(Picture)`
	display: block;
	margin: auto;
	max-width: 739px;
`
const SitemapImage = styled.img`
	display: block;
	margin: auto;
	max-width: 864px;
`
const PaperMockImage = styled.img`
	display: block;
	margin: auto;
	max-width: 675px;
`
const Arrow = styled.span`
	color: ${({theme}) => theme.colors[4][0]};
`
const PrototypeImage = styled.img`
	display: inline-block;
	box-shadow: 0px 2px 6px ${({theme}) => Color(theme.colors[5]).alpha(0.08).toString()}, 0px 2px 12px ${({theme}) => Color(theme.colors[5]).alpha(0.4).toString()};
`
const DesktopImage = styled(PrototypeImage)`
	margin-right: 11.78%;
	margin-right: min(72px, 11.78%);
	max-width: 419px;
	width: 68.58%;
`
const MobileImage = styled(PrototypeImage)`
	max-width: 120px;
	width: 19.64%;
`
const PrototypeOffset = styled.div`
	position: relative;
	text-align: center;
	${rfs.rfs('56px', 'top')}
	white-space: nowrap;
`

type Props = PageProps

export default function CleanSf(props: Props) {
	const { darkMode } = useAppSelector(state => state)
	
	return <MainLayout {...props} darkMode={darkMode}>
		<ContentContainer>
			<div className="text-center">
				<H1>Clean SF</H1>
				<div>TLDR: A fictional responsive government website &amp; a real solution to pollution.</div>
			</div>
			<Spacer size={24} />
			<FeaturePicture sources={[{
				srcSet: featureScreen
			}]} fallback={{
				src: featureScreenFallback,
				alt: 'Clean SF device preview'
			}} />
		</ContentContainer>
		<div className="container">
			<ColorBox>
				<Padding top={24} bottom={64}>
					<ContentContainer>
						<div className="row gy-4 align-items-end">
							<div className="col-auto">
								<OverviewText>Project Overview</OverviewText>
							</div>
							<div className="col-auto fw-light">
								Tools: Adobe XD
							</div>
						</div>
						<Spacer size={64}/>
						<div className="row gy-5">
							<div className="col-12 col-md-6">
								<div className="text-uppercase text-weight-bold">
									Challenge
								</div>
								<Spacer size={24}/>
								<div className="fw-light">
									Many community cleanup organizations operate in the city of San Francisco while garbage continues to litter the streets and be illegally dumped. Cleanup events struggle to keep pace with litter and should not be relied upon solely, but the current municipal waste management solution should not be impacted.
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="text-uppercase text-weight-bold">
									Methods
								</div>
								<Spacer size={24}/>
								<div className="fw-light">
									<div><Arrow>‣</Arrow> Design a responsive and accessible website for a fictional municipal program</div>
									<Spacer size={24} />
									<div><Arrow>‣</Arrow> Branding and outreach that will encourage people to participate and support the program</div>
								</div>
							</div>
						</div>
					</ContentContainer>
				</Padding>
			</ColorBox>
		</div>
		<Spacer size={64}/>
		<ContentContainer>
			<h2>Research</h2>
			<Spacer size={12} />
			<p>To find a possible solution for San Francisco’s litter difficulties I conducted interviews of locals and explored existing programs both city-run and independent organizations.</p>
			<Spacer size={40} />
			
			<h3>Goals</h3>
			<Spacer size={12} />
			<ul>
				<li>Understand the market and identify target groups</li>
				<li>Explore resident’s experiences with litter and waste management in the city</li>
				<li>Learn how existing community cleanup groups fulfill the needs or residents</li>
				<li>Understand goals, needs, and motivations within the target group</li>
			</ul>
			<Spacer size={40} />
			<div className="row gy-4">
				<div className="col-12 col-md-6">
					<h3>User Interviews &amp; Insights</h3>
					<Spacer size={16} />
					<p>I interviewed residents of San Francisco to uncover their opinions of the current state of waste management and to gain insights regarding willingness to participate in community cleanup events. In addition, I asked a few questions about how people preferred to receive or find information regarding citywide programs.</p>
				</div>
				<div className="col-12 col-md-6">
				“Laws aren't a solution, just a tool. We need more tools.”
				-San Francisco Resident
				</div>
			</div>
			<Spacer size={56} />
			<img src={empathyMapImg} alt="Empathy map sticky notes"/>
			<Spacer size={56} />
			<div className="row gy-4">
				<div className="col-12 col-md-6">
					<Card title="Insights">
						<ul>
							<li>People participate in established city-run programs like composting and 311</li>
							<li>Residents will engage in community cleanup events by non-profit organizations</li>
							<li>People believe a culture shift will aid in cleaner streets</li>
							<li>People get information about cleanups online</li>
						</ul>
					</Card>
				</div>
				<div className="col-12 col-md-6">
					<Card title="Needs">
						<ul>
							<li>An institutionalized cleanup program that happens on a daily/weekly basis </li>
							<li>A culture shift to aid in keeping the streets of San Francisco clean</li>
							<li>Information about available programs needs to be available from more than one source</li>
						</ul>
					</Card>
				</div>
			</div>
			<Spacer size={68} />
			
			<h3>Understanding Existing Services</h3>
			<Spacer size={16} />
			<p>I chose to take a closer look at four of the most active cleanup groups in San Francisco; one was city-run and three were non-profit groups. I explored how easy it was to get information about each organization, how active they were, what unique offering or service they were bringing to San Francisco, and how they engaged with the community to gain volunteers and support.</p>
			<Spacer size={56} />
			<div className="row">
				<AnalysisColumn
					title="San Francisco Public Works"
					logo={sfPublicWorksLogo}
					strengths={[
						"Responsive site with good contrast",
						"Clear instructions and simple sign up with or without the internet",
						"Ability to work as an individual or as a group",
						"Provides information about other volunteer opportunities"
					]}
					weaknesses={[
						"User flow to arrive at volunteer information is clunky with too many steps from main DPW page",
						"Graphics load slow with a large blurry spinning wheel",
						"Program is mainly spread through word of mouth"
					]}
					index={0}/>
				<AnalysisColumn
					title="Refuse Refuse"
					logo={refuseRefuseLogo}
					strengths={[
						"Clear navigation and information",
						"Provides resources for other volunteer opportunities",
						"Active group with info about planned events"
					]}
					weaknesses={[
						"Does not address cultural differences, stating that we can be like Japan in terms of cleanliness",
						"Clearly favors certain parts of the city"
					]}
					index={1}/>
				<AnalysisColumn
					title="The Clean Mission"
					logo={cleanMissionLogo}
					strengths={[
						"Connected with local small businesses for sponsorship",
						"Site navigation is clear and easy"
					]}
					weaknesses={[
						"Inactive and out-of-date information about COVID regulations",
						"Services only a few neighborhoods in the city",
						"Not much information about how they work or how cleanup events are conducted"
					]}
					index={2}/>
				<AnalysisColumn
					title="Rubbish"
					logo={rubbishLogo}
					strengths={[
						"Unique offering to help with litter problem"
					]}
					weaknesses={[
						"Users must purchase a garbage picker that is remarkably unrefined with 3D printed parts and unorganized wires",
						"Questionable utility of data collection",
						"Surprisingly little information on organized cleanups or about the company in general",
						"Seems to be focused on one of the already cleaner areas of SF"
					]}
					index={3}/>
			</div>
			<Spacer size={45} />
			<Card>
				<p>Additional research indicates that the best way to encourage a behavior is to make the desired choice as easy as possible for a person. This is demonstrated through the psychology around opt-in versus opt-out policies. Programs that have been proven to work through this method include countries with opt-out organ donations significantly higher than countries with opt-in policies. And although San Francisco’s own composting program is not technically a choice, but enforced by the city, it is widely successful in reducing landfill waste and a normalized change for resident’s waste management.</p>
				<Spacer size={16} />
				<h3 className="text-center"><strong>Municipal programs have already changed SF’s waste culture and can again.</strong></h3>
			</Card>
			<Spacer size={60} />
			<hr />
			<Spacer size={32} />
			


			<h2>Designing for Simplicity</h2>
			<Spacer size={24} />
			
			<h3>Site Map</h3>
			<Spacer size={16} />
			<p>All links and resources have been kept within three clicks for a user on any page so any needed information about the program is easy to find and to improve SEO.</p>
			<Spacer size={16} />
			<SitemapImage src={siteMapImg} alt="Sitemap structure"/>
			<Spacer size={48} />
			
			<h3>Paper Wireframes</h3>
			<Spacer size={16} />
			<p>I quickly laid out a few versions of each of the main pages of the site in paper wireframes to decide which layout best suited the information.</p>
			<Spacer size={16} />
			<PaperMockImage src={paperMockOne} srcSet={`${paperMockOne2x} 2x`} />
			<Spacer size={48} />
			
			<h3>Lo-Fi Digital Wireframes &amp; Hi-Fi Mockups</h3>
			<Spacer size={16} />
			<p>I then developed the paper wireframes with the best features into lo-fi digital wireframes and then into  hi-fi mocks in Adobe XD. These are the wireframes and mocks for large,medium, and small sized screens.</p>
		</ContentContainer>
		<Spacer size={16} />
		<img src={mocksImg} srcSet={`${mocksImg2x} 2x`} alt="Overview of mocks created in Adobe XD" />
		<Spacer size={48} />
		<ContentContainer>
			<hr />
			<Spacer size={32} />



			<h2>Style Guide</h2>
			<Spacer size={16} />
			<p>This is intended to be a fictitious government site and is (mostly) compliant with both the San Francisco Design System and the U.S. Web Design System. The SFDS is a little sparse in some areas so I made a few decisions on my own so all elements are cohesive and accessible.</p>
		</ContentContainer>
		<Spacer size={56} />
		<div className="container">
			<img src={styleGuideImg} alt="Style guide" />
		</div>
		<Spacer size={41} />
		<div className="container">
			<ColorBox>
				<Padding top={39}>
					<ContentContainer>
						<h2>Prototypes</h2>
						<Spacer size={16} />
						<p>Click an image to check out the prototypes for both large and mobile screens:</p>
						<Spacer size={81 - 56} />
						<PrototypeOffset>
							<a href="https://xd.adobe.com/view/3011fa50-5fe7-40bd-960f-0bf2fd82cc6c-6542/?fullscreen" target="_blank">
								<DesktopImage src={desktopScreen} srcSet={`${desktopScreen2x} 2x`}/>
							</a>
							<a href="https://xd.adobe.com/view/b3dd9cca-a837-49a1-99c7-1b65e6416da0-e68e/?fullscreen" target="_blank">
								<MobileImage src={mobileScreen} srcSet={`${mobileScreen2x} 2x`}/>
							</a>
						{/* <div className="row gx-5 justify-content-center">
							<div className="col-auto">
								
							</div>
							<div className="col-auto">
								
							</div>
						</div> */}
						</PrototypeOffset>
					</ContentContainer>
				</Padding>
			</ColorBox>
		</div>
		<Spacer size={132} />

		<ContentContainer>
			<h2>Reflection</h2>
			<Spacer size={16} />
			<p>Clean SF was a big lesson for designing for accessibility which was initially my intention for building a fictional government website. If I were on a design team for the city, I would make suggestions and contributions to the existing design system so that all city and county websites are more cohesive.</p>
		</ContentContainer>
	</MainLayout>
}

export const getStaticProps: GetStaticProps<Props> = wrapper.getStaticProps(store =>
	async () => {
		return {
			props: {
				meta: {
					title: 'marshawarma | allie goodson',
					description: ''
				}
			}
		}
	}
)
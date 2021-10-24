import { GetStaticProps } from 'next'
import React from 'react'
import styled from 'styled-components'
import fkLogo from '../../assets/images/marshawarma/fk-logo.png'
import hustleNDoughLogo from '../../assets/images/marshawarma/hustle-n-dough-logo.png'
import mocks from '../../assets/images/marshawarma/mocks.png'
import paperMockOne from '../../assets/images/marshawarma/paper-mock-1.jpg'
import paperMockOne2x from '../../assets/images/marshawarma/paper-mock-1@2x.jpg'
import paperMockTwo from '../../assets/images/marshawarma/paper-mock-2.jpg'
import paperMockTwo2x from '../../assets/images/marshawarma/paper-mock-2@2x.jpg'
import paperMockThree from '../../assets/images/marshawarma/paper-mock-3.jpg'
import paperMockThree2x from '../../assets/images/marshawarma/paper-mock-3@2x.jpg'
import paradiseLogo from '../../assets/images/marshawarma/paradise-logo.png'
import homeScreenFallback from '../../assets/images/marshawarma/screen-home.png'
import homeScreen from '../../assets/images/marshawarma/screen-home.webp'
import loginScreenFallback from '../../assets/images/marshawarma/screen-login.png'
import loginScreen from '../../assets/images/marshawarma/screen-login.webp'
import mapScreenFallback from '../../assets/images/marshawarma/screen-map.png'
import mapScreen from '../../assets/images/marshawarma/screen-map.webp'
import styleGuideFallback from '../../assets/images/marshawarma/style-guide.jpg'
import styleGuide from '../../assets/images/marshawarma/style-guide.webp'
import trucksterLogo from '../../assets/images/marshawarma/truckster-logo.png'
import { AnalysisColumn } from '../components/AnalysisColumn'
import { ImageCarousel } from '../components/ImageCarousel'
import { ContentContainer } from '../components/layout/ContentContainer'
import { MainLayout } from '../components/layout/MainLayout'
import { Spacer } from '../components/layout/Spacer'
import { MarshawarmaTitle } from '../components/marshawarma/MarshawarmaTitle'
import { Picture } from '../components/Picture'
import { ProjectOverview } from '../components/projects/ProjectOverview'
import { PageProps } from '../interfaces/PageProps'
import { Breakpoints } from '../models/Breakpoints'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'
import { rfs } from '../models/rfs'

const H1 = styled.h1`
	${rfs.fontSize('40px')};
`
const MockFrame = styled.iframe`
	height: 800px;
	width: 100%;

	@media (min-width: ${Breakpoints.min.sm}px) {
		height: 900px;
	}
`

type Props = PageProps

export default function Marshawarma(props: Props) {
	const { darkMode } = useAppSelector(state => state)
	
	return <MainLayout {...props} darkMode={darkMode}>
		<ContentContainer>
			<div className="text-center">
				<H1><MarshawarmaTitle /></H1>
				<div>A customer loyalty app for a fictional food truck</div>
			</div>
			<Spacer size={24} />
			<div className="row gx-lg-5">
				<div className="col">
					<Picture sources={[{
						srcSet: loginScreen
					}]} fallback={{
						src: loginScreenFallback,
						alt: 'Marshawarma login screen'
					}} />
				</div>
				<div className="col">
					<Picture sources={[{
						srcSet: homeScreen
					}]} fallback={{
						src: homeScreenFallback,
						alt: 'Marshawarma home screen'
					}} />
				</div>
				<div className="col">
					<Picture sources={[{
						srcSet: mapScreen
					}]} fallback={{
						src: mapScreenFallback,
						alt: 'Marshawarma map screen'
					}} />
				</div>
			</div>
		</ContentContainer>
		<Spacer size={14} />
		<div className="container-xl gx-0">
			<ProjectOverview tools="Figma, Procreate">
				<p>During the Google UX Design Certificate course, participants are assigned an app design challenge through a challenge generator. My challenge was to “design a customer loyalty app for a food truck in California.” I decided to make an app for Marshawarma, a food truck specializing in Marshmallow desserts. This may sound like a “highdea”, but I just really love marshmallows and wanted to throw this idea to the universe and maybe one day Marshawarma will be realized.</p>
			</ProjectOverview>
		</div>
		<Spacer size={64} />
		<ContentContainer>
			<h2>Research</h2>
			<Spacer size={12} />
			<p>I conducted user interviews and competitive analysis to discover user behaviors and needs as well as what products and features are already available to people.</p>
			<Spacer size={36} />
			<h3>User Interviews &amp; Insights</h3>
			<p>I surveyed a group consisting of five females and two males for a total of seven interviewees. I interviewed each participant individually, asking open-ended questions about their general app usage, experiences with food ordering apps, and experiences at food trucks.</p>
			<p>Overall participants indicated they would prefer not to have an app for a singular restaurant, but would be more interested in one app for many restaurants with a reward system. A few particularly expressed a need for accurate locations and operational hours for food trucks. The Google UX Design course explicitly states not to deviate from the given app topic, so even if the overall concept of one app for a singular truck may not be viable, exploring features for an app with a wider scope while designing for this project is something I kept in mind.</p>
			<Spacer size={36} />
			<h3>Competitive Analysis</h3>
			<Spacer size={12} />
			<p>When conducting competitive analysis, I found that there are no food truck apps for a singular food truck. I instead conducted reviews of three specialty dessert food truck’s websites and their mobile site designs/features. I also found an app that let’s users find food trucks, order from them, give them ratings, and share truck events with friends.</p>
			<Spacer size={36} />
			<div className="row">
				<AnalysisColumn
					title="Paradise Cookies & Ice Cream"
					logo={paradiseLogo}
					strengths={[
						'Navigation is simple and clear',
						'Call to action button is prominent'
					]}
					weaknesses={[
						'Menu is displayed by images and is consequently less accessible',
						'Favicon is unrefined',
						'Logo has small text with poor contrast'
					]}
					index={0}/>
				
				<AnalysisColumn
					title="Hustle ‘n Dough"
					logo={hustleNDoughLogo}
					strengths={[
						'Clear and easy to find schedules and locations',
						'Easy to order ahead right from the site and mobile site',
						'Consistent and memorable branding'
					]}
					weaknesses={[
						'Due to poor contrast with background image some text is difficult to read and hamburger menu in mobile view is hard to see',
						'Swearing on site may put off certain groups of people'
					]}
					index={1}/>
				
				<AnalysisColumn
					title="FK Frozen Kuhsterd"
					logo={fkLogo}
					strengths={[
						'Unique take on frozen custard',
						'Smaller catering offerings that do not include the whole food truck',
						'Branded merch with a catchy slogan'
					]}
					weaknesses={[
						'No pricing for items on site',
						'Some parts of site have poor contrast and are hard to read',
						'Site and social media are still active, but no real updates made'
					]}
					index={2}/>

				<AnalysisColumn
					title="Truckster"
					logo={trucksterLogo}
					strengths={[
						'Map with dates & times',
						'Ratings and reviews of trucks',
						'Social media integrated',
						'Mobile ordering and filter trucks those with mobile ordering'
					]}
					weaknesses={[
						'Not many trucks have signed up to be on this platform',
						'Filter options on map are not easy to use or have a clear function'
					]}
					index={3}/>
			</div>
			<hr />
			<Spacer size={36} />
			<h2>Prototyping</h2>
			<Spacer size={12} />
			<p>After reviewing the interviews and the resulting personas I established a list of features and functionalities that included mobile ordering, a map with date picking capabilities, and a stamp reward system. My research indicated that creating an enticing environment while keeping functionality clear and easy to use is very important.</p>
			<Spacer size={36} />
			<div>
				<ImageCarousel images={[{
					src: paperMockOne,
					src2x: paperMockOne2x,
					alt: 'Wireframing done by hand on paper #1'
				}, {
					src: paperMockTwo,
					src2x: paperMockTwo2x,
					alt: 'Wireframing done by hand on paper #2'
				}, {
					src: paperMockThree,
					src2x: paperMockThree2x,
					alt: 'Wireframing done by hand on paper #3'
				}]}/>
			</div>
			<Spacer size={36} />
			<p>I then moved to Figma to develop a few screens as digital low fidelity prototypes.</p>
			<Spacer size={12} />
			<div>
				<img src={mocks}/>
			</div>
			<Spacer size={36} />
			<p>Eager to give this app some aesthetic life I obviously couldn’t help myself to picking a font and a few icons. I decided to take a deeper dive into design systems like Material Design and I also created a style guide for the Marshawarma app.</p>
			<Spacer size={12} />
			<div>
				<Picture sources={[{
						srcSet: styleGuide
					}]} fallback={{
						src: styleGuideFallback,
						alt: 'Marshawarma style guide'
					}} />
			</div>
			<Spacer size={48} />
			<p>After completing my HiFi wireframes my prototype is ready to go!</p>
			{darkMode ? 
				<MockFrame key="darkmock" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTL8a6uYYfCs0zvcXKn1Vft%2FMarshawarma%3Fnode-id%3D352%253A888%26scaling%3Dscale-down%26page-id%3D352%253A144%26starting-point-node-id%3D352%253A855" allowFullScreen/>
			:
				<MockFrame key="lightmock" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTL8a6uYYfCs0zvcXKn1Vft%2FMarshawarma%3Fnode-id%3D224%253A1650%26scaling%3Dscale-down%26page-id%3D224%253A126%26starting-point-node-id%3D224%253A1650" allowFullScreen/>
			}
			<hr />
			<Spacer size={36} />
			<h2>Reflection</h2>
			<p>The process of completing my first project has given me practice with design thinking and invaluable experience with user interviews and prototyping. After getting feedback from peers and iterating on my final designs a few times I am satisfied with the end product. What I would do differently next time is choose a topic and research how viable the idea is before moving forward with the project. I enjoyed making a funky app for an imaginary food truck, but there really isn’t a need to have one whole app for a singular food truck.</p>
			<Spacer size={36}/>
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
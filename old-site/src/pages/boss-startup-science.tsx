import { GetStaticProps } from 'next'
import React from 'react'
import styled from 'styled-components'
import designSystemImg from '../../assets/images/startupScience/design-system.webp'
import foundationalEducationImg from '../../assets/images/startupScience/foundational-education.webp'
import informationStationImg from '../../assets/images/startupScience/information-station.webp'
import dataVisualizationImg from '../../assets/images/startupScience/data-visualization.webp'
import featureScreenFallback from '../../assets/images/startupScience/screen-feature.png'
import featureScreen from '../../assets/images/startupScience/screen-feature.webp'
import { ContentContainer } from '../components/layout/ContentContainer'
import { MainLayout } from '../components/layout/MainLayout'
import { Padding } from '../components/layout/Padding'
import { Spacer } from '../components/layout/Spacer'
import { Picture } from '../components/Picture'
import { ProjectOverview } from '../components/projects/ProjectOverview'
import { PageProps } from '../interfaces/PageProps'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'
import { rfs } from '../models/rfs'

const H1 = styled.h1`
	${rfs.fontSize('48px')};
	text-transform: none;
`
const ColorBox = styled.div`
	background: ${({theme}) => theme.colors[6]};
`
const FeaturePicture = styled(Picture)`
	display: block;
	margin: auto;
	${rfs.marginBottom('48px')}
	max-width: 739px;
`
const ReferenceInfo = styled.div`
	font-style: italic;
	${rfs.fontSize('14px')}
`
const Role = styled.div`
	font-weight: bold;
`

type Props = PageProps

export default function BossStartupScience(props: Props) {
	const { darkMode } = useAppSelector(state => state)
	
	return <MainLayout {...props} darkMode={darkMode}>
		<ContentContainer>
			<div className="text-center">
				<H1>BOSS Startup Science</H1>
				<div>Pre-accelerator education for founders and a platform for investors, accelerators, and incubators to review and communicate with founders.</div>
			</div>
			<Spacer size={24} />
			<FeaturePicture sources={[{
				srcSet: featureScreen
			}]} fallback={{
				src: featureScreenFallback,
				alt: 'BOSS Startup Science login screen preview'
			}} />
		</ContentContainer>
		<div className="container-xl gx-0">
			<ProjectOverview title="Overview" tools="Figma, Adobe CC, Procreate, Jira">
				<div className="row gy-5">
					<div className="col-12 col-md-6">
						<div className="text-uppercase text-weight-bold">
							Product
						</div>
						<Spacer size={24}/>
						<div className="fw-light">
							BOSS Startup Science provides a variety of products that equal an ecosystem that both promotes excellence and resilience in founders as well as a channel for accelerators and investors to discover and communicate with startups that closely fit their desired metrics for investment. 
						</div>
						<Spacer size={12}/>
						<div className="fw-light">
							The BOSS Startup Science Pre-Accelerator Academy organizes and presents education for new founders to prevent common mistakes early on in the life of a startup and to prepare the company for investors and accelerators. BSS also organizes the startups, their founders and all pertinent information, into a database for investors, accelerators, and incubators to access and then communicate with the founders.
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="text-uppercase text-weight-bold">
							Role
						</div>
						<Spacer size={24}/>
						<div className="fw-light">
							<Role>UX Designer</Role>
							Design system creator, visual design, interaction design
						</div>
					</div>
				</div>
			</ProjectOverview>
		</div>
		<Spacer size={64}/>
		<ContentContainer>
			<h2>A fresh start</h2>
			<Spacer size={12} />
			<p>As the sole designer for BOSS Startup Science, itself being a startup, I was tasked with first creating the design system that all products would be based upon in a way that would eliminate ambiguity between myself and our engineers.</p>
			<Spacer size={56} />
			<img src={designSystemImg} alt="The color palette and basic design system"/>
			<Spacer size={56} />
			
			<h3>Foundational education</h3>
			<Spacer size={16} />
			<p>Moving quickly into product design from the design system, stakeholders were interested in a clear presentation of the educational information provided to the founders that had been compiled by startup and investing experts. I ensured all material was accessible and presented in different forms for different learning styles.</p>
			<Spacer size={56} />
			<img src={foundationalEducationImg} alt="Academic startup course catalog view"/>
			<Spacer size={56} />

			<h3>Information station</h3>
			<Spacer size={16} />
			<p>Investors, accelerators, and incubators need a way to organize the numerous startups and filter by qualities that would bring the companies most in line with their objectives to the top. Stakeholders asked for data-heavy and function-packed tables so users would have all they needed to facilitate relationships with the right founders for them.</p>
			<Spacer size={56} />
			<img src={informationStationImg} alt="User and payment management view"/>
			<Spacer size={56} />

			<h3>Data visualization</h3>
			<Spacer size={16} />
			<img src={dataVisualizationImg} alt="User and course analytics view"/>
			<Spacer size={56} />
		</ContentContainer>
		<Spacer size={41} />
		<div className="container-xl gx-0">
			<ColorBox>
				<Padding top={39} bottom={39}>
					<ContentContainer>
						<h2>Reflection & takeaways</h2>
						<Spacer size={16} />
						<p>As a startup, working at BOSS Startup Science was fast, iterative, and thrilling each day. I worked closely with the technical team to ensure that the MVP was accessible even when time restricted the aesthetic details of my designs. BSS as a product was multi-faceted, but every moving part had a purpose to facilitate valuable connections between investors and fully prepared and educated founders.</p>
						<p>In the end I designed: an educational platform, aesthetic and informational founder profiles, data visualization, chat and messaging, table organization and filtering, people and permissions management, and informational dashboards. I am happy to have had the opportunity to work on such a diverse product and grateful for the connections I have made with my coworkers.</p>

						<ReferenceInfo>References and letters of recommendation available upon request.</ReferenceInfo>
					</ContentContainer>
				</Padding>
			</ColorBox>
		</div>
		
	</MainLayout>
}

export const getStaticProps: GetStaticProps<Props> = wrapper.getStaticProps(store =>
	async () => {
		return {
			props: {
				meta: {
					title: 'boss startup science | allie goodson',
					description: 'An overview of my professional UX/UI work during my employment at BOSS Startup Science.'
				}
			}
		}
	}
)
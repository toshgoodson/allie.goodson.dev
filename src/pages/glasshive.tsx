import { GetStaticProps } from 'next'
import React from 'react'
import styled from 'styled-components'
import mocksAndWidgetsImg from '../../assets/images/glasshive/mocks-and-widgets.webp'
import calendarDesignImg from '../../assets/images/glasshive/calendar-design.webp'
import featureThanksImg from '../../assets/images/glasshive/feature-thanks.webp'
import featureLogoFallback from '../../assets/images/glasshive/feature-logo.png'
import featureLogo from '../../assets/images/glasshive/feature-logo.webp'
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
const WarmColorBox = styled.div`
	background: ${({theme}) => theme.colors[7]};
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

export default function GlassHive(props: Props) {
	const { darkMode } = useAppSelector(state => state)
	
	return <MainLayout {...props} darkMode={darkMode}>
		<ContentContainer>
			<div className="text-center">
				<H1>GlassHive</H1>
				<div>GlassHive is a comprehensive sales and marketing platform that helps technology companies generate leads, nurture prospects, and close deals through a unified content and automation system.</div>
			</div>
			<Spacer size={24} />
			<FeaturePicture sources={[{
				srcSet: featureLogo
			}]} fallback={{
				src: featureLogoFallback,
				alt: 'GlassHive logo and icons graphic'
			}} />
		</ContentContainer>
		<div className="container-xl gx-0">
			<ProjectOverview title="Overview" tools="Figma, Adobe XD, Adobe CC, Jira">
				<div className="row gy-5">
					<div className="col-12 col-md-6">
						<div className="text-uppercase text-weight-bold">
							Product
						</div>
						<Spacer size={24}/>
						<div className="fw-light">
							GlassHive is a sales and marketing platform built for technology companies, offering a single solution to create, distribute, and track content. It helps businesses generate leads and close deals by integrating sales and marketing activities into one system, providing tools for email marketing, social media management, and sales automation.
						</div>
						<Spacer size={12}/>
						<div className="fw-light">
							The platform provides a data-driven approach by offering detailed analytics and reporting on campaign performance. This enables companies to automate tasks and optimize their strategies to improve ROI. In short, GlassHive streamlines sales and marketing operations to help technology businesses grow.
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="text-uppercase text-weight-bold">
							Role
						</div>
						<Spacer size={24}/>
						<div className="fw-light">
							<Role>UX/UI Designer</Role>
							<ul>
								<li>Design and create user interfaces</li>
								<li>Develop user flows and wireframes</li>
								<li>Build interactive prototypes</li>
								<li>Ensure brand consistency</li>
								<li>Collaborate with engineering</li>
								<li>Quality of life improvements</li>
								<li>Figma adoption [migration from XD]</li>
								<li>Design system advocate</li>
								<li>Component library contributor</li>
							</ul>
						</div>
					</div>
				</div>
			</ProjectOverview>
		</div>
		<Spacer size={64}/>
		<ContentContainer>
			<h2>Creating Thoughtful Integration</h2>
			<Spacer size={16} />
			<p>As the lead design liaison for the FirstConnect Digital project, I guided a complex integration between a strategic third-party partner and our internal development team. By bridging technical and creative needs, I ensured the solution was designed and delivered seamlessly, resulting in a successful launch that earned strong recognition from the partner and showcased my ability to manage high-stakes, cross-functional collaborations.</p>
			<Spacer size={56} />
			<img src={mocksAndWidgetsImg} alt="Highlight of mocks and widgets from the comprehensive design flow"/>
			<Spacer size={56} />
			<p>To support this integration, I created comprehensive design flows and detailed specifications that addressed multiple user scenarios, including payment states, email communications, and widget behavior. By documenting UI call-outs and edge cases with clarity, I ensured engineers and partners had the guidance they needed to implement without ambiguity. This structured approach not only accelerated development but also reinforced consistency and usability across the product.</p>
			<Spacer size={41} />
		</ContentContainer>
		<div className="container-xl gx-0">
			<WarmColorBox>
				<Padding top={39} bottom={39}>
					<ContentContainer>
						<h3>Calendar Redesign</h3>
						<Spacer size={16} />
						<p>I led the complete redesign of the calendar feature, transforming it from a static tool into a dynamic scheduling hub. This project addressed long-standing usability challenges while introducing powerful new capabilities such as integrated meeting scheduling, flexible daily and weekly views, and streamlined booking flows. The result was a tool that not only looked modern but also directly improved efficiency for users managing busy schedules.</p>
						<Spacer size={56} />
						<img src={calendarDesignImg} alt="Overview of the completed calendar redesign"/>
						<Spacer size={56} />
						<p>My process included analyzing user pain points, mapping out end-to-end scheduling scenarios, and creating detailed design flows that covered everything from widgets and overlays to booking links and automated emails. By optimizing navigation and visual hierarchy, I made it easier for users to switch contexts, coordinate meetings, and stay on top of their commitments. The redesign significantly enhanced both functionality and satisfaction, positioning the calendar as a core productivity driver within the platform.</p>
					</ContentContainer>
				</Padding>
			</WarmColorBox>
		</div>
		<ContentContainer>
			<Spacer size={56} />
			<img src={featureThanksImg} alt="Thanks for visiting my portfolio!"/>
			<Spacer size={56} />
		</ContentContainer>
		<div className="container-xl gx-0">
			<ColorBox>
				<Padding top={39} bottom={39}>
					<ContentContainer>
						<h2>Beyond Major Projects</h2>
						<Spacer size={16} />
						<p>In addition to leading large-scale initiatives, I also drove impactful improvements that strengthened both our product and design practice. I led the company-wide migration from Adobe XD to Figma, ensuring a smooth transition that quickly met business needs and improved collaboration across teams. This shift allowed design and development teams to stay productive with minimal disruption while unlocking immediate workflow efficiencies.</p>
						
						<p>I also took initiative to address critical bugs, errors, and inconsistencies across the app. By partnering closely with developers, I delivered quality-of-life improvements that resulted in a more stable, reliable product—directly contributing to user satisfaction and retention.</p>

						<p>These efforts highlight my dependability and adaptability. Whether guiding complex integrations, redesigning core features, or tackling cross-team challenges, I consistently had my hands in many aspects of the GlassHive project, ensuring that both users and the business saw meaningful results.</p>

						<ReferenceInfo>References available upon request.</ReferenceInfo>
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
					title: 'glasshive | allie goodson',
					description: 'An overview of my professional UX/UI design work during my employment at GlassHive.'
				}
			}
		}
	}
)
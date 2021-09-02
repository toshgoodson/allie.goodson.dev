import { GetStaticProps } from 'next'
import React from 'react'
import styled from 'styled-components'
import strokeImg from '../../assets/images/stroke.png'
import { Brand } from '../components/Brand'
import { ContentContainer } from '../components/layout/ContentContainer'
import { MainLayout } from '../components/layout/MainLayout'
import { PageProps } from '../interfaces/PageProps'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'
import { rfs } from '../models/rfs'
import { Swoop as BaseSwoop, swoopHoverCss } from "../components/Swoop"

const Swoop = styled(BaseSwoop)`
	&:after {
		background-image: linear-gradient(to right, ${({theme}) => theme.colors[2][0]}, ${({theme}) => theme.colors[2][0]}) !important;
	}
`
const Email = styled(Brand)`
	color: ${({theme}) => theme.colors[1]};
	${rfs.fontSize('44px')}

	a { 
		color: inherit !important;
	
		&:hover ${Swoop} {
			${swoopHoverCss}
		}
	}
	
`
const ColorSection = styled.div`
	background: ${({theme}) => theme.colors[3]};
	flex: 1;
	${rfs.padding('5px 0 120px')}
`
const Subheader = styled.div`
	font-family: 'Judson', serif;
	${rfs.fontSize('31px')}
	font-weight: bold;
`

type Props = PageProps

export default function Contact(props: Props) {
	const { darkMode } = useAppSelector(state => state)

	return <MainLayout {...props} darkMode={darkMode}>
		<ContentContainer>
			<Email as="h1"><a href="mailto:allie@goodson.dev" target="_blank"><Swoop>allie@goodson.dev</Swoop></a></Email>
		</ContentContainer>
		<ColorSection>
			<ContentContainer>
				<Subheader>Let’s connect! Email me anytime about questions, project collaborations, UX work, or whatever else.</Subheader>
			</ContentContainer>
		</ColorSection>
	</MainLayout>
}

export const getStaticProps: GetStaticProps<Props> = wrapper.getStaticProps(store =>
	async () => {
		return {
			props: {
				meta: {
					title: 'contact | allie goodson',
					description: "Hello, I'm Allie. I am a designer and artist based in San Francisco. Let’s connect! Email me anytime about questions, project collaborations, UX work, or whatever else."
				}
			}
		}
	}
)
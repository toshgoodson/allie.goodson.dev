import React from 'react'
import styled from 'styled-components'
import { Brand } from '../components/Brand'
import { ContentContainer } from '../components/layout/ContentContainer'
import { RootLayout, Props as RootProps } from '../components/RootLayout'
import { rfs } from '../models/rfs'
import strokeImg from '../../assets/images/stroke.png'
import { GetStaticProps } from 'next'

const Swoop = styled.span`
	display: inline-block;
	position: relative;

	&:after {
		background: linear-gradient(to right, ${({theme}) => theme.colors[2][0]}, ${({theme}) => theme.colors[2][0]}) no-repeat right;
		background-size: 0% auto;
		content: '';
		height: 1em;
		left: 0.25em;
		mask: url(${strokeImg});
		mask-position: center;
		mask-repeat: no-repeat;
		mask-size: 100% 100%;
		position: absolute;
		top: -0.05em;
		transition: background-size 0.15s ease-out, background-position 0s ease-out;
		width: 100%;
		z-index: -1;
	}
`
const Email = styled(Brand)`
	color: ${({theme}) => theme.colors[1]};
	${rfs.fontSize('44px')}

	a { 
		color: inherit !important;
	
		&:hover ${Swoop}:after {
			background-position: left;
			background-size: 100% auto;
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

type Props = RootProps

export default function Contact(props: Props) {
	return <RootLayout {...props}>
		<ContentContainer>
			<Email as="h1"><a href="mailto:allie@goodson.dev" target="_blank"><Swoop>allie@goodson.dev</Swoop></a></Email>
		</ContentContainer>
		<ColorSection>
			<ContentContainer>
				<Subheader>Let’s connect! Email me anytime about questions, project collaborations, UX work, or whatever else.</Subheader>
			</ContentContainer>
		</ColorSection>
	</RootLayout>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			meta: {
				title: 'contact | allie goodson',
				description: "Hello, I'm Allie. I am a designer and artist based in San Francisco. Let’s connect! Email me anytime about questions, project collaborations, UX work, or whatever else."
			}
		}
	}
}
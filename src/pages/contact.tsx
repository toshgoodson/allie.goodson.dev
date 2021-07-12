import React from 'react'
import styled from 'styled-components'
import { Brand } from '../components/Brand'
import { ContentContainer } from '../components/layout/ContentContainer'
import { RootLayout } from '../components/RootLayout'
import { rfs } from '../models/rfs'

const Email = styled(Brand)`
	color: ${({theme}) => theme.colors[1]};
	${rfs.fontSize('44px')}
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

export default function Contact() {
	return <RootLayout flexContent={true}>
		<div>
			<ContentContainer>
				<Email as="h1">allie@goodson.dev</Email>
			</ContentContainer>
		</div>
		<ColorSection>
			<ContentContainer>
				<Subheader>Let’s connect! Email me anytime about questions, project collaborations, UX work, or whatever else.</Subheader>
			</ContentContainer>
		</ColorSection>
	</RootLayout>
}

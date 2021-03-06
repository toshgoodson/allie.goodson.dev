import React from 'react'
import styled from 'styled-components'

const SmallContainer = styled.div`
	max-width: 960px;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
`

export const ContentContainer: React.FC = ({children}) => {
	return <SmallContainer>
		<div className="container gx-reset">{children}</div>
	</SmallContainer>
}
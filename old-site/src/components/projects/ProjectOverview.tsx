import React, { FC } from 'react'
import styled from 'styled-components'
import { rfs } from '../../models/rfs'
import { ContentContainer } from '../layout/ContentContainer'
import { Padding } from '../layout/Padding'
import { Spacer } from '../layout/Spacer'

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

export type Props = {
	title?: string
	tools: string
}

export const ProjectOverview: FC<Props> = ({title, tools, children}) => {
	return <ColorBox>
		<Padding top={24} bottom={64}>
			<ContentContainer>
				<div className="row gy-4 align-items-end">
					<div className="col-auto">
						<OverviewText>{title ?? 'Project Overview'}</OverviewText>
					</div>
					<div className="col-auto fw-light">
						Tools: {tools}
					</div>
				</div>
				<Spacer size={64}/>
				{children}
			</ContentContainer>
		</Padding>
	</ColorBox>
}
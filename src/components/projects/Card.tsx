import React, { FC } from 'react'
import styled from 'styled-components'
import { Padding } from '../layout/Padding'
import { Spacer } from '../layout/Spacer'

const Box = styled.div`
	border: 3px solid ${({ theme }) => theme.colors[4][0]};
	border-radius: 15px;
	box-shadow: 12px 12px ${({ theme }) => theme.colors[4][0]};
`

export type Props = {
	title?: string
}

export const Card: FC<Props> = (props) => {
	const padding = props.title != null ? {
		top: 12,
		bottom: 15,
		right: 15,
		left: 15
	} : {
		top: 24,
		bottom: 24,
		right: 28,
		left: 28
	}

	return <Box>
		<Padding {...padding}>
			{props.title != null && <>
				<h3>{props.title}</h3>
				<Spacer size={8} />
				<hr />
				<Spacer size={8} />
			</>}
			{props.children}
		</Padding>
	</Box>
}
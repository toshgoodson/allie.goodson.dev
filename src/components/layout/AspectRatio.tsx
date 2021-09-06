import React, { FC } from "react"
import styled from "styled-components"



const Outer = styled.div<Props>`
	padding-bottom: ${({aspectWidth, aspectHeight}) => aspectHeight / aspectWidth * 100}%;
	position: relative;
`
const Inner = styled.div`
	bottom: 0;
	display: flex;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`

type Props = {
	aspectWidth: number
	aspectHeight: number
}

export const AspectRatio: FC<Props> = (props) => {
	return <Outer {...props}>
		<Inner>
			{props.children}
		</Inner>
	</Outer>
}
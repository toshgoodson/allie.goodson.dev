import styled from "styled-components"

type Props = {
	top?: number
	right?: number
	bottom?: number
	left?: number
}
export const Padding = styled.div<Props>`
	padding: ${({top, right, bottom, left}) => `${top ?? 0}px ${right ?? 0}px ${bottom ?? 0}px ${left ?? 0}px`};
`
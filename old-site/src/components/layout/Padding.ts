import styled from "styled-components"
import { rfs } from "../../models/rfs"

type Props = {
	top?: number
	right?: number
	bottom?: number
	left?: number
}
export const Padding = styled.div<Props>`
	${({top, right, bottom, left}) => rfs.padding(`${top ?? 0}px ${right ?? 0}px ${bottom ?? 0}px ${left ?? 0}px`)}
`
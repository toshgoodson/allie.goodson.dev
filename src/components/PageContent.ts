import styled from "styled-components"
import { rfs } from "../models/rfs"

export const PageContent = styled.div<{flex: boolean}>`
	display: ${({flex})=> flex ? 'flex': 'block'};
	flex-direction: column;
	flex-grow: 1;
	${rfs.padding('120px 0 94px')}
`
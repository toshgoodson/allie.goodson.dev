import styled from "styled-components"
import { rfs } from "../../models/rfs"

export const Spacer = styled.div<{size: number}>`
	${({size}) => rfs.marginBottom(size+'px')}
`
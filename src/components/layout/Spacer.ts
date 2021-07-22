import styled from "styled-components"
import { rfs } from "../../models/rfs"

export const Spacer = styled.div<{size: string}>`
	${({size}) => rfs.marginBottom(size)}
`
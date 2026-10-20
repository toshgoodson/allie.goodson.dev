import styled from "styled-components"
import { Breakpoints } from "../../models/Breakpoints"

export const FixedContainer = styled.div`
    margin: auto;
	width: 100%;

	@media (min-width: ${Breakpoints.min.sm}px) {
		width: 540px;
	}
	@media (min-width: ${Breakpoints.min.md}px) {
		width: 720px;
	}
	@media (min-width: ${Breakpoints.min.lg}px) {
		width: 960px;
	}
	@media (min-width: ${Breakpoints.min.xl}px) {
		width: 1140px;
	}
	@media (min-width: ${Breakpoints.min.xxl}px) {
		width: 1320px;
	}
`
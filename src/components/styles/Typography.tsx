import styled, { createGlobalStyle, css, StyledProps } from "styled-components"
import { Breakpoints } from "../../models/Breakpoints"
import { rfs } from "../../models/rfs"

interface ResponsiveOptions {
	align: 'left' | 'right' | 'center' | 'justify'
}

interface TypographyProps {
	xs?: ResponsiveOptions
	sm?: ResponsiveOptions
	md?: ResponsiveOptions
	lg?: ResponsiveOptions
	xl?: ResponsiveOptions
	xxl?: ResponsiveOptions
}

const align =  (props: StyledProps<TypographyProps>) => {
	return css`
		${props.xs?.align && css`text-align: ${props.xs.align};`}

		${props.sm?.align && css`
			@media (min-width: ${Breakpoints.min.sm}px) {
				text-align: ${props.sm.align};
			}
		`}
		${props.md?.align && css`
			@media (min-width: ${Breakpoints.min.md}px) {
				text-align: ${props.md.align};
			}
		`}
		${props.lg?.align && css`
			@media (min-width: ${Breakpoints.min.lg}px) {
				text-align: ${props.lg.align};
			}
		`}
		${props.xl?.align && css`
			@media (min-width: ${Breakpoints.min.xl}px) {
				text-align: ${props.xl.align};
			}
		`}
		${props.xxl?.align && css`
			@media (min-width: ${Breakpoints.min.xxl}px) {
				text-align: ${props.xxl.align};
			}
		`}
	`
}

const typographyMixin = css`
	${align}
`

const h1Mixin = css`
	${typographyMixin}
	${rfs.fontSize('60px')}
	font-weight: bold;
	text-transform: lowercase;
`

export const H1 = styled.h1<TypographyProps>`${h1Mixin}`

export const GlobalTypography = createGlobalStyle<{}>`
	body {
		line-height: 1.2;
	}
	h1 {
		${h1Mixin}
	}
`

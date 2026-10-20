import styled, { css } from "styled-components"
import strokeImg from '../../assets/images/stroke.png'

export const Swoop = styled.span`
	display: inline-block;
	position: relative;

	&:after {
		background-image: linear-gradient(to right, ${({theme}) => theme.colors[3]}, ${({theme}) => theme.colors[3]});
		background-position: right;
		background-repeat: no-repeat;
		background-size: 0% auto;
		content: '';
		height: 1em;
		left: 0.25em;
		mask: url(${strokeImg});
		mask-position: center;
		mask-repeat: no-repeat;
		mask-size: 100% 100%;
		position: absolute;
		top: -0.05em;
		transition: background-size 0.15s ease-out, background-position 0s ease-out;
		width: 100%;
		z-index: -1;
	}
`

export const swoopHoverCss = css`
	&:after {
		background-position: left;
		background-size: 100% auto;
	}
`
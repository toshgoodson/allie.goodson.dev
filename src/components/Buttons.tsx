import styled from "styled-components"

export const LinkButton = styled.button`
	background: none;
	border: 0;
	color: ${({theme}) => theme?.colors[2][0]};
	display: inline;
	padding: 0;
	text-decoration: none;

	&:hover, &:focus {
		color: ${({theme}) => theme?.colors[2][1]};
	}
	&:active {
		color: ${({theme}) => theme?.colors[2][2]};
	}
	&:disabled, &.disabled {
		color: ${({theme}) => theme?.colors[2][3]};
	}
`
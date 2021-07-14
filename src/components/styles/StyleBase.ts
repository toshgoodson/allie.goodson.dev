import {createGlobalStyle} from 'styled-components'
import { rfs } from '../../models/rfs'
import Color from 'color'

export const StyleBase = createGlobalStyle`
	:root {
		--test: #FF5B4D;
	}
	::selection {
		color: ${({theme}) => theme?.colors[1]};
		background: ${({theme}) => Color(theme?.colors[2][0]).alpha(0.5).toString()};
	}
	body {
		background: ${({theme}) => theme?.colors[0]};
		color: ${({theme}) => theme?.colors[1]};
		font-family: 'Open Sans', sans-serif;
		position: relative;
	}
	a {
		color: ${({theme}) => theme?.colors[2][0]};
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
	}
	img {
		width: 100%;
	}
	h1 {
		${rfs.fontSize('60px')}
		font-weight: bold;
		text-transform: lowercase;
	}
`
import {createGlobalStyle} from 'styled-components'
import { rfs } from '../../models/rfs'
import Color from 'color'

export const StyleBase = createGlobalStyle`
	::selection {
		color: ${({theme}) => theme.colors[1]};
		background: ${({theme}) => Color(theme.colors[2][0]).alpha(0.5).toString()};
	}
	body {
		background: ${({theme}) => theme.colors[0]};
		color: ${({theme}) => theme.colors[1]};
		font-family: 'Open Sans', sans-serif;
		position: relative;
	}
	a {
		color: ${({theme}) => theme.colors[2][0]};
		text-decoration: none;

		&:hover, &:focus {
			color: ${({theme}) => theme.colors[2][1]};
		}
		&:active {
			color: ${({theme}) => theme.colors[2][2]};
		}
		&:disabled, &.disabled {
			color: ${({theme}) => theme.colors[2][3]};
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
	h2 {
		${rfs.fontSize('20px')}
		font-weight: bold;
	}
	h3 {
		${rfs.fontSize('20px')}
	}
	h4 {
		font-size: inherit;
	}
	h5 {
		font-size: inherit;
	}
	hr {
		color: ${({theme}) => theme.colors[4][0]};
		margin: 0;
		opacity: 1;
	}
	ul {
		list-style: '- ';
		list-style-position: inside;
		padding: 0;

		li::marker {
			color: ${({theme}) => theme.colors[4][0]};
		}
	}
	.lightbox-video {
		display: flex;
		height: auto;
		margin: auto;
		max-height: 100%;
		max-width: 100%;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
`
import styled from "styled-components"
import { Palette } from "../models/Palette"

export const HeaderArrow = styled.div`
	background: ${Palette.blueBayoux};
	border-radius: 0 50px 0 0;
	color: ${Palette.sazerac};
	font-family: 'Zen Tokyo Zoo', sans-serif;
	margin-left: -50vw;
	margin-bottom: 50px;
	padding: 10px 0 10px 50vw;
	position: relative;

	&:after {
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-top: 25px solid ${Palette.blueBayoux};
		bottom: -30px;
		clip-path: inset(0 10px);
		content: '';
		display: block;
		position: absolute;
		right: -5px;
	}
`
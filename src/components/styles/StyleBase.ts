import {createGlobalStyle} from 'styled-components'
import { Palette } from "../../models/Palette"

export const StyleBase = createGlobalStyle`
	body {
		background: ${Palette.pickledBluewood};
		position: relative;
	}

	@media (min-width: 1200px) {
		.container {
			max-width: 1000px;
		}
	}
`
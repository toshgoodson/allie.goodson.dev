import styled from "styled-components"
import { Palette } from "../models/Palette"


export const HeaderContainer = styled.div`
	overflow: clip;
	overflow-y: visible;
`

export const HeaderSlant = styled.div`
	margin: 0 -10px;
	transform: rotate(1deg);
	transform-origin: 0% 100%;
`

const HeaderNav = styled.div`
	padding: 10vh 10px 10px;
	
	h1 {
		color: ${Palette.sazerac};
		font-family: 'Dungeon Chunk', sans-serif;
		font-size: 60px;
		margin-bottom: 0;
	}
`

export const HeaderBar = styled.div`
	height: 21px;
	margin-top: -1px; /* 1px overlap to prevent bg from showing */
	
	&:first-child {
		margin-top: 0;
	}
	&:last-child {
		height: 20px;
	}
`

export const HeaderBarOne = styled(HeaderBar)`
	background: ${Palette.blueBayoux};
`

export const HeaderBarTwo = styled(HeaderBar)`
	background: ${Palette.orangePeel};
`

export const HeaderBarThree = styled(HeaderBar)`
	background: ${Palette.salomie};
`

export const PageHeader: React.FunctionComponent = (props) => {
	return (
		<HeaderContainer>
			<HeaderSlant>
				<HeaderNav>
					<div className="container">
						{props.children}
					</div>
				</HeaderNav>
				<div>
					<HeaderBarOne/>
					<HeaderBarTwo/>
					<HeaderBarThree/>
				</div>
			</HeaderSlant>
		</HeaderContainer>
	)
}
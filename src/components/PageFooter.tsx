import React from "react"
import styled from "styled-components"
import { Palette } from "../models/Palette"
import { HeaderBar, HeaderBarOne, HeaderBarThree, HeaderBarTwo, HeaderContainer, HeaderSlant } from "./PageHeader"

const FooterSlant = styled(HeaderSlant)`
	transform-origin: 100% 100%;
`

const FooterBarSpecial = styled(HeaderBar)`
	background: ${Palette.bittersweet};
`

const FooterContent = styled.div`
	padding: 60px 0 120px;
`

const Headshot = styled.img`
	width: 200px;
	clip-path: polygon(50% 50%, 100% 50%, 50% 100%, 0 50%);
	transition: clip-path .3s ease;

	&:hover {
		clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
	}
`

export const PageFooter: React.FunctionComponent = () => {
	return (
		<HeaderContainer>
			<FooterSlant>
				<HeaderBarThree/>
				<HeaderBarTwo/>
				<FooterBarSpecial/>
				<HeaderBarOne/>
			</FooterSlant>
			<FooterContent>
				<div className="container">
					<div className="row">
						<div className="col-auto">
							<Headshot src=""/>
						</div>
						<div className="col">
							hey
						</div>
					</div>
				</div>
			</FooterContent>
		</HeaderContainer>
	)
}
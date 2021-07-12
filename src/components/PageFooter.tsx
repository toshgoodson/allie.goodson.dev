import React from "react"
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoLinkedin } from 'react-icons/io'
import styled from "styled-components"
import { rfs } from "../models/rfs"

const Padding = styled.div`
	${rfs.fontSize('30px')}
	line-height: 1;
	${rfs.padding('49px 0 41px')}
`
const StyledLinkedin = styled(IoLogoLinkedin)`
	${rfs.fontSize('37px')}
`
const StyledMail = styled(HiOutlineMail)`
	${rfs.fontSize('40px')}
`

type Props = {
	darkMode: boolean
	onClickToggleMode: () => void
}

export const PageFooter: React.FunctionComponent<Props> = (props) => {
	return (
		<Padding>
			<div className="container">
				<div className="row justify-content-end align-items-center">
					<div className="col-auto">
						<a href="#" onClick={(e: any) => {e.preventDefault(); props.onClickToggleMode()}}>{props.darkMode ? <FiSunrise title="Toggle light mode"/> : <FiSunset title="Toggle dark mode"/>}</a>
					</div>
					<div className="col-auto">
						<a href="https://www.linkedin.com/in/allie-goodson-611802b2/" target="_blank"><StyledLinkedin title="Visit my LinkedIn"/></a>
					</div>
					<div className="col-auto">
						<a href="mailto:allie@goodson.dev" target="_blank"><StyledMail title="Send me an email"/></a>
					</div>
				</div>
			</div>
		</Padding>
	)
}
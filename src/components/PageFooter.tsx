import Link from "next/link"
import React from "react"
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoLinkedin } from 'react-icons/io'
import { RiCopyrightLine } from 'react-icons/ri'
import { toast } from 'react-toastify'
import styled from "styled-components"
import { useAppDispatch } from "../models/redux/hooks"
import { rfs } from "../models/rfs"
import { LinkButton } from "./Buttons"
import { ModeToggleToastContainer } from "./ModeToggleToastContainer"


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
const StyledCopyright = styled(RiCopyrightLine)`
	${rfs.fontSize('34px')}
`

type Props = {
	darkMode: boolean
}

export const PageFooter: React.FC<Props> = (props) => {
	const dispatch = useAppDispatch()

	const handleToggleMode = () => {
		toast(props.darkMode ? 'Ah, light mode!' : 'Ooo, dark mode.', {
			containerId: 'modeToggle'
		}, )
		dispatch({type: 'TOGGLE_DARK_MODE'})
	}

	return (
		<Padding className="footer">
			<div className="container gx-reset">
				<div className="row justify-content-end align-items-center">
					<div className="col-auto position-relative">
						<ModeToggleToastContainer/>
						<LinkButton type="button" onClick={handleToggleMode}>{props.darkMode ? <FiSunrise title="Toggle light mode"/> : <FiSunset title="Toggle dark mode"/>}</LinkButton>
					</div>
					<div className="col-auto">
						<a href="https://www.linkedin.com/in/allie-goodson-611802b2/" target="_blank" rel="noopener noreferrer"><StyledLinkedin title="Visit my LinkedIn"/></a>
					</div>
					<div className="col-auto">
						<a href="mailto:allie@goodson.dev" target="_blank"><StyledMail title="Send me an email"/></a>
					</div>
					<div className="col-auto">
						<Link href="/copyright"><a target="_blank"><StyledCopyright title="&copy; 2021 Allie Goodson"/></a></Link>
					</div>
				</div>
			</div>
		</Padding>
	)
}
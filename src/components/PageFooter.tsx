import React from "react"
import { IoLogoLinkedin } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'
import styled from "styled-components"
import {rfs} from "../models/rfs"

const Padding = styled.div`
	${rfs.fontSize('30px')}
	line-height: 1;
	${rfs.padding('49px 0 41px')}
`

export const PageFooter: React.FunctionComponent = () => {
	return (
		<Padding>
			<div className="container">
				<div className="row justify-content-end">
					<div className="col-auto">
						<a href="https://www.linkedin.com/in/allie-goodson-611802b2/"><IoLogoLinkedin/></a>
					</div>
					<div className="col-auto">
						<a href="mailto:allie@goodson.dev"><HiOutlineMail/></a>
					</div>
				</div>
			</div>
		</Padding>
	)
}
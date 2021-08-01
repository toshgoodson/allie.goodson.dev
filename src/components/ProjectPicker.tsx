import Link from "next/link"
import React, { FunctionComponent } from "react"
import { useState } from "react"
import styled from "styled-components"
import { Image } from '../interfaces/Image'
import { rfs } from "../models/rfs"
import { KinesisContainer } from './kinesis/components/KinesisContainer'
import { KinesisElement } from './kinesis/components/KinesisElement'
import { Picture, Props as PictureProps } from './Picture'


const A = styled.a`
	color: ${({theme}) => theme.colors[4][0]};
	display: inline-block;
	font-family: 'Open Sans', sans-serif;
	${rfs.fontSize('16px')}
	font-weight: 300;
	transition: color 0.3s cubic-bezier(0.23, 1, 0.32, 1);
	text-transform: uppercase;

	&:hover {
		color: ${({theme}) => theme.colors[4][1]};
	}
	&:active {
		color: ${({theme}) => theme.colors[4][2]};
	}
	&:disabled {
		color: ${({theme}) => theme.colors[4][3]};
	}
`
const ProjectList = styled.ul`
	list-style: none;

	&:not(:hover) ${A} {
		color: ${({theme}) => theme.colors[4][1]};
	}
`
const ListItem = styled.li`
	${rfs.marginBottom('63px')}

	&:last-child {
		margin-bottom: 0;
	}
`

const Big = styled.span`
	font-family: 'Judson', serif;
	font-weight: bold;
	${rfs.fontSize('42px')}
	text-transform: none;
	white-space: pre;
`
const IB = styled.span`
	display: inline-block;
`

interface Project {
	url: string
	image: PictureProps
	darkModeImage?: PictureProps
	title: string
	type: string
}

export type Props = {
	darkMode: boolean
	projects: Project[]
}

export const ProjectPicker: FunctionComponent<Props> = ({darkMode, projects}) => {
	const [activeProject, setActiveProject] = useState<Project | null>(null)

	const activeImage = darkMode ? (activeProject?.darkModeImage ?? activeProject?.image) : activeProject?.image

	return <div className="row justify-content-center align-items-center">
		<div className="col d-none d-lg-block">
			{activeImage && <Picture {...activeImage}/>}
		</div>
		<div className="col-auto" onMouseLeave={() => setActiveProject(null)}>
			<KinesisContainer>
				<KinesisElement type="depth" strength={5}>
					<ProjectList>
						{projects.map((project, idx) => {
							const {title, url, type, image} = project
							return <ListItem key={idx}>
								<Link href={url} passHref><A onMouseEnter={() => setActiveProject(project)} onFocus={() => setActiveProject(project)}>{idx + 1}<wbr/><Big>   {title}   </Big><wbr/><br className="d-md-none"/><IB>{type}</IB></A></Link>
							</ListItem>
						})}
					</ProjectList>
				</KinesisElement>
			</KinesisContainer>
		</div>
	</div>
}
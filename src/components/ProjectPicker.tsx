import Link from "next/link"
import React, { FC } from "react"
import { useState } from "react"
import styled from "styled-components"
import { Image } from '../interfaces/Image'
import { Breakpoints } from "../models/Breakpoints"
import { rfs } from "../models/rfs"
import { KinesisContainer } from './kinesis/components/KinesisContainer'
import { KinesisElement } from './kinesis/components/KinesisElement'
import { Picture, Props as PictureProps } from './Picture'
import { Video, Props as VideoProps } from './Video'


const LeftAlign = styled.div`
	@media (min-width: ${Breakpoints.min.lg}px) {
		padding-left: calc((100% - 960px) / 2); /* Align with the left side of content */
	}
`
const A = styled.a<{isDisabled?: boolean}>`
	color: ${({theme}) => theme.colors[4][0]};
	${({isDisabled}) => isDisabled ? 'cursor: not-allowed;' : ''}
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
const PictureContainer = styled.div`
	height: 480px;
	text-align: center;
	width: 480px;
`
const StyledPicture = styled(Picture)`
	display: block;
	height: 100%;
	width: 100%;

	img {
		max-height: 100%;
		max-width: 100%;
		width: auto;
	}
`
const StyledVideo = styled(Video)`
	display: block;
	height: 100%;
	width: 100%;

	img {
		max-height: 100%;
		max-width: 100%;
		width: auto;
	}
`

interface BaseProject {
	url: string
	image: PictureProps
	darkModeImage?: PictureProps
	title: string
	type: string
	disabled?: boolean
}
interface ProjectWithImage extends BaseProject {
	image: PictureProps
}
interface ProjectWithVideo extends BaseProject {
	video: PictureProps
}
type Project = ProjectWithImage | ProjectWithVideo

const isProjectWithVideo = (project: Project | null): project is ProjectWithVideo => {
	return (project as any)?.video != null
}

export type Props = {
	darkMode: boolean
	projects: Project[]
}

export const ProjectPicker: FC<Props> = ({darkMode, projects}) => {
	const [activeProject, setActiveProject] = useState<Project | null>(null)

	const activeImage = darkMode ? (activeProject?.darkModeImage ?? activeProject?.image) : activeProject?.image
	const activeVideo = isProjectWithVideo(activeProject) ? activeProject.video : undefined

	return <LeftAlign>
		<div className="row justify-content-lg-start justify-content-center align-items-center">
			<div className="col-auto d-none d-lg-block">
				<PictureContainer>
					{activeImage && <StyledPicture {...activeImage}/>}
					{activeVideo && <StyledPicture as={Video} {...activeVideo} autoPlay loop/>}
				</PictureContainer>
			</div>
			<div className="col-auto col-lg" onMouseLeave={() => setActiveProject(null)}>
				<KinesisContainer>
					<KinesisElement type="depth" strength={5}>
						<ProjectList>
							{projects.map((project: Project, idx) => {
								const {title, url, type, disabled} = project
								return <ListItem key={idx}>
									<Link href={url} passHref><A onClick={disabled ? ((e) => e.preventDefault()) : undefined} isDisabled={disabled} onMouseEnter={() => setActiveProject(project)} onFocus={() => setActiveProject(project)}>{idx + 1}<wbr/><Big>   {title}   </Big><wbr/><br className="d-sm-inline d-md-none d-lg-inline d-xxl-none"/><IB>{type}</IB></A></Link>
								</ListItem>
							})}
						</ProjectList>
					</KinesisElement>
				</KinesisContainer>
			</div>
		</div>
	</LeftAlign>
}
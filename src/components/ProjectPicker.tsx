import Link from "next/link"
import React, { FunctionComponent } from "react"
import { useState } from "react"
import styled from "styled-components"
import { Image } from '../interfaces/Image'
import { rfs } from "../models/rfs"
import { KinesisContainer } from './kinesis/components/KinesisContainer'
import { KinesisElement } from './kinesis/components/KinesisElement'



const A = styled.a`
	color: ${({theme}) => theme.colors[4][0]};
	display: inline-block;
	font-family: 'Open Sans', sans-serif;
	${rfs.fontSize('16px')}
	font-weight: 300;
	transition: color 0.3s cubic-bezier(0.23, 1, 0.32, 1);

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
	white-space: pre;
`
const IB = styled.span`
	display: inline-block;
`


export type Props = {
	projects: Array<{
		url: string
		image: Image
		title: string
		type: string
	}>
}

export const ProjectPicker: FunctionComponent<Props> = ({projects}) => {
	const [activeImage, setActiveImage] = useState<Image | null>(null)

	return <div className="row justify-content-center align-items-center">
		<div className="col d-none d-lg-block">
			{activeImage && <img src={activeImage.src} alt={activeImage.alt}/>}
		</div>
		<div className="col-auto" onMouseLeave={() => setActiveImage(null)}>
			<KinesisContainer>
				<KinesisElement type="depth" strength={5}>
					<ProjectList>
						{projects.map(({title, url, type, image}, idx) => 
							<ListItem key={idx}>
								<Link href={url} passHref><A onMouseEnter={() => setActiveImage(image)} onFocus={() => setActiveImage(image)}>{idx + 1}<wbr/><Big>   {title}   </Big><wbr/><br className="d-md-none"/><IB>{type}</IB></A></Link>
							</ListItem>
						)}
					</ProjectList>
				</KinesisElement>
			</KinesisContainer>
		</div>
	</div>
}
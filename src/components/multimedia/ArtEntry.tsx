import React, { FC } from "react"
import styled from "styled-components"
import { Image } from "../../interfaces/Image"

const BlurImage = styled.img`
	height: 100%;
	filter: blur(25px);
	left: 0;
	mix-blend-mode: multiply; /* Multiply so the shadow always darkens */
	position: absolute;
	top: 0;
	transform: scale(0.96);
	transform-origin: center;
	width: 100%;
	z-index: -1;
`
const ImageContainer = styled.div`
	display: inline-block;
	box-shadow: 0px 5px 24px rgba(34, 34, 34, 0.08), 0px 2px 12px rgba(34, 34, 34, 0.4);
	/* There seems to be a bug that prevents the use of mix-blend-mode on a child element within a parent using filter */
	/* Additionally, there seems to be a spec discrepancy with how drop-shadow() and box-shadow behave, so the blur
	on box-shadow needs to be doubled to match drop-shadow(). See https://stackoverflow.com/questions/39575894/why-does-box-shadow-look-different-than-filter-drop-shadow */
	/* filter: drop-shadow(0px 5px 12px rgba(34, 34, 34, 0.08)) drop-shadow(0px 2px 6px rgba(34, 34, 34, 0.4)); */
	position: relative;
	max-width: 554px;
`

export type Props = {
	year: number
	title: string
	medium: string
	thumb: Image
}

export const ArtEntry: FC<Props> = ({year, title, medium, thumb}) => {
	return <div className="row align-items-end">
		<div className="col-3">
			({year}).<br/>
			<em>{title}</em><br/>
			[{medium}].
		</div>
		<div className="col-9">
			<ImageContainer>
				<img src={thumb.src} alt={thumb.alt}/>
				<BlurImage src={thumb.src} alt="" aria-hidden="true"/>
			</ImageContainer>
		</div>
	</div>
}
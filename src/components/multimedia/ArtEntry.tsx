import React, { FC } from "react"
import styled from "styled-components"
import { Image } from "../../interfaces/Image"
import Color from "color"
import { AspectRatio } from "../layout/AspectRatio"

const ImageContainer = styled.div`
	display: block;
	box-shadow: 0px 5px 24px ${({theme}) => Color(theme.colors[5]).alpha(0.08).toString()}, 0px 2px 12px ${({theme}) => Color(theme.colors[5]).alpha(0.4).toString()};
	/* There seems to be a bug that prevents the use of mix-blend-mode on a child element within a parent using filter */
	/* Additionally, there seems to be a spec discrepancy with how drop-shadow() and box-shadow behave, so the blur
	on box-shadow needs to be doubled to match drop-shadow(). See https://stackoverflow.com/questions/39575894/why-does-box-shadow-look-different-than-filter-drop-shadow */
	/* filter: drop-shadow(0px 5px 12px rgba(34, 34, 34, 0.08)) drop-shadow(0px 2px 6px rgba(34, 34, 34, 0.4)); */
	max-width: 554px;
	width: 100%;
`
const ArtLink = styled.a`
	display: block;
	height: 100%;
`
const Thumbnail = styled.img`
	display: block;
	height: 100%;
	object-fit: cover;
	width: 100%;
`
const Blur = styled.div`
	height: 100%;
	filter: blur(25px);
	left: 0;
	mix-blend-mode: multiply; /* Multiply so the shadow always darkens */
	pointer-events: none;
	position: absolute;
	top: 0;
	transform: scale(0.96);
	transform-origin: center;
	width: 100%;
	z-index: -2;
`

export type Props = {
	year: number
	title: string
	medium: string
	items: Array<{
		thumb: Image
		thumbColSize?: number
		height: number
		width: number
		isVideo?: boolean
		src: string
		cropped: boolean
		posterSrc?: string
	}>
}

export const ArtEntry: FC<Props> = ({year, title, medium, items}) => {
	return <>
		<div className="row align-items-end">
			<div className="col-3">
				({year}).<br/>
				<em>{title}</em><br/>
				[{medium}].
			</div>
			<div className="col-9">
				<ImageContainer>
					<AspectRatio aspectWidth={1} aspectHeight={1}>
						<div className="row gx-0 w-100 h-100">
							{items.map((item) => 
								<div className={'h-100 ' + (item.thumbColSize ? `col-${item.thumbColSize}` : 'col')}>
									<ArtLink href={item.src}
									className="js-gallery-item"
									data-pswp-width={item.width}
									data-pswp-height={item.height}
									data-cropped={item.cropped}
									data-pswp-is-video={item.isVideo}
									data-pswp-video-poster={item.posterSrc}
									target="_blank">
										<Thumbnail src={item.thumb.src} srcSet={item.thumb.src2x && `${item.thumb.src2x} 2x`} alt={item.thumb.alt}/>
									</ArtLink>
								</div>
							)}
						</div>
						<Blur>
							<div className="row gx-0 w-100 h-100">
								{items.map((item) => 
									<div className={'h-100 ' + (item.thumbColSize ? `col-${item.thumbColSize}` : 'col')}>
										<ArtLink href={item.src}
										data-pswp-width={item.width}
										data-pswp-height={item.height}
										data-cropped={item.cropped}
										data-pswp-is-video={item.isVideo}
										data-pswp-video-poster={item.posterSrc}
										target="_blank">
											<Thumbnail src={item.thumb.src} srcSet={item.thumb.src2x && `${item.thumb.src2x} 2x`} alt={item.thumb.alt}/>
										</ArtLink>
									</div>
								)}
							</div>
						</Blur>
					</AspectRatio>
				</ImageContainer>
			</div>
		</div>
	</>
}
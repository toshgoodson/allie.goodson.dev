import React, { MouseEvent, useEffect, useState } from "react"
import styled from "styled-components"


const Img = styled.img<{show: boolean}>`
	display: ${({show}) => show ? 'block' : 'none'};
	left: 0;
	position: absolute;
	top: 0;
`
const Container = styled.div`
	position: relative;
`
const AspectRatio = styled.div`
	padding-bottom: 99.6%;
	width: 100%;
`

export type Props = {
	images: Array<{
		src: string
		src2x: string
	}>
}

export const Flipbook: React.FC<Props> = (props) => {
	const [showIdx, setShowIdx] = useState(0)
	const [autoFlip, setAutoFlip] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			if (!autoFlip) return
			setShowIdx(prevIdx => (prevIdx + 1) % props.images.length)
		}, 500)
		
		return () => {
			clearInterval(interval)
		}
	}, [autoFlip])

	const handleMouseOver = () => {
		setAutoFlip(false)
	}
	const handleMouseOut = () => {
		setAutoFlip(true)
	}
	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const posX = e.pageX - e.currentTarget.offsetLeft
		const sliceSize = e.currentTarget.offsetWidth / props.images.length
		setShowIdx(Math.max(Math.floor(posX / sliceSize), 0))
	}

	return (
		<Container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onMouseMove={handleMouseMove}>
			<AspectRatio/>
			{props.images.map((image, idx) => 
				<Img key={idx} src={image.src} srcSet={`${image.src2x} 2x`} show={idx === showIdx}/>
			)}
		</Container>
	)
}
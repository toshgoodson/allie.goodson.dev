import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
`

const Noise = styled.div<{bgSrc: string, bgSize: number}>`
	animation: ${fadeIn} 4s;
	background-image: url(${({bgSrc}) => bgSrc});
	background-size: ${({bgSize}) => bgSize * 2}px;
	bottom: 0;
	left: 0;
	min-height: 100vh;
	opacity: .012;
	pointer-events: none;
	position: absolute;
	right: 0;
	top: 0; 
	z-index: 16777271;
`

/***
 * Get that page looking * C R I S P Y *
 * Idea copied from https://surma.dev/ 
 */
export const Grit: React.FC = () => {
	// some constants
	const SIZE = 64
	const PIXEL_BUFFER_SIZE = 4
	const BLACK_P = new Uint8ClampedArray([0, 0, 0, 255])
	const WHITE_P = new Uint8ClampedArray([255, 255, 255, 255])

	// react lifecycle
	const [src, setSrc] = useState('')
	useEffect(() => {
		(async () => {
			// Create canvas
			const canvas = document.createElement('canvas')
			canvas.height = canvas.width = SIZE

			// populate 
			const pixelData = new Uint8ClampedArray(SIZE * SIZE * PIXEL_BUFFER_SIZE)
			for (let idx = 0; idx < pixelData.length; idx += PIXEL_BUFFER_SIZE) {
				pixelData.set(Math.random() > 0.5 ? BLACK_P : WHITE_P, idx)
			}

			canvas.getContext('2d')?.putImageData(new ImageData(pixelData, SIZE, SIZE), 0, 0)

			const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
			setSrc(URL.createObjectURL(blob))
		})()
	}, [])

	// page-spanning div with repeating noise background
	return <Noise bgSize={SIZE} bgSrc={src}/>
}
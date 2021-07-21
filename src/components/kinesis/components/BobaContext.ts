import React from 'react'

type Props = {
	duration: number
	easing: string
	event: 'move' | 'scroll' | 'orientation'
	eventData: {
		x: number
		y: number
	}
	isMoving: boolean
	movement: {
		x: number
		y: number
		target: DOMRect | null
	}
	shape: DOMRect | null
}

export const BobaContext = React.createContext<Props | null>(null)
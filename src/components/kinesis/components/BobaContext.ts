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

export const BobaContext = React.createContext<Props>({
	duration: 1000,
	easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
	event: 'move',
	eventData: {
		x: 0,
		y: 0
	},
	isMoving: false,
	movement: {
		x: 0,
		y: 0,
		target: null
	},
	shape: null
})
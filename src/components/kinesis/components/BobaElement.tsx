import React, { FunctionComponent } from "react"
import { useContext } from "react"
import { PartialBy } from "../../../interfaces/PartialBy"
import { BobaContext } from "./BobaContext"
import elementMovement from '../utils/elementMovement'
import clamp from '../utils/clamp'
import cyclicMovement from '../utils/cyclicMovement'

export type Props = {
	tag: keyof JSX.IntrinsicElements
	type: 'translate' | 'rotate' | 'scale' | 'scaleX' | 'scaleY' | 'depth' | 'depth_inv' //| 'custom'
	transformOrigin: string
	originX: number
	originY: number
	strength: number
	audioIndex: number
	axis: string | null
	maxX: number | null
	maxY: number | null
	minX: number | null
	minY: number | null
	cycle: number
}

export const BobaElementComponent: FunctionComponent<Props> = (props) => {
	const {
		axis,
		children,
		cycle,
		strength,
		maxX,
		maxY,
		minX,
		minY,
		originX,
		originY,
		tag,
		transformOrigin,
		type } = props
	const {
		duration,
		easing,
		event,
		eventData,
		isMoving,
		movement,
		shape } = useContext(BobaContext)


	const strengthManager = () => {
		return type === 'depth' || type === 'depth_inv'
			? Math.abs(strength)
			: strength
	}
	const transformSwitch = (type: Props['type'], x: number, y: number, s: number) => {
		let transform
		switch (type) {
			case 'translate':
				transform = translateMovement(x, y)
				break
			case 'rotate':
				transform = rotateMovement(x, y)
				break
			case 'depth':
				transform = depthMovement(x, y, s)
				break
			case 'depth_inv':
				transform = depthMovement(-x, -y, s)
				break
			case 'scale':
				transform = scaleMovement(x, y)
				break
			case 'scaleX':
				transform = scaleMovement(x, y)
				break
			case 'scaleY':
				transform = scaleMovement(x, y)
				break
		}
		return transform;
	}
	const translateMovement = (x: number, y: number) => {
		return `translate3d(${-x}px, ${-y}px, 0)`;
	}
	const rotateMovement = (x: number, y: number) => {
		let movement
		if (!axis) {
			movement = x + y;
		} else if (axis === 'x') {
			movement = 2 * x;
		} else if (axis === 'y') {
			movement = 2 * y;
		}
		return `rotate3d(0,0,1,${movement}deg)`;
	}
	const depthMovement = (x: number, y: number, s: number) => {
		return `rotateX(${-y}deg) rotateY(${x}deg) translate3d(0,0,${s * 2}px)`
	}
	const scaleMovement = (x: number, y: number) => {
		const movement = (Math.sign(strength) * (Math.abs(x) + Math.abs(y))) / 10 + 1
		return `scale3d(${type === 'scaleX' || type === 'scale' ? movement : 1},
			${type === 'scaleY' || type === 'scale' ? movement : 1},
			1)`;
	}
	const transformMovement = () => {
		if (!isMoving && event === 'move') return {}
		let movementX, movementY
		const strength = strengthManager()

		if (cycle <= 0) {
			const { x, y } = elementMovement({
				...movement,
				originX,
				originY,
				strength
			})

			if (event !== 'scroll') {
				movementX = axis === 'y' ? 0 : clamp(x, minX, maxX);
				movementY = axis === 'x' ? 0 : clamp(y, minY, maxY);
			} else {
				const scrollMovement = elementMovement({
					x: movement.x,
					y: movement.y,
					originX,
					originY,
					strength,
					event
				}).y;
				movementX = axis === 'x' ? scrollMovement : 0;
				movementY = axis === 'y' || !axis ? scrollMovement : 0;
			}
		} else if (cycle > 0) {
			if (shape != null) {
				const cycleX = axis === 'x'
					? cyclicMovement({
						referencePosition:
							event === 'scroll' ? 0 : eventData.x,
						elementPosition: shape.left,
						spanningRange:
							event === 'scroll' ? window.innerWidth : shape.width,
						cycles: cycle,
					})
					: 0;
				const cycleY = axis === 'y' || !axis
					? cyclicMovement({
						referencePosition:
							event === 'scroll' ? 0 : eventData.y,
						elementPosition: shape.top,
						spanningRange:
							event === 'scroll'
								? window.innerHeight
								: shape.height,
						cycles: cycle,
					})
					: 0;
				movementX = cycleX * strength;
				movementY = cycleY * strength;
			}
		}

		const transform = transformSwitch(
			type,
			movementX,
			movementY,
			strength,
		);
		return { transform }
	}

	const transform = transformMovement()

	const Tag = tag as any

	return <Tag style={{ ...transform, transitionProperty: 'transform', transitionDuration: `${duration}ms`, transformOrigin, transitionTimingFunction: easing }}>
		{children}
	</Tag>
}

export const BobaElement: FunctionComponent<PartialBy<Props, keyof typeof defaultProps>> = BobaElementComponent as any


const defaultProps = {
	tag: 'div',
	type: 'translate',
	transformOrigin: 'center',
	originX: 50,
	originY: 50,
	strength: 10,
	audioIndex: 10,
	axis: null,
	maxX: null,
	maxY: null,
	minX: null,
	minY: null,
	cycle: 0
}
BobaElement.defaultProps = defaultProps as Props
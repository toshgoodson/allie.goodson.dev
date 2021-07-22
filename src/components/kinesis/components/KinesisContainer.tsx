import React, { FunctionComponent, useState, useEffect, useRef, MouseEvent} from "react"
import isTouch from "../utils/isTouch"
import throttle from "../utils/throttle"
import inViewport from "../utils/inViewport"
import mouseMovement from "../utils/mouseMovement"
import getCoordinates from "../utils/getCoordinates"
import orientationElement from "../utils/orientationElement"
import scrollMovement from "../utils/scrollMovement"
import { KinesisContext } from './KinesisContext'
import { PartialBy } from "../../../interfaces/PartialBy"

export type Props = {
	active: boolean
	duration: number
	easing: string
	tag: keyof JSX.IntrinsicElements
	perspective: number
	event: 'move' | 'scroll' | 'orientation'
}

const KinesisContainerComponent: FunctionComponent<Props> = (props) => {
	const {
		active,
		children,
		duration,
		easing,
		event,
		perspective,
		tag } = props

	const ref = useRef<HTMLElement>(null)
	const [isMoving, setIsMoving] = useState(false)
	const [leftOnce, setLeftOnce] = useState(false)
	const [shape, setShape] = useState<DOMRect | null>(null)
	const [movement, setMovement] = useState({
		x: 0,
		y: 0,
		target: null
	})
	const [eventData, setEventData] = useState({
		x: 0,
		y: 0
	})

	useEffect(() => {
		const eventMap = {
			orientation: 'deviceorientation',
			scroll: 'scroll',
			move: isTouch() ? 'deviceorientation' : 'move'
		}

		if (eventMap[event] !== 'move') {
			window.addEventListener(eventMap[event], handleMovement, true)
		}

		return () => {
			window.removeEventListener(eventMap[event], handleMovement, true)
		}
	}, [event])

	const handleMovement = throttle((evt: MouseEvent) => {
		if (!active) return
		if (!isMoving && !leftOnce) {
			// fixes the specific case when mouseenter didn't trigger on page refresh
			setIsMoving(true)
		}

		const currentShape = ref.current?.getBoundingClientRect() ?? null
		setShape(currentShape)
		const isInViewport = inViewport(currentShape)

		if (event === 'move' && isMoving && !isTouch()) {
			setMovement(mouseMovement({
				target: currentShape,
				event: evt
			}))
			setEventData(getCoordinates(evt.clientX, evt.clientY))
		} else if ((event === 'orientation' || (event === 'move' && isTouch())) && isInViewport) {
			setMovement(orientationElement({
				target: currentShape,
				event: evt
			}))
		} else if (event === 'scroll' && isInViewport && !!currentShape?.height) {
			setMovement(scrollMovement(currentShape))
		}
	}, 100)
	
	const handleMovementStart = () => {
		if (!active) return
		setIsMoving(true)
	}
	
	const handleMovementStop = () => {
		if (!active) return
		// fixes the specific case when mouseenter didn't trigger on page refresh
		setLeftOnce(true)
		setIsMoving(false)
	}

	const Tag = tag as any

	return <KinesisContext.Provider value={{duration, easing, event, eventData, isMoving, movement, shape}}>
		<Tag 
			ref={ref} 
			style={{ perspective: `${perspective}px` }} 
			onMouseMove={handleMovement}
			onMouseEnter={handleMovementStart}
			onMouseLeave={handleMovementStop}
		>
			{children}
		</Tag>
	</KinesisContext.Provider>
}

export const KinesisContainer: FunctionComponent<PartialBy<Props, keyof typeof defaultProps>> = KinesisContainerComponent as any

const defaultProps = {
	active: true,
	duration: 1000,
	easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
	tag: 'div',
	perspective: 1000,
	event: 'move'
}
KinesisContainer.defaultProps = defaultProps as Props
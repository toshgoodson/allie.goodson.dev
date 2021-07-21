import React, { Component, MouseEvent } from "react";
import PropTypes from "prop-types";

// import audioMixin from "../mixins/audio_mixin";
import throttle from "../utils/throttle";
import getCoordinates from "../utils/getCoordinates";
import isTouch from "../utils/isTouch";
import inViewport from "../utils/inViewport";
import orientationElement from "../utils/orientationElement";
import scrollMovement from "../utils/scrollMovement";
import mouseMovement from "../utils/mouseMovement";


type Props = {
	tag: string
	event: string
	active: boolean
	duration: number
	easing: string
	perspective: number
}

type State = {
	shape: DOMRect
	isMoving: boolean
	leftOnce: boolean
	movement: {
		x: number
		y: number
	}
	eventMap: {
		orientation: string
		scroll: string
		move: string | null
	}
}


export default class Kinesiscontainer extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			shape: this.$el.getBoundingClientRect(),
			isMoving: false,
			leftOnce: false,
			movement: {
				x: 0,
				y: 0
			},

			eventMap: {
				orientation: "deviceorientation",
				scroll: "scroll",
				move: isTouch() ? "deviceorientation" : null
			}
		};
	}
	static defaultProps = {
		tag: "div",
		event: "move",
		active: true,
		duration: 1000,
		easing: "cubic-bezier(0.23, 1, 0.32, 1)",
		perspective: 1000
	};
	componentDidMount() {
		this.addEvents();
	}
	componentWillUnmount() {
		this.removeEvents();
	}
	handleMovementStart() {
		if (!this.props.active) return;
		this.setState({ isMoving: true });
	}
	handleMovementStop() {
		if (!this.props.active) return;
		this.setState({ leftOnce: true });
		this.setState({ isMoving: false });
	}
	handleMovement(event: MouseEvent) {
		if (!this.props.active) return;
		if (!this.state.isMoving && !this.state.leftOnce) {
			/* fixes the specific case when mouseenter didn't trigger on page refresh*/
			this.handleMovementStart();
		}
		this.setState({ shape: this.$el.getBoundingClientRect() });
		const isInViewport = inViewport(this.shape);
		const eventCondition = this.props.condition;
		const eventAction = this.props.action;
	
		this.setState({
		  movement: eventAction({
			target: this.shape,
			event
		  })
		});
	
		this.setState({ eventData: getCoordinates(event.clientX, event.clientY) });
	}

	addEvents() {
		window.addEventListener(
			(this.state.eventMap as any)[this.props.event],
			this.handleMovement,
			true
		);
	}
	removeEvents() {
		window.removeEventListener(
			(this.state.eventMap as any)[this.props.event],
			this.handleMovement,
			true
		);
	}
	render() {
		const eventActions = {
			move: {
				action: mouseMovement,
				condition: this.state.isMoving && !isTouch(),
				type: isTouch() ? "deviceorientation" : null
			},
			scroll: {
				action: scrollMovement,
				condition: !!this.state.shape.height,
				type: "scroll"
			},
			orientation: {
				action: orientationElement,
				condition: this.props.event === "move" && isTouch(),
				type: "deviceorientation"
			}
		};
		const style = { perspective: `${this.props.perspective}px` };
		return (
			<div
				// as={tag}
				style={style}
				onMouseMove={this.handleMovement}
				onMouseEnter={this.handleMovementStart}
				onMouseLeave={this.handleMovementStop}
			>
				{this.props.children}
				{/* {this.props.audio ? (
					<audio ref="audio" type="audio/mpeg" ended="stop">
						<source src="audio" />
					</audio>
				) : null} */}
			</div>
		);
	}
}

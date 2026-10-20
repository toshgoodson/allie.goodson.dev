import React, { FC } from "react"
import styled, { keyframes } from "styled-components"
import { ToastContainer, cssTransition, toast } from 'react-toastify'
import { rfs } from "../models/rfs"
import Color from "color"

const zjwoopIn = keyframes`
	0% {
		clip-path: inset(0% 100% -1px 0% round 0px 100px 100px 0);
	}
	100% {
		clip-path: inset(0% 0% -1px 0% round 0px 100px 100px 0);
	}
`
const zjwoopOut = keyframes`
	0% {
		clip-path: inset(0% 0% -1px 0% round 0px 100px 100px 0);
	}
	100% {
		clip-path: inset(0% 0% -1px 100% round 0px 100px 100px 0);
	}
`

const ToastBounds = styled.div`
	bottom: 100%;
	height: 180px;
	overflow: hidden;
	position: absolute;

	.Toastify {
		align-items: flex-end;
		display: flex;
		flex-direction: row;
		height: 100%;
	}
`
const StyledToastContainer = styled(ToastContainer)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	left: 0;
	pointer-events: none;
	position: relative;
	right: auto;
	top: auto;

	.Toastify__toast {
		background: ${({theme}) => Color(theme.colors[1]).alpha(0.8).toString()};
		border-radius: 100px;
		color: ${({theme}) => theme.colors[0]};
		cursor: pointer;
		font-family: 'Open Sans', sans-serif;
		${rfs.fontSize('16px')}
		${rfs.marginBottom('10px')}
		${rfs.padding('7px 20px')}
		transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		user-select: none;
		white-space: nowrap;

		&:nth-last-child(2) {
			opacity: 0.666;
		}
		&:nth-last-child(3) {
			opacity: 0.333;
		}
		&:nth-last-child(n+4) {
			opacity: 0;
		}
		&:nth-last-child(n+5) {
			visibility: hidden;
		}
	}
	.zjwoop-in {
		animation: ${zjwoopIn} 0.4s cubic-bezier(0.23, 1, 0.32, 1) both;
	}
	.zjwoop-out {
		animation: ${zjwoopOut} 0.4s cubic-bezier(0.23, 1, 0.32, 1) both;
	}
`
const zjwoop = cssTransition({
	enter: "zjwoop-in",
	exit: "zjwoop-out"
});

export const ModeToggleToastContainer: FC = () => {
	return <ToastBounds>
		<StyledToastContainer
			position={toast.POSITION.BOTTOM_LEFT}
			containerId={'modeToggle'}
			closeButton={false}
			draggable={false}
			closeOnClick={false}
			transition={zjwoop}
			hideProgressBar={true}
			autoClose={500} 
			pauseOnFocusLoss={false} 
		/>
	</ToastBounds>
}
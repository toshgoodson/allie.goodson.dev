import {HYDRATE} from 'next-redux-wrapper'
import { Action } from '../../../interfaces/Action'
import { HydrateAction } from '../../../interfaces/HydrateAction'

type ActionType = 'TOGGLE_DARK_MODE' 

export const darkMode = (state: boolean = false, action: HydrateAction | Action<ActionType>) => {
	switch (action.type) {
		case HYDRATE:
			console.log("NOOOO", action)
			return state
			// return {...state, ...action.payload}
		case "TOGGLE_DARK_MODE":
			return !state
		default:
			return state
	}
}
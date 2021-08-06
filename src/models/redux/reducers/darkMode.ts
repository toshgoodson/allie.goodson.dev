import {HYDRATE} from 'next-redux-wrapper'
import { Action } from '../../../interfaces/Action'
import { HydrateAction } from '../../../interfaces/HydrateAction'
import { isDarkMode } from '../../isDarkMode'

type ActionType = 'TOGGLE_DARK_MODE' 

export const darkMode = (state: boolean = isDarkMode(), action: HydrateAction | Action<ActionType>) => {
	switch (action.type) {
		case HYDRATE:
			return action.payload.darkMode
		case "TOGGLE_DARK_MODE":
			return !state
		default:
			return state
	}
}
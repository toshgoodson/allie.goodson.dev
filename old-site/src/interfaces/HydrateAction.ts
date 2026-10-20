import {HYDRATE} from 'next-redux-wrapper'
import { Action } from './Action'

// full app state must be done manually to avoid circular reference of HydrateAction
export type HydrateAppState = {
	darkMode: boolean
}

export type HydrateAction = Action<typeof HYDRATE, HydrateAppState>
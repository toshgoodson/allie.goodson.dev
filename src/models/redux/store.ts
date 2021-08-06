import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper"
import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Store } from 'redux'
import { HydrateAppState } from '../../interfaces/HydrateAction'
import { rootReducer } from './reducers/rootReducer'

const makeStore = wrapMakeStore(() => 
	createStore(
		rootReducer,
		applyMiddleware(
			nextReduxCookieMiddleware({
				subtrees: ["darkMode"]
			})
		)
	)
)

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
export type AppAction = ReturnType<AppDispatch>

type Equals<T, S> =
	[T] extends [S] ? (
		[S] extends [T] ? true : false
	) : false

const ensureEquality: Equals<AppState, HydrateAppState> = true; ensureEquality

export const wrapper = createWrapper<Store<AppState, any>>(makeStore, {debug: true})

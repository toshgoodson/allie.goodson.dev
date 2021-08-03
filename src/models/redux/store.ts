import {createStore, AnyAction, Store} from 'redux'
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper'
import { rootReducer } from './reducers/rootReducer'
import { HydrateAppState } from '../../interfaces/HydrateAction'

const makeStore = (context: Context) => createStore(rootReducer)

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
export type AppAction = ReturnType<AppDispatch>

type Equals<T, S> =
	[T] extends [S] ? (
		[S] extends [T] ? true : false
	) : false

const ensureEquality: Equals<AppState, HydrateAppState> = true; ensureEquality

export const wrapper = createWrapper<Store<AppState, any>>(makeStore, {debug: true})

export interface ActionWithoutPayload<T> {
	type: T
}

export interface ActionWithPayload<T, P> {
	type: T
	payload: P
}

export type Action<T, P = void> = P extends void ? ActionWithoutPayload<T> : ActionWithPayload<T, P>
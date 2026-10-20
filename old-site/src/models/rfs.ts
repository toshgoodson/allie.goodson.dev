import PostCssRfs from 'rfs/lib/rfs'

class Rfs {
	private postCssRfs: any

	constructor() {
		const defaultOptions = {
			baseValue: 20,
			unit: 'rem',
			breakpoint: 1200,
			breakpointUnit: 'px',
			factor: 10,
			twoDimensional: false,
			unitPrecision: 5,
			remValue: 16,
			functionName: 'rfs',
			enableRfs: true,
			mode: 'min-media-query'
		}

		this.postCssRfs = new PostCssRfs(defaultOptions)
	}

	rfs(value: string, property = `font-size`) {
		const fluidValue = this.postCssRfs.fluidValue(`rfs(${value})`)
		const fixedValue = this.postCssRfs.value(`rfs(${value})`)
		const mediaQuery = this.postCssRfs.renderMediaQuery()
		if (this.postCssRfs.getOptions().mode === 'min-media-query') {
			return `${property}: ${fluidValue}; ${mediaQuery.toString()} { ${property}: ${fixedValue}; }`
		} else {
			return `${property}: ${fixedValue}; ${mediaQuery.toString()} { ${property}: ${fluidValue}; }`
		}
	}

	// Shorthand helper mixins
	fontSize(value: string) {
		return this.rfs(value)
	}

	padding(value: string) {
		return this.rfs(value, `padding`)
	}

	paddingTop(value: string) {
		return this.rfs(value, `padding-top`)
	}

	paddingRight(value: string) {
		return this.rfs(value, `padding-right`)
	}

	paddingBottom(value: string) {
		return this.rfs(value, `padding-bottom`)
	}

	paddingLeft(value: string) {
		return this.rfs(value, `padding-left`)
	}

	margin(value: string) {
		return this.rfs(value, `margin`)
	}

	marginTop(value: string) {
		return this.rfs(value, `margin-top`)
	}

	marginRight(value: string) {
		return this.rfs(value, `margin-right`)
	}

	marginBottom(value: string) {
		return this.rfs(value, `margin-bottom`)
	}

	marginLeft(value: string) {
		return this.rfs(value, `margin-left`)
	}
}


export const rfs = new Rfs()



type LinkColors = [normal: string, hover: string, active: string, disabled: string]

export type ThemeColors = [
	string, // background
	string, // text
	LinkColors, // links
	string, // sections and asides
	LinkColors, // special links
	string // shadows
]

export type Theme = {
	colors: ThemeColors
}

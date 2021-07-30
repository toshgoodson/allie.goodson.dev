type LinkColors = [normal: string, hover: string, active: string, disabled: string]

export type ThemeColors = [
	string, // background
	string, // text
	LinkColors, // links
	string, // sections and asides
	LinkColors // special links
]

export type Theme = {
	colors: ThemeColors
}


export type ThemeColors = [
	string, // background
	string, // text
	[normal: string, hover: string, active: string, disabled: string], // links
    string // sections and asides
]

export type Theme = {
	colors: ThemeColors
}

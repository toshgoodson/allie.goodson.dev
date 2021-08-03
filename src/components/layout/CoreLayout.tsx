import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { PageProps } from '../../interfaces/PageProps'
import { darkTheme, theme } from '../../models/theme'
import { Grit } from '../Grit'
import { RootHead } from '../RootHead'
import { Fonts } from '../styles/Fonts'
import { StyleBase } from '../styles/StyleBase'


const FullHeight = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export type Props = PageProps & {
	darkMode: boolean
}

export const CoreLayout: React.FC<Props> = ({darkMode, meta, children}) => {
	return <ThemeProvider theme={darkMode ? darkTheme : theme}>
		<RootHead darkMode={darkMode} meta={meta}/>
		<Fonts/>
		<StyleBase/>
		<FullHeight>
			{children}
		</FullHeight>
		<Grit/>
	</ThemeProvider>
}
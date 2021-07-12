import React, {useEffect, useState} from 'react'
import { Fonts } from './styles/Fonts'
import { Grit } from './Grit'
import { StyleBase } from './styles/StyleBase'
import { PageFooter } from './PageFooter'
import { RootHead } from './RootHead'
import { PageHeader } from './PageHeader'
import styled, { ThemeProvider } from 'styled-components'
import { theme, darkTheme } from '../models/theme'
import { PageContent } from './PageContent'
import Cookies from 'js-cookie'
import { Meta } from '../interfaces/Meta'


const FullHeight = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export type Props = {
	meta: Meta
}

export const RootLayout: React.FunctionComponent<Props> = (props) => {
	const isDarkMode = () => {
		if (typeof window === 'undefined') { return false }
		if (Cookies.get('darkMode') === '1') { return true }
		if (Cookies.get('darkMode') === '0') { return false }
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
	}

	let [darkMode, setDarkMode] = useState(false)
	useEffect(() => {
		if (isDarkMode()) {
			setDarkMode(true)
		}
	}, [])

	const handleClickToggleMode = () => {
		Cookies.set('darkMode', isDarkMode() ? '0' : '1')
		isDarkMode() ? setDarkMode(true) : setDarkMode(false);
	}

	return <ThemeProvider theme={darkMode ? darkTheme : theme}>
		<RootHead darkMode={darkMode} meta={props.meta}/>
		<Fonts/>
		<StyleBase/>
		<FullHeight>
			<PageHeader/>
			<PageContent>
				{props.children}
			</PageContent>
			<PageFooter darkMode={darkMode} onClickToggleMode={handleClickToggleMode}/>
		</FullHeight>
		<Grit/>
	</ThemeProvider>
}
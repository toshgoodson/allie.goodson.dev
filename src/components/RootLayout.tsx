import React, {useEffect, useState, BaseSyntheticEvent} from 'react'
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
import { isDarkMode } from '../models/isDarkMode'
import { GlobalTypography } from './styles/Typography'


const FullHeight = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export type Props = {
	meta: Meta
	plain?: boolean
	onChangeMode?: (darkMode: boolean) => void
}

export const RootLayout: React.FunctionComponent<Props> = (props) => {
	// https://github.com/vercel/next.js/discussions/15003
	const [darkMode, setDarkMode] = useState(false)
	useEffect(() => {
		setDarkMode(isDarkMode())
	}, [])

	useEffect(() => {
		Cookies.set('darkMode', darkMode ? '1' : '0')
	}, [darkMode])

	const handleClickToggleMode = (e: BaseSyntheticEvent) => {
		e.preventDefault()
		setDarkMode(prevState => { props.onChangeMode?.(!prevState); return !prevState})
	}

	return <ThemeProvider theme={darkMode ? darkTheme : theme}>
		<RootHead darkMode={darkMode} meta={props.meta}/>
		<Fonts/>
		<StyleBase/>
		<FullHeight>
			{props.plain || <PageHeader/>}
			{props.plain ?
				props.children 
			:
				<PageContent>
					{props.children}
				</PageContent>
			}
			{props.plain || <PageFooter darkMode={darkMode}/>}
		</FullHeight>
		<form id="i-mode-form" onSubmit={handleClickToggleMode}/> {/* Hack to place toggle button anywhere! */}
		<Grit/>
	</ThemeProvider>
}
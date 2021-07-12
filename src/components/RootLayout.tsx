import React from 'react'
import { Fonts } from './styles/Fonts'
import { Grit } from './Grit'
import { StyleBase } from './styles/StyleBase'
import { PageFooter } from './PageFooter'
import { RootHead } from './RootHead'
import { PageHeader } from './PageHeader'
import { ThemeProvider } from 'styled-components'
import { theme } from '../models/theme'
import { PageContent } from './PageContent'

type Props = {}

export const RootLayout: React.FunctionComponent<Props> = (props) => {
	return <div>
		<ThemeProvider theme={theme}>
			<RootHead/>
			<Fonts/>
			<StyleBase/>
			<PageHeader/>
			<PageContent>
				{props.children}
			</PageContent>
			<PageFooter/>
			<Grit/>
		</ThemeProvider>
	</div>
}
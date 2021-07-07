import React from 'react'
import { Fonts } from './styles/Fonts'
import { Grit } from './Grit'
import { PageContent } from './PageContent'
import { PageHeader } from './PageHeader'
import { StyleBase } from './styles/StyleBase'
import { PageFooter } from './PageFooter'
import { RootHead } from './RootHead'

type Props = {
	h1: string
}

export const RootLayout: React.FunctionComponent<Props> = (props) => {
	return <div>
		<RootHead/>
		<Fonts/>
		<StyleBase/>
		<PageHeader>
			<h1>{props.h1}</h1>
		</PageHeader>
		<PageContent>
			{props.children}
		</PageContent>
		<PageFooter/>
		<Grit/>
	</div>
}
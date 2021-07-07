import React from 'react'
import { Fonts } from './styles/Fonts'
import { Grit } from './Grit'
import { StyleBase } from './styles/StyleBase'
import { PageFooter } from './PageFooter'
import { RootHead } from './RootHead'

type Props = {}

export const RootLayout: React.FunctionComponent<Props> = (props) => {
	return <div>
		<RootHead/>
		<Fonts/>
		<StyleBase/>
		<div>
			{props.children}
		</div>
		<PageFooter/>
		<Grit/>
	</div>
}
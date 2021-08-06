import React from 'react'
import { PageProps } from '../../interfaces/PageProps'
import { PageContent } from '../PageContent'
import { PageFooter } from '../PageFooter'
import { PageHeader } from '../PageHeader'
import { CoreLayout } from './CoreLayout'


export type Props = PageProps & {
	darkMode: boolean
}

export const MainLayout: React.FC<Props> = (props) => {
	const { darkMode, children } = props

	return <CoreLayout {...props}>
		<PageHeader />
		<PageContent>
			{children}
		</PageContent>
		<PageFooter darkMode={darkMode} />
	</CoreLayout>
}
import React, { useContext } from "react"
import Head from 'next/head'
import { ThemeContext } from 'styled-components'


export const RootHead: React.FunctionComponent = () => {
	const themeContext = useContext(ThemeContext)

	return (
		<Head>
			<meta name="theme-color" content={themeContext.colors[2][0]} />	
		</Head>
	)
}
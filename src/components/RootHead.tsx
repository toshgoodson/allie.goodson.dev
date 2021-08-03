import React, { useContext } from "react"
import Head from 'next/head'
import { ThemeContext } from 'styled-components'
import faviconIco from '../../assets/images/favicons/favicon.ico'
import faviconDarkIco from '../../assets/images/favicons/favicon-dark.ico'
import faviconSvg from '../../assets/images/favicons/favicon.svg'
import faviconDarkSvg from '../../assets/images/favicons/favicon-dark.svg'
import { Meta } from "../interfaces/Meta"

export type Props = {
	darkMode: boolean
	meta: Meta
}

export const RootHead: React.FC<Props> = ({darkMode, meta}) => {
	const themeContext = useContext(ThemeContext)

	return (
		<Head>
			<title key="title">{meta.title}</title>
			<meta key="description" name="description" content={meta.description}/>
			<meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0"/>
			<link key="faviconIco" rel="icon" href={darkMode ? faviconDarkIco : faviconIco} sizes="32x32"/>
			<link key="faviconSvg" rel="icon" href={darkMode ? faviconDarkSvg : faviconSvg}/>
			<link key="faviconMask" rel="mask-icon" href={darkMode ? faviconDarkSvg : faviconSvg} color={themeContext.colors[2][0]}/>
			<meta key="themeColor" name="theme-color" content={themeContext.colors[2][0]} />
		</Head>
	)
}
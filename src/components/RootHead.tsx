import React from "react"
import Head from 'next/head'
import { Palette } from "../models/Palette"

export const RootHead: React.FunctionComponent = () => {
	return (
		<Head>
			<meta name="theme-color" content={Palette.pickledBluewood} />	
		</Head>
	)
}
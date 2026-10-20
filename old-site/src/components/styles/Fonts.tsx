import  Head  from 'next/head'
import React from 'react'

export const Fonts: React.FC = () => {
	return <Head>
		<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
		<link href="https://fonts.googleapis.com/css2?family=Corben:wght@700&family=Judson&family=Lustria&family=Open+Sans:wght@300;400;700&display=block" rel="stylesheet"/>
	</Head>
}
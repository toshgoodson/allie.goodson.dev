import { GetStaticProps } from 'next'
import React from 'react'
import { RootLayout, Props as RootProps } from '../components/RootLayout'

type Props = RootProps

export default function Home(props: Props) {
	return <RootLayout {...props}>
		<div className="container">
			
		</div>
	</RootLayout>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			meta: {
				title: 'marshawarma | allie goodson',
				description: ''
			}
		}
	}
}
import { GetStaticProps } from 'next'
import React from 'react'
import { ContentContainer } from '../components/layout/ContentContainer'
import { MainLayout } from '../components/layout/MainLayout'
import { PageProps } from '../interfaces/PageProps'
import { useAppSelector } from '../models/redux/hooks'
import { wrapper } from '../models/redux/store'

type Props = PageProps

export default function Multimedia(props: Props) {
	const { darkMode } = useAppSelector(state => state)

	return <MainLayout {...props} darkMode={darkMode}>
			<ContentContainer>
				WIP
			</ContentContainer>
		</MainLayout>
}

export const getStaticProps: GetStaticProps<Props> = wrapper.getStaticProps(store =>
	async () => {
		return {
			props: {
				meta: {
					title: 'multimedia | allie goodson',
					description: 'Here is a collection of a few of my favorite personal and collaborative projects. A few were made to experiment, some made for fun, & all because I love making things.'
				}
			}
		}
	}
)
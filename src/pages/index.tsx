import React from 'react'
import styled from 'styled-components'
import { HeaderArrow } from '../components/HeaderArrow'
import { RootLayout } from '../components/RootLayout'


const FontTest = styled.div`
	font-size: 50px;
`
const Banquise = styled.div`
	font-family: 'Banquise', sans-serif;
`

const DungeonChunk = styled.div`
	font-family: 'Dungeon Chunk', sans-serif;
`

const RetrogradeRegular = styled.div`
	font-family: 'Retrograde', sans-serif;
`

const RetrogradeBold = styled.div`
	font-family: 'Retrograde', sans-serif;
	font-weight: bold;
`

export default function Home() {
	return <RootLayout h1="tosh.dev">
		<div className="container">
			<HeaderArrow as="h2">Recent Articles</HeaderArrow>
		</div>

		<FontTest className="container">
			<Banquise>tosh.dev TOSH.DEV Tosh.dev</Banquise>
			<DungeonChunk>tosh.dev TOSH.DEV Tosh.dev</DungeonChunk>
			<RetrogradeRegular>tosh.dev TOSH.DEV Tosh.dev</RetrogradeRegular>
			<RetrogradeBold>tosh.dev TOSH.DEV Tosh.dev</RetrogradeBold>
		</FontTest>
	</RootLayout>
}

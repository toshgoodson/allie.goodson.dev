import React, { FC } from "react"
import styled from "styled-components"
import { Breakpoints } from "../models/Breakpoints"
import { rfs } from "../models/rfs"
import { Spacer } from "./layout/Spacer"

const NUM_COLS_LG = 4
const NUM_COLS_XS = 2

const SECTIONS_PER_COL = 3

const Ordered = styled.div<{colIdx: number, itemIdx: number}>`
	${rfs.fontSize('14px')}
	order: ${({colIdx, itemIdx}) => itemIdx * NUM_COLS_XS + colIdx + Math.floor(colIdx / NUM_COLS_XS) * NUM_COLS_XS * SECTIONS_PER_COL};
	
	@media (min-width: ${Breakpoints.min.lg}px) {
		order: ${({colIdx, itemIdx}) => itemIdx * NUM_COLS_LG + colIdx};
	}
`

const Logo = styled.img`
	background: white;
	max-height: 105px;
	max-width: 100%;
	width: auto;
`

export type Props = {
	title: string
	logo: string
	strengths: string[]
	weaknesses: string[]
	index: number
}

export const AnalysisColumn: FC<Props> = ({title, logo, strengths, weaknesses, index}) => {
	return <>
		<Ordered colIdx={index} itemIdx={0} className="col-6 col-sm-6 col-lg-3 align-self-center">
			<div className="text-center">
				<Logo src={logo}/>
			</div>
		</Ordered>
		<Ordered colIdx={index} itemIdx={1} className="col-6 col-sm-6 col-lg-3 align-self-end">
			<Spacer size={12} />
			<div className="text-center">
				<h4>{title}</h4>
			</div>
		</Ordered>
		<Ordered colIdx={index} itemIdx={2} className="col-6 col-sm-6 col-lg-3 pb-4">
			<Spacer size={6} />
			<hr />
			<Spacer size={18} />
			<h5><strong>Strengths</strong></h5>
			<ul>
				{strengths.map((strength, idx) => 
					<li key={idx}>{strength}</li>
				)}
			</ul>
			<Spacer size={18} />
			<h5><strong>Weaknesses</strong></h5>
			<ul>
				{weaknesses.map((weakness, idx) => 
					<li key={idx}>{weakness}</li>
				)}
			</ul>
		</Ordered>
	</>
}
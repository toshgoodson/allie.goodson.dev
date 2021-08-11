import React from 'react'
import styled from 'styled-components'
import { PageProps } from '../../interfaces/PageProps'
import { Breakpoints } from '../../models/Breakpoints'
import { rfs } from '../../models/rfs'
import { PageContent } from '../PageContent'
import { PageFooter } from '../PageFooter'
import { NavBrand } from '../PageHeader'
import { SidebarPageHeader } from '../SidebarPageHeader'
import { CoreLayout } from './CoreLayout'
import { FixedContainer } from './FixedContainer'

const ColoredSide = styled.div`
	background: ${({theme}) => theme.colors[3]};
`
const CheaterNavBrand = styled(NavBrand)`
	display: block;
	height: 0;
	overflow: hidden;
	pointer-events: none;
	visibility: hidden;
`
const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`
const SidebarPageContent = styled(PageContent)`
	${rfs.padding('80px 0 94px')}
`
const CheaterBox = styled.div`
	position: absolute;
	width: 100%;
`

export type Props = PageProps & {
	darkMode: boolean
	sidebarContent: JSX.Element
}

export const SidebarLayout: React.FC<Props> = (props) => {
	const { darkMode, children, sidebarContent } = props

	return <CoreLayout {...props}>
		<Column className="d-flex d-lg-none">
			<ColoredSide>
				<SidebarPageHeader />
			</ColoredSide>
			<ColoredSide>
				<FixedContainer>
					<div className="container">
						<SidebarPageContent>
							{sidebarContent}
						</SidebarPageContent>
					</div>
				</FixedContainer>
			</ColoredSide>
		</Column>
		<div className="row gx-0 flex-grow-1">
			<ColoredSide className="col d-none d-lg-block"/>
			<div className="col d-none d-sm-block d-lg-none"/>
			<div className="col col-sm-auto d-flex">
				<Column>
					<div className="d-none d-lg-block">
						<SidebarPageHeader />
					</div>
					<FixedContainer className="d-flex flex-grow-1">
						<div className="row gx-0 flex-grow-1">
							<ColoredSide className="col-12 col-md-auto d-none d-lg-block">
								<div className="container gx-5 position-sticky top-0">
									<SidebarPageContent>
										<div className="position-relative d-inline-block">
											<CheaterNavBrand>Allie Goodson</CheaterNavBrand>
											<CheaterBox>{sidebarContent}</CheaterBox>
										</div>
									</SidebarPageContent>
								</div>
							</ColoredSide>
							<div className="col d-flex">
								<Column>
									<div className="container gx-reset gx-lg-5 flex-grow-1">
										<SidebarPageContent>
											{children}
										</SidebarPageContent>
									</div>
									<div>
										<PageFooter darkMode={darkMode} />
									</div>
								</Column>
							</div>
						</div>
					</FixedContainer>
				</Column>
			</div>
			<div className="col d-none d-sm-block"/>
		</div>
	</CoreLayout>
}
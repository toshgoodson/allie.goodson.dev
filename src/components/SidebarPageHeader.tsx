import styled from "styled-components"
import Link from 'next/link'
import { Navbar as BsNavbar } from 'react-bootstrap'
import { rfs } from "../models/rfs"
import { FiMenu } from 'react-icons/fi'
import { Breakpoints } from "../models/Breakpoints"
import { NavBrand } from "./PageHeader"
import { FixedContainer } from './layout/FixedContainer'
import { Swoop, swoopHoverCss } from "./Swoop"

const Navbar = styled(BsNavbar)`
	${rfs.padding('40px 0 17px')}
`
const NavbarToggler = styled(BsNavbar.Toggle)`
	color: inherit;

	&:focus {
		box-shadow: none;
		outline: -webkit-focus-ring-color auto 1px;
	}
`

const NavList = styled.ul`
	${rfs.marginTop('12px')}
	text-align: right;

	@media (min-width: ${Breakpoints.min.md}px) {
		margin-top: 0;
		text-align: inherit;
	}
`

const NavLink = styled.a`
	color: ${({theme}) => theme.colors[1]} !important;
	display: inline-block;
	${rfs.fontSize('17px')}
	transition: none;

	.navbar-nav & { /* specificity needed to override bootstrap */
		padding-right: 0.75rem;
		padding-left: 0.75rem;
	}
	
	@media (min-width: ${Breakpoints.min.md}px) {
		${rfs.margin('0 20px')}
		margin-bottom: -0.5rem !important; // match default bootstrap padding
	}

	li:last-child & {
		margin-right: 0;

		@media (min-width: ${Breakpoints.min.md}px) {
			margin-right: -0.5rem; // match default bootstrap padding
		}
	}
	&:hover ${Swoop} {
		${swoopHoverCss}
	}
`

const CheaterNavBrand = styled(NavBrand)`
	overflow: hidden;
	pointer-events: none;
	visibility: hidden;
	width: 0;
`
const ColoredSide = styled.div`
	background: ${({theme}) => theme.colors[3]};

	${NavBrand} {
		color: ${({theme}) => theme.colors[1]};
	}

`
const ColoredSideSm = styled.div`
	@media (max-width: ${Breakpoints.max.sm}px) {
		background: ${({theme}) => theme.colors[3]};
	}
`
const BrandContainer = styled.div`
	padding-left: 12px !important;

	@media (max-width: ${Breakpoints.max.md}px) {
		padding-right: 0 !important;
	}
`
const NavContainer = styled.div`
	padding-right: 12px !important;
	
	@media (max-width: ${Breakpoints.max.md}px) {
		padding-left: 0 !important;
	}
`

export const SidebarPageHeader: React.FC = (props) => {
	return (
		<FixedContainer>
			<div className="row gx-0">
				<ColoredSide className="col-auto">
					<Navbar variant={"none" as any} expand="md">
						<BrandContainer className="container gx-reset gx-lg-5">
							<Link href="/" passHref><NavBrand as="a" className="navbar-brand">Allie Goodson</NavBrand></Link>
						</BrandContainer>
					</Navbar>
				</ColoredSide>
				<ColoredSideSm className="col">
					<Navbar variant={"none" as any} expand="md">
						<NavContainer className="container gx-reset gx-lg-5">
							<Link href="/" passHref><CheaterNavBrand as="a" className="navbar-brand">Allie Goodson</CheaterNavBrand></Link>

							<NavbarToggler type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<FiMenu/>
							</NavbarToggler>
							<BsNavbar.Collapse id="navbarNav">
								<NavList className="navbar-nav ms-auto">
									<li className="nav-item">
										<Link href="/#work" passHref><NavLink className="nav-link"><Swoop>Work</Swoop></NavLink></Link>
									</li>
									<li className="nav-item">
										<Link href="/about" passHref><NavLink className="nav-link"><Swoop>About</Swoop></NavLink></Link>
									</li>
									<li className="nav-item">
										<Link href="/contact" passHref><NavLink className="nav-link"><Swoop>Contact</Swoop></NavLink></Link>
									</li>
									<li className="nav-item">
										<Link href="/resume-2022-02-10.pdf" passHref><NavLink className="nav-link" target="_blank"><Swoop>Resume</Swoop></NavLink></Link>
									</li>
								</NavList>
							</BsNavbar.Collapse>
						</NavContainer>
					</Navbar>
				</ColoredSideSm>
			</div>
		</FixedContainer>
	)
}
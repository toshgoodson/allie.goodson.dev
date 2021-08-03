import styled from "styled-components"
import Link from 'next/link'
import { Navbar as BsNavbar } from 'react-bootstrap'
import { rfs } from "../models/rfs"
import { Brand } from "./Brand"
import { FiMenu } from 'react-icons/fi'
import strokeImg from '../../assets/images/stroke.png'
import { Breakpoints } from "../models/Breakpoints"

const NavBrand = styled(Brand)`
	${rfs.fontSize('34px')}
	padding: 0;
`
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

const Swoop = styled.span`
	display: inline-block;
	position: relative;

	&:after {
		background: linear-gradient(to right, ${({theme}) => theme.colors[3]}, ${({theme}) => theme.colors[3]}) no-repeat right;
		background-size: 0% auto;
		content: '';
		height: 1em;
		left: 0.25em;
		mask: url(${strokeImg}) no-repeat;
		mask-position: center;
		mask-repeat: no-repeat;
		mask-size: 100% 100%;
		position: absolute;
		top: -0.05em;
		transition: background-size 0.15s ease-out, background-position 0s ease-out;
		width: 100%;
		z-index: -1;
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
	&:hover ${Swoop}:after {
		background-position: left;
		background-size: 100% auto;
	}
`

export const PageHeader: React.FC = (props) => {
	return (
		<Navbar variant={"none" as any} expand="md">
			<div className="container">
				<Link href="/" passHref><NavBrand as="a" className="navbar-brand">Allie Goodson</NavBrand></Link>
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
							<Link href="/resume-2021-07-12.pdf" passHref><NavLink className="nav-link" target="_blank"><Swoop>Resume</Swoop></NavLink></Link>
						</li>
					</NavList>
				</BsNavbar.Collapse>
			</div>
		</Navbar>
	)
}
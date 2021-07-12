import styled from "styled-components"
import Link from 'next/link'
import { rfs } from "../models/rfs"
import { Brand } from "./Brand"
import { FiMenu } from 'react-icons/fi'

const NavBrand = styled(Brand)`
	${rfs.fontSize('34px')}
	padding: 0;
`
const Navbar = styled.div`
	${rfs.padding('40px 0 17px')}
`
const NavbarToggler = styled.button`
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
		position: absolute;
		top: -0.05em;
		transition: background-size 0.15s ease-out, background-position 0s ease-out;
		width: 100%;
		z-index: -1;
	}
`

const NavLink = styled.a`
	color: ${({theme}) => theme.colors[1]} !important;
	${rfs.fontSize('17px')}
	${rfs.margin('0 20px')}
	margin-bottom: -0.5rem !important; // match default bootstrap padding

	li:last-child & {
		margin-right: 0;

		@media (min-width: 768px) {
			margin-right: -0.5rem; // match default bootstrap padding
		}
	}
	&:hover ${Swoop}:after {
		background-position: left;
		background-size: 100% auto;
	}
`

export const PageHeader: React.FunctionComponent = (props) => {
	return (
		<Navbar className="navbar navbar-expand-md">
			<div className="container">
				<Link href="/" passHref><NavBrand as="a" className="navbar-brand">Allie Goodson</NavBrand></Link>
				<NavbarToggler className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<FiMenu/>
				</NavbarToggler>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavLink className="nav-link active" aria-current="page" href="#"><Swoop>Work</Swoop></NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" href="#"><Swoop>About</Swoop></NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" href="#"><Swoop>Contact</Swoop></NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" href="#"><Swoop>Resume</Swoop></NavLink>
						</li>
					</ul>
				</div>
			</div>
		</Navbar>
	)
}
import { useState } from 'react';
import styled from 'styled-components';
import { GoThreeBars } from 'react-icons/go';
import MenuLinks from './MenuLinks';

const Navbar = ({ toggle }) => {
	return (
		<NavWrapper>
			<div className="logo">Student Trips</div>
			<div className="links">
				<ul role="list">
					<MenuLinks />
					<li className="hamburger-nav">
						<GoThreeBars onClick={toggle} />
					</li>
				</ul>
			</div>
		</NavWrapper>
	);
};

export default Navbar;

const NavWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.3rem;
	background-color: var(--secondary-color);

	.logo {
		font-size: var(--fs-md);
	}

	.links {
		font-size: var(--fs-reg);
	}

	.links div {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.links ul {
		li {
			cursor: pointer;
			transition: 0.4s ease-out;

			:hover,
			:active {
				color: var(--tc-light);
				transition: 0.3s ease-in-out;
			}
			@media (max-width: 768px) {
				display: none;
			}
		}

		.hamburger-nav {
			display: none;
			font-size: var(--fs-md);

			@media (max-width: 768px) {
				display: block;
			}
		}
	}
`;

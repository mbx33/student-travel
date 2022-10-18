import React from 'react';
import styled from 'styled-components';
import { GoThreeBars } from 'react-icons/go';
import MenuLinks from './MenuLinks';

const Navbar = () => {
	return (
		<NavWrapper>
			<div className="logo">Student Trips</div>
			<div className="links">
				<ul role="list">
					<MenuLinks styled={{ display: 'flex' }} />
					<li className="hamburger-nav">
						<GoThreeBars />
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

	.links ul {
		display: flex;
		align-items: center;
		gap: 2rem;

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

import React from 'react';
import styled from 'styled-components';
import { GoThreeBars } from 'react-icons/go';

const Navbar = () => {
	return (
		<NavWrapper>
			<div className="logo">Student Trips</div>
			<div className="links">
				<ul role="list">
					<li>Tours</li>
					<li>About</li>
					<li>Contact</li>
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

			:hover,
			:active {
				color: var(--tc-light);
			}
		}

		.hamburger-nav {
			visibility: hidden;
			font-size: var(--fs-md);
		}
	}
`;

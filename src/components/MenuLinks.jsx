import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// create an array of links
const links = [
	{
		id: 1,
		url: '/',
		text: 'Home',
	},
	{
		id: 2,
		url: '/about',
		text: 'About',
	},
	{
		id: 3,
		url: '/contact',
		text: 'Contact',
	},
	{
		id: 4,
		url: '/tours',
		text: 'Tours',
	},
];

const MenuLinks = () => {
	return (
		<div>
			{links.map((link) => {
				const { id, url, text } = link;
				return (
					<Link style={{ textDecoration: 'none' }} to={url} key={id}>
						<ListWrap className="links" role="list">
							<li>{text}</li>
						</ListWrap>
					</Link>
				);
			})}
		</div>
	);
};

export default MenuLinks;

const ListWrap = styled.ul`
	li {
		cursor: pointer;
		color: var(--tc-accent);
		transition: 0.4s ease-out;

		text-decoration: none;
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
`;

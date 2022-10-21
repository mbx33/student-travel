import React from 'react';
import styled from 'styled-components';
import MenuLinks from './MenuLinks';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ toggle, open }) => {
	return (
		<Container>
			<div className={open ? 'sidebar show-sidebar' : 'sidebar'}>
				<TopMenu>
					<p>Logo</p>
					<Icon>
						<AiOutlineClose onClick={toggle} />
					</Icon>
				</TopMenu>
				<LinkWrapper>
					<MenuLinks />
				</LinkWrapper>
			</div>
		</Container>
	);
};

export default Sidebar;

const Container = styled.section`
	.sidebar {
		width: 50vw;
		height: 100vh;
		background-color: var(--primary-color);
		position: absolute;
		top: 0;
		right: -70rem;
		z-index: 1;
		transition: 0.4s ease-out;
	}

	.show-sidebar {
		right: 0;
		display: block;
	}
`;

const Icon = styled.div`
	color: var(--tc-accent);
	font-size: var(--fs-md);
	cursor: pointer;
	transition: 0.4s ease-out;

	:hover,
	:active {
		color: var(--tc-light);
		transition: 0.3s ease-in-out;
	}
`;

const TopMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.3rem;
	color: var(--tc-light);
	font-size: var(--fs-sm);
`;

const LinkWrapper = styled.div`
	font-size: var(--fs-reg);
	font-weight: 700;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	margin-top: 5rem;
`;

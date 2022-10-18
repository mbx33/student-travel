import React from 'react';
import styled from 'styled-components';

const InfoBox = () => {
	return (
		<Wrapper>
			<div className="top-left"></div>
			<div className="bottom-right"></div>
			<h1>Info Box</h1>
		</Wrapper>
	);
};

export default InfoBox;

const Wrapper = styled.article`
	width: 50vw;
	height: 60vh;
	background-color: var(--secondary-color);
	border-radius: 1rem;
	position: relative;
`;

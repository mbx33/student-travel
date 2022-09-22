import React from 'react';
import styled from 'styled-components';
import InfoBox from '../components/InfoBox';

const Home = () => {
	return (
		<Container>
			<InfoBox />
		</Container>
	);
};

export default Home;

const Container = styled.main`
	height: 89vh;
	background-color: #222;
	display: flex;
	align-items: center;
	justify-content: center;
`;

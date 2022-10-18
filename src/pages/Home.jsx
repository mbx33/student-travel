import React from 'react';
import styled from 'styled-components';
import { Navbar, Sidebar } from '../components';

const Home = () => {
	return (
		<Container>
			<Navbar />
			{/* <Sidebar /> */}
			<h1>Home Page</h1>
		</Container>
	);
};

export default Home;

const Container = styled.main``;

import { useState } from 'react';
import styled from 'styled-components';
import { Navbar, Sidebar, NavLayout } from '../components';

const Home = () => {
	return (
		<Container>
			<NavLayout />
			<h1>Home Page</h1>
		</Container>
	);
};

export default Home;

const Container = styled.main``;

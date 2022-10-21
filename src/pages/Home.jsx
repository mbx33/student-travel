import { useState } from 'react';
import styled from 'styled-components';
import { Navbar, Sidebar } from '../components';

const Home = () => {
	//create a state for the sidebar
	const [isOpen, setIsOpen] = useState(false);
	//create a function to toggle the sidebar
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Container>
			<Navbar toggle={toggleSidebar} />
			<Sidebar toggle={toggleSidebar} open={isOpen} />

			<h1>Home Page</h1>
		</Container>
	);
};

export default Home;

const Container = styled.main``;

import { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const NavLayout = ({ children }) => {
	// create a state for the sidebar
	const [isOpen, setIsOpen] = useState(false);
	//create a function to toggle the sidebar
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<Navbar toggle={toggleSidebar} />
			<Sidebar toggle={toggleSidebar} open={isOpen} />
			{children}
		</div>
	);
};

export default NavLayout;

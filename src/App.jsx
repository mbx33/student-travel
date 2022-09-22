import './styles/App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
	return (
		<div>
			<Navbar />
			<Home />
		</div>
	);
}

export default App;

import './styles/App.css';
import styled from 'styled-components';

function App() {
	return (
		<Container className="App">
			<h1>Hello World!</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempore
			</p>
		</Container>
	);
}

export default App;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	align-items: center;
	justify-content: center;
	background-color: var(--primary-color);
	color: var(--tc-main);
	overflow: auto;
	font-size: var(--fs-md);
	color: var(--tc-main);

	p {
		font-size: var(--fs-md);
	}
`;

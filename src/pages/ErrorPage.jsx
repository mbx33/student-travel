import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const ErrorPage = () => {
	return (
		<Container>
			<Card>
				<h1>Not Found 404</h1>
				<Link className="back" to="/">
					<span>
						<IoArrowBackCircleOutline />
					</span>
					<a>Back Home</a>
				</Link>
			</Card>
		</Container>
	);
};

export default ErrorPage;

const Container = styled.main`
	background-color: var(--accent-color);
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-size: 3.5rem;
`;

const Card = styled.div`
	background-color: var(--highlight-color);
	padding: 2rem;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

	.back {
		display: flex;
		align-items: center;
		margin-top: 1rem;
		text-decoration: none;
		font-size: 3.5rem;
		transition: all 0.3s ease-in-out;

		span {
			margin-right: 1rem;
			font-size: 3.5rem;
			color: var(--accent-color);
		}

		a {
			color: var(--accent-color);
			text-decoration: none;
			font-size: 2.5rem;
			transition: all 0.3s ease-in-out;

			&:hover {
				color: var(--accent-color-dark);
				transition: all 0.3s ease-in-out;
				transform: scale(1.1);
			}
		}
	}
`;

import styled from 'styled-components';

export const Main = styled.main`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-auto-flow: column;
	max-width: 75vw;
	min-height: 75vw;
	margin: auto;
	min-height: 500px;
	padding: 20px;
	margin-top: 10%;
	background-color: #7575ff;
	opacity: 90%;
	border-radius: 5px;
	box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
`;

export const ArenaContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	:nth-of-type(1) {
		border-bottom: 1px solid black;
	}
	td,
	th {
		padding: .5rem;
	}

	td {
		text-align: center;
	}

	th[scope="row"] {
		background-color: lightblue;
		padding: 1rem;
	}

	table {
		border-radius: 5px;
		background-color: #f8f8ff;
		border-collapse: collapse;
		letter-spacing: 1px;
		font-size: .8rem;
	}

	input {
		height: .8rem;
		padding: .5rem;
	}
`;

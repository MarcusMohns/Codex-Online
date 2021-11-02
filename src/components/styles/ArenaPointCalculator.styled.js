import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	max-width: 75vw;
	margin: auto;
	min-height: 300px;
	padding: 2rem;
`;

export const ArenaContainer = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	td,
	th {
		padding: .5rem;
	}

	td {
		text-align: center;
	}

	th[scope="row"] {
		background-color: lightblue;
	}

	caption {
		padding: 1rem;
		caption-side: top;
		font-size: 1rem;
	}

	table {
		border-collapse: collapse;
		border: 2px solid rgb(200, 200, 200);
		letter-spacing: 1px;
		font-size: .8rem;
	}

	input {
		height: .8rem;
		padding: .5rem;
	}
`;

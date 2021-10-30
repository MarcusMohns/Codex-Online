import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 75vw;
	margin: auto;
	min-height: 300px;
	padding: 30px;
`;

export const GemFinder = styled.table`
	table {
		border-collapse: collapse;
		text-align: center;
		width: 50vw;
	}

	th,
	td {
		color: #fff;
		padding: 20px;
	}

	.headerItems th {
		position: sticky;
		top: 0;
		background-color: #000;
		padding: 30px;
	}

	tbody tr {
		background-color: #124559;
		transition: background-color 150ms ease-out;
		&:nth-child(2n) {
			background-color: #598392;
		}
		&:hover {
			background-color: #000;
		}
	}
`;

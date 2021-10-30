import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 75vw;
	margin: auto;
	min-height: 300px;
	padding: 30px;

	.category {
		font-size: 18px;
	}
	.aCheckbox {
		font-size: 15px;
	}
`;

export const GemFinder = styled.div`
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

	.headerItems {
		position: sticky;
		top: 0;
		background-color: #000;
		padding: 30px;
	}

	.gemName {
		border-right-style: ridge;
	}
	.gemQuality {
		color: gold;
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

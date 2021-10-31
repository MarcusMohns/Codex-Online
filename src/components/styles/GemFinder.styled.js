import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 90vw;
	margin: auto;
	min-height: 300px;
	padding: 30px;
`;

export const CheckBoxContainer = styled.div`
	.checkBoxContainer {
		display: flex;
		flex-direction: row;
		padding: 20px;
	}
	.categoryContainer {
		padding: 10px;
	}
	.categoryName {
		font-size: 18px;
		flex-direction: column;
	}
	.aCheckbox {
		font-size: 15px;
	}
`;

export const GemTableContainer = styled.div`
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

	.gemName {
		border-right-style: ridge;
	}
	.gemQuality {
		color: gold;
	}
`;

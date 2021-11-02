import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 90vw;
	margin: auto;
	min-height: 300px;
	padding: 2rem;
`;

export const CheckBoxContainer = styled.section`
	.checkBoxContainer {
		display: flex;
		flex-direction: row;
		padding: 1rem;
	}
	.categoryContainer {
		padding: .8rem;
	}
	.categoryName {
		font-size: 1.5rem;
		flex-direction: column;
	}
	.aCheckbox label,
	input {
		padding: .1rem;
		font-size: 1rem;
		cursor: pointer;
	}
`;

export const GemTableContainer = styled.section`
	table {
		border-collapse: collapse;
		text-align: center;
		width: 50vw;
	}

	th,
	td {
		color: #fff;
		padding: 1rem;
	}

	.headerItems {
		position: sticky;
		top: 0;
		background-color: #000;
		padding: 2rem;
	}

	tbody tr {
		background-color: #124559;

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

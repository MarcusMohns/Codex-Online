import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 75vw;
	min-height: 75vw;
	margin: auto;
	padding: 20px;
	margin-top: 10%;
	background-color: #264874;
	opacity: 90%;
	border-radius: 5px;
	box-shadow: 2px 2px;

	@media screen and (max-width: 992px) {
		flex-direction: column;
		justify-content: center;
		box-shadow: none;
		padding: 5px;
		min-height: none;
		font-size: .9rem;
	}
`;

export const CheckBoxContainer = styled.section`
	.checkBoxContainer {
		margin: auto;
		display: grid;
		grid-template-columns: repeat(2, 2fr);
		grid-template-rows: repeat(2, 2fr);
		max-height: fit-content;
	}
	.categoryContainer {
		display: flex;
		flex-direction: column;
		padding: .8rem;
		background-color: white;
		box-shadow: 2px 2px;
	}

	.categoryName {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		height: 2rem;
		text-align: center;
		background-color: #264874;
		color: white;
		margin-bottom: 1rem;
	}

	.aCheckbox label,
	input {
		margin: 5px;
		cursor: pointer;
		transform: scale(1.2);
	}
	.aCheckbox input {
		&:hover {
			transform: scale(1.5);
		}
	}

	@media screen and (max-width: 992px) {
		.checkBoxContainer {
			margin-bottom: 50px;
		}
	}
`;

export const GemTableContainer = styled.section`
	table {
		border-collapse: collapse;
		text-align: center;
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
		background-color: #787878;

		&:nth-child(2n) {
			background-color: #686868;
		}
		&:hover {
			background-color: #505050;
		}
	}

	.gemName {
		border-right-style: 1x solid black;
	}
	.gemQuality {
		color: gold;
	}

	@media screen and (max-width: 992px) {
	}
`;

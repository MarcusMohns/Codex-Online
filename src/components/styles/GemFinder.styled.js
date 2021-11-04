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

	@media screen and (max-width: 1300px) {
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
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 2fr 0fr;
		max-height: fit-content;
		background-color: white;
	}
	.categoryContainer {
		display: flex;
		flex-direction: column;
		padding: .5rem;
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
		max-width: 100%;
		overflow-x: auto;
		min-width: 60rem;
		border-collapse: collapse;
		text-align: center;
		background-color: white;
	}

	th,
	td {
		color: #fff;
		padding: .5rem;
	}

	th {
		padding: 1rem;
	}

	.headerItems {
		padding: 1rem;
		position: sticky;
		top: 0;
		background-color: #000;
		cursor: pointer;
	}
	tbody td {
		color: black;
		letter-spacing: 1px;
	}

	tbody tr {
		background-color: white;

		&:hover {
			background-color: lightblue;
		}
	}

	.gemNameCell {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-right: 3px solid black;

		img {
			width: 2rem;
		}
	}

	.gemNameHeader {
	}

	p {
		color: white;
	}

	/* .gemQuality {
	}
	.gemColor {
	} */

	.gemStats {
		font-weight: 700;
	}

	@media screen and (max-width: 992px) {
		th,
		td {
			padding: 3px;
		}
		table {
			margin: auto;
			min-width: 380px;
		}
		.gemName {
			display: flex;
			border: none;
			align-items: center;
			justify-content: space-between;
			img {
				width: 2rem;
			}
		}
		.gemColor,
		.gemQuality,
		.gemStats {
			display: none;
		}
		.headerItems {
			font-size: 1.2rem;
		}
	}
`;

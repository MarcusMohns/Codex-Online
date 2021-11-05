import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	align-items: start;
	justify-content: space-evenly;
	max-width: 75vw;
	min-height: 75vw;
	margin: auto;
	padding: 3rem;
	margin-top: 10%;
	background-color: #264874;
	opacity: 90%;
	border-radius: 5px;
	box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);

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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	.checkBoxContainer {
		padding: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 2fr 0fr;
		max-height: fit-content;
		max-width: fit-content;
		background-color: white;
		border-radius: 5px;
		box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
	}
	.categoryContainer {
		display: flex;
		flex-direction: column;
		padding: .5rem;
		background-color: white;
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	max-width: 100%;
	min-width: 60%;

	table {
		max-width: 100%;
		overflow-x: auto;
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
		user-select: all;

		img {
			width: 2rem;
			user-select: none;
			padding-left: 3px;
			border-radius: 10px;
		}
	}

	.gemQualityCell {
		&:hover {
			color: purple;
			font-weight: bold;
			transform: scale(1.2);
		}
	}

	.gemColorCell {
		border-left: 3px solid black;
	}

	.gemQuality,
	.gemColor,
	.gemName {
		display: flex;
		justify-content: center;
		cursor: pointer;
		user-select: none;
		.sortImage {
			transition: transform 450ms;
		}
		&:hover {
			color: #256ce1;
			.sortImage {
				color: white;
			}
		}
		&:hover {
			.sortImage {
				transition: transform 325ms;
				transform: rotate(180deg);
			}
		}
	}

	.gemStats {
		display: flex;
		justify-content: center;
	}
	.gemStatsCell {
		font-weight: 700;
	}

	p {
		font-size: 23px;
		text-align: center;
		color: white;
		margin: 30%;
		margin-right: 50%;
	}

	@media screen and (max-width: 992px) {
		td {
			padding: 3px;
		}
		th {
			padding: 0px;
		}
		table {
			margin: auto;
			min-width: 380px;
		}
		.gemNameCell {
			display: flex;
			border: none;
			align-items: center;
			img {
				width: 2rem;
			}
		}
		.gemColor,
		.gemQuality,
		.gemStats,
		.gemColorCell,
		.gemQualityCell,
		.gemStatsCell {
			display: none;
		}

		thead {
			font-size: 1.5rem;
		}
	}
`;

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
		align-items: center;
		box-shadow: none;
		padding: 5px;
		font-size: .9rem;
		max-width: 90vw;
	}

	@media screen and (max-width: 992px) {
		max-width: 90vw;
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
		border-right: 1px solid black;
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
		padding: .4rem;
		height: 2rem;
		text-align: center;
		background-color: #264874;
		color: white;
		margin-bottom: 1rem;
	}

	.aCheckbox label,
	input {
		margin: .4rem;
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
	max-width: 100%;
	min-width: 70%;

	table {
		width: 100%;
		overflow-x: auto;
		border-collapse: collapse;
		text-align: center;
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
		user-select: none;
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

	.gemColorCell {
		border-left: 3px solid black;
	}
	.gemStats,
	.gemQuality,
	.gemColor,
	.gemName {
		display: flex;
		justify-content: center;
		cursor: pointer;
		.sortImage {
			z-index: -1;
			transition: transform 450ms;
		}
		&:hover {
			color: #256ce1;
			.sortImage {
				color: white;
				transition: transform 325ms;
				transform: rotate(180deg);
			}
		}
	}

	p.gemsNotFound {
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
		tr {
			display: flex;
			flex-direction: column;
		}

		th {
			padding: 0px;
		}
		table {
			width: 90vw;
		}
		.gemNameCell {
			display: flex;
			font-weight: 800;
			justify-content: center;
			align-items: center;
			padding-bottom: 0px;
			img {
				width: 2rem;
			}
		}
		.gemStatsCell,
		.gemQualityCell,
		.gemColorCell {
			font-weight: 300;
			border: none;
			position: sticky;
		}
		.gemColor,
		.gemName,
		.gemStats {
			display: none;
		}
		.gemStatsCell {
			border-bottom: 1px solid grey;
			font-weight: 500;
		}

		thead {
			font-size: 1.5rem;
		}
	}
`;

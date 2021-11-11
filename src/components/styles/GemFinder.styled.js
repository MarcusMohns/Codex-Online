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
	opacity: 90%;
	border-radius: 5px;
	box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
	font-size: 1rem;
	@media screen and (max-width: 1200px) {
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
		background-color: #f8f8ff;
		border-radius: 5px;
		box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);
		border-right: 1px solid black;
	}
	.categoryContainer {
		display: flex;
		flex-direction: column;
		padding: .5rem;
		background-color: #f8f8ff;
	}
	.categoryName {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: .4rem;
		height: 2rem;
		text-align: center;
		background-color: #264874;
		color: #f8f8ff;
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
	font-size: .95rem;
	table {
		width: 100%;
		border-collapse: separate;
		text-align: center;
		box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);
	}
	td {
		padding: .5rem;
	}
	th {
		color: #fff;
		padding: 1rem;
		position: sticky;
		top: 0;
		background-color: #264874;
		user-select: none;
	}
	tr {
		background-color: green;
	}
	tbody tr {
		background-color: #f8f8ff;
		color: black;
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
			width: 2.2rem;
			user-select: none;
			padding-left: 1px;
			border-radius: 10px;
		}
	}
	.gemColorCell {
		border-left: 1px solid black;
	}
	.gemQualityCell {
		letter-spacing: .5px;
	}
	#epicCells {
		color: #a335ee;
		font-weight: 700;
	}
	#rareCells {
		color: #0070ff;
		font-weight: 700;
	}
	#uncommonCells {
		color: #29c714;
	}
	#perfectCells {
		color: #29c714;
	}
	#blueCells {
		color: blue;
	}
	#redCells {
		color: red;
	}
	#yellowCells {
		color: #cccc00;
	}
	#orangeCells {
		color: #cc7a00;
	}
	#greenCells {
		color: green;
	}
	#purpleCells {
		color: purple;
	}
	.gemStatsHeader,
	.gemQualityHeader,
	.gemColorHeader,
	.gemNameHeader {
		// Headers
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
				color: #f8f8ff;
				transition: transform 325ms;
				transform: rotate(180deg);
			}
		}
	}
	p.gemsNotFound {
		font-size: 23px;
		text-align: center;
		color: #f8f8ff;
		margin: 30%;
		margin-right: 50%;
	}
	@media screen and (max-width: 992px) {
		// Mobile
		td {
			padding: 3px;
		}
		tr {
			display: flex;
			flex-direction: column;
		}
		th {
			padding: .2rem;
			font-size: 1.5rem;
		}
		table {
			width: 90vw;
		}
		.gemStatsCell,
		.gemQualityCell,
		.gemColorCell {
			font-weight: 300;
			border: none;
			position: sticky;
		}
		.gemStatsCell {
			box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.1);
			
			font-weight: 500;
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
		.gemColorHeader,
		.gemNameHeader,
		.gemStatsHeader {
			display: none;
		}
	}
`;
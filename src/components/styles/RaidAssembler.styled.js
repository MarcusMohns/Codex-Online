import styled from 'styled-components';

export const Main = styled.main`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(2, 1fr);
	grid-auto-flow: column;
	max-width: 75vw;
	min-height: 75vw;
	margin: auto;
	min-height: 500px;
	padding: 20px;
	margin-top: 10%;
	background-color: #264874;
	opacity: 90%;
	border-radius: 5px;
	box-shadow: 5px 5px;
`;

export const RaidContainer = styled.section`
	.count {
		color: #fff;
		font-size: 1em;
		letter-spacing: 1px;
		font-weight: 400;
		margin-bottom: 1rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-auto-flow: column;
	}
`;
export const BuffContainer = styled.section`
	display: flex;
	flex-direction: row;
	max-width: 90vw;
	margin: auto;
	min-height: 300px;
	padding: 1rem;
`;

export const SpecContainer = styled.section`
	margin-top: .5rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: repeat(10, 1fr);
	max-width: 35vw;
	padding: .1rem;
	border: none;
	border-radius: 5px;
	background-color: black;
	box-shadow: 1px 2px;
`;

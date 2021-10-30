import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	max-width: 90vw;
	margin: auto;
	min-height: 300px;
	padding: 20px;
`;

export const RaidGroupContainer = styled.div`
	.count {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-auto-flow: column;
	}
`;
export const RaidBuffContainer = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 90vw;
	margin: auto;
	min-height: 300px;
	padding: 20px;
`;

export const SpecButtonContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: repeat(10, 1fr);
	max-width: 35vw;
	padding: 0px;
`;

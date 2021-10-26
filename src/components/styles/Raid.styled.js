import styled from 'styled-components';

export const StyledRaid = styled.div`
	width: 75vw;

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

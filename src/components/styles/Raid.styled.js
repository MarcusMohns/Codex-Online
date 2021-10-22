import styled from "styled-components";

export const StyledRaid = styled.div`
	width:75vw;



	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-auto-columns: 1fr;
		grid-auto-flow: column;
		column-rule-style: inset;
	}
	`


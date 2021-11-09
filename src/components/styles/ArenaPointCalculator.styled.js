import styled from 'styled-components';
// 768px wide
// 768px wide
// 992px wide
// 1200px wide
export const Main = styled.main`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-auto-flow: column;
	max-width: 90vw;
	margin: auto;
	margin-top:10%;
	opacity: 90%;
	border-radius: 5px;
	box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
	 
@media (min-width: 1200px) { 
	display: grid;
	grid-template-rows: repeat(4, 1fr);
	grid-auto-flow: column;
	max-width: 75vw;
	margin: auto;
	min-height: 500px;
	padding: 0;
	margin-top: 10%;
	opacity: 90%;
	border-radius: 5px;
	box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
	 }

`;

export const ArenaContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f8f8ff;
	margin-bottom:1rem;
	border-radius: 5px;
	padding:1rem;
	max-width:90%;
	
@media (min-width: 1200px) { 
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f8f8ff;
	margin-bottom:1rem;
	border-radius: 5px;
	padding:3rem;
}

table {
		border-collapse: separate;
		letter-spacing: 1px;
		font-size: 1rem;
		border-radius: 5px;
		padding:10px;
	}
@media (min-width: 1200px) { 
	table {
		border-collapse: separate;
		border:1px solid #667292;
		letter-spacing: 1px;
		font-size: .8rem;
		border-radius: 5px;
		padding:10px;
	}
}
	:nth-of-type(1) {
	}
	td,
	th {
		padding: .5rem;
	}

	td {
		text-align: center;
	}

	.bracket-col {
		background-color: lightblue;
		padding: 1rem;
	}


	input {
		height: .8rem;
		padding: .5rem;
	}
`;

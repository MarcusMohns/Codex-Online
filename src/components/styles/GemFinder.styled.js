import styled from 'styled-components';

export const GemFinder = styled.div`
	table {
		border-collapse: collapse;
		text-align: center;
		width: 50vw;
	}

	th,
	td {
		color: #fff;
		padding: 30px;
	}

	#headerItems th {
		position: sticky;
		top: 0;
		background: #000;
	}

	tbody tr {
		background-color: #124559;
		transition: background-color 150ms ease-out;
		&:nth-child(2n) {
			background-color: #598392;
		}
		&:hover {
			background-color: #000;
		}
	}
`;

import styled from 'styled-components';

export const StyledSpecButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.66rem;
	background: ${(props) => props.color};
	color: #fff;
	border: ridge transparent;
	margin: 1px;
	cursor: pointer;
	font-size: 1rem;
	text-shadow: #000 0rem 0rem .1rem, #000 0rem 0rem .2rem, #000 0rem 0rem .2rem, #000 0rem 0rem .2rem,
		#000 0rem 0rem .2rem;

	&:hover {
		transform: scale(1.05);
	}

	&:active {
		transform: translateY(1px);
		filter: saturate(120%);
	}
	img {
		width: 1.3rem;
		height: 1.3rem;
	}
`;

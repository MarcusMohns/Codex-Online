import styled from 'styled-components';

export const StyledSpecButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background: ${(props) => props.color};
	color: #fff;
	border: ridge;
	border-color: transparent;
	margin: 1px;
	cursor: pointer;
	font-size: 15px;
	text-shadow: #000 0px 0px 3px, #000 0px 0px 3px, #000 0px 0px 3px, #000 0px 0px 3px, #000 0px 0px 3px,
		#000 0px 0px 3px;

	&:hover {
		transform: scale(1.05);
	}

	&:active {
		transform: translateY(1px);
		filter: saturate(120%);
	}
	img {
		width: 20px;
		height: 20px;
	}
`;

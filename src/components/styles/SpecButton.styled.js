import styled from 'styled-components';

export const StyledSpecButton = styled.button`
	background: ${(props) => props.color};
	color: #fff;
	padding: 5px;
	margin: 3px;
	border: none;
	border-radius: 5%;
	cursor: pointer;
	font-size: 13px;
	text-shadow: #000 0px 0px 3px, #000 0px 0px 3px, #000 0px 0px 3px, #000 0px 0px 3px, #000 0px 0px 3px,
		#000 0px 0px 3px;

	&:hover {
		-webkit-box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.2);
		box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.5);
	}

	&:active {
		transform: translateY(1px);
		filter: saturate(150%);
	}
`;

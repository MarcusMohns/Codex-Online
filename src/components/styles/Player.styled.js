import styled from 'styled-components';

export const StyledPlayer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-shadow: inset 0px 1px 0px 0px #ffffff;
	background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color: #ffffff;
	border-radius: 6px;
	border: 1px solid #dcdcdc;
	cursor: pointer;
	color: #666666;
	font-size: 15px;
	padding: 5px;
	text-shadow: 0px 1px 0px #ffffff;

	img {
		width: 20px;
		height: 20px;
		border-radius: 80%;
	}
	&:hover {
		font-weight: bold;
	}
`;

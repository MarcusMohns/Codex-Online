import styled from 'styled-components';

export const StyledPlayer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-shadow: inset 0px 1px 0px 0px #ffffff;
	background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color: #ffffff;
	border-radius: 0.33rem;
	border: 1px solid #dcdcdc;
	cursor: pointer;
	color: #666666;
	font-size: 0.9rem;
	width: 12rem;
	padding: 0.33rem;
	text-shadow: 0px 1px 0px #ffffff;
	transition: transform 0.2;

	img {
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
	}
	&:hover {
		transform: translateY(-0.10em);
	}
`;

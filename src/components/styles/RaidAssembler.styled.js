import styled from 'styled-components';
//#7575FF
export const Main = styled.main`
  display: grid; 
  grid-template-columns: 1.6fr 0.4fr; 
  grid-template-rows: 0.3fr 1.4fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "raid-container class-container"
    "buff-container class-container"; 
	max-width: 100vw;
	min-height: 100vw;
	margin: auto;
	min-height: 500px;
	padding: 20px;
	margin-top: 10%;
	background-color: #667292;
	opacity: 90%;

	.hideSpecContainer {
	 		.spec-buttons {
				display:none;
		}
}

	@media (min-width: 1200px) { 
		max-width: 75vw;
		min-height: 75vw;
		border-radius: 5px;
		box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
		.toggle-button-container {
		display:none;
	}

	 }
`;


export const SpecContainer = styled.section`

		grid-area: class-container;
		display: grid;
		flex-direction: row;
		border: none;
		width:100%;

		.toggle-show-button {
			width:2rem;
			height:2rem;
			display: flex;
			justify-content: end;
			align-items: end;
		}
		.spec-buttons {
			width:100%;
		}
	 
	@media (min-width: 1200px) { 
	display: flex;
	flex-direction: row;

	 }
	
`;
export const StyledSpecButton = styled.button`
	display: flex;
	flex-direction: row;
	width:100%;
	align-items: center;
	justify-content: space-between;
	background: ${(props) => props.color};
	color: #fff;
	border: ridge transparent;
	font-size:.8rem;
	font-weight: 300;
	cursor: pointer;
	text-shadow: #000 0rem 0rem .1rem, #000 0rem 0rem .2rem, #000 0rem 0rem .2rem, #000 0rem 0rem .2rem,
		#000 0rem 0rem .2rem;

	&:hover {
		transform: scale(1.02);
	}

	&:active {
		transform: translateY(1px);
		filter: saturate(120%);
	}
	img {
		width: 1.3rem;
		height: 1.3rem;
	}


		@media (min-width: 1200px) { 
	

	 }
`;

export const RaidContainer = styled.section`
	grid-area: raid-container;
	padding:5px;
	background-color:white;
	width:100%;
	height:fit-content;

	.count {
		font-size: 1em;
		letter-spacing: 1px;
		font-weight: 400;
		margin-bottom: 1rem;
	
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-auto-flow: column;
	}
`;


export const StyledPlayer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	box-shadow: inset 0px 1px 0px 0px #ffffff;
	background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color: #ffffff;
	border-radius: 0.33rem;
	border: 1px solid #dcdcdc;
	cursor: pointer;
	color: #666666;
	font-size: .7rem;
	padding: .3rem;
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

	p {
	}

	
	@media (min-width: 1200px) { 
		font-size: 0.8rem;
		padding: 0.33rem;

		img {
			display:normal;
		}

}
`;

export const BuffContainer = styled.section`
	grid-area: buff-container;
	display: flex;
	flex-direction: row;
	align-items: top;
	justify-content: top;
`;


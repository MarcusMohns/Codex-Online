import styled from "styled-components";

export const ArenaContainer = styled.div`
	max-width: 750px;
	margin: 30px auto;
	min-height: 300px;
	padding: 30px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;
    
    p {
        display: flex;
        justify-content: center;
    }

    #results {
        position: absolute;
        padding-left: 10%;
    }
    
    input {
        float:left;
        height:30px;
        padding:10px;
    }

`
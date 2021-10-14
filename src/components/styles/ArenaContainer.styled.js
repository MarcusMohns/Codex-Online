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
        display: inline-block;
        position: fixed;
        padding-left: 4rem;

        
    }
    
    input {
        display: inline-block;
        height:30px;
        padding:10px;
    }

`
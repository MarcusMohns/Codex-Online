import styled from "styled-components";

export const ArenaContainer = styled.div`

	display: flex;
	flex-direction: row;
	justify-content: center;
    align-items: center;

	td,
th {

    padding: 10px;
}

td {
    text-align: center;
}

th[scope="row"] {
    background-color: lightblue;
}

caption {
    padding: 20px;
    padding-top: 40px;
    caption-side: top;
}

table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: .8rem;
}

input {
    height:30px;
    padding:10px;


}


`
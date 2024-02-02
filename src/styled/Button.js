import styled from "styled-components";

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #4b4a4a;
        transition: 0.3s background ease-in;
    }

`;
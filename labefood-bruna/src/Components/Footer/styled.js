import styled from "styled-components";

export const Footer=styled.footer`
    width: 360px;
    height: 7vh;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: white;

    button{
        background-color: transparent;
        color: #b8b8b8;
        border: none;
        cursor: pointer;
        padding: 11px 46px 11px 47px;
        :hover{
            color: var(--dark-peach);
        }
    }
`
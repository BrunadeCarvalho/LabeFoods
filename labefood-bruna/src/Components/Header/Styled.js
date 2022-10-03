import styled from "styled-components";

export const HeaderStyled=styled.header`
    display: flex;
    width: 360px;
    align-items: center;
    padding-bottom: 16px;
    margin: 24px 0 20px 0;

    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        :hover{
            color: var(--dark-peach);
        }
    }

    p{
        width: 100px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
        margin-left: 108px;
    }
`
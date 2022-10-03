import styled from "styled-components";

export const DivCards=styled.div`
    display: flex;
    flex-direction:column;
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: 1px solid #b8b8b8;
    margin: 8px 0 0;
    cursor: pointer;
    img{
        max-width: 328px;
        height: 120px;
        margin: 0 0 12px;
    }

    p{
        width: 296px;
        height: 18px;
        margin: 12px 16px 4px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--dark-peach);
    }
`

export const DivRenderizacao=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

export const BuscarTextoStyled=styled.p`
        width: 296px;
        height: 18px;
        opacity: 0.89;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
        margin-top: 1vh;
`
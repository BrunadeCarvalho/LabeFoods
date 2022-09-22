import styled from "styled-components";

export const CardRestaurante=styled.div`
    display: flex;
    flex-direction: column;
    width: 328px;
    height: 188px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin: 8px 10px 0;

    img{
        height: 120px;
        width: 328px;
        cursor: pointer;

    }

    p{
        font-family: 'Roboto', sans-serif;
        color: #e86e5a;
        font-size: 16px;
        margin: 12px 16px 4px;
        letter-spacing: -0.39px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        cursor: pointer;
    }
`

export const DivInformacaoRestaurante=styled.div`
    display: flex;
    justify-content: space-between;

    span{
        font-family: 'Roboto', sans-serif;
        color:#b8b8b8;

        :nth-child(1){
            margin: 4px 8px 0 16px;
        }

        :nth-child(2){
            margin: 4px 16px 0 8px;

        }
    }
`

export const DivBuscar=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    width: 100vw;
`

export const DivRestaurantes=styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DivCategorias=styled.div`
    display: flex;    
    max-width: 360px;
    margin: 8px 0 0;
    padding: 12px 0 12px 16px;

    overflow-x: scroll;
    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: var(--dark-peach);
    }
    ::-webkit-scrollbar{
        height: 5px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    button{
        width: 87px;
        height: 18px;
        margin: 0 8px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
        cursor: pointer;
        background-color: transparent;
        border: none;

        :hover{
            color: var(--dark-peach);
        }
    }
`




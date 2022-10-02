import styled from "styled-components";

export const RenderizarHistorico=styled.div`
    display: flex;
    flex-direction: column;
    width: 328px;
    height: 102px;
    margin: 7px 0 0;
    border-radius: 8px;
    border: solid 1px var(--greyish);

    .nomeRestaurante{
        width: 296px;
        height: 18px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--dark-peach);
        padding: 16px 16px 9px 16px;
    }

    .data{
        width: 296px;
        height: 18px;
        font-family: Roboto;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        color: #000;
        padding: 0 16px 7px 16px;
    }

    .subtotal{
        width: 296px;
        height: 18px;
        margin: 7px 0 0;
        font-family: Roboto;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
        padding: 0 16px 16px 16px;

    }
`

export const FundoStyled=styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 100vw;
    margin: auto;
    padding-bottom: 10vh;
    .meuPerfil{
        width: 360px;
        height: 19px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
        margin-top: 13px;
        padding-bottom: 12px;
    }
    .nome{
        width: 328px;
        height: 18px;
        margin: 16px 16px 8px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
    }

    .email{
        width: 328px;
        height: 18px;
        margin: 2px 16px 8px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
    }

    .cpf{
        width: 328px;
        height: 18px;
        margin: 8px 16px 16px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
    }
`

export const DadosStyled=styled.div`
    display: flex;
    flex-direction: row-reverse;
    max-width: 360px;
`

export const BotaoEditar=styled.div`
    width: 40px;
    display: flex;
    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-right: 20px;
    }
`

export const DadosPessoais=styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
`

export const EnderecoStyled=styled.div`
    display: flex;
    flex-direction: row-reverse;
    background-color: #eee;
    margin-top:16px;


`
export const DivInformacoes=styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 76px;
    background-color: #eee;
    padding-top: 16px;
    padding-bottom: 16px;

    .titulo{
        height: 18px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #b8b8b8;
        margin: 0 16px;
    }

    .endereco{
        font-family: Roboto;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
        margin: 8px 16px;
        width: 340px;

    }
`
export const DivBotao=styled.div`
    width: 30px;
    margin-right: 16px;
    margin-left: 10px;

    button{
        height: 76px;
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`

export const HistoricoPedidos=styled.div`
    display: flex;
    width: 328px;

    .tituloHistorico{
        width: 328px;
        height: 18px;
        margin: 16px 0 8px 0;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
        border-bottom: 1px solid black;
        padding-bottom: 8px;
    }

    .pedido{
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
        margin-top: 28px;
    }
`
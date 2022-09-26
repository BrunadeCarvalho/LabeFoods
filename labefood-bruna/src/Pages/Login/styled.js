import styled from "styled-components";

export const DivFundo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;

    img{
        width: 204px;
        height: 108px;
        margin: 68px 128px 16px;
        object-fit: contain;
    }
`

export const DivFormulario=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .entrar{
        font-family: 'Roboto', sans-serif;
        width: 296px;
        height: 18px;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
        margin-bottom: 16px;
        padding: 12px 32px;
    }
`
export const DivBotoes=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
`
export const BotaoCadastrar=styled.button`
  width: 328px;
  height: 42px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000;
  background-color: transparent;
  border-radius: 2px;
  padding: 12px 0;
  border: none;
  cursor: pointer;

`
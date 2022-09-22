import Box from '@mui/material/Box';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';


export const BoxBuscar=styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 10vh;

    .icone{
        position: absolute;
        right: 20px;
    }
`

export const DivCards=styled.div`
    display: flex;
    flex-direction:column;
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: 1px solid #b8b8b8;
    margin: 8px 0 0;
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


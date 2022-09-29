import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const ModalStyled=styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98vw;
    height: 100vh;
`

export const BoxModal=styled(Box)`
    position: 'absolute';
    display: flex;
    transform: 'translate(-50%, -50%)';
    border: '2px solid #000';
    box-shadow: 24px;
    width: 328px;
    height: 216px;
    margin: 228px 16px 196px 16px;
    background-color: #fff;
    padding: 11px 10px;

`

export const TypographyStyled=styled.div`
    display: flex;
    flex-direction: column;
    h2{
        width: 296px;
        margin: 43px 16px 31px 16px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
    }

    select{
        width: 296px;
        height: 56px;
        margin: 0px 16px;
        border-radius: 4px;
        border: solid 1px var(--greyish);
        padding: 16px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
    }

    option{
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
    }

    button{
        width: 183px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: right;
        color: #4a90e2;
        border: none;
        margin: 28px 16px 21px 129px;
        cursor: pointer;
    }
`
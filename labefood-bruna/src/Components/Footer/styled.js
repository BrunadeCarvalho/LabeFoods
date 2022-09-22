import { style } from "@mui/system";
import styled from "styled-components";

export const Footer=styled.footer`
    width: 360px;
    height: 10vh;
    display: flex;

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
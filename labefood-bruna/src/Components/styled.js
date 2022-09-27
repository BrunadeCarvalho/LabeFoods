import { TextField } from '@mui/material';
import styled from 'styled-components';

export const BoxContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 8px 0 8px 0;

    .icone{
        position: absolute;
        right: 25px;
    }
`

export const Inputs=styled(TextField)`
    width: 328px;
    height: 56px;
`

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {BsEyeFill} from 'react-icons/bs'
import {BsEyeSlashFill} from 'react-icons/bs'
import { BoxContainer, Inputs } from '../styled';

export const PasswordInput = ({validacao, value, onChange}) =>{
    const [show, setShow] = useState(false)
    // definir se mostra ou não a senha:
    const handleClick = () => setShow(!show)


    
    return(
        <BoxContainer validacao={!validacao}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '328px'},
            }}
            noValidate
            autoComplete="off"
        >
            <Inputs
                required
                id="outlined-required" 
                label="Senha" 
                variant="outlined"            
                name="password"
                type={show? "text" : "password"}
                value={value}
                onChange={onChange}
                placeholder="Mínimo 6 caracteres"
            />
            {show? <BsEyeFill size="20px" onClick={handleClick} className="icone" /> : <BsEyeSlashFill size="20px" onClick={handleClick} className="icone" />}
            {!validacao ? (
                <p> Sua senha deve ter pelo menos 6 caracteres</p>
            ): undefined }
        </BoxContainer>
    )
}
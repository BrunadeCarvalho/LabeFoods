import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {BsEyeFill} from 'react-icons/bs'
import {BsEyeSlashFill} from 'react-icons/bs'
import { BoxContainer, Inputs } from '../styled';

export const PasswordInput = ({value, onChange}) =>{
    const [show, setShow] = useState(false)
    // definir se mostra ou não a senha:
    const handleClick = () => setShow(!show)


    
    return(
        <BoxContainer 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '328px'},
            }}
            noValidate
            autoComplete="off"
        >
            <Inputs
                required
                pattern="^.{6,}$" //padrão Regex
                title="mínimo de 6 caracteres"
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
        </BoxContainer>
    )
}
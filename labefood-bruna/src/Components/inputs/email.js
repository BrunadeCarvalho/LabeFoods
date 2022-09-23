import TextField from '@mui/material/TextField';
import { BoxContainer, Inputs } from '../styled';

export const EmailInput = ({validacao, value, onChange}) =>{
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
                label="E-mail" 
                variant="outlined"
                name="email"
                type="email"
                value={value}
                onChange={onChange}
                placeholder="email@email.com"
            />
            {!validacao ? (
                <p> E-mail inválido </p>
            ): undefined }
        </BoxContainer>
    )
}
